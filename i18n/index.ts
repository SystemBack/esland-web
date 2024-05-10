import catalan from './ca.json';
import spanish from './es.json';
import english from './en.json';

const LANGS = {
    'ca': catalan,
    'en': english,
}
export const getI18n = (
    { currentLocale = 'es' } :
    { currentLocale: string | undefined }
) => {
    return LANGS[currentLocale] ?? spanish;
}