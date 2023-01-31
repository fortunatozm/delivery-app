"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sales_products", {
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "sales",
          key: "id",
        },
        field: "sale_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
        field: "product_id",
        onDelete: "CASCADE",
        OnUpdate: "CASCADE",
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sales_products");
  },
};
