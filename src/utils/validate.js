export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!isEmailValid) return "Email Address is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export const checkValidSignUpData = (
  name,
  email,
  password,
  confirmPassword
) => {
  const isNameValid = /^([\p{L}]{3,})+\s+([\p{L}\s]{3,})+$/iu.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  const isConfirmPasswordValid = confirmPassword === password;

  if (!isNameValid) return "Full Name is not valid";
  if (!isEmailValid) return "Email Address is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isConfirmPasswordValid) return "Passwords do not match";

  return null;
};
