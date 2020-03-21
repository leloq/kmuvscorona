import React from 'react';
import { useDispatch } from 'react-redux';
import NewSolutionForm from './NewSolutionForm';

const NewSolution = () => {
    const dispatch = useDispatch();
    dispatch({
        type: 'TargetGroups/getTargetGroups',
    });
    dispatch({
        type: 'Problems/getProblems',
    });
    return <NewSolutionForm />;
};

export default NewSolution;
