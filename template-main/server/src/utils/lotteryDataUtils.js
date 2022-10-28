export function findALottery(data, id) {
  return data.find((lot) => lot.lot_id === id);
}
