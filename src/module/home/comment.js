import getData from './getData.js';
import getComments from './getsComments.js';

const modal = document.getElementById('myModal');

  // get data
const data = await getData();

// get comments

// When the user clicks on <span> (x), close the modal
const close = () => {
  modal.style.display = 'none';
};

// When the user clicks on the button, open the modal
const openCommentPopup = async (id, like) => {
  const itemId = like.item_id;
  const urlComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ix2mMVLk4DRU3xtKMCQq/comments?item_id=${itemId}`;
  const comments = await fetch(urlComments).then((res) => res.json(), (err) => console.log(err));
  console.log(comments);

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

  const commentDisplaySections = document.createElement('div');
  commentDisplaySections.id = 'commentDisplaySections';

  const title = document.createElement('h2');
  title.innerHTML = 'Add a comment';

  const content = document.createElement('p');
  if(comments?.length > 0)
  comments?.forEach((comment) => {
    content.innerHTML += `${comment.creation_date}: ${comment.username} ${comment.comment}`;
  });

  // Append elements to the modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(popupImg);
  modalContent.appendChild(titleElement);
  commentDisplaySections.appendChild(title);
  commentDisplaySections.appendChild(content);
  modalContent.appendChild(commentDisplaySections);

  // Clear existing content and append the new modal content
  modal.innerHTML = '';
  modal.appendChild(modalContent);
};

export default openCommentPopup;
