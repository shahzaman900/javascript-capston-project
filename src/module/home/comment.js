import getData from './getData.js';

const modal = document.getElementById('myModal');

  // get data
const data = await getData();

// When the user clicks on <span> (x), close the modal
const close = () => {
  modal.style.display = 'none';
};

// When the user clicks on the button, open the modal
const openCommentPopup = (id) => {
  modal.style.display = 'block';
  const card = data.find((card) => card.idMeal === id);

  // Create the elements
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close');
  closeButton.innerHTML = '&times;';
  closeButton.onclick = () => close();

  const popupImg = document.createElement('img');
  popupImg.classList.add('popupImg');
  popupImg.src = card.strMealThumb;
  popupImg.alt = '';

  const titleElement = document.createElement('h1');
  titleElement.textContent = card.strMeal;

  // Append elements to the modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(popupImg);
  modalContent.appendChild(titleElement);

  // Clear existing content and append the new modal content
  modal.innerHTML = '';
  modal.appendChild(modalContent);
};

export default openCommentPopup;
