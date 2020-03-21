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
    }),
};

export default TargetGroups;
