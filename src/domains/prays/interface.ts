import useTranslation from 'next-translate/useTranslation'

export const PRAYS_NAMESPACE = 'prays'

export enum PraysNames {
  SIGN_OF_THE_CROSS = 'SIGNUM_CRUCIS',
  CREED = 'CREDO',
  OUR_FATHER = 'PATER_NOSTER',
  HAIL_MARY = 'AVE_MARIA',
  GLORY_BE = 'GLORIA_PATRI',
  FATIMA_PRAYER = 'ORATIO_FATIMAE',
  HAIL_HOLY_QUEEN = 'SALVE_REGINA',
  FINAL_ROSARY_PRAY = 'ORATIO_AD_FINEM_ROSARII_DICENDA',
  ACT_OF_FAITH = 'ACTUS_FIDEI',
  ACT_OF_HOPE = 'ACTUS_SPEI',
  ACT_OF_LOVE = 'ACTUS_CARITATIS',
}

export interface PrayInterface {
  name?: string
  content?: string
  key?: string
}

export type PraysNamespaceAttributes = Record<string, PrayInterface>

export class Pray implements PrayInterface {
  private readonly _name: string
  private readonly _content: string

  constructor (props: PrayInterface) {
    const { t } = useTranslation()
    const prayNamespaceKeys: PraysNamespaceAttributes = t(`${PRAYS_NAMESPACE}:.`, { count: 1 }, { returnObjects: true })

    if ((props?.key) != null) {
      const pray = prayNamespaceKeys[props?.key]

      this._name = pray?.name ?? ''
      this._content = pray?.content ?? ''
    } else {
      this._name = props?.name ?? ''
      this._content = props?.content ?? ''
    }
  }

  get name (): string {
    return this._name
  }

  get content (): string {
    return this._content
  }
}
