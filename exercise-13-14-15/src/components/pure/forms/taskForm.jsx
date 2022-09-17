import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum';
 
const normalStyle = { color: 'blue', fontWeight: 'bold' }
const urgentStyle = { color: 'yellow', fontWeight: 'bold' }
const blockingStyle = { color: 'tomato', fontWeight: 'bold' }

const taskSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Title is required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Description is required'),
    level: Yup.string()
        .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select the priority')
        .required('Priority is required'),
})

const TaskForm = ({add, length}) => {
    return (
        <Formik 
            className='form-outline flex-fill'
            initialValues={ {title: '', description: '', level: '', isCompleted: false} }
            validationSchema={ taskSchema }
            onSubmit={async(values, actions) => {
                add(values)
                actions.resetForm()
            }}>
            <Form>
                <Field name="title" placeholder="Title" className='form-control form-control-lg'/>
                <ErrorMessage name="title" component='p'></ErrorMessage>
                <Field name="description" placeholder="Description" className='form-control form-control-lg'/>
                <ErrorMessage name="description" component='p'></ErrorMessage>
                <Field as="select" name="level" className="form-select form-control form-control-lg">
                    <option value=''>Select the priority:</option>
                    <option value={LEVELS.NORMAL} style={normalStyle}>Normal</option>
                    <option value={LEVELS.URGENT} style={urgentStyle}>Urgent</option>
                    <option value={LEVELS.BLOCKING} style={blockingStyle}>Blocking</option>
                </Field>
                <ErrorMessage name="level" component='p'></ErrorMessage>
                <button type="submit" className='btn btn-success btn-lg ms-2 m-2'> {length > 0 ? 'Add new task' : 'Create your first task'} </button>
            </Form>
        </Formik>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
}

export default TaskForm;
