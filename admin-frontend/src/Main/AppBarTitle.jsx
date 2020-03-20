import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const AppBarTitle = () => {
    const appBarTitle = useSelector(state => state.UI.appBarTitle);
    return (
        <Typography variant="h6" noWrap>
            {appBarTitle}
        </Typography>
    );
}

export default AppBarTitle;
