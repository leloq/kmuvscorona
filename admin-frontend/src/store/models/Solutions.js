import axios from '../../axiosInstace';

const Solutions = {
    state: {
        data: [],
    },
    reducers: {
        getSingleSolutionSuccess: (state, payload) => {
            const singleIdx = state.data.findIndex(solution => solution._id === payload.singleSolution._id);
            if (singleIdx === -1) {
                return {
                    ...state,
                    data: [
                        payload.singleSolution,
                    ],
                };
            }
            return {
                ...state,
                data: [
                    ...state.data.slice(0,singleIdx),
                    payload.singleSolution,
                    ...state.data.slice(singleIdx + 1),
                ],
            };
        },
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
        updateSolutionSuccess: (state, payload) => {
            const editedIdx = state.data.findIndex(solution => solution._id === payload.editedSolution._id);
            return {
                ...state,
                data: [
                    ...state.data.slice(0,editedIdx),
                    payload.editedSolution,
                    ...state.data.slice(editedIdx + 1),
                ],
            };
        },
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
        async updateSolution(payload, rootState) {
            const result = await axios.post('/solutions/update/' + payload.editedSolution._id, payload.editedSolution);
            dispatch.Solutions.updateSolutionSuccess({
                editedSolution: result.data,
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
