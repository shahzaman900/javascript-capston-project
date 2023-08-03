/* eslint-disable quotes */

const urlLike = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ix2mMVLk4DRU3xtKMCQq/likes/";
const postLikes = async (idMeal) => {
  const likes = await fetch(urlLike, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      item_id: idMeal,
    }),
  });
  return likes.json();
};

export default postLikes;
