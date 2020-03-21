import React from 'react';
import { useDispatch } from 'react-redux';
import NewSolutionForm from './NewSolutionForm';

const NewSolution = () => {
    const dispatch = useDispatch();
    dispatch({
        type: 'TargetGroups/getTargetGroups',
    });
    return <NewSolutionForm />;
};

export default NewSolution;
