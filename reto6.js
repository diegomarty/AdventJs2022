function createCube(size) {
    let diamond = "";
    let blankSize = size - 1;
    let drawSize = 1;

    for (let index = 0; index < size; index++) {
      diamond += " ".repeat(blankSize);
      diamond += "/\\".repeat(drawSize);
      diamond += "_\\".repeat(size);
      blankSize > 0 ? blankSize-- : "";
      drawSize < size ? drawSize++ : "";

      diamond += "\n";
    }

    for (let index = 0; index < size; index++) {
      diamond += " ".repeat(blankSize);
      diamond += "\\/".repeat(drawSize);
      diamond += "_/".repeat(size);
      blankSize++;
      drawSize--;

      size - 1 === index ? "" : (diamond += "\n");
    }

    return diamond;
}
