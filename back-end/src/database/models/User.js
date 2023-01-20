module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  UserTable.associate = ({ Sale }) => {
    UserTable.hasMany(Sale, {
      as: "sales",
      foreignKey: "userId",
    });
    UserTable.hasMany(Sale, {
      as: "sales",
      foreignKey: "sellerId",
    });
  };

  return UserTable;
};
