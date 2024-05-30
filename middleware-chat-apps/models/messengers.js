'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messengers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Messengers.belongsTo(models.Users,{as : 'Sender', foreignKey: 'from_id'});
      Messengers.belongsTo(models.Users,{as : 'Receiver', foreignKey: 'to_user_id'});
      // define association here
    }
  }
  Messengers.init({
      from_id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        references: { 
          model:'Users',
          key: 'id'
        }
      },
    messages: DataTypes.STRING,
    submit_date: DataTypes.DATE,
    to_user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messengers',
  });
  return Messengers;
};