const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Comment model and datatypes, including the user_id foreign key.
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    body: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      // allowNull: false,
      defaultValue: DataTypes.NOW,
    },
   
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
