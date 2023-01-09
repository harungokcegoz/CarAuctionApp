export function findALottery(data, id) {
  return data.find((lot) => lot.id === id);
}
export function findLotIndex(data, id) {
  return data.findIndex((lot) => lot.id === id);
}
export function findLotteryForUser(data, id) {
  let lotteries = [];

  for (const element of data) {
    if (element.userId === id) {
      lotteries.push(element);
    }
  }
  return lotteries;
}

export function findingLastId(data) {
  let lastId = 0;

  data.forEach((lot) => {
    if (lot.id > lastId) {
      lastId = lot.id;
    }
  });
  return lastId;
}
