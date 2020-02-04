const Actor = require('../models/actor.model');

const returnConf = {
  attributes: ['id', 'name', 'nationality', 'bio', 'avatar']
}


const ActorCtrl = {
  async index(_, res) {
    try {
      const actors = await Actor.findAll(returnConf);
      return res.json(actors);
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async find(req, res) {
    const { id } = req.params;

    try {
      const actor = await Actor.findByPk(id, returnConf);
      if (!actor) {
        return res.status(400).json({ ok: false, error: { message: 'ator não encontrado' } });
      }
      return res.json(actor);
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async store(req, res) {
    const { body } = req;

    try {
      const newActor = await Actor.create( body, {
        fields: ['name', 'bio', 'nationality', 'avatar' ]
      });
      return res.status(202).json(newActor);
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const actor = await Actor.findByPk(id);

    if (!actor) {
      return res.status(400).json({ ok: false, error: { message: 'ator não encontrado' } });
    }

    try {
      await actor.update(body, {
        fields: ['name', 'bio', 'nationality', 'avatar']
      });
      return res.json(actor);
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    const actor = await Actor.findByPk(id);

    if (!actor) {
      return res.status(400).json({ ok: false, error: { message: 'ator não encontrado' } });
    }

    try {
      await actor.destroy();
      return res.json({ ok: true, message: 'Deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ ok: false, error })
    }
  }
}

module.exports = ActorCtrl;