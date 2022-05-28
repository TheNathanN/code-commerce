export const formatMoney = num => `$${num.toFixed(2)}`;

export const formatPhone = num => /[0-9]{3}-[0-9]{2}-[0-9]{3}/;

export const getCount = obj => {
  const keys = Object.keys(obj);
  const quantity = [];
  keys.forEach(key => quantity.push(+obj[key].quantity));

  return quantity.reduce((acc, val) => acc + val, 0);
};

export const pluralChecker = num => (num !== 1 ? 's' : '');

export const getTotal = (itemsInCart, discount, shipping) => {
  const prices = [];

  const itemKeys = Object.keys(itemsInCart);

  itemKeys.forEach(key => {
    const total = itemsInCart[key].price * itemsInCart[key].quantity;
    prices.push(total);
  });

  const cartTotal = prices.reduce((acc, num) => {
    return acc + num;
  }, 0);

  if (discount || shipping) {
    return cartTotal + shipping - discount;
  } else {
    return cartTotal;
  }
};

export const checkCardType = type => {
  switch (type) {
    case 'MASTERCARD':
      return './assets/MASTERCARD.svg';
    case 'VISA':
      return './assets/VISA.jpeg';
    case 'DISCOVER':
      return './assets/DISCOVER.jpeg';
    case 'AMERICAN_EXPRESS':
      return './assets/AMERICAN_EXPRESS.jpeg';
    default:
      return '';
  }
};
