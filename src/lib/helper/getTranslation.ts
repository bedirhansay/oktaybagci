export const getTranslation = (key: string, lang: string) => {
  const translations = require(`../../messages/${lang}.json`);

  const keys = key.split(".");
  let result = translations;
  keys.forEach((k) => {
    result = result[k];
  });

  return result;
};
