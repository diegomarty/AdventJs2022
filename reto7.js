function getGiftsToRefill(a1, a2, a3) {
    let contQuantity = 0;
  const arrayRegalos = [...new Set(a1.concat(a2).concat(a3))];
  const regalosParaReponer = [];
  arrayRegalos.forEach((element) => {
    a1.includes(element) ? contQuantity++ : null;
    a2.includes(element) ? contQuantity++ : null;
    a3.includes(element) ? contQuantity++ : null;

    contQuantity <= 1 ? regalosParaReponer.push(element) : null;
    contQuantity = 0;
  });

  return regalosParaReponer;
}
