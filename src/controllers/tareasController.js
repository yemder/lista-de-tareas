const { response } = require("express");

const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tareas', (err, tareas) => {
            if (err) {
                res.json(err);
            }
            res.render('index', {
                data: tareas
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body
   req.getConnection((err, conn) => {
       conn.query('INSERT INTO tareas set ?', [data], (err, tarea) => {
            if (err) {
             res.json(err);
            }
           res.redirect('/');
       });
   });
};

controller.edit = (req, res) => {
    const { id } = req.params
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tareas WHERE id = ? ', [id], (err, tarea) => { 
            if (err) {
                res.json(err);
            }
            res.render('edit', {
                data: tarea[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tareas SET ? WHERE id = ? ', [newData, id], (err, tarea) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/')
        });
    });
}

controller.delete = (req, res) => {
    const { id } = req.params
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tareas WHERE id = ?', [id], (err, rows) => { 
            if (err) {
                res.json(err);
            }
            res.redirect('/')
        });
    })
};

controller.render = (req, res) => {
    res.render('agr')
};

module.exports = controller;