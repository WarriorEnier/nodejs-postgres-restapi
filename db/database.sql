CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE  employee(
    id SMALLSERIAL,
    name VARCHAR(45) DEFAULT NULL,
    salary INTEGER DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee VALUES (1,'Enier',1000),(2,'Antonio',1000);

CREATE SEQUENCE employee_sequence start 1 increment 1;