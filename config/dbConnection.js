var mysql = require('mysql');

var pool;
module.exports = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'Anateamo0106*',
        database : 'chamado'
      })
      pool.query('select 1 = 1', function(err, results){
          console.log(err);
      })
      return pool;
    }
};