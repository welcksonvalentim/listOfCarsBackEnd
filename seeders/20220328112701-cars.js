'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Cars',
    [
      {
        automaker: 'BMW',
        model: '320i',
        version: 'ACTIVE',
        image: 'https://www.google.com/imgres?imgurl=http%3A%2F%2F4.bp.blogspot.com%2F-EtI0yRhWyj8%2FVZKiFJ7I9oI%2FAAAAAAAAAro%2FcBUIT5nkyPs%2Fs1600%2Fplaca-final-8-bmw.png&imgrefurl=http%3A%2F%2F4rodas.blogspot.com%2F2015%2F06%2Fteste-bmw-320i-activeflex-sport-gp.html&tbnid=2fJ4sNAdfiAOfM&vet=12ahUKEwi-lZS82uj2AhUalJUCHWVHCQoQMyggegUIARD_AQ..i&docid=LpMFYIyIfqXY3M&w=956&h=500&q=bmw%20320i%202015&hl=pt-BR&ved=2ahUKEwi-lZS82uj2AhUalJUCHWVHCQoQMyggegUIARD_AQ',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        automaker: 'AUDI',
        model: 'A3',
        version: 'TFSI',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs2.glbimg.com%2FJaqn7Bf41xKrF0axrVy5k4lVe3c%3D%2F0x0%3A620x400%2F984x0%2Fsmart%2Ffilters%3Astrip_icc()%2Fi.s3.glbimg.com%2Fv1%2FAUTH_cf9d035bf26b4646b105bd958f32089d%2Finternal_photos%2Fbs%2F2020%2FV%2Fn%2FyuifLkQlCnESDXKMYurw%2F2015-12-01-a3-sedan-01.jpg&imgrefurl=https%3A%2F%2Fautoesporte.globo.com%2Ftestes%2Fnoticia%2F2015%2F12%2Fteste-audi-a3-sedan-20-ambition.ghtml&tbnid=IpQjs2aXCf1vTM&vet=12ahUKEwjo862l3ej2AhWDhZUCHdxvCe0QMygAegUIARC1AQ..i&docid=D_ToT8ilct9cwM&w=984&h=635&q=audi%20a3%202015&ved=2ahUKEwjo862l3ej2AhWDhZUCHdxvCe0QMygAegUIARC1AQ',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        automaker: 'TOYOTA',
        model: 'COROLLA',
        version: 'ALTIS',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs2.glbimg.com%2FZ3wVxMRJlIyh_1xkgWRcYAZhtrI%3D%2F0x0%3A620x380%2F984x0%2Fsmart%2Ffilters%3Astrip_icc()%2Fi.s3.glbimg.com%2Fv1%2FAUTH_cf9d035bf26b4646b105bd958f32089d%2Finternal_photos%2Fbs%2F2020%2Ft%2Fi%2FwXNEb7TaKkAf5PYpFUcA%2F2014-03-11-toyota-corolla-home.jpg&imgrefurl=https%3A%2F%2Fautoesporte.globo.com%2Ftestes%2Fnoticia%2F2014%2F03%2Fespacoso-corolla-2015-e-gostoso-de-dirigir.ghtml&tbnid=feIdlGDexcHEaM&vet=12ahUKEwiNi7yJ2-j2AhXPpZUCHeIJDJwQMygAegUIARC4AQ..i&docid=MT7kMahbN5RLwM&w=984&h=603&q=toyota%20corolla%202015&ved=2ahUKEwiNi7yJ2-j2AhXPpZUCHeIJDJwQMygAegUIARC4AQ',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        automaker: 'HONDA',
        model: 'CIVIC',
        version: 'LXS',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs2.glbimg.com%2FqO2sYtotEZ6DML7Lrj9M8U1i5Lo%3D%2F0x0%3A620x345%2F984x0%2Fsmart%2Ffilters%3Astrip_icc()%2Fi.s3.glbimg.com%2Fv1%2FAUTH_cf9d035bf26b4646b105bd958f32089d%2Finternal_photos%2Fbs%2F2020%2FL%2FO%2FqIuWowRTWfLn0VmrBtug%2F2014-06-19-mcam6922.jpg&imgrefurl=https%3A%2F%2Fautoesporte.globo.com%2Ftestes%2Fnoticia%2F2014%2F06%2Ftestamos-o-honda-civic-reestilizado.ghtml&tbnid=dz-OhXelrtUhyM&vet=12ahUKEwiL0vaz2-j2AhXvuJUCHVJwDe8QMygDegUIARDdAQ..i&docid=eD0kdCn3UQkltM&w=984&h=548&q=honda%20civic%202015&ved=2ahUKEwiL0vaz2-j2AhXvuJUCHVJwDe8QMygDegUIARDdAQ',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        automaker: 'VOLKSWAGEN',
        model: 'POLO',
        version: 'TSI',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs2.glbimg.com%2FnKUkzPqZ6TAFHslZ_cfbEufooSc%3D%2F1200x%2Fsmart%2Ffilters%3Acover()%3Astrip_icc()%2Fi.s3.glbimg.com%2Fv1%2FAUTH_cf9d035bf26b4646b105bd958f32089d%2Finternal_photos%2Fbs%2F2021%2F7%2Fd%2F3H56AKS5q6RrABIsNBuQ%2Fpologtsfrente.jpg&imgrefurl=https%3A%2F%2Fautoesporte.globo.com%2Fseu-bolso%2Fnoticia%2F2021%2F06%2Fvolkswagen-polo-2021-ainda-vale-a-pena-comprar-o-hatch-concorrente-de-chevrolet-onix-e-hyundai-hb20.ghtml&tbnid=K_nv_eIrEzc0GM&vet=12ahUKEwj8jury2-j2AhWgvJUCHcHwCaoQMygLegUIARDOAQ..i&docid=zT5HufvRskLCFM&w=1200&h=675&q=volkswagen%20polo&hl=pt-BR&ved=2ahUKEwj8jury2-j2AhWgvJUCHcHwCaoQMygLegUIARDOAQ',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        automaker: 'FIAT',
        model: 'ARGO',
        version: 'HGT',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs2.glbimg.com%2Faudfz3JkKcz-FZZZOcVZU3smG_U%3D%2F0x0%3A620x413%2F984x0%2Fsmart%2Ffilters%3Astrip_icc()%2Fi.s3.glbimg.com%2Fv1%2FAUTH_cf9d035bf26b4646b105bd958f32089d%2Finternal_photos%2Fbs%2F2020%2FB%2FO%2FaMvoxlSeSlaK3AzzvCAg%2F2017-05-31-fiat-argo-hgt-18-at-2.jpg&imgrefurl=https%3A%2F%2Fautoesporte.globo.com%2Ftestes%2Fnoticia%2F2017%2F05%2Ffiat-argo-18-hgt-primeiras-impressoes-ao-volante.ghtml&tbnid=S83FYE3bye4LmM&vet=12ahUKEwjO2_W93Oj2AhWLs5UCHVgIAbgQMygFegUIARDDAQ..i&docid=JPVL8-W4W1XQ6M&w=984&h=655&q=fiat%20argo%20hgt&hl=pt-BR&ved=2ahUKEwjO2_W93Oj2AhWLs5UCHVgIAbgQMygFegUIARDDAQ',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Cars', null, {}),
};
