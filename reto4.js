function fitsInOneBox(boxes) {
    boxes.sort((a, b) => {
    const aMax = Math.max(...Object.values(a));
    const bMax = Math.max(...Object.values(b));

    if (aMax > bMax) {
      return -1;
    }
    if (aMax < bMax) {
      return 1;
    }

    return 0;
  });

  let canBoxesPutInside = true;
  boxes.sort((a, b) => {
    if (b.l > a.l && b.w > a.w && b.h > a.h && canBoxesPutInside) {
      return (canBoxesPutInside = true);
    }

    return (canBoxesPutInside = false);
  });

  return canBoxesPutInside;
}
