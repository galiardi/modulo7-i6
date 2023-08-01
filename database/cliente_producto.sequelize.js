import { DataTypes } from 'sequelize';

export default function (db) {
  const ClienteProducto = db.define('ClienteProducto', {
    // Esta tabla sera utilizada como join table.
    // Creamos el id, de lo contrario se crea un primary key con la combimacion ClienteId ProductoId
    // Sin embargo, el modelo debe permitir que esta combinacion se pueda repetir multiples veces, por lo cual no puede ser un primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  });

  return ClienteProducto;
}
