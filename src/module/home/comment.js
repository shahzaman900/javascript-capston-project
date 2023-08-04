import getData from './getData.js';

const modal = document.getElementById('myModal');

// get data
const data = await getData();

// get comments

// When the user clicks on <span> (x), close the modal
const close = () => {
  modal.style.display = 'none';
};

let namee = document.getElementById('commentName');
let text = document.getElementById('commentText');

// Post comments
const postComment = async (id) => {
  const urlComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ix2mMVLk4DRU3xtKMCQq/comments';
  const addComment = await fetch(urlComments, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
      username: namee,
      comment: text,
    }),
  });
  return addComment.json();
};

// Get comments
export const getComment = async (itemId) => {
  const urlComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ix2mMVLk4DRU3xtKMCQq/comments?item_id=${itemId}`;
  const comments = await fetch(urlComments).then((res) => res.json(), (err) => (err));
  return comments;
};

// display commentsCount
export const getCommentsCount = async (itemId) => {
  const comments = await getComment(itemId);
  return comments?.length === undefined ? '0' : comments.length;
};

// When the user clicks on the button, open the modal
const openCommentPopup = async (id, like) => {
  const itemId = like.item_id;
  const comments = await getComment(itemId);
  const commentsCount = await getCommentsCount(itemId);
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
  title.innerHTML = `Comments (${commentsCount})`;
  commentDisplaySections.appendChild(title);

  if (comments?.length > 0) {
  comments.forEach((comment) => {
      const content = document.createElement('p');
      content.innerHTML += `${comment.creation_date}: ${comment.username} : "${comment.comment}"`;
      commentDisplaySections.appendChild(content);
    });
  }
  const commentSection = document.createElement('div');
  commentSection.classList.add('commentSection');

  const commentsElement = document.createElement('h2');
  commentsElement.innerHTML = 'Add a comment';

  const commentInput = document.createElement('input');
  commentInput.type = 'text';
  commentInput.id = 'commentName';
  commentInput.placeholder = 'Enter you name';

  const commentText = document.createElement('textArea');
  commentText.id = 'commentText';
  commentText.value = '';
  commentText.placeholder = 'Add a comment';
  commentText.rows = 10;
  commentText.cols = 10;

  const commentBtn = document.createElement('button');
  commentBtn.id = 'commentBtn';
  commentBtn.innerHTML = 'Add Comment';
  commentBtn.addEventListener('click', () => {
    namee = document.getElementById('commentName').value;
    text = document.getElementById('commentText').value;
    postComment(itemId);
  });

  // Append elements to the modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(popupImg);
  modalContent.appendChild(titleElement);
  // commentDisplaySections.appendChild(breakline);
  modalContent.appendChild(commentDisplaySections);
  commentSection.appendChild(commentsElement);
  commentSection.appendChild(commentInput);
  commentSection.appendChild(commentText);
  commentSection.appendChild(commentBtn);
  modalContent.appendChild(commentSection);
  // Clear existing content and append the new modal content
  modal.innerHTML = '';
  modal.appendChild(modalContent);
};

export default openCommentPopup;
