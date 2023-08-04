const urlLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ix2mMVLk4DRU3xtKMCQq/likes/';
const postLikes = async (like) => {
  const likes = await fetch(urlLike, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: like,
    }),
  }).then((response) => response.json())
    .then((messages) => (messages));
  return likes.json();
};

export default postLikes;
