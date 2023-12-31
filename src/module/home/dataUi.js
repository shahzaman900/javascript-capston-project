import openCommentPopup from './comment.js';
// eslint-disable-next-line import/no-cycle
import updatelike from './updateLike.js';

const context = document.querySelector('.home-page');

const dataUi = (element, like) => {
    const div = document.createElement('div');
    div.className = 'items';

    const img = document.createElement('img');
    img.className = 'img';
    img.src = element.strMealThumb;
    img.alt = 'logo';

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'details';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = element.strMeal;

    const likeDiv = document.createElement('div');
    likeDiv.className = 'like';

    const likeButton = document.createElement('button');
    likeButton.id = like.item_id;
    likeButton.className = 'like-button';
    likeButton.innerHTML = `<i class="fa-regular fa-heart"></i>(${like.likes})likes`;
    likeButton.onclick = () => updatelike(like);

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    const commentButton = document.createElement('button');
    commentButton.id = 'comment';
    commentButton.className = 'comment-btn';
    commentButton.textContent = 'comments';
    commentButton.onclick = () => openCommentPopup(element.idMeal, like);

    likeDiv.appendChild(likeButton);
    commentDiv.appendChild(commentButton);

    detailsDiv.appendChild(title);
    detailsDiv.appendChild(likeDiv);
    detailsDiv.appendChild(commentDiv);

    div.appendChild(img);
    div.appendChild(detailsDiv);

    context.appendChild(div);
};

export default dataUi;