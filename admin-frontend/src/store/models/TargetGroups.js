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
            const singleIdx = state.data.findIndex(targetGroup => targetGroup.slug === payload.singleTargetGroup.slug);
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
            const editedIdx = state.data.findIndex(targetGroup => targetGroup.slug === payload.editedTargetGroup.slug);
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
            const deleteIdx = state.data.findIndex(targetGroup => targetGroup.slug === payload.targetGroupSlug);
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
            const result = await axios.get('/targetgroups/' + payload.targetGroupSlug);
            dispatch.TargetGroups.getSingleTargetGroupSuccess({
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
            const result = await axios.post('/targetgroups/update/' + payload.editedTargetGroup.slug, payload.editedTargetGroup);
            dispatch.TargetGroups.updateTargetGroupSuccess({
                editedTargetGroup: result.data,
            });
        },
        async deleteTargetGroup(payload, rootState) {
            const result = await axios.delete('/targetgroups/' + payload.targetGroupSlug);
            dispatch.TargetGroups.deleteTargetGroupSuccess({
                targetGroupSlug: result.data,
            });
        },
    }),
};

export default TargetGroups;
