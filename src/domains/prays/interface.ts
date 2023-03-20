export const PRAYS_NAMESPACE = 'prays'

export enum PraysNames {
  SIGN_OF_THE_CROSS = 'SIGNUM_CRUCIS',
  CREED = "CREDO",
  OUR_FATHER = "PATER_NOSTER",
  HAIL_MARY = "AVE_MARIA",
  GLORY_BE = "GLORIA_PATRI",
  FATIMA_PRAYER = "ORATIO_FATIMAE",
  HAIL_HOLY_QUEEN = "SALVE_REGINA",
  FINAL_ROSARY_PRAY = "ORATIO_AD_FINEM_ROSARII_DICENDA"
}

export interface PrayInterface {
  name: string;
  content: string;
}

export interface PraysNamespaceAttributes {
  [key: string]: PrayInterface
}

export class Pray implements PrayInterface {
  private _name: string;
  private _content: string;

  constructor(props: PrayInterface) {
    this._name = props?.name;
    this._content = props?.content;
  }

  get name(): string {
    return this._name
  }

  get content(): string {
    return this._content
  }
}



