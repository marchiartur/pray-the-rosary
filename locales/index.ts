import { BR, type FlagComponent, US } from 'country-flag-icons/react/3x2'

export enum LanguageCode {
  BRAZILIAN_PORTUGUESE = 'pt-BR',
  AMERICAN_ENGLISH = 'en-US',
}

export interface Country {
  code: string
  name: string
  language: string
}

export interface CountryMapProps extends Country {
  Flag: FlagComponent
}

export class MapCountry<key, value> extends Map<key, value> {
}

export const Countries = new MapCountry([
  [
    LanguageCode.BRAZILIAN_PORTUGUESE,
    {
      Flag: BR,
      code: LanguageCode.BRAZILIAN_PORTUGUESE,
      language: 'Português',
      name: 'brazil'
    }
  ],
  [
    LanguageCode.AMERICAN_ENGLISH,
    {
      Flag: US,
      code: LanguageCode.AMERICAN_ENGLISH,
      language: 'English (US)',
      name: 'unitedStates'
    }
  ]
])

export const COUNTRIES_NAMESPACE = 'countries'
