module.exports = function(application){

    //POST
    application.post('/api/usuario', function(req, res){
        application.controllers.usuario.insertUsuario(application, req, res);
    });

    //Put
    application.put('/api/usuario', function(req, res){
        application.controllers.usuario.updateUsuario(application, req, res);
    });

    //Delete
    application.delete('/api/usuario', function(req, res){
        application.controllers.usuario.deleteUsuario(application, req, res);
    });

    //GET all
    application.get('/api/usuarios', function(req, res){
        application.controllers.usuario.usuarios(application, res);
    });

    //GET by id
    application.get('/api/usuario/:id', function(req, res){
        application.controllers.usuario.usuario(application, req, res);
    });
}