import { Weekday } from './../date/interface'
export const MYSTERIES_NAMESPACE = 'mysteries'

export enum RosaryMysteriesNames {
  JOYFUL = 'GAUDIOSA',
  // LUMINOUS = 'LUMINOSA',
  SORROWFUL = 'DOLOROSA',
  GLORIOUS = 'GLORIOSA',
}

export const MysteriesByDay = {
  [Weekday.Sunday]: RosaryMysteriesNames.GLORIOUS,
  [Weekday.Monday]: RosaryMysteriesNames.JOYFUL,
  [Weekday.Tuesday]: RosaryMysteriesNames.SORROWFUL,
  [Weekday.Wednesday]: RosaryMysteriesNames.GLORIOUS,
  [Weekday.Thursday]: RosaryMysteriesNames.JOYFUL,
  [Weekday.Friday]: RosaryMysteriesNames.SORROWFUL,
  [Weekday.Saturday]: RosaryMysteriesNames.GLORIOUS
}

export const DaysOfTheWeekOfTheMysteries = {
  [RosaryMysteriesNames.GLORIOUS]: [Weekday.Sunday, Weekday.Wednesday, Weekday.Saturday],
  [RosaryMysteriesNames.JOYFUL]: [Weekday.Monday, Weekday.Thursday],
  [RosaryMysteriesNames.SORROWFUL]: [Weekday.Tuesday, Weekday.Friday]
}

export interface MysteryInterface {
  name: string
  event: string
}

export class Mystery implements MysteryInterface {
  readonly name: string
  readonly event: string

  constructor (props: MysteryInterface) {
    const {
      name = '',
      event = ''
    } = props

    this.name = name
    this.event = event
  }
}

export interface MysteriesSeriesInterface {
  name: string
  first: Mystery
  second: Mystery
  third: Mystery
  fourth: Mystery
  fifth: Mystery

  mysteries: Mystery[]
  key: RosaryMysteriesNames
}

export class MysteriesSeries implements MysteriesSeriesInterface {
  readonly name: string
  readonly mysteries: Mystery[]
  readonly key: RosaryMysteriesNames

  constructor (props: MysteriesSeriesInterface) {
    this.name = props.name
    this.mysteries = [props.first, props.second, props.third, props.fourth, props.fifth]
    this.key = props.key
  }

  get first (): Mystery {
    return this.mysteries[0]
  }

  get second (): Mystery {
    return this.mysteries[1]
  }

  get third (): Mystery {
    return this.mysteries[2]
  }

  get fourth (): Mystery {
    return this.mysteries[3]
  }

  get fifth (): Mystery {
    return this.mysteries[4]
  }
}

export type MysteriesNamespaceAttributes = Record<string, MysteriesSeriesInterface>
