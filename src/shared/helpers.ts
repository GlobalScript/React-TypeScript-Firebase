export const currency = (num: number = 0): string => {
  let value = num.toString().match(/^(.*?)((?:[,.]\d+)?|)$/);
  if (!num || !value) return "Ціна Договірна";
  return value[1].replace(/\B(?=(?:\d{3})*$)/g, ' ') + value[2] + " $";
}
