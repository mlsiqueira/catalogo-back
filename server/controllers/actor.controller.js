const Actor = require('../models/actor.model');

const ActorCtrl = {
  async index(_, res) {
    try {
      const actors = await Actor.findAll();
      return res.json({ ok: true, data: actors });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async find(req, res) {
    const { id } = req.params;

    try {
      const actor = await Actor.findByPk(id);
      if (!actor) {
        return res.status(400).json({ ok: false, error: { message: 'ator não encontrado' } });
      }
      return res.json({ ok: true, data: actor });
    } catch (error) {
      return res.json({ ok: false, error });
    }
  },

  async store(req, res) {
    const { name, bio, nationality, avatar } = req.body;

    try {
      const newActor = await Actor.create({ name, bio, nationality, avatar })
      return res.json({ ok: true, data: newActor });
    } catch (error) {
      return res.json({ ok: false, error });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(400).json({ ok: false, error: { message: 'filme não encontrado' } });
    }

    try {
      await movie.destroy();
      return res.json({ ok: true, message: 'Deletado com sucesso' });
    } catch (error) {
      return res.json({ ok: false, error })
    }
  }
}

module.exports = ActorCtrl;