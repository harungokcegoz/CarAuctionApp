export function findAUser(data, id) {
  return data.find((user) => user.user_id === id);
}

export function findingLastId(data) {
  let lastId = 0;

  data.forEach((user) => {
    if (user.user_id > lastId) {
      lastId = user.user_id;
    }
  });
  return lastId;
}
