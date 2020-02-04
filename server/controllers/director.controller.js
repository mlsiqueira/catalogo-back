const Director = require('../models/director.model');

const returnConf = {
  attributes: ['id', 'name', 'nationality', 'bio', 'avatar']
}


const DirectorCtrl = {
  async index(_, res) {
    try {
      const directors = await Director.findAll(returnConf);
      return res.json(directors);
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async find(req, res) {
    const { id } = req.params;

    try {
      const director = await Director.findByPk(id, returnConf);
      if (!director) {
        return res.status(400).json({ ok: false, error: { message: 'director não encontrado' } });
      }
      return res.json(director);
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async store(req, res) {
    const { body } = req;

    try {
      const newDirector = await Director.create(body, {
        fields: ['name', 'bio', 'nationality', 'avatar']
      });
      return res.status(202).json(newDirector);
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { body  } = req;

    const director = await Director.findByPk(id);

    if (!director) {
      return res.status(400).json({ ok: false, error: { message: 'director não encontrado' } });
    }

    try {
      await director.update(body, {
        fields: ['name', 'bio', 'nationality', 'avatar']
      });
      return res.json(director);
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