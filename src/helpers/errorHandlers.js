export const emailErrorChecker = input => {
  return (
    (!input.includes('@') || !input.includes('.') || input.includes(' ')) &&
    input !== ''
  );
};

export const emailUsedChecker = (input, allAccounts) =>
  allAccounts.find(account => account.email === input);

export const passwordErrorChecker = input => {
  const hasLowerCase = str => /[a-z]/.test(str);
  const hasUpperCase = str => /[A-Z]/.test(str);
  const specialCharacters = [
    '-',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    '.',
  ];

  const charsIncluded = specialCharacters.filter(char => input.includes(char));

  return (
    (!hasLowerCase(input) ||
      !hasUpperCase(input) ||
      !(input.length > 7) ||
      !(input.length < 21) ||
      !charsIncluded.length > 0) &&
    input !== ''
  );
};

export const confirmPasswordErrorChecker = (password, passwordToConfirm) =>
  passwordToConfirm !== '' && passwordToConfirm !== password;

export const textErrorChecker = input => /\d/.test(input);
