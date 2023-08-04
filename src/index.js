import './index.css';
import dataUi from './module/home/dataUi.js';
import getData from './module/home/getData.js';
import countData from './module/home/counter.js';
import getLike from './module/home/getLikes.js';


const loadData = async () => {
  const data = await getData();
  const likes = await getLike();
  data.forEach((item) => {
    let like = likes.find((x) => x.item_id === item.idMeal);
    if (like === undefined) {
      like = { item_id: item.idMeal, likes: 0 };
    }
    dataUi(item, like);
    // urlComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ix2mMVLk4DRU3xtKMCQq/comments?item_id=${ids}`;
  });
};

loadData();
countData();
