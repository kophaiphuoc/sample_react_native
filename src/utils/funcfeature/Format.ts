export function formatNumber(number: any) {
  return new Intl.NumberFormat().format(number);
}

export const addDash = (str: string) => {
  if (str.includes('-')) {
    return str;
  } else {
    const modifiedStr = str.slice(0, 3) + '-' + str.slice(3);
    return modifiedStr;
  }
};
