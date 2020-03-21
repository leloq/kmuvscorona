import axios from '../../axiosInstace';

const Problems = {
    state: {
        data: [],
    },
    reducers: {
        getProblemsSuccess: (state, payload) => ({
            ...state,
            data: payload.data,
        }),
    },
    effects: dispatch => ({
        async getProblems(payload, rootState) {
            const result = await axios.get('/problems/');
            dispatch.Problems.getProblemsSuccess({
                data: result.data,
            });
        },
    }),
};

export default Problems;
