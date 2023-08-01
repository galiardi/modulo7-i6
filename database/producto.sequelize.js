import { DataTypes } from 'sequelize';

export default function (db) {
  const Producto = db.define('Producto', {
    // id int not null primary key creado automaticamente por sequelize
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Producto;
}
