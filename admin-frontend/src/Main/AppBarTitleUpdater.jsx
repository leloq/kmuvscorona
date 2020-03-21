import { useDispatch } from 'react-redux';
import { useLocation } from '@reach/router';

const RouteNames = {
    '/': 'Home',
    '/targetgroups': 'Zielgruppe',
    '/problems': 'Probleme',
    '/solutions': 'Lösungen',
};


const AppBarTitleUpdater = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { pathname } = location;
    let routeName = RouteNames[pathname];
    if (routeName === null || typeof routeName === 'undefined') {
        routeName = '';
    }
    dispatch({
        type: 'UI/setAppBarTitle',
        payload: routeName,
    })
    return props.children;
};

export default AppBarTitleUpdater;
