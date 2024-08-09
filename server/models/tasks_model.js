const pool = require("../config/config");

class Task {

    static async add_task(task_name, task_description, user_id) {

        const result = await pool.query(`INSERT INTO public.tasks(task_name, task_description, user_id  , is_deleted ) VALUES ($1, $2, $3 ,$4) RETURNING *;`,
            [task_name, task_description, user_id , false]);

        return result.rows[0];

    }

    static async get_task(task_name, task_description, user_id) {

        const result = await pool.query(`INSERT INTO public.tasks(task_name, task_description, user_id  , is_deleted ) VALUES ($1, $2, $3 ,$4) RETURNING *;`,
            [task_name, task_description, user_id , false]);

        return result.rows[0];

    }

    
}

module.exports = Task;