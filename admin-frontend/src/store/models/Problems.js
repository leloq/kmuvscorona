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
        deleteProblemSuccess: (state, payload) => {
            const deleteIdx = state.data.findIndex(problem => problem._id === payload.problemId);
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
        async deleteProblem(payload, rootState) {
            const result = await axios.delete('/problems/' + payload.problemId);
            dispatch.Problems.deleteProblemSuccess({
                problemId: result.data,
            });
        },
    }),
};

export default Problems;
