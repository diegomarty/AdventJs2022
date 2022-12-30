function checkPart(part) {
    const partArray = part.split("");
let palindromo = false;
const middleSize =
 partArray.length % 2 ? Math.floor(partArray.length / 2) : Math.floor(partArray.length / 2);

const fristPart = partArray.slice(0, middleSize);
const lastPart = partArray.slice(-middleSize).reverse();

if (fristPart.toString() === lastPart.toString()) {
 palindromo = true;
}

partArray.forEach((element, index) => {
 const iterableArray = part.split("");

 const shorterArray = iterableArray.splice(index, 1);

 const middleSize =
   iterableArray.length % 2
     ? Math.floor(iterableArray.length / 2)
     : Math.floor(iterableArray.length / 2);

 const fristPart = iterableArray.slice(0, middleSize);
 const lastPart = iterableArray.slice(-middleSize).reverse();

 if (fristPart.toString() === lastPart.toString()) {
   palindromo = true;
 }
});

return palindromo;
}
