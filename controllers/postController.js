const postModel = require('../model/postModel');
const userModel = require('../model/userModel');

async function novo(req, res) {
  const dados = await userModel.getAll();
  users = dados[0]
  res.render('posts/new', { users })
}


async function lista(req, res) {
    try {
      const dados = await postModel.getAll();
      posts = dados[0]
      console.log(posts)
      res.render('posts/lista', { posts })
    } catch (error) {
      console.log(error)
    }
  }


  async function salvar(req, res) {
    const { titulo, texto, users_id } = req.body;
    if (!titulo) {
      res.status(400).json({ error: 'nome2 querido' });
      return;
    }
    if (!users_id) {
      res.status(400).json({ error: 'Usuário querido' });
      return;
    }
    const newPost = {
      titulo, 
      texto,
      users_id
    }
    try {
      console.log(newPost)
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
      const users_dados = await userModel.getAll();
      if (dados[0].length > 0) {
        post = dados[0][0]
        users = users_dados[0]
       console.log(users)
       console.log(post)
        res.render('posts/edit', { post, users })
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


  async function alterar(req, res) {
    const { titulo, texto, users_id, id } = req.body;
    if (!titulo) {
      res.status(400).json({ error: 'titulo querido' });
      return;
    }
    if (!users_id) {
      res.status(400).json({ error: 'Usuário querido' });
      return;
    }
    const updatepost = {
      id,
      titulo,
      texto,
      users_id
    }
    try {     
      console.log(updatepost)
      await postModel.alterar(updatepost);
      res.redirect('/posts/index')
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
    alterar
  };
  