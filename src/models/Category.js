//models/Category.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database'); // Your sequelize instance

class Category extends Model {}

Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Category',
    tableName: 'tbcategories', // Specify the actual table name
    timestamps: false,  // If the table does not use `createdAt`
  }
);