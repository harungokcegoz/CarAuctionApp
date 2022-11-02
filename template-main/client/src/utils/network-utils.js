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

export async function deleteALottery(id) {
  try {
    const res = await fetch("http://localhost:3000/lotteries/delete/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    if (res.status >= 200 && res.status <= 299) {
      alert("The car is deleted successfully!");
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
}
