'use strict';
module.exports = function(sequelize, DataTypes) {
  var Casse = sequelize.define('Casse', {
    judge_id: DataTypes.INTEGER,
    courtroom_id: DataTypes.INTEGER,
    claimant_id: DataTypes.INTEGER,
    respondent_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    finish_date: DataTypes.DATE,
    duration: DataTypes.STRING,
    result: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Casse;
};