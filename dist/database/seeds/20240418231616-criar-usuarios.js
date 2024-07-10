"use strict";/** @type {import('sequelize-cli').Migration} */

const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Nome Seed",
          email: "nomeseed@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          ceated_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Nome Seed 2",
          email: "nomeseed2@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          ceated_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Nome Seed 3",
          email: "nomeseed3@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          ceated_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
