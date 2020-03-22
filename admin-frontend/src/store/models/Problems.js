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
        getSingleProblemSuccess: (state, payload) => {
            const singleIdx = state.data.findIndex(problem => problem._id === payload.singleProblem._id);
            if (singleIdx === -1) {
                return {
                    ...state,
                    data: [
                        payload.singleProblem,
                    ],
                };
            }
            return {
                ...state,
                data: [
                    ...state.data.slice(0,singleIdx),
                    payload.singleProblem,
                    ...state.data.slice(singleIdx + 1),
                ],
            };
        },
        async saveNewProblem(payload, rootState) {
            const result = await axios.post('/problems/add', payload.newProblem);
            dispatch.Problems.saveNewProblemSuccess({
                newProblem: result.data,
            });
        },
        updateProblemSuccess: (state, payload) => {
            const editedIdx = state.data.findIndex(problem => problem._id === payload.editedProblem._id);
            return {
                ...state,
                data: [
                    ...state.data.slice(0,editedIdx),
                    payload.editedProblem,
                    ...state.data.slice(editedIdx + 1),
                ],
            };
        },
    }),
};

export default Problems;
