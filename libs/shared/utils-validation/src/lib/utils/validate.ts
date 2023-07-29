export const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
export const validateMobile = (mobile: string) => {
  const re = /^[0-9]{10}$/;
  return re.test(mobile);
};

export const validatePassword = (password: string) => {
  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  return re.test(password);
};
