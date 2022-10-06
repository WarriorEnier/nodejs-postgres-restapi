//import postgres from 'postgres';
import pg from 'pg';
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASS,
    DB_PORT,
    DB_USER} from './config.js';
const {Pool} = pg;
/* 'postgres://postgres:12345@host:5432/companydb', */
export const pool = new Pool({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASS,
    port:DB_PORT,
    database:DB_DATABASE
});