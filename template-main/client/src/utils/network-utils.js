export function getAllLotteries() {
  return fetch("http://localhost:3000/cars/").then((response) => {
    return response.json();
  });
}
export function getLotteryById(lotId) {
  return fetch("http://localhost:3000/cars/" + lotId).then((response) => {
    return response.json();
  });
}
