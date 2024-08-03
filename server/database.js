

const {v4: uuidv4} = require("uuid");
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'DB-TMS',
    password: 'admin1234',
    port: 5432,
});


    // const id = uuidv4();

    // const add = `INSERT INTO public.users(
	// user_id, username, password, first_name, last_name, email)
	// VALUES (${user.length + 1},'${user.name}' , '${user.pass}' , '${user.name}' , '${user.name}' , '${user.email}' ); `




pool.connect();

// "select * from users"

pool.query(add, (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }
    pool.end();
});

module.exports = pool;