import React from 'react';
import { useDispatch } from 'react-redux';
import TargetGroupsTable from './TargetGroupsTable';

const TargetGroups = () => {
    const dispatch = useDispatch();
    dispatch({
        type: 'TargetGroups/getTargetGroups',
    });
    return <TargetGroupsTable />;
};

export default TargetGroups;