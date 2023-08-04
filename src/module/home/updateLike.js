import postLikes from './postLike.js';

const updatelike = async (like) => {
  await postLikes(like.item_id);
  window.location.reload();
};

export default updatelike;