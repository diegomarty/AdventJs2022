function distributeGifts(packOfGifts, reindeers) {
  let packOfGiftsSize = 0;
  let reindeersCapacity = 0;
  packOfGifts.map((regalo) => (packOfGiftsSize += regalo.length));
  reindeers.map((reindeers) => (reindeersCapacity += reindeers.length * 2));

  return Math.floor(reindeersCapacity / packOfGiftsSize);
}
