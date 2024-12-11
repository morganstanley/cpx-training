export function getAvailableTranslations(lessons, translation) {
  return lessons.filter((lesson) =>
    lesson.fields.slug.includes(`/${translation}/`)
  );
}

export function getCurrentTranslations(slug, translations) {
  let translation;
  const slugsAr = slug.split('/');
  translations.forEach((t) => {
    if (slugsAr.includes(t)) {
      translation = t;
    }
  });
  return translation;
}
