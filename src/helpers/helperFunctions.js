export const formatMoney = num => `$${num.toFixed(2)}`;

export const getCount = obj => {
  const keys = Object.keys(obj);
  const quantity = [];
  keys.forEach(key => quantity.push(+obj[key].quantity));

  return quantity.reduce((acc, val) => acc + val, 0);
};

export const pluralChecker = num => (num !== 1 ? 's' : '');
