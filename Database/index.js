const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'vedanshvishwakarma',
    port: 5432,
    host: 'localhost',
    database: 'postgres',
    password: 'Vedansh@1234',
});
module.exports = pool;
