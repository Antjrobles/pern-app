import { pool } from "../db.js";

export const getAllTasks = (req, res) => res.send("obteniendo tares");

export const getTask = (req, res) => res.send("obteniendo tarea única");

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;
  //db insert
  try {
    const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description]);

    res.json(result.rows[0]);

  } catch (error) {
    if (error.code === '23505') {
      console.log(error);
      return res.send('Task Already Exists');
    }
    next(error);
  }
}

export const updateTask = (req, res) => res.send("actualizando tarea única");

export const deleteTask = (req, res) => res.send("eliminando tarea");