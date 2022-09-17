import React, {useState, useEffect} from 'react';
import { Task} from "../../models/task.class"
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

const loadingStyle = { color: 'grey', fontSize: '20px', fontWeight: 'bold' }

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default description 1', false, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Default description 2', true, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Default description 3', true, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => {
            console.log('')
        };
    }, [tasks]);

    const completeTask = (task) => {
        const newTasks = tasks.map( (elem) => {
            if(elem === task) task.isCompleted = !task.isCompleted
            return elem
        })

        setTasks(newTasks)
    }
    const deleteTask = (task) => {
        const newTask = tasks.filter( elem => elem !== task)
        setTasks(newTask)
    }
    const addTask = (task) => {
        const newTask = [...tasks]
        newTask.push(task)
        setTasks(newTask)
    }

    const Table = () => {
        if(tasks.length > 0){
            return(
                <table className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative'} }>
                    <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Actions</th>
                    </tr>                            
                    </thead>
                    <tbody>
                        { tasks.map((task, index) => 
                            <TaskComponent
                                complete={completeTask} 
                                remove={deleteTask} 
                                key={index}
                                task={task}/>) }
                    </tbody>
                </table>
            )
        } else {
            return (
                <div>
                    <h6>There are no tasks to show</h6>
                    <p>Please, create one</p>
                </div>
            )
        }
    }

    return (
        <div className='col-12'>
            <div className='card'>
                <h5 className='card-header p-3'>Your Tasks:</h5>
                {isLoading ? <p style={loadingStyle}>Loading tasks...</p> : <Table></Table>}
                <hr/>
                <TaskForm add={addTask} length={tasks.length}></TaskForm>
            </div>
        </div>
    );
};

export default TaskListComponent;
