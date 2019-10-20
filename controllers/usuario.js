module.exports.usuarios = function(application, res){
    const connection = application.config.dbConnection.getPool();
    const usuariosRepository = new application.repositories.usuariosRepository(connection);
    usuariosRepository.GetUsuarios(function(error, result){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            res.status(200).json({
                result
            });
        }
    });
}

module.exports.usuario = function(application, req, res){
    var usuario = {
        id : req.params.id
    }
    const connection = application.config.dbConnection.getPool();
    const usuariosRepository = new application.repositories.usuariosRepository(connection);

    usuariosRepository.GetUsuarioById(usuario, function(error, result){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            res.status(200).json({
                result
            });
        }
    });
}

module.exports.insertUsuario = function(application, req, res){
    const usuario = req.body.usuario;
    const connection = application.config.dbConnection.getPool();
    const usuariosRepository = new application.repositories.usuariosRepository(connection);
    usuariosRepository.InsertUsuario(usuario, function(error){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            res.status(201).json({
                title: "Usuário cadastrado com sucesso"
            });
        }
    });
}

module.exports.updateUsuario = function(application, req, res){
    const usuario = req.body.usuario;
    const connection = application.config.dbConnection.getPool();
    const usuariosRepository = new application.repositories.usuariosRepository(connection);
    usuariosRepository.UpdateUsuario(usuario, function(error){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            res.status(200).json({
                title: "Usuário alterado com sucesso"
            });
        }
    });
}


module.exports.deleteUsuario = function(application, req, res){
    const usuario = {
        id : req.body.id
    }
    const connection = application.config.dbConnection.getPool();
    const usuariosRepository = new application.repositories.usuariosRepository(connection);
    usuariosRepository.DeleteUsuario(usuario, function(error){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            res.status(200).json({
                title: "Usuário deletado com sucesso"
            });
        }
    });
}