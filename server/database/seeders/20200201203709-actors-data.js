'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Actors', [
      {
        name: 'Mark Hamill',
        nationality: 'EUA',
        bio: 'Mark Richard Hamill (Oakland, 25 de setembro de 1951) é um ator e escritor norte-americano conhecido por interpretar Luke Skywalker na saga de ficção científica Star Wars e por dar voz ao Joker em Batman: The Animated Series e na série de videojogos Batman: Arkham, além de vários outros personagens em outros desenhos.',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mark_Hamill_%282017%29.jpg/250px-Mark_Hamill_%282017%29.jpg',
      },
      {
        name: 'Harrison Ford',
        nationality: 'EUA',
        bio: 'Harrison Ford (Chicago, 13 de julho de 1942) é um ator norte-americano conhecido por atuar como Han Solo na saga Star Wars, Indiana Jones na franquia Indiana Jones e Rick Deckard em Blade Runner e Blade Runner 2049.',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/220px-Harrison_Ford_by_Gage_Skidmore_3.jpg',
      },
      {
        name: 'Carrie Fisher',
        nationality: 'EUA',
        bio: 'Carrie Frances Fisher (Burbank, 21 de outubro de 1956 - Los Angeles, 27 de dezembro de 2016) foi uma atriz, escritora, produtora e humorista estadunidense. Fisher era filha de Eddie Fisher e Debbie Reynolds. Ela era conhecida por interpretar a Princesa Leia na série de filmes de Star Wars. Seus outros papéis incluem Shampoo (1975), The Blues Brothers (1980), Hannah and Her Sisters (1986), The burbs (1989) e When Harry Met Sally... (1989).',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Carrie_Fisher_2013.jpg/200px-Carrie_Fisher_2013.jpg',
      },
      {
        name: 'Adam Driver',
        nationality: 'EUA',
        bio: 'Adam Douglas Driver (San Diego, 19 de novembro de 1983) é um ator americano. Ele começou sua carreira aparecendo em vários curtas-metragens, programas e filmes para a televisão antes de fazer sua estreia no cinema em J. Edgar (2011). Posteriormente, teve papéis em Lincoln (2012), Frances Ha (2012), Inside Llewyn Davis (2013), Paterson (2017), dentre outros. Driver também se apresentou em peças de teatros de diversas produções da Broadway e Off-Broadway.',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Star_Wars-_The_Last_Jedi_Japan_Premiere_Red_Carpet-_Adam_Driver_%2827163437599%29_%28cropped%29.jpg/220px-Star_Wars-_The_Last_Jedi_Japan_Premiere_Red_Carpet-_Adam_Driver_%2827163437599%29_%28cropped%29.jpg'
      },
      {
        name: 'Daisy Ridley',
        nationality: 'Inglaterra/UK',
        bio: 'Ridley nasceu em Westminster, Londres, com ascendência irlandesa. É filha de Chris Ridley, um fotógrafo e de Louise Fawkner-Corbett, uma gestora de publicidade. É a mais nova de cinco irmãs: tem duas irmãs, Poppy e Kika Rose e duas meias-irmãs. Seu tio-avô foi o ator e dramaturgo Arnold Ridley de Dad\'s Army. Ela estudou na Tring Park School for the Performing Arts em Hertfordshire, graduando-se em 2010 com a idade de 18 anos.',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Daisy_Ridley_by_Gage_Skidmore.jpg/250px-Daisy_Ridley_by_Gage_Skidmore.jpg'
      },
      {
        name: 'John Boyega',
        nationality: 'Inglaterra/UK',
        bio: 'John Boyega (Londres, 17 de março de 1992) é um ator britânico, mais conhecido por interpretar Finn, na triologia de Star Wars: O Despertar da Força(2015) Os Últimos Jedi(2017) e A Ascensão Skywalker(2019) Por este papel, ele venceu o BAFTA, em 2016, de Estrela revelação.',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/John_Boyega_by_Gage_Skidmore.jpg/250px-John_Boyega_by_Gage_Skidmore.jpg'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Actors', null, {});
  }
};
