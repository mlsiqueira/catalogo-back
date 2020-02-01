'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Directors', [
      {
        name: 'J. J. Abrams',
        nationality: 'EUA',
        bio: 'Jeffrey Jacob Abrams (Nova Iorque, 27 de junho de 1966) é um escritor, diretor e produtor de cinema e televisão dos Estados Unidos. Escreveu e produziu vários filmes antes de co-criar a série de televisão Felicity. Ele também criou as série Alias, Lost, Fringe, Undercovers e Alcatraz e dirigiu os filmes Mission: Impossible III, Star Trek, Super 8, Star Trek Into Darkness, Star Wars: The Force Awakens e Star Wars: The Rise of Skywalker',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/J._J._Abrams_by_Gage_Skidmore.jpg/225px-J._J._Abrams_by_Gage_Skidmore.jpg'
      },
      {
        name: 'George Lucas',
        nationality: 'EUA',
        bio: 'George Walton Lucas Jr. (Modesto, 14 de maio de 1944) é um produtor cinematográfico, filantropista, roteirista e diretor de cinema norte-americano. Mundialmente famoso como criador das franquias Star Wars e Indiana Jones, Lucas está entre as pessoas mais ricas e influentes do mundo, com fortuna estimada em 5 bilhões de dólares.',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/George_Lucas_cropped_2009.jpg/245px-George_Lucas_cropped_2009.jpg'
      },
      {
        name: 'Richard Marquand',
        nationality: 'País de Gales/UK',
        bio: 'Richard Marquand (Llanishen, Cardiff, 22 de setembro de 1937[1] — Londres, 4 de setembro de 1987) foi um diretor de cinema galês. Filho de um membro do Parlamento, ele estudou na Universidade de Cambridge e na França, e se especializou em línguas. Foi locutor de rádio antes de começar a rodar documentários para a BBC.',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/b/ba/RichardMarquand~.gif'
      },
      {
        name: 'Steven Spielberg',
        nationality: 'EUA',
        bio: 'Steven Allan Spielberg (Cincinnati, 18 de dezembro de 1946[2]) é um premiado cineasta, produtor cinematográfico, roteirista e empresário norte-americano. Spielberg é o diretor que tem mais filmes na lista dos 100 Melhores Filmes Americanos de Todos os Tempos, feita pelo American Film Institute. É considerado um dos cineastas mais populares e influentes da história do cinema.[3] Até o momento, o rendimento bruto de todos os seus filmes, em todo o mundo, é de mais de US$ 8,5 bilhões de dólares. A Forbes calcula a riqueza de Spielberg em US$ 3,6 bilhões de dólares.',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Steven_Spielberg_by_Gage_Skidmore.jpg/250px-Steven_Spielberg_by_Gage_Skidmore.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Directors', null, {});
  }
};
