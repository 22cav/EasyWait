//models/Order.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database'); // Your sequelize instance

class Order extends Model {}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
      allowNull: false,
      defaultValue: 'pending',
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'tborders', // Specify the actual table name
    timestamps: true,  // If the table does not use `createdAt`
  }
);