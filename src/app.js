const express = require ('express');
const path = require ('path');
const morgan = require ('morgan');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');

const app = express();

//importando rutas
const customerRoutes = require('./routes/tareas');

//Opciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port: 3306,
    database: 'atldatabase'
}, 'single'));
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', customerRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//Iniciando server
app.listen(3000, () => {
    console.log('Server on port 3000');
});