/* eslint-disable quotes */

// const loadData = async () => {
//   const data = await getData();
//   const likes = await getLike();
//   data.forEach((item) => {
//     let like = likes.find((x) => x.item_id === item.idMeal);
//     if (like === undefined) {
//       like = { item_id: item.idMeal, likes: 0 };
//     }
//     dataUi(item, like);
//   });
// };


// const urlComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ix2mMVLk4DRU3xtKMCQq/comments?item_id=${ids}`;
// const postLikes = async (idMeal) => {
//   const likes = await fetch(urlComments, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       item_id: idMeal,
//     }),
//   });
//   return likes.json();
// };

// export default postLikes;
