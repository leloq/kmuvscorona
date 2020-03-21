import axios from '../../axiosInstace';

const Solutions = {
    state: {
        data: [],
    },
    reducers: {
        getSolutionsSuccess: (state, payload) => ({
            ...state,
            data: payload.data,
        }),
    },
    effects: dispatch => ({
        async getSolutions(payload, rooState) {
            const result = await axios.get('/solutions/');
            dispatch.Solutions.getSolutionsSuccess({
                data: result.data,
            });
        },
    }),
};

export default Solutions;
