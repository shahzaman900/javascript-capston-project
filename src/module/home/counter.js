const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const home = document.getElementById('home');

const countData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  home.innerHTML = `Total Items(${data.meals.length})`;
};
countData();

export default countData;
