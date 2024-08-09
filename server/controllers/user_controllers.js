const User = require("../models/user_model");
const Task = require("../models/tasks_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../config/config");



exports.register = async (req, res) => {
  // console.log("error here");
  const { email, pass, name } = req.body;
  // console.log("error here 2");
  // console.log(email, pass, name);
  // console.log(req.body);
  // console.log("error here 3");
  const user = await User.create_user(email, pass, name);
  // console.log("error here 4");
  res.status(201).json({ message: "user created", user });
  // console.log("error here 5");
};


exports.log_in = async (req, res) => {
  // console.log("e log 3");
  const { email, pass } = req.body;
  // console.log("e log 6");
  const user = await User.find_by_email(email);
  // console.log("e log 7"); //error
  // console.log(user.email); 
  if (user && (await bcrypt.compare(pass, user.user_password))) {
    // console.log("e log 8");
    const token = jwt.sign({ id: user.id }, "abd2000");
    // console.log(id);
    // console.log("e log 9");
    res.json({ token });
    // console.log("e log 10");
  }
  else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};


exports.view = async (req, res) => {
  res.status(200).json({ message: "You can see data ;)" });


};

exports.add_task = async (req, res) => {
  const { task_name, task_description, user_id } = req.body;

  const task = await Task.add_task(task_name, task_description, user_id);


  res.status(201).json({ message: "Task Created", task });

  console.log("Task created :)");
};

// exports.get_task = async (req, res) => {
//     try {
//       const result = await pool.query("SELECT * FROM TASKS");
//       res.json(result.rows);
//       console(result.rows);
//     } catch (error) {
//       console.log(res.status(500).json({ error: error.message }));
//       res.status(500).json({ error: error.message });
//     }
//   };

exports.get_task = async (req, res) => {
  try {
    // `SELECT * FROM TASKS where user_id = ${}`
    const { uid } = req.query;
    // console.log(uid);

    const result = await pool.query(`SELECT * FROM public.tasks where user_id = '${uid}' and is_deleted = 'false'`);
    res.json(result.rows); // Send the response with the data
  } catch (error) {
    console.error('Error fetching tasks:', error.message); // Log the error message
    if (!res.headersSent) { // Ensure headers have not been sent already
      res.status(500).json({ error: error.message }); // Send the error response
    }
  }

};

exports.update_task = async (req, res) => {
  try {
    // `SELECT * FROM TASKS where user_id = ${}`
    const { uid } = req.query;
    const { tid } = req.query;
    const { tname } = req.query;
    const { tdesc } = req.query;
    // console.log(uid);

    const result = await pool.query(`UPDATE public.tasks SET  task_name='${tname}', task_description='${tdesc}' , is_deleted = 'false'
	    WHERE task_id = '${tid}' and user_id = '${uid}'`);
    res.json(result.rows); // Send the response with the data
    console.log("delete");
  } catch (error) {
    console.error('Error update tasks:', error.message); // Log the error message
    if (!res.headersSent) { // Ensure headers have not been sent already
      res.status(500).json({ error: error.message }); // Send the error response
    }
  }
}


exports.delete_task = async (req, res) => {
  try {
    // `SELECT * FROM TASKS where user_id = ${}`
    const { uid } = req.query;
    const { tid } = req.query;
    // console.log(uid);

    const result = await pool.query(`UPDATE public.tasks SET is_deleted = 'true'
	                                    WHERE task_id = '${tid}' and user_id = '${uid}' `);
    res.json(result.rows); // Send the response with the data
    console.log("delete");
  } catch (error) {
    console.error('Error fetching tasks:', error.message); // Log the error message
    if (!res.headersSent) { // Ensure headers have not been sent already
      res.status(500).json({ error: error.message }); // Send the error response
    }
  }
}