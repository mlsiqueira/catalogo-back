const Movie = require('../models/movie.model');

const movieReturnConf = {
  attributes: ['id', 'title', 'desc', 'genre', 'releaseDate', 'poster', 'runtime', 'inTheater'],
  include: [
    {
      association: 'actors',
      attributes: ['id', 'name', 'nationality', 'bio', 'avatar'],
      through: {
        attributes: []
      }
    },
    {
      association: 'director',
      attributes: ['id', 'name', 'nationality', 'bio', 'avatar']
    }
  ]
}


const ActorCtrl = {
  async index(_, res) {
    await seedActors();
    try {
      const movies = await Movie.findAll(movieReturnConf);
      return res.json(movies);
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async find(req, res) {
    const { id } = req.params;

    try {
      const movie = await Movie.findByPk(id, movieReturnConf);
      if (!movie) {
        return res.status(400).json({ ok: false, error: { message: 'filme não encontrado' } });
      }
      return res.json(movie);
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async store(req, res) {
    const { body } = req;

    try {
      const movie = await Movie.create( body, {
        fields: ['title', 'desc', 'genre', 'directorId', 'poster', 'releaseDate', 'runtime', 'inTheater']
      });

      if (actorIds && typeof actorIds === 'string') {
        await movie.addActor(actorIds);
      } else {
        await actorIds.forEach(async actor => {
          await movie.addActor(actor);
        });
      }

      return res.status(202).json(movie);
    } catch (error) {
      return res.status(500).json({ ok: false, error, ...movie });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
  
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(400).json({ ok: false, error: { message: 'filme não encontrado' } });
    }

    try {
      await movie.update(body);
      return res.json(movie);
    } catch (error) {
      return res.status(500).json({ ok: false, error })
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
      return res.status(500).json({ ok: false, error })
    }
  }
}

// seed temporário (obs.: estudar como fazer seeds com relacionamentos)
async function seedActors() {
  return Promise.all([
    Movie.findByPk(1).then(m => m.addActor(['1', '2', '3'])),
    Movie.findByPk(2).then(m => m.addActor(['1', '2', '3'])),
    Movie.findByPk(3).then(m => m.addActor(['1', '2', '3', '4', '5', '6'])),
    Movie.findByPk(4).then(m => m.addActor(['3', '4', '5', '6'])),
    Movie.findByPk(5).then(m => m.addActor(['2'])),
    Movie.findByPk(6).then(m => m.addActor(['7', '8']))
  ]).then(console.log).catch(console.error)
}

module.exports = ActorCtrl;