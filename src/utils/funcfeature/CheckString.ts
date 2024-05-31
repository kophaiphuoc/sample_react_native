export const checkIsEmpty = (value: string | number | boolean) => {
  if (
    value === undefined ||
    value === null ||
    value === '' ||
    value === 0 ||
    value === false
  ) {
    return true;
  }
  return false;
};

export const checkFormIsEmpty = (formValues: any): boolean => {
  for (const key in formValues) {
    if (Object.prototype.hasOwnProperty.call(formValues, key)) {
      if (checkIsEmpty(formValues[key])) {
        return true;
      }
    }
  }
  return false;
};

export const handlerStringEmpty = (value: string | number) => {
  if (value === undefined || value === null || value === '' || value === 0) {
    return 'N/A';
  }
  return value;
};

export const isImageUrl = (url: string) => {
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
  if (imageExtensions.test(url)) {
    return url;
  }
  return undefined;
};
