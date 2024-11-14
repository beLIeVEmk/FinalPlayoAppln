'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn('Bookings','noOfSeats',{
      type:Sequelize.INTEGER,
      defaultValue:1,
      allowNull:false,
      validate:{
        min:1
      }
    })
    queryInterface.addColumn('Bookings','totalCost',{
      type:Sequelize.INTEGER,
      defaultValue:0,
      allowNull:false,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn('Bookings','bookingPrice')
    queryInterface.removeColumn('Bookings','totalCost')
    queryInterface.removeColumn('Bookings','noOfSeats')
    queryInterface.removeColumn('Bookings','totalSeats')
  }
};
