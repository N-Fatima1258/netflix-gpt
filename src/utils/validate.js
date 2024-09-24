export const checkValidData = (email, password, fullName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isFullNameValid = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(fullName);
  // console.log(isEmailValid)
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isFullNameValid) return "Full Name is not valid";

  // null means no error
  return null;
};

// https://netflix-gpt-9df02.web.app
