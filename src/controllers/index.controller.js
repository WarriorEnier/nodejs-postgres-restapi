import { pool } from '../db.js';

const ping = async(req, res) => {
    const result = await pool`SELECT 1+1 AS Result`;
    console.log(result);
    res.json(result[0]);
}

const home = (req, res) =>{
    res.send('Pagina de home');
}

export {
    ping,
    home
}