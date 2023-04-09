import { Weekday } from './../date/interface'
export const MYSTERIES_NAMESPACE = 'mysteries'

export enum RosaryMysteriesNames {
  JOYFUL = 'GAUDIOSA',
  LUMINOUS = 'LUMINOSA',
  SORROWFUL = 'DOLOROSA',
  GLORIOUS = 'GLORIOSA',
}

export const MysteriesByDay = {
  [Weekday.Sunday]: RosaryMysteriesNames.GLORIOUS,
  [Weekday.Monday]: RosaryMysteriesNames.JOYFUL,
  [Weekday.Tuesday]: RosaryMysteriesNames.SORROWFUL,
  [Weekday.Wednesday]: RosaryMysteriesNames.GLORIOUS,
  [Weekday.Thursday]: RosaryMysteriesNames.LUMINOUS,
  [Weekday.Friday]: RosaryMysteriesNames.SORROWFUL,
  [Weekday.Saturday]: RosaryMysteriesNames.JOYFUL
}

export interface MysteryInterface {
  name: string
  event: string
}

export class Mystery implements MysteryInterface {
  private readonly _name: string
  private readonly _event: string

  constructor (props: MysteryInterface) {
    const {
      name = '',
      event = ''
    } = props

    this._name = name
    this._event = event
  }

  get name (): string {
    return this._name
  }

  get event (): string {
    return this._event
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
  private readonly _name: string
  private readonly _mysteries: Mystery[]
  private readonly _key: RosaryMysteriesNames

  constructor (props: MysteriesSeriesInterface) {
    this._name = props.name
    this._mysteries = [props.first, props.second, props.third, props.fourth, props.fifth]
    this._key = props.key
  }

  get name (): string {
    return this._name
  }

  get first (): Mystery {
    return this._mysteries[0]
  }

  get second (): Mystery {
    return this._mysteries[1]
  }

  get third (): Mystery {
    return this._mysteries[2]
  }

  get fourth (): Mystery {
    return this._mysteries[3]
  }

  get fifth (): Mystery {
    return this._mysteries[4]
  }

  get mysteries (): Mystery[] {
    return this._mysteries
  }

  get key (): RosaryMysteriesNames {
    return this._key
  }
}

export type MysteriesNamespaceAttributes = Record<string, MysteriesSeriesInterface>
