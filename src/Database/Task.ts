import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import { User } from './User';

export class Task extends Model {}
Task.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.STRING, defaultValue: 'To Do' },
}, { sequelize, modelName: 'task' });

Task.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Task, { foreignKey: 'user_id' });
