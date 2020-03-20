const UI = {
    state: {
        appBarTitle: '',
    },
    reducers: {
        setAppBarTitle: (state, payload) => ({
            ...state,
            appBarTitle: payload,
        }),
    },
};

export default UI;
