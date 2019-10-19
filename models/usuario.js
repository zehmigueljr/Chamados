function Usuario(){
    this._nome;
    this._email;
    this._funcao;
    this._dataCadastro;
    this._dataAtualizacao;
}

module.exports = function(){
    return Usuario;
}