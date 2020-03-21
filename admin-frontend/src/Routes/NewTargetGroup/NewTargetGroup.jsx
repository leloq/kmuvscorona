import React from 'react';
import { useDispatch } from 'react-redux';
import NewTargetGroupForm from './NewTargetGroupForm';

const NewTargetGroup = () => {
    const dispatch = useDispatch();
    dispatch({
        type: 'Problems/getProblems',
    });
    return <NewTargetGroupForm />;
};

export default NewTargetGroup;
