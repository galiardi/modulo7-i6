import { Sequelize } from 'sequelize';
import definirCliente from './cliente.sequilize.js';
import definirProducto from './producto.sequelize.js';
import definirClienteProducto from './cliente_producto.sequelize.js';

const db = new Sequelize('individual6', 'root', 'secret', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 151, // 151 conexiones maximas, valor por defecto en MySQL
  },
  define: { freezeTableName: true }, // Evita la s al final al crear las tablas
});

db.Cliente = definirCliente(db);
db.Producto = definirProducto(db);
db.ClienteProducto = definirClienteProducto(db);

db.Cliente.belongsToMany(db.Producto, { through: db.ClienteProducto });
db.Producto.belongsToMany(db.Cliente, { through: db.ClienteProducto });

export default db;
