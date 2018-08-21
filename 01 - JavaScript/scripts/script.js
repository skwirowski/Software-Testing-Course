// First div displayed text and buttons
const changedParagraphContent = `This is <strong><u>changed</u></strong> paragraph content. More <strong><u>changed</u></strong> paragraph content. And more <strong><u>changed</u></strong> paragraph content`;
const restoreParagraphContent = "Random paragraph content. More random paragraph content. And more random paragraph content";
const changeContent = () => document.getElementById("paragraph-one").innerHTML = changedParagraphContent;
const restoreContent =() => document.getElementById("paragraph-one").innerHTML = restoreParagraphContent;

// Second div - display array of numbers from 9 to 1 using for loop
const prepareArrayToDisplay = () => {
  const prepareArrayOfNumbers = () => {
    let newArray = [];

    for(let i = 9; i > 0; i--) {
      newArray.push(i);
    }
    return newArray;
  };

  const prepareStringOfNumbers = () => {
    const arrayOfNumbers = prepareArrayOfNumbers();
    const joinedArray = arrayOfNumbers.join(", ");
    return joinedArray;
  };

  return prepareStringOfNumbers();
};

const reversedStringOfNumbers = prepareArrayToDisplay();
const restorendStringOfNumbers = "1, 2, 3, 4, 5, 6, 7, 8, 9";
const reverseArray = () => document.getElementById("paragraph-two").innerHTML = reversedStringOfNumbers;
const restoreeArray = () => document.getElementById("paragraph-two").innerHTML = restorendStringOfNumbers;

// Calculator functionality


const attachEventListeners = () => {
  const changedParagraphContentButton = document.getElementById("change-content-button");
  const restoreParagraphContentButton = document.getElementById("restore-content-button");
  const reversedArrayButton = document.getElementById("reverse-array-button");
  const restoredArrayButton = document.getElementById("restore-array-button");

  changedParagraphContentButton.addEventListener("click", changeContent);
  restoreParagraphContentButton.addEventListener("click", restoreContent);
  reversedArrayButton.addEventListener("click", reverseArray);
  restoredArrayButton.addEventListener("click", restoreeArray);
};

attachEventListeners();