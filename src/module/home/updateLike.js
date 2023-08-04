import postLikes from './postLike.js';
import getLike from './getLikes.js';
import getData from './getData.js';
// eslint-disable-next-line import/no-cycle
import dataUi from './dataUi.js';

const updatelike = async (like) => {
  await postLikes(like.item_id);
  window.location.reload();
  // const data = await getData();
  // const likes = await getLike();
  // data.forEach((item) => {
  //   let like = likes.find((x) => x.item_id === item.idMeal);
  //   if (like === undefined) {
  //     like = { item_id: item.idMeal, likes: 0 };
  //   }
  //   dataUi(item, like);
  // });
};

export default updatelike;