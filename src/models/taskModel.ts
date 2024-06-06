import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

export class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public status!: 'pending' | 'completed';
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255],
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed'),
      defaultValue: 'pending',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'tasks',
    sequelize,
    underscored: true,
  }
);