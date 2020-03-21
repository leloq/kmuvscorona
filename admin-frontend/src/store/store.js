import { init } from '@rematch/core';
import UI from './models/UI';
import Problems from './models/Problems';

const store = init({
    models: {
        UI,
        Problems,
    },
});

export default store;
