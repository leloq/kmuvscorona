import axios from '../../axiosInstace';

const TargetGroups = {
    state: {
        data: [],
    },
    reducers: {
        getTargetGroupsSuccess: (state, payload) => ({
            ...state,
            data: payload.data,
        }),
        getSingleTargetGroupSuccess: (state, payload) => {
            const singleIdx = state.data.findIndex(targetGroup => targetGroup._id === payload.singleTargetGroup._id);
            if (singleIdx === -1) {
                return {
                    ...state,
                    data: [
                        payload.singleTargetGroup,
                    ],
                };
            }
            return {
                ...state,
                data: [
                    ...state.data.slice(0,singleIdx),
                    payload.singleTargetGroup,
                    ...state.data.slice(singleIdx + 1),
                ],
            };
        },
        saveNewTargetGroupSuccess: (state, payload) => ({
            ...state,
            data: [
                ...state.data,
                payload.newTargetGroup,
            ],
        }),
        updateTargetGroupSuccess: (state, payload) => {
            const editedIdx = state.data.findIndex(targetGroup => targetGroup._id === payload.editedTargetGroup._id);
            return {
                ...state,
                data: [
                    ...state.data.slice(0,editedIdx),
                    payload.editedTargetGroup,
                    ...state.data.slice(editedIdx + 1),
                ],
            };
        },
        deleteTargetGroupSuccess: (state, payload) => {
            const deleteIdx = state.data.findIndex(targetGroup => targetGroup._id === payload.targetGroupId);
            return {
                ...state,
                data: [
                    ...state.data.slice(0,deleteIdx),
                    ...state.data.slice(deleteIdx + 1),
                ],
            };
        },
    },
    effects: dispatch => ({
        async getSingleTargetGroup(payload, rootState) {
            const result = await axios.get('/targetgroups/' + payload.targetGroupId);
            dispatch.TargetGroups.getTargetGroupsSuccess({
                singleTargetGroup: result.data,
            });
        },
        async getTargetGroups(payload, rootState) {
            const result = await axios.get('/targetgroups/');
            dispatch.TargetGroups.getTargetGroupsSuccess({
                data: result.data,
            });
        },
        async saveNewTargetGroup(payload, rootState) {
            const result = await axios.post('/targetgroups/add', payload.newTargetGroup);
            dispatch.TargetGroups.saveNewTargetGroupSuccess({
                newTargetGroup: result.data,
            });
        },
        async updateTargetGroup(payload, rootState) {
            const result = await axios.post('/targetgroups/update/' + payload.editedTargetGroup._id, payload.editedTargetGroup);
            dispatch.TargetGroups.updateTargetGroupSuccess({
                editedTargetGroup: result.data,
            });
        },
        async deleteTargetGroup(payload, rootState) {
            const result = await axios.delete('/targetgroups/' + payload.targetGroupId);
            dispatch.TargetGroups.deleteTargetGroupSuccess({
                targetGroupId: result.data,
            });
        },
    }),
};

export default TargetGroups;
