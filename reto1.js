function wrapping(gifts) {
  const wrapedGifts = gifts.map((giftPresent) => {
    let caps = "";
    for (let index = -2; index < giftPresent.length; index++) {
      caps += "*";
    }

    return `${caps}\n` + `*${giftPresent}*` + `\n${caps}`;
  });

  return wrapedGifts;
}
