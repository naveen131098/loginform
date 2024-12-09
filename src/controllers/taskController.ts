import { Request, Response } from 'express';
import { Task } from '../models/Task';

export const getTasks = async (req: Request, res: Response) => {
    const tasks = await Task.findAll({ where: { user_id: req.body.userId } });
    res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
    const { title, description, status } = req.body;
    const task = await Task.create({ title, description, status, user_id: req.body.userId });
    res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    await task.update(req.body);
    res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    await task.destroy();
    res.status(204).send();
};
