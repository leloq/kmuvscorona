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
        saveNewSolutionSuccess: (state, payload) => ({
            ...state,
            data: [
                ...state.data,
                payload.newSolution,
            ],
        }),
        deleteSolutionSuccess: (state, payload) => {
            const deleteIdx = state.data.findIndex(solution => solution._id === payload.solutionId);
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
        async getSolutions(payload, rootState) {
            const result = await axios.get('/solutions/');
            dispatch.Solutions.getSolutionsSuccess({
                data: result.data,
            });
        },
        async saveNewSolution(payload, rootState) {
            const result = await axios.post('/solutions/add', payload.newSolution);
            dispatch.Solutions.saveNewSolutionSuccess({
                newSolution: result.data,
            });
        },
        async deleteSolution(payload, rootState) {
            const result = await axios.delete('/solutions/' + payload.solutionId);
            dispatch.Solutions.deleteSolutionSuccess({
                solutionId: result.data,
            });
        },
    }),
};

export default Solutions;
