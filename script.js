/* Get references */
let pButton = document.getElementById('p-button');
let imgButton = document.getElementById('img-button');
let nothingButton = document.getElementById('nothing-button');

let pDiv = document.getElementById('p-div');
let imgDiv = document.getElementById('img-div');
let nothingDiv = document.getElementById('nothing-div');

let pCountSpan = document.getElementById('p-count');
let imgCountSpan = document.getElementById('img-count');
let nothingCountSpan = document.getElementById('nothing-count');

/* SET DISPLAY STYLES OR ELSE IT WON'T WORK */
pDiv.style.display = 'block';
imgDiv.style.display = 'none';
nothingDiv.style.display = 'none';

/* Set initial counts */
let pCount = 0;
let imgCount = 0;
let nothingCount = 0;

// Make sure your spans reflect this
pCountSpan.innerHTML = pCount;
imgCountSpan.innerHTML = imgCount;
nothingCountSpan.innerHTML = nothingCount;

/* Event Listener for pButton */
pButton.onclick = function () {
  // If pDiv is hidden, show it and hide the other divs
  if (pDiv.style.display == 'none') {
    imgDiv.style.display = 'none';
    nothingDiv.style.display = 'none';
    pDiv.style.display = 'block';
  }

  // Create a new paragraph element
  let newP = document.createElement('p');
  newP.innerHTML = 'Whatever you want it to be!';
  //Change the background and text color of this p element
  newP.style.backgroundColor = 'black';
  newP.style.color = 'white';
  // Add padding and a margin as well to match demo
  newP.style.marginTop = '1rem';
  newP.style.marginBottom = '1rem';
  newP.style.paddingTop = '1rem';
  newP.style.paddingBottom = '1rem';

  // Add element to pDiv
  pDiv.append(newP);

  // Increase pCount
  pCount++;
  pCountSpan.innerHTML = pCount;
};

/* Event Listener for imgButton */
imgButton.onclick = function () {
  // If imgDiv is hidden, show it and hide the other divs
  if (imgDiv.style.display == 'none') {
    pDiv.style.display = 'none';
    nothingDiv.style.display = 'none';
    imgDiv.style.display = 'block';
  }

  // Create a new image element
  let newImg = document.createElement('img');
  // Add Pikachu (or whatever image you choose) to the image
  newImg.src = './images/pikachu.jpg';

  // Add this image to your imgDiv
  imgDiv.append(newImg);

  // Increase imgCount
  imgCount++;
  imgCountSpan.innerHTML = imgCount;
};

/* Do Nothing Event Listener */
nothingButton.onclick = function () {
  // If nothingDiv is hidden, show it and hide other divs
  if (nothingDiv.style.display == 'none') {
    pDiv.style.display = 'none';
    imgDiv.style.display = 'none';
    nothingDiv.style.display = 'block';
  }

  // Increase nothingCount
  nothingCount++;
  nothingCountSpan.innerHTML = nothingCount;
};
