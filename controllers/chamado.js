module.exports.chamados = function(application, req, res){
    const connection = application.config.dbConnection.getPool();
    const chamadosRepository = new application.repositories.chamadosRepository(connection);
    chamadosRepository.GetChamados(function(error, result){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            if(result.length > 0){
                result.forEach(e => {
                    if(e.anexo.length > 0)
                    e.anexo = new Buffer(e.anexo).toString('base64');
                });
            }
            res.status(200).json({
                result
            });
        }
    });
}

module.exports.chamado = function(application, req, res){
    var chamado = {
        id : req.params.id
    }
    console.log(chamado);
    const connection = application.config.dbConnection.getPool();
    const chamadosRepository = new application.repositories.chamadosRepository(connection);

    chamadosRepository.GetChamadoById(chamado, function(error, result){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            if(result.length > 0){
                result.forEach(e => {
                    if(e.anexo.length > 0)
                    e.anexo = new Buffer(e.anexo).toString('base64');
                });
            }
            res.status(200).json({
                result
            });
        }
    });
}

module.exports.insertChamado = function(application, req, res){
    const chamado = req.body.chamado;
    const connection = application.config.dbConnection.getPool();
    const chamadosRepository = new application.repositories.chamadosRepository(connection);
    chamadosRepository.InsertChamado(chamado, function(error){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            res.status(201).json({
                title: "Chamado cadastrado com sucesso"
            });
        }
    });
}

module.exports.updateChamado = function(application, req, res){
    var chamado = req.body.chamado;
    const connection = application.config.dbConnection.getPool();
    const chamadosRepository = new application.repositories.chamadosRepository(connection);
    chamadosRepository.UpdateChamado(chamado, function(error){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            res.status(200).json({
                title: "Chamado alterado com sucesso"
            });
        }
    });
}


module.exports.deleteChamado = function(application, req, res){
    var chamado = {
        id : req.body.id
    }
    const connection = application.config.dbConnection.getPool();
    const chamadosRepository = new application.repositories.chamadosRepository(connection);
    chamadosRepository.DeleteChamado(chamado, function(error){
        if(error){
            res.status(500).json({
                title: error
            });
        }else{
            res.status(200).json({
                title: "Chamado deletado com sucesso"
            });
        }
    });
}