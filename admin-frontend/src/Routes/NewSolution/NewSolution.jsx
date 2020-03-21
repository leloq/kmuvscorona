import React from 'react';
import { useDispatch } from 'react-redux';
import NewSolutionForm from './NewSolutionForm';

const NewSolution = () => {
    const dispatch = useDispatch();
    dispatch({
        type: 'Solutions/getSolutions',
    });
    return <NewSolutionForm />;
};

export default NewSolution;
