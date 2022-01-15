export const CheckEquality = (str1, str2) => {
  let equals = false;
  if (str1 === str2) equals = true;
  return equals;
};

export const IsPasswordStrong = (password) => {
  const passwordFormat = /^[a-zA-Z0-9]{8,}$/;
  let isPasswordStrong = false;
  if (password.length >= 8 && password.match(passwordFormat))
    isPasswordStrong = true;
  return isPasswordStrong;
};

export const IsEmailValid = (email) => {
  const emailFormat =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (!email.match(emailFormat)) {
    return false;
  }
  return true;
};
