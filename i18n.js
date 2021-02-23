
const NextI18Next = require('next-i18next').default
const localeSubpaths = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
  defaultLanguage:'en',
  otherLanguages: ['zhHant', 'fr', 'es'],
  localeSubpaths:{
    zhHant:'cn',
    fr: 'fr',
    es: 'es'
  },
  localePath: path.resolve('./public/static/locales')
})
// export const useTranslation = nextI18Next.useTranslation;