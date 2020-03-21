import React from 'react';
import { useDispatch } from 'react-redux';
import ProblemsTable from './ProblemsTable';

const Problems = () => {
    const dispatch = useDispatch();
    dispatch({
        type: 'Problems/getProblems',
    });
    return <ProblemsTable />;
};

export default Problems;