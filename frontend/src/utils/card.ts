interface Card {
  name: string
  ratio: number
  values: number[]
  // icon?: string
}

function ratio(percent: number) {
  return percent
}

const mobileValues = [10, 20, 50, 100, 200, 300, 500, 1000].map(v => v * 1000)
const gameCardValues = [
  ...mobileValues,
  ...[2000, 5000, 10000].map(v => v * 1000),
]

const cards: Card[] = [
  {
    name: 'Viettel',
    ratio: ratio(18),
    values: mobileValues,
    // icon: require('../assets/viettel.svg'),
  },
  {
    name: 'Vinaphone',
    ratio: ratio(21),
    values: mobileValues,
    // icon: require('../assets/vinaphone.svg'),
  },
  {
    name: 'Mobifone',
    ratio: ratio(23),
    values: mobileValues,
    // icon: require('../assets/mobifone.png'),
  },
  {
    name: 'Vietnamobile',
    ratio: ratio(20),
    values: mobileValues,
    // icon: require('../assets/vietnamobile.svg'),
  },
  {
    name: 'Zing',
    ratio: ratio(20),
    values: gameCardValues,
  },
  {
    name: 'Garena',
    ratio: ratio(32),
    values: gameCardValues,
  },
  {
    name: 'VCoin',
    ratio: ratio(28),
    values: gameCardValues,
  },
  {
    name: 'Gate',
    ratio: ratio(28),
    values: [...gameCardValues, ...[30000].map(v => v * 1000)],
  },
]

export { cards }
