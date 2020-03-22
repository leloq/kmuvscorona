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
            targetGroupId: props.targetGroupId,
        } 
    });
    const targetGroup = useSelector(
        state => state.TargetGroups.data.find(targetGroup => targetGroup._id === props.targetGroupId),
        isEqual,
    );
    if (targetGroup === null || typeof targetGroup === 'undefined') {
        return null;
    }

    dispatch({
        type: 'UI/setAppBarTitle',
        payload: `${targetGroup.groupname} bearbeiten`,
    });

    return <EditTargetGroupForm targetGroupId={props.targetGroupId}/>;
};

export default EditTargetGroup;
