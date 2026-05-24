const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Config/database');

const Rent = sequelize.define('Rent', {
  id_rent: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
  identification_fk: {type: DataTypes.INTEGER,allowNull: false,
    references: {
      model: 'clientes', 
      key: 'identification'
    }
  },
  plate_fk: {type: DataTypes.STRING,allowNull: false,
    references: {
      model: 'vehicles',
      key: 'IDplate'
    }
  },
  start_date: {type: DataTypes.DATE,allowNull: false},
  end_date: {type: DataTypes.DATE,allowNull: false},
  total_price: {type: DataTypes.FLOAT,allowNull: false},
  rental_status: {type: DataTypes.ENUM('active', 'finished', 'cancelled'),allowNull: false},
  client_comment: {type: DataTypes.TEXT},
  company_comment: {type: DataTypes.TEXT}

}, {
  tableName: 'rents',
  timestamps: false
});

module.exports = Rent;