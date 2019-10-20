function UsuariosRepository(connection){
    this._connection = connection;
}

UsuariosRepository.prototype.InsertUsuario = function(usuario, callback){
    const sql = 'insert into usuario (nome, email, funcao, data_cadastro, data_atualizacao) values (?,?,?,?,?)';
    usuario.dataAtualizacao = null;
    usuario.dataCadastro = new Date();
    this._connection.query(sql, [usuario.nome, usuario.email, usuario.funcao, usuario.dataCadastro, usuario.dataAtualizacao], callback);
}

UsuariosRepository.prototype.GetUsuarios = function(callback){
    const sql = 'select * from usuario';
    this._connection.query(sql, callback);
}

UsuariosRepository.prototype.GetUsuarioById = function(usuario, callback){
    const sql = 'select * from usuario where id = ?';
    this._connection.query(sql, [usuario.id], callback);
}

UsuariosRepository.prototype.GetUsuarioByEmail = function(usuario, callback){
    const sql = 'select * from usuario where email = ?';
    this._connection.query(sql, [usuario.email], callback);
}

UsuariosRepository.prototype.UpdateUsuario = function(usuario, callback){
    const sql = 'update usuario set nome = ?, email = ?, funcao = ?, data_atualizacao = ? where id = ?';
    usuario.dataAtualizacao = new Date();
    this._connection.query(sql, [usuario.nome, usuario.email, usuario.funcao, usuario.dataAtualizacao, usuario.id], callback);
}

UsuariosRepository.prototype.DeleteUsuario = function(usuario, callback){
    const sql = 'delete from usuario where id = ?';
    this._connection.query(sql, [usuario.id], callback);
}

module.exports = function(){
    return UsuariosRepository;
}