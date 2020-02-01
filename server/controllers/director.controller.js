const Director = require('../models/director.model');

const DirectorCtrl = {
  async index(_, res) {
    try {
      const directors = await Director.findAll();
      return res.json({ ok: true, data: directors });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async find(req, res) {
    const { id } = req.params;

    try {
      const director = await Director.findByPk(id);
      if (!director) {
        return res.status(400).json({ ok: false, error: { message: 'director não encontrado' } });
      }
      return res.json({ ok: true, data: director });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async store(req, res) {
    const { name, bio, nationality, avatar } = req.body;

    try {
      const newDirector = await Director.create({ name, bio, nationality, avatar })
      return res.status(202).json({ ok: true, data: newDirector });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, bio, nationality, avatar  } = req.body;

    const directorUpdate = { };
    if (name) { directorUpdate.name = name };
    if (bio) { directorUpdate.bio = bio };
    if (nationality) { directorUpdate.nationality = nationality };
    if (avatar) { directorUpdate.avatar = avatar };

    const director = await Director.findByPk(id);

    if (!director) {
      return res.status(400).json({ ok: false, error: { message: 'director não encontrado' } });
    }

    try {
      await director.update(directorUpdate);
      return res.json({ ok: true, data: director });
    } catch (error) {
      return res.status(500).json({ ok: false, error })
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    const director = await Director.findByPk(id);

    if (!director) {
      return res.status(400).json({ ok: false, error: { message: 'director não encontrado' } });
    }

    try {
      await director.destroy();
      return res.json({ ok: true, message: 'deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ ok: false, error })
    }
  }
}

module.exports = DirectorCtrl;