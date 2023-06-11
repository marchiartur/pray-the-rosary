import useTranslation from 'next-translate/useTranslation'

export const PRAYS_NAMESPACE = 'prays'
export const PRAYS_NAMESPACE_LATIN = 'praysLATIN'

export enum PraysNames {
  SIGN_OF_THE_CROSS = 'SIGNUM_CRUCIS',
  APOSTLES_CREED = 'CREDO',
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
  latin?: boolean
}

export type PraysNamespaceAttributes = Record<string, PrayInterface>

export class Pray implements PrayInterface {
  readonly name: string
  readonly content: string
  readonly key: string

  constructor (props: PrayInterface) {
    const { t } = useTranslation()
    const prayNamespaceKeys: PraysNamespaceAttributes = t(`${PRAYS_NAMESPACE}:.`, { count: 1 }, { returnObjects: true })
    const latinprayNamespaceKeys: PraysNamespaceAttributes = t(`${PRAYS_NAMESPACE_LATIN}:.`, { count: 1 }, { returnObjects: true })

    if ((props?.key) != null) {
      const pray = props?.latin ?? false ? latinprayNamespaceKeys[props?.key] : prayNamespaceKeys[props?.key]

      this.name = pray?.name ?? ''
      this.content = pray?.content ?? ''
      this.key = props?.key
    } else {
      this.name = props?.name ?? ''
      this.content = props?.content ?? ''

      this.key = ''
    }
  }
}
