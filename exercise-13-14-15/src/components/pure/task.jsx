import '../../styles/task.scss'
import React from 'react';
import PropTypes from 'prop-types';
// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

const taskCompleted = { fontWeight: 'bold', color: 'gray', textDecoration: 'line-through'}
const taskPending = { fontWeight: 'bold', color: 'tomato'}

const TaskComponent = ({ task, complete, remove }) => {

    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>)
            case LEVELS.URGENT:
                return (<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>)
            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>)
            default:
                break;
        }
    }

    const taskIconCompleted = ()=> {
        if(task.isCompleted) { 
            return (<i onClick={ () => complete(task) } className='bi-toggle-on task-action' style={{color:'green', fontWeight:'bold'}}></i>)
        } else { 
            return (<i onClick={ () => complete(task) } className='bi-toggle-off task-action' style={{color:'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th><span className='ms-2' style={task.isCompleted ? taskCompleted : taskPending}> {task.title} </span></th>
            <td className='align-middle'><span className='ms-2'>{ task.description }</span></td>
            <td className='align-middle'><span>{ taskLevelBadge() }</span></td>
            <td className='align-middle'>
                { taskIconCompleted() }
                <i onClick={ () => remove(task) } className='bi-trash task-action' style={{color:'tomato', fontSize:'20px'}}></i>
            </td>
        </tr>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
