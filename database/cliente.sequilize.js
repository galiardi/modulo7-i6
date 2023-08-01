import { DataTypes } from 'sequelize';

export default function (db) {
  const Cliente = db.define('Cliente', {
    // id int not null primary key creado automaticamente por sequelize
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: DataTypes.STRING,
  });

  return Cliente;
}
