const db = require('../db/database'); // Suponha que este arquivo contém a configuração da conexão com o banco de dados

function getAll() {
    return db.query('SELECT * FROM post LEFT JOIN users ON users.id = post.users_id');
  }
function save(post) {
    return db.query('INSERT INTO post (titulo, texto, users_id) VALUES (?, ?, ?)', [post.titulo, post.texto, post.users_id]);
  }
function alterar(post) {
    return db.query('UPDATE post SET titulo = ?, texto = ?, users_id = ?  WHERE id = ?', [post.titulo, post.texto, post.users_id, post.id])
  }
function getPost(id) {
    return db.query('SELECT * FROM post LEFT JOIN users ON users.id = post.users_id WHERE post.id = ?', [id]);
  }
function excluir(post_id) {
    return db.query('DELETE FROM post WHERE id = ?', [post_id])
  }

module.exports = {
    getAll,
    save,
    alterar,
    getPost,
    excluir,
  };
  