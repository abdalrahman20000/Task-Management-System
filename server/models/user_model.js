const pool = require("../config/config");
const bcrypt = require("bcryptjs");

class User {
    static async create_user(email, password, username) {

        const hashed_pass = await bcrypt.hash(password, 10);

        // pool.connect();
        const result = await pool.query("INSERT INTO users (user_name,user_password,email) VALUES ($1,$2,$3) RETURNING *",
            [username, hashed_pass, email]
        );
        // console.log(username, password, email);
        // pool.end();
        return result.rows[0];
    }

    static async find_by_email(email) {
        // console.log("e log 4");
        // pool.connect();
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        // pool.end();
        // console.log("e log 5");
        
        return result.rows[0];
    }
}

module.exports = User;