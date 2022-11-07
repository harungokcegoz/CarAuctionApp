import { tokenStore } from "../components/store.js";

export function getAllLotteries(token) {
  return fetch("http://localhost:3000/lotteries/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((response) => {
    return response.json();
  });
}
export function getLotteryById(lotId, token) {
  return fetch("http://localhost:3000/lotteries/" + lotId, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((response) => {
    return response.json();
  });
}
export function getUserLotteries(userId, token) {
  return fetch("http://localhost:3000/lotteries/user/" + userId, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((response) => {
    return response.json();
  });
}

export async function deleteALottery(id, token) {
  try {
    const res = await fetch("http://localhost:3000/lotteries/delete/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
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
