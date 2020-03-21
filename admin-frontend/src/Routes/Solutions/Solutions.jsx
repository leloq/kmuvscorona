import React from 'react';
import { useDispatch } from 'react-redux';
import SolutionsTable from './SolutionsTable';

const Solutions = () => {
    const dispatch = useDispatch();
    dispatch({
        type: 'Solutions/getSolutions',
    });
    return <SolutionsTable />;
};

export default Solutions;