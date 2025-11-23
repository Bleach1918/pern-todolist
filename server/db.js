const Pool = require("pg").Pool;

const pool = new Pool({
    user: "kenzo",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;