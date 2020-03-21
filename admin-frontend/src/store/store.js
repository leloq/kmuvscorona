import { init } from '@rematch/core';
import UI from './models/UI';
import Problems from './models/Problems';
import TargetGroups from './models/TargetGroups';
import Solutions from './models/Solutions';


const store = init({
    models: {
        UI,
        TargetGroups,
        Problems,
        Solutions,
    },
});

export default store;
