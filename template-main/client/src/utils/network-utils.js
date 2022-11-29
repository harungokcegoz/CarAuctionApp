export function getAllBids(token){
  return fetch("http://localhost:3000/bids/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((response) => {
    return response.json();
  });
}
export async function getBidsOfAuction(lotId, token) {
  return await fetch("http://localhost:3000/bids/auctions/" + lotId, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  }).then((response) => {
    return response.json();
  });
}
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
  return fetch("http://localhost:3000/lotteries/users/" + userId, {
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
export async function makingBid(data, token) {

  try {
    const res =  await fetch("http://localhost:3000/bids/", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token
      },
      method : "POST",
      body: JSON.stringify(data)
    })
    if (res.status >= 200 && res.status <= 299) {
      return alert("The bid is created successfully!")

    } else{
      return console.log(res.status)
    }
  } catch (error) {
    console.log(error)
  }
}
