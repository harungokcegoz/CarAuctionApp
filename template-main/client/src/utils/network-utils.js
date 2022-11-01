import { tokenStore } from "../components/store.js";

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
export function getUserLotteries(userId) {
  return fetch("http://localhost:3000/lotteries/user/" + userId).then(
    (response) => {
      return response.json();
    }
  );
}
// export function getAProfile() {
//   return fetch("http://localhost:3000/users/", {
//     headers: { Authentication: "Bearer " + tokenStore },
//   }).then((response) => {
//     return response.json();
//   });
// }
