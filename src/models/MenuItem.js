//models/MenuItem.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database'); // Your sequelize instance

class MenuItem extends Model {}

MenuItem.init(
  {
    item_id: {
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
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'MenuItem',
    tableName: 'tbmenuitems', // Specify the actual table name
    timestamps: false,  // If the table does not use `createdAt`
  }
);