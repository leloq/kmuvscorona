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
        saveNewTargetGroupSuccess: (state, payload) => ({
            ...state,
            data: [
                ...state.data,
                payload.newTargetGroup,
            ],
        }),
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
        async getTargetGroups(payload, rooState) {
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
        async deleteTargetGroup(payload, rootState) {
            const result = await axios.delete('/targetgroups/' + payload.targetGroupId);
            dispatch.TargetGroups.deleteTargetGroupSuccess({
                targetGroupId: result.data,
            });
        },
    }),
};

export default TargetGroups;
