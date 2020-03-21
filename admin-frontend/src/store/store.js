import { init } from '@rematch/core';
import UI from './models/UI';
import Problems from './models/Problems';
import TargetGroups from './models/TargetGroups';

const store = init({
    models: {
        UI,
        Problems,
        TargetGroups,
    }
});

export default store;
