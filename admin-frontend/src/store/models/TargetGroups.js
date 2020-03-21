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
    },
    effects: dispatch => ({
        async getTargetGroups(payload, rooState) {
            const result = await axios.get('/targetgroups/');
            dispatch.TargetGroups.getTargetGroupsSuccess({
                data: result.data,
            });
        },
    }),
};

export default TargetGroups;
