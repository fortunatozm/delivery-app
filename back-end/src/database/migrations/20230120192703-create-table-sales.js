"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        field: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        field: "seller_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
        field: "total_price",
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "delivery_address",
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "delivery_number",
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "sale_date",
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sales");
  },
};
