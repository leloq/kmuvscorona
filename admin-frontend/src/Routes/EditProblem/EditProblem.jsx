import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import EditProblemForm from './EditProblemForm';

const EditProblem = (props) => {
    const dispatch = useDispatch();
    dispatch({
        type: 'Solutions/getSolutions',
    });
    dispatch({
        type: 'Problems/getSingleProblem',
        payload: {
            problemId: props.problemId,
        } 
    });
    const problem = useSelector(
        state => state.Problems.data.find(problem => problem._id === props.problemId),
        isEqual,
    );
    if (problem === null || typeof problem === 'undefined') {
        return null;
    }
    return <EditProblemForm problemId={props.problemId}/>;
};

export default EditProblem;
