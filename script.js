/* Get references */
let pButton = document.getElementById('p-button');
let imgButton = document.getElementById('img-button');

let pDiv = document.getElementById('p-div');
let imgDiv = document.getElementById('img-div');

/* SET PDIV AND IMGDIV DISPLAY STYLES OR ELSE IT WON'T WORK */
pDiv.style.display = 'block';
imgDiv.style.display = 'none';

/* Event Listener for pButton */
pButton.onclick = function () {
  // If pDiv is hidden, show it and hide the other div
  if (pDiv.style.display == 'none') {
    pDiv.style.display = 'block';
    imgDiv.style.display = 'none';
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
};

/* Event Listener for imgButton */
imgButton.onclick = function () {
  // If imgDiv is hidden, show it and hide the other div
  if (imgDiv.style.display == 'none') {
    pDiv.style.display = 'none';
    imgDiv.style.display = 'block';
  }

  // Create a new image element
  let newImg = document.createElement('img');
  // Add Pikachu (or whatever image you choose) to the image
  newImg.src = './images/pikachu.jpg';

  // Add this image to your imgDiv
  imgDiv.append(newImg);
};
