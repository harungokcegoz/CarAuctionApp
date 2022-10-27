export function getAllLotteries() {
  return fetch("http://localhost:3000/lotteries/").then((response) => {
    return response.json();
  });
}
export function getLotteryById(lotId) {
  return fetch("http://localhost:3000/lotteries/" + lotId).then((response) => {
    return response.json();
  });
}
