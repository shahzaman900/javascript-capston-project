import './index.css';

import dataUi from './module/home/dataUi.js';
import getData from './module/home/getData.js';

const loadData = async () => {
  const data = await getData();
  data.forEach((item) => {
    dataUi(item);
  });
};
loadData();
