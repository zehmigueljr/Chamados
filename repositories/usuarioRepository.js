function UsuarioRepository(connection){
    this._connection = connection;
}

UsuarioRepository.prototype.InsertUsuario = function(usuario, callback){
    const sql = 'insert into usuario values (?,?,?,?,?)';
    usuario.dataAtualizacao = null,
    usuario.dataCadastro = Date.now();
    this._connection.query(sql, [usuario.nome, usuario.email, usuario.funcao, usuario.dataCadastro, usuario.dataAtualizacao], callback);
}

UsuarioRepository.prototype.GetUsuario = function(callback){
    const sql = 'select * from usuario';
    this._connection.query(sql, callback);
}

UsuarioRepository.prototype.GetUsuarioById = function(usuario, callback){
    const sql = 'select * from usuario where id = ?';
    this._connection.query(sql, [usuario.id], callback);
}

UsuarioRepository.prototype.GetUsuarioByEmail = function(usuario, callback){
    const sql = 'select * from usuario where email = ?';
    this._connection.query(sql, [usuario.email], callback);
}

UsuarioRepository.prototype.UpdateUsuario = function(usuario, callback){
    const sql = 'update usuario set nome = ?, email = ?, funcao = ?, data_cadastro = ?, data_atualizacao = ? where id = ?';
    this._connection.query(sql, [chamado.titulo, chamado.descricao, chamado.anexo, chamado.atribuido, chamado.solicitante, chamado.id], callback);
}