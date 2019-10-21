var mysql = require('mysql');

var pool;
module.exports = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'chamados',
        database : 'chamado',
        port: 3306
      });
      return pool;
    }
};