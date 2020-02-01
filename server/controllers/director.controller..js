const Actor = require('../models/actor.model');

const ActorCtrl = {
  async index(_, res) {

    return res.json({ ok: true, data: {} });
  },

  async find(req, res) {
    const { id } = req.params;

    return res.json({ ok: true, id });
  },

  async store(req, res) {
    const {  } = req.body;

    return res.json()
  },

  async update(req, res) {
    const { id } = req.params;

    return res.json({ ok: true, id })
  },

  async delete(req, res) {
    const { id } = req.params;

    return res.json({ ok: true, id })
  }
}

module.exports = ActorCtrl;