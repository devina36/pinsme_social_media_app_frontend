export const fetchUser = () => {
  const dataUser =
    localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  return dataUser;
};
