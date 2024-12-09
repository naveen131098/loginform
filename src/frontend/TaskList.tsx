import React, { useState, useEffect } from 'react';
import API from '../../api/api';

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState('All');

    const fetchTasks = async () => {
        const { data } = await API.get('/tasks');
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleDelete = async (id: number) => {
        await API.delete(`/tasks/${id}`);
        fetchTasks();
    };

    const filteredTasks = tasks.filter((task) => filter === 'All' || task.status === filter);

    return (
        <div>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.status}
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
