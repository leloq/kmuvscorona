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
        saveNewProblemSuccess: (state, payload) => ({
            ...state,
            data: [
                ...state.data,
                payload.newProblem,
            ],
        }),
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
        async getSingleProblem(payload, rootState) {
            const result = await axios.get('/problems/' + payload.problemId);
            dispatch.Problems.getSingleProblemSuccess({
                singleProblem: result.data,
            });
        },
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
        async updateProblem(payload, rootState) {
            const result = await axios.post('/problems/update/' + payload.editedProblem._id, payload.editedProblem);
            dispatch.Problems.updateProblemSuccess({
                editedProblem: result.data,
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
