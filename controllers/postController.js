const postModel = require('../model/postModel');

async function novo(req, res) {
    res.render('posts/new')
}
async function lista(req, res) {
    try {
      const dados = await postModel.getAll();
      posts = dados[0]
      res.render('posts/lista', { posts })
    } catch (error) {
      console.log(error)
    }
  }
  async function salvar(req, res) {
    const { titulo, texto } = req.body;
    if (!titulo) {
      res.status(400).json({ error: 'nome2 querido' });
      return;
    }
    const newPost = {
      titulo, 
      texto,
    }
    try {
      await postModel.save(newPost);
      res.redirect('/posts/index')
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async function edit(req, res) {
    const postId = parseInt(req.params.id);
    try {
      const dados = await postModel.getPost(postId);
      if (dados[0].length > 0) {
        post = dados[0][0]
        res.render('posts/edit', { post })
      } else {
        res.status(404).json({ error: 'Post Não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async function excluir(req, res) {
    const postId = parseInt(req.params.id);
    try {
      await postModel.excluir(postId);
      res.redirect('/posts/index')
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async function visualizar(req, res) {
    const postId = parseInt(req.params.id);
    try {
      const dados = await postModel.getPost(postId);
      if (dados[0].length > 0) {
        post = dados[0][0]
        res.render('posts/visualizar', { post })
      } else {
        res.status(404).json({ error: 'Post Não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = {
    novo,
    lista,
    salvar,
    edit,
    excluir,
    visualizar,
  };
  