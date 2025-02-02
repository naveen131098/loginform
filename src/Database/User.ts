import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

export class User extends Model {}
User.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
}, { sequelize, modelName: 'user' });
