import { PraysNames } from 'src/domains/prays/interface'

export default {
  title: '',
  description: '',
  content: {
    afterWakeUp: {
      name: 'After waking up',
      description: 'My God, I give you my heart and my soul.'
    },
    afterWakeUpAndDressUp: {
      name: 'After getting up and dressing up',
      description: 'I adore You, my God, and I love You with all my heart. I give You thanks for creating me, making me a Christian, and preserving me through the night. I offer You all my actions and ask You to keep me from sin and from all evil this day. Amen.',
      prays: [PraysNames.OUR_FATHER, PraysNames.HAIL_MARY, PraysNames.APOSTLES_CREED, PraysNames.ACT_OF_FAITH, PraysNames.ACT_OF_HOPE, PraysNames.ACT_OF_LOVE]
    },
    beforeWork: {
      name: 'Before work',
      description: 'Lord, I offer You this work; bless me with Your grace.'
    },
    beforeMeal: {
      name: 'Before meal',
      description: 'Lord, bless us and the food we are about to eat, and keep us in Your holy service.'
    },
    afterMeal: {
      name: 'After meal',
      description: 'Lord, I give You thanks for the food You have given me; make me worthy to share in the heavenly banquet.',
      prays: [PraysNames.SIGN_OF_THE_CROSS]
    },
    beforeSleep: {
      name: 'Before sleep',
      description: 'I place myself in the presence of God, make a brief examination of conscience, and ask God\'s forgiveness for the sins I have committed during the day.',
      prays: [PraysNames.OUR_FATHER, PraysNames.HAIL_MARY, PraysNames.APOSTLES_CREED, PraysNames.ACT_OF_FAITH, PraysNames.ACT_OF_HOPE, PraysNames.ACT_OF_LOVE]
    },
    beforeFallingSleep: {
      name: 'Before falling asleep',
      description: 'I will think that I could die tonight, and offer my heart to God, saying, "My Lord and my God, I give You my whole heart. Most Holy Trinity, grant me the grace to live well and to die well. Jesus, Mary, and Joseph, I commend my soul to you."',
      prays: [PraysNames.SIGN_OF_THE_CROSS]
    }
  }
}
