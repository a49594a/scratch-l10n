/**
 * Currently supported locales for the Scratch Project
 * @type {Object} Key Value pairs of locale code: Language name written in the language
 */

const locales = {
    'en': {name: 'English'},
    'zh-cn': {name: '简体中文'}
};

const customLocales = {
    'zh-cn': {
        locale: 'zh-cn',
        parentLocale: 'zh'
    }
};

const localeMap = {
    'zh-cn': 'zh_CN'
};

// list of RTL locales supported, and a function to check whether a locale is RTL
const rtlLocales = [
    'ar',
    'he'
];

const isRtl = locale => {
    return rtlLocales.indexOf(locale) !== -1;
};

const wwwLocales = {
    'en': {name: 'English'},
    'zh-cn': {name: '简体中文'}
};

export {locales as default, customLocales, localeMap, rtlLocales, isRtl, wwwLocales};
