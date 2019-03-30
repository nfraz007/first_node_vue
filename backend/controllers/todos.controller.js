const Todos = require('../models/todos.model');

exports.get = function (req, res) {
    Todos.find(function (error, todos) {
        try{
            if(error) throw next(error);

            res.send({
                status: true,
                message: "Successfully get the data.",
                todos: todos
            })
        }catch(e){
            res.send({
                status: false,
                message: e
            })
        }
    })
};

exports.post = function(req, res) {
    try {
        const {title} = req.body;

        if(!title) throw "Title is required.";

        const todo = new Todos({
            title: title,
            completed: false,
            created_at: new Date()
        });

        todo.save((error) => {
            if(error) throw next(error);

            res.send({
                status: true,
                message: "Successfully added."
            })
        })
    }catch(e){
        res.send({
            status: false,
            message: e
        })
    }
}

exports.delete = function(req, res){
    try {
        const id = req.params.id;
        if(!id) throw "ID is required.";
        
        Todos.findByIdAndDelete(id, (error) => {
            if(error) throw next(error);

            res.send({
                status: true,
                message: "Successfull deleted."
            })
        });
    }catch(e){
        res.send({
            status: false,
            message: e
        })
    }
}