import db from './database/index.js';

await db.sync();

console.log('Base de datos sincronizada.');
