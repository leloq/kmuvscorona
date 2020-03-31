import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import EditTargetGroupForm from './EditTargetGroupForm';

const EditTargetGroup = (props) => {
    const dispatch = useDispatch();
    dispatch({
        type: 'Problems/getProblems',
    });
    dispatch({
        type: 'TargetGroups/getSingleTargetGroup',
        payload: {
            targetGroupName: props.targetGroupName,
        } 
    });
    const targetGroup = useSelector(
        state => state.TargetGroups.data.find(targetGroup => targetGroup.groupname === props.targetGroupName),
        isEqual,
    );
    if (targetGroup === null || typeof targetGroup === 'undefined') {
        return null;
    }

    dispatch({
        type: 'UI/setAppBarTitle',
        payload: `${targetGroup.groupname} bearbeiten`,
    });

    return <EditTargetGroupForm targetGroupName={props.targetGroupName}/>;
};

export default EditTargetGroup;
