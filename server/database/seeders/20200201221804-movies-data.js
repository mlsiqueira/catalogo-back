'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'Star Wars: Episódio IV - Uma Nova Esperança',
        desc: 'Guerra nas Estrelas (em inglês: Star Wars, mais tarde relançado como Star Wars: Episode IV - A New Hope, em português: Star Wars: Episódio IV - Uma Nova Esperança) é um filme épico/space opera norte-americano, o primeiro da saga homônima a ser lançado em 25 de maio de 1977, e o quarto na ordem cronológica da trama, escrito e dirigido por George Lucas. Conta a história do jovem fazendeiro Luke Skywalker (Mark Hamill), que, junto com o contrabandista Han Solo (Harrison Ford), envolve-se na Guerra Civil Galáctica entre o tirano Império Galáctico e a Aliança Rebelde após adquirir os Droids R2-D2 e C3PO.',
        poster: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/P%C3%B4ster_Star_Wars.jpg/250px-P%C3%B4ster_Star_Wars.jpg',
        directorId: 2,
        genre: 'Ação',
        releaseDate: new Date('1977', '05', '25'),
        // releaseDate: new Date('1977/05/25').toISOString(),
        runtime: 121,
        inTheater: false
      },
      {
        title: 'Star Wars: Episódio VI - O Retorno de Jedi',
        desc: 'Star Wars: Episode VI - Return of the Jedi — lançado originalmente como Return of the Jedi — é um filme épico/space opera norte-americano de 1983, dirigido por Richard Marquand e escrito por Lawrence Kasdan e George Lucas, com base na história de Lucas, com Lucas como produtor executivo. Cronologicamente, é o sexto filme da saga Star Wars, e o primeiro a utilizar a tecnologia THX.',
        poster: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg',
        directorId: 3,
        genre: 'Ação',
        releaseDate: new Date('1983', '25', '05'),
        // releaseDate: new Date('1983/25/05').toISOString(),
        runtime: 134,
        inTheater: false
      },
      {
        title: 'Star Wars: Episódio VII – O Despertar da Força',
        desc: 'O Despertar da Força se passa aproximadamente trinta anos após os acontecimentos de Return of the Jedi, e acompanha a jornada de Rey, que acaba encontrando um droide, BB-8, com informações do paradeiro de Luke Skywalker que está desaparecido. Ela é acompanhada por Finn, um stormtrooper desertor da Primeira Ordem, uma organização que quer reaver o Império Galáctico e luta contra a Resistência, comandada por Leia Organa. A aventura inesperada leva Rey a descobrir sua forte conexão com a Força e enfrentar o Lado Negro.',
        poster: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Starwars_06.jpg/250px-Starwars_06.jpg',
        directorId: 1,
        genre: 'Ação',
        releaseDate: new Date('2015', '12', '14'),
        // releaseDate: new Date('2015/12/14').toISOString(),
        runtime: 135,
        inTheater: false
      },
      {
        title: 'Star Wars: Episódio IX – A Ascensão Skywalker',
        desc: 'Star Wars: The Rise of Skywalker (no Brasil, Star Wars: Episódio IX – A Ascensão Skywalker; em Portugal, Star Wars: A Ascensão de Skywalker), também conhecido como Star Wars: Episode IX – The Rise of Skywalker, é uma space opera épica estadunidense de 2019, escrito por J. J. Abrams em colaboração com Chris Terrio e dirigido por Abrams, sendo o nono filme da franquia Star Wars, a sequência de Star Wars: Os Últimos Jedi, de 2017, e a terceira e última parcela da trilogia sequela, além do último filme da saga como um todo. Produzida pela Lucasfilm Ltd. e Bad Robot Productions e distribuído pela Walt Disney Studios Motion Pictures, é estrelado por Daisy Ridley, Adam Driver, John Boyega, Oscar Isaac, Lupita Nyong\'o, Domhnall Gleeson, Kelly Marie Tran, Joonas Suotamo, Billie Lourd, Naomi Ackie, Richard E. Grant, Keri Russell, Mark Hamill, Anthony Daniels, Billy Dee Williams, Carrie Fisher e Ian McDiarmid.',
        poster: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/08/Star_Wars_The_Rise_of_Skywalker.jpg/250px-Star_Wars_The_Rise_of_Skywalker.jpg',
        directorId: 1,
        genre: 'Ação',
        releaseDate: new Date('2019', '12', '19'),
        // releaseDate: new Date('2019/12/19').toISOString(),
        runtime: 142,
        inTheater: false
      },
      {
        title: 'Indiana Jones e Os Caçadores da Arca Perdida',
        desc: 'Raiders of the Lost Ark (bra: Indiana Jones e Os Caçadores da Arca Perdida /prt: Indiana Jones e Os Salteadores da Arca Perdida) é um filme de aventura americano, dirigido por Steven Spielberg, que estreou em 1981. Foi produzido por Frank Marshall e Howard Kazanjian, com produção executiva de George Lucas, roteiro de Lawrence Kasdan, baseado em um tratamento de George Lucas e Philip Kaufman. É o primeiro filme da saga Indiana Jones e o segundo da cronologia da série. Ele coloca Indiana Jones contra um grupo de nazistas que estão procurando a Arca da Aliança, que Adolf Hitler acredita que possa tornar o seu exército invencível. O filme é estrelado por Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies, Ronald Lacey e Denholm Elliott.',
        poster: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4b/Raiders.jpg/250px-Raiders.jpg',
        directorId: 4,
        genre: 'Ação',
        releaseDate: new Date('1981', '06', '12'),
        // releaseDate: new Date('1981/06/12').toISOString(),
        runtime: 115,
        inTheater: false
      },
      {
        title: 'Jurassic Park',
        desc: 'Jurassic Park (no Brasil, Jurassic Park: O Parque dos Dinossauros; em Portugal, Parque Jurássico) é um filme de aventura e ficção científica estadunidense de 1993, dirigido por Steven Spielberg e baseado no livro homônimo escrito por Michael Crichton. Produzido pela Amblin Entertainment e distribuído pela Universal Pictures, é estrelado por Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough, Ariana Richards, Joseph Mazzello, Samuel L. Jackson e Bob Peck. O filme é centrado na fictícia Isla Nublar, onde um filantropo bilionário e uma pequena equipe de geneticistas criam um parque temático em uma ilha, onde as principais atrações são variadas espécies de dinossauros recriados através da engenharia genética.',
        poster: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e7/Jurassic_Park_poster.jpg/250px-Jurassic_Park_poster.jpg',
        directorId: 4,
        genre: 'Ação',
        releaseDate: new Date('1993', '06', '11'),
        // releaseDate: new Date('1993/06/11').toISOString(),
        runtime: 126,
        inTheater: false
      },
      // {
      //   title: '',
      //   desc: '',
      //   poster: '',
      //   directorId: ,
      //   genre: '',
      //   releaseDate: new Date('yyyy/mm/dd').toISOString(),
      //   runtime: '',
      //   inTheater: false
      // }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Movies', null, {});
  }
};
