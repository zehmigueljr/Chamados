function ChamadosRepository(connection){
    this._connection = connection;
}

ChamadosRepository.prototype.InsertChamado = function(chamado, callback){
    const sql = 'insert into chamado (titulo, descricao, anexo, atribuido, solicitante) values (?,?,?,?,?)';
    var anexo = new Buffer(chamado.anexo, 'base64').toString('binary');
    this._connection.query(sql, [chamado.titulo, chamado.descricao, anexo, chamado.atribuido, chamado.solicitante], callback);
}

ChamadosRepository.prototype.GetChamados = function(callback){
    const sql = 'select * from chamado';
    this._connection.query(sql, callback);
}

ChamadosRepository.prototype.GetChamadoById = function(chamado, callback){
    const sql = 'select * from chamado where id = ?';
    this._connection.query(sql, [chamado.id], callback);
}

ChamadosRepository.prototype.UpdateChamado = function(chamado, callback){
    const sql = 'update chamado set titulo = ?, descricao = ?, anexo = ?, atribuido = ?, solicitante = ? where id = ?';
    this._connection.query(sql, [chamado.titulo, chamado.descricao, chamado.anexo, chamado.atribuido, chamado.solicitante, chamado.id], callback);
}

ChamadosRepository.prototype.DeleteChamado = function(chamado, callback){
    const sql = 'delete from chamado where id = ?';
    this._connection.query(sql, [chamado.id], callback);
}

module.exports = function(){
    return ChamadosRepository;
}