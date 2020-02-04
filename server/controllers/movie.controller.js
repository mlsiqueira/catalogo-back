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
      return res.json({ ok: true, data: movies });
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
      return res.json({ ok: true, data: movie });
    } catch (error) {
      return res.status(500).json({ ok: false, error });
    }
  },

  async store(req, res) {
    const {
      title, desc, genre, directorId, actorIds, poster, releaseDate, runtime, inTheater
    } = req.body;

    console.log('\nDADOS QUE CHEGAM AO SERVIDOR:\n', req.body);

    try {
      const movie = await Movie.create({
        title, desc, genre, directorId, poster, releaseDate, runtime, inTheater 
      });

      console.log('\nOBJETO CRIADO NA BASE:\n', movie);

      if (actorIds && typeof actorIds === 'string') {
        console.log('ADC UM ATOR')
        await movie.addActor(actorIds);
      } else {
        console.log("\n\n ISSO ACONTECEU \n\n");
        await actorIds.forEach(async actor => {
          console.log('ADC UM ATOR')
          await movie.addActor(actor);
        });
      }

      console.log('\nPOS ATORES:\n');

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
    if (title) { movieUpdate.title = title };
    if (desc) { movieUpdate.desc = desc };
    if (genre) { movieUpdate.genre = genre };
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