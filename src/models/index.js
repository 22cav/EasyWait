const { Sequelize } = require('sequelize');

// Create an instance of Sequelize to connect to the database
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: 'postgres',
    }
);

// Import your models
const User = require('./User');
const Category = require('./Category');
const MenuItem = require('./MenuItem');
const Order = require('./Order');
const OrderItem = require('./OrderItem');

// Define model associations

/*
User.hasMany(Order); // A user can have many orders
Order.belongsTo(User); // An order belongs to a user
Category.hasMany(MenuItem); // A category can have many menu items
MenuItem.belongsTo(Category); // A menu item belongs to a category
Order.hasMany(OrderItem); // An order can have many order items
OrderItem.belongsTo(Order); // An order item belongs to an order
MenuItem.hasMany(OrderItem); // A menu item can appear in many order items
OrderItem.belongsTo(MenuItem); // An order item is related to a menu item
*/

// Export the sequelize instance and models
module.exports = {
  sequelize,
  User,
  Category,
  MenuItem,
  Order,
  OrderItem,
};