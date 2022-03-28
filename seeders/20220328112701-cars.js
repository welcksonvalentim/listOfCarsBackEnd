'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Cars',
    [
      {
        automaker: 'BMW',
        model: '320i',
        version: 'ACTIVE',
        image: 'http://img.estadao.com.br/jornal-do-carro/imagens/noticia/BMW_320I.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        automaker: 'AUDI',
        model: 'A3',
        version: 'TFSI',
        image: 'https://conteudo.imguol.com.br/c/entretenimento/2013/06/20/audi-a3-sedan-s-line-1371773379363_300x200.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        automaker: 'TOYOTA',
        model: 'COROLLA',
        version: 'ALTIS',
        image: 'https://pardalcarioca.com/wp-content/uploads/2014/03/corolla20151.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        automaker: 'HONDA',
        model: 'CIVIC',
        version: 'LXS',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNraC5JZmrFB5RhKLRFo5zvCu8woH69xLBA&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        automaker: 'VOLKSWAGEN',
        model: 'POLO',
        version: 'TSI',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDKmDyiFUBxeGl--fCwpJG2nn-fDepCQYqg&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        automaker: 'FIAT',
        model: 'ARGO',
        version: 'HGT',
        image: 'https://cdn.motor1.com/images/mgl/jLOM6/s1/fiat-argo-hgt-avaliaco.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Cars', null, {}),
};
