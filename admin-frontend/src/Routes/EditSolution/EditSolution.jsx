import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import EditSolutionForm from './EditSolutionForm';


const EditSolution = (props) => {
    const dispatch = useDispatch();
    dispatch({
        type: 'TargetGroups/getTargetGroups',
    });
    dispatch({
        type: 'Problems/getProblems',
    });
    dispatch({
        type: 'Solutions/getSingleSolution',
        payload: {
            solutionId: props.solutionId,
        } 
    });
    const solution = useSelector(
        state => state.Solutions.data.find(solution => solution._id === props.solutionId),
        isEqual,
    );
    if (solution === null || typeof solution === 'undefined') {
        return null;
    }
    return <EditSolutionForm solutionId={props.solutionId}/>;
};

export default EditSolution;
