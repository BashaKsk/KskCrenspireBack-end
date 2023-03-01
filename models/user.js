module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  return Users;
};
