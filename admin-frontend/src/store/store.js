import { init } from '@rematch/core';
import UI from './models/UI';

const store = init({
    models: {
        UI,
    }
});

export default store;
