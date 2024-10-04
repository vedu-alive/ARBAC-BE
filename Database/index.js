// const Pool = require('pg').Pool;
// const pool = new Pool({
//     user: 'poilxlpy',
//     host: "trumpet.db.elephantsql.com",
//     database: 'poilxlpy',
//     port: 5432,
//     password: "r_GbM86r72R4LeO3bN1GlF98I4joAMU7",
// });
// module.exports = pool;

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'vedanshvishwakarma',
    port: 5432,
    host: 'localhost',
    database: 'postgres',
    password: 'Vedansh@1234',
});
module.exports = pool;
