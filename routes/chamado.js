module.exports = function(application){

    //POST
    application.post('/api/chamado', function(req, res){
        application.controllers.chamado.insertChamado(application, req, res);
    });

    //Put
    application.put('/api/chamado', function(req, res){
        application.controllers.chamado.updateChamado(application, req, res);
    });

    //Delete
    application.delete('/api/chamado', function(req, res){
        application.controllers.chamado.deleteChamado(application, req, res);
    });

    //GET all
    application.get('/api/chamados', function(req, res){
        application.controllers.chamado.chamados(application, req, res);
    });

    //GET by id
    application.get('/api/chamados/:id', function(req, res){
        application.controllers.chamado.chamado(application, req, res);
    });
}