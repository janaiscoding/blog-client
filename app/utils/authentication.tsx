const getJwtToken = () => {
  console.log(sessionStorage.getItem("JWT_TOKEN"))
  return sessionStorage.getItem("JWT_TOKEN");
};
const setJwtToken = (token: string) => {
  return sessionStorage.setItem("JWT_TOKEN", token);
};

export { getJwtToken, setJwtToken };
