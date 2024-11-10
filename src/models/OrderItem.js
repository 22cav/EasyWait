//models/OderItem.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database'); // Your sequelize instance

class OrderItem extends Model {}

OrderItem.init(
  {
    order_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'tborderitems', // Specify the actual table name
    timestamps: false,  // If the table does not use `createdAt`
  }
);