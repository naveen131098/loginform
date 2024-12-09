import React, { useState } from 'react';
import API from '../../api/api';

const TaskForm: React.FC = () => {
    const [formData, setFormData] = useState({ title: '', description: '', status: 'To Do' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await API.post('/tasks', formData);
        alert('Task added');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
            <input type="text" name="description" placeholder="Description" onChange={handleChange} />
            <select name="status" onChange={handleChange}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
