const Movie = require('../models/movie.model');

const ActorCtrl = {
  async index(_, res) {
    try {
      const movies = await Movie.findAll({
        attributes: ['id', 'title', 'desc', 'genre'],
        include: [
          {
            association: 'actors',
            attributes: ['name', 'nationality', 'bio', 'avatar'],
            through: {
              attributes: []
            }
          },
          {
            association: 'director',
            attributes: ['name', 'nationality', 'bio', 'avatar']
          }
        ]
      });
      return res.json({ ok: true, data: movies });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async find(req, res) {
    const { id } = req.params;

    try {
      const movie = await Movie.findByPk(id);
      if (!movie) {
        return res.status(400).json({ ok: false, error: { message: 'filme não encontrado' } });
      }
      return res.json({ ok: true, data: movie });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async store(req, res) {
    const {
      title, desc, genre, directorId, actorIds, poster, releaseDate, runtime, inTheater
    } = req.body;

    try {
      const movie = await Movie.create({
        title, desc, genre, directorId, poster, releaseDate, runtime, inTheater 
      });

      if (actorIds && typeof actorIds === 'string') {
        await movie.addActor(actorIds);
      } else {
        console.log("\n\n ISSO ACONTECEU \n\n");
        await actorIds.forEach(async actor => {
          await movie.addActor(actor);
        });
      }

      return res.status(202).json({ ok: true, data: movie });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async update(req, res) {
    // TODO: verificar a forma como serão atualizados os atores e diretores
    const { id } = req.params;
    const {
      title, desc, genre, directorId, actorIds, poster, releaseDate, runtime, inTheater,
    } = req.body;

    const movieUpdate = { };
    if (name) { movieUpdate.title = title };
    if (bio) { movieUpdate.desc = desc };
    if (nationality) { movieUpdate.genre = genre };
    if (directorId) { movieUpdate.directorId = directorId };
    if (poster) { movieUpdate.poster = poster };
    if (releaseDate) { movieUpdate.releaseDate = releaseDate };
    if (runtime) { movieUpdate.runtime = runtime };
    if (inTheater) { movieUpdate.inTheater = inTheater };
  
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(400).json({ ok: false, error: { message: 'filme não encontrado' } });
    }

    try {
      await movie.update(movieUpdate);
      return res.json({ ok: true, data: movie });
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

module.exports = ActorCtrl;