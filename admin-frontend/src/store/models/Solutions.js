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
    }),
};

export default Solutions;
