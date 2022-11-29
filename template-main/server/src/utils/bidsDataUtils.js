

export function findABid(data, id){
    return data.find(bid => bid.id = id);
}
export function findingLastId(data) {
    let lastId = -1;

    data.forEach((bid) => {
        if (bid.id > lastId) {
            lastId = bid.id;
        }
    });
    return lastId;
}
export function findBidOfUser(data, id) {
    let bids = [];

    for (const element of data) {
        if (element.userId === id) {
            bids.push(element);
        }
    }
    bids.push(data.find((bid) => bid.userId === id));
    return bids;
}
export function findBidsOfAuction(data, id) {
    let bids = [];

    for (const element of data) {
        if (element.lotId === id) {
            bids.push(element);
        }
    }
    return bids;
}