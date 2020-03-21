import React from 'react';
import { useDispatch } from 'react-redux';
import NewProblemForm from './NewProblemForm';

const NewProblem = () => {
    const dispatch = useDispatch();
    dispatch({
        type: 'Solutions/getSolutions',
    });
    return <NewProblemForm />;
};

export default NewProblem;
