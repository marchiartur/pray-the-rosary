import { type PraysNames } from 'src/domains/prays/interface'

export type CommonNamespaceAttribute = Record<string, any>

export interface DailyContentRecordInterface {
  name: string
  description: string
  prays?: PraysNames[]
}

export type DailyContentNameSpace = Record<string, DailyContentRecordInterface>

export const COMMONS_NAMESPACE = 'commons'
export const DATE_NAMESPACE = 'date'
export const INDEX_PAGE_NAME = 'index'
export const MENU_NAMESPACE = 'menu'

export const DAILY_PAGE_NAME = 'daily'
export const DAILY_NAMESPACE = DAILY_PAGE_NAME
