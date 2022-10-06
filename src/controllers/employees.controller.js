import { pool } from '../db.js';

const getEmployees = async(req, res) =>{
    const response = await pool.query('SELECT * FROM employee');
    res.send(response.rows)
}

const getEmployee = async(req, res) =>{
    const {id} = req.params;
    const response = await pool.query(`SELECT * FROM employee WHERE id=${id}`);
    if(response.rows.length>0){
        return res.status(200).send(response.rows)
    }
    res.status(404).send({message:`No hay elemento con el id:${id}`});
    
}

const postEmployees = async(req, res) =>{
    const {id, name, salary} = req.body;
    try {
        const rows= await pool.query('INSERT INTO employee (name, salary) VALUES ($1,$2)',[name, salary]);
        console.log(rows)
        res.json({
            body:{
                user:{
                    name,
                    salary,
                }
            }
            
        })    
    } catch (error) {
        res.send(error)
    }
}

const putEmployees = async(req, res) =>{
    const {id} = req.params;
    const {name, salary} = req.body;
    const response = await pool.query(`UPDATE employee SET name = $1, salary = $2 WHERE id = $3`,[name, salary, id]);
    try {
        if(response.rowCount>0){
            return res.status(200).send({
                id,
                message:'Actualizado'
            })
        }
        res.status(404).send({message:`No hay elemento con el id:${id}`}); 
    } catch (error) {
        res.status(404).send(error)
    }
}

const deleteEmployees = async(req, res) =>{
    const {id} = req.params;
    try {
        const response = await pool.query(`DELETE FROM employee WHERE id=${id}`);
        if(response.rowCount>0){
            return res.status(204).send({
                id,
                message:'Eliminado con exito'
            })
        }
        res.status(404).send({message:`No hay elemento con el id:${id}`}); 
    } catch (error) {
        res.status(404).send(error)
    }
}

export  {
    getEmployees,
    getEmployee,
    postEmployees,
    putEmployees,
    deleteEmployees
}
