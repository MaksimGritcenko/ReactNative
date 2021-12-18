export const UPDATE_LANGUAGE_BOX_VISIBILITY = 'UPDATE_LANGUAGE_BOX_VISIBILITY';
export const UPDATE_APPLICATION_FONT_SIZE = 'UPDATE_APPLICATION_FONT_SIZE';

export const updateLanguageVisibilityBlock = isLangBoxVisible => ({
  type: UPDATE_LANGUAGE_BOX_VISIBILITY,
  isLangBoxVisible
});

export const updateApplicationFontSize = fontSize => ({
  type: UPDATE_APPLICATION_FONT_SIZE,
  fontSize
});

