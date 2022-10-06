import {config} from 'dotenv';

config();
const PORT = process.env.PORT || 3000; 
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASS = process.env.DB_PASS || '12345';
const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
const DB_PORT = process.env.DB_PORT || 5432;

export {
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_DATABASE,
    DB_PORT
}