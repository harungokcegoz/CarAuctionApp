export function findAUser(data, id) {
  return data.find((user) => user.user_id === id);
}
