export const userQuery = (UserId) => {
  const query = `*[_type == "user" && _id == '${UserId}']`;

  return query;
};
