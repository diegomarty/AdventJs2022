function getMaxGifts(giftsCities, maxGifts, maxCities) {

    let maxGiftsSended = 0;
    let citiesDelivered = 0;
    let lastGiftSended = 0;

    giftsCities
      .sort((a, b) => b - a)
      .forEach((giftSize) => {
        if (
          giftSize < maxGifts &&
          maxGiftsSended + giftSize <= maxGifts &&
          citiesDelivered < maxCities
        ) {
          maxGiftsSended += giftSize;
          citiesDelivered++;
          lastGiftSended = giftSize;
        }
      });

    let secondMaxGiftsSended = 0;
    let secondCitiesDelivered = 0;
    if (citiesDelivered < maxCities) {
      giftsCities.forEach((secondGiftSize) => {
        if (
          secondGiftSize < maxGifts &&
          secondMaxGiftsSended + secondGiftSize <= maxGifts &&
          secondCitiesDelivered < maxCities &&
          secondGiftSize !== lastGiftSended
        ) {
          secondMaxGiftsSended += secondGiftSize;
          secondCitiesDelivered++;
        }
      });
    }

    return secondMaxGiftsSended > maxGiftsSended ? secondMaxGiftsSended : maxGiftsSended;
}
