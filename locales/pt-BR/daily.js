import { PraysNames } from 'src/domains/prays/interface'

export default {
  title: 'Exercícios piedosos aconselhados ao cristão para cada dia',
  description: 'Os exercícios são recomendados pelo Papa São Pio X.',

  content: {
    afterWakeUp: {
      name: 'Depois de acordar',
      description: 'Meu Deus, eu vos dou o meu coração e a minha alma.'
    },
    afterWakeUpAndDressUp: {
      name: 'Depois de se levantar e se vestir',
      description: 'Eu Vos adoro, meu Deus, e Vos amo de todo o coração; dou-Vos graças por me terdes criado, feito cristão e conservado nesta noite; ofereço-Vos todas as minhas ações, e peço-Vos que neste dia me preserveis do pecado, e me livreis de todo o mal. Assim seja.',
      prays: [PraysNames.OUR_FATHER, PraysNames.HAIL_MARY, PraysNames.CREED, PraysNames.ACT_OF_FAITH, PraysNames.ACT_OF_HOPE, PraysNames.ACT_OF_LOVE]
    },
    beforeWork: {
      name: 'Antes do trabalho',
      description: 'Senhor; eu Vos ofereço este trabalho, dai-me a vossa benção.'
    },
    beforeMeal: {
      name: 'Antes da refeição',
      description: 'Senhor; abençoai-nos a nós e ao alimento que vamos tomar, para nos conservarmos no vosso santo serviço.'
    },
    afterMeal: {
      name: 'Após a refeição',
      description: 'Senhor, eu Vos dou graças pelo alimento que me destes; fazei-me digno de participar da mesa celeste.',
      prays: [PraysNames.SIGN_OF_THE_CROSS]
    },
    beforeSleep: {
      name: 'Antes de dormir',
      description: 'Pôr-se na presença de Deus, fazer um breve exame de consciência, e pedir perdão a Deus dos pecados cometidos durante o dia.',
      prays: [PraysNames.OUR_FATHER, PraysNames.HAIL_MARY, PraysNames.CREED, PraysNames.ACT_OF_FAITH, PraysNames.ACT_OF_HOPE, PraysNames.ACT_OF_LOVE]
    },
    beforeFallingSleep: {
      name: 'Antes de adormecer',
      description: 'Pensarei que posso morrer esta noite, e oferecerei o coração a Deus dizendo: "Meu Senhor e meu Deus, eu Vos dou todo o meu coração. Trindade Santíssima, concedei-me a graça de bem viver e de bem morrer. Jesus, Maria e José, eu Vos encomendo a minha alma."',
      prays: [PraysNames.SIGN_OF_THE_CROSS]
    }
  }
}
