import { Weekday } from './../date/interface';
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
    [Weekday.Saturday]: RosaryMysteriesNames.JOYFUL,
}

export interface MysteryInterface {
    name: string;
    event: string;
}

export class Mystery implements MysteryInterface {
    private _name: string;
    private _event: string;

    constructor(props: MysteryInterface) {
        const {
            name = '',
            event = ''
        } = props;

        this._name = name
        this._event = event
    }

    get name() {
        return this._name
    }

    get event() {
        return this._event
    }
}

export interface MysteriesSeriesInterface {
    name: string;
    first: Mystery;
    second: Mystery;
    third: Mystery;
    fourth: Mystery;
    fifth: Mystery;

    mysteries: Mystery[];
    key: RosaryMysteriesNames;
}

export class MysteriesSeries implements MysteriesSeriesInterface {
    private _name: string;
    private _mysteries: Mystery[]
    private _key: RosaryMysteriesNames;

    constructor(props: MysteriesSeriesInterface) {
        this._name = props.name;
        this._mysteries = [props.first, props.second, props.third, props.fourth, props.fifth]
        this._key = props.key
    }

    get name() {
        return this._name
    }

    get first() {
        return this._mysteries[0]
    }

    get second() {
        return this._mysteries[1]
    }

    get third() {
        return this._mysteries[2]
    }

    get fourth() {
        return this._mysteries[3]
    }

    get fifth() {
        return this._mysteries[4]
    }


    get mysteries() {
        return this._mysteries
    }

    get key() {
        return this._key
    }
}

export interface MysteriesNamespaceAttributes {
    [key: string]: MysteriesSeriesInterface
}

