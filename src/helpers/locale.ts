import * as Locales from 'date-fns/locale';
import { Locale } from 'date-fns';

/**
 * Looks up a date-fns locale from the Expo localization object.  This falls back to `en-US`
 * @param code string as keyof Locales.
 * @returns date-fns locale.
 */
export function getDateFnsLocale(code: string) : Locale {
    const pattern = Locales.enUS
    
    return Locales[code as keyof typeof Locales] ?? pattern
}