import { setDefaultOptions } from 'date-fns'
import { getDateFnsLocale } from 'src/helpers/locale'
import { removeHyphens } from 'src/helpers/string'

export function setDateFnsDefaultOptions(value: string) {
    const locale = getDateFnsLocale(removeHyphens(value))

    setDefaultOptions({
        locale
    })
}