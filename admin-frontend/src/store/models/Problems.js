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
        saveNewProblemSuccess: (state, payload) => ({
            ...state,
            data: [
                ...state.data,
                payload.newProblem,
            ],
        }),
    },
    effects: dispatch => ({
        async getProblems(payload, rootState) {
            const result = await axios.get('/problems/');
            dispatch.Problems.getProblemsSuccess({
                data: result.data,
            });
        },
        async saveNewProblem(payload, rootState) {
            const result = await axios.post('/problems/add', payload.newProblem);
            dispatch.Problems.saveNewProblemSuccess({
                newProblem: result.data,
            });
        },
    }),
};

export default Problems;
