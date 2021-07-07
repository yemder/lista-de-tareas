--Creando la base de datos
CREATE DATABASE atldatabase;

--Usando la base de datos
use atldatabase

--creando la tabla
CREATE TABLE tareas (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    asig VARCHAR(50),
    tit VARCHAR(50),
    fa DATE,
    fe DATE,
    est VARCHAR(50),
)

--Mostrar las tablas
SHOW TABLES;

--Describir la tabla
Describe tareas;