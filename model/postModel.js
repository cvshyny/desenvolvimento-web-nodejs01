const db = require('../db/database'); // Suponha que este arquivo contém a configuração da conexão com o banco de dados

function getAll() {
    return db.query('SELECT * FROM post');
  }
function save(post) {
    return db.query('INSERT INTO post (titulo, texto) VALUES (?, ?)', [post.titulo, post.texto]);
  }
function alterar(post) {
    return db.query('UPDATE post SET titulo = ?, texto = ? WHERE id = ? ', [post.titulo, post.texto, post.id])
  }
function getPost(id) {
    return db.query('SELECT * FROM post WHERE id = ?', [id]);
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
  