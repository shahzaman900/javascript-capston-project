const context = document.querySelector('.home-page');

const dataUi = (element) => {
  //   console.log(element.idMeal);
  context.innerHTML += `

                    <div class="items">
                            <img class="img" src="${element.strMealThumb}" alt="logo">
                            <div class="dec">
                                <h1 class="title">${element.strMeal}</h1>
                                <div class="like">
                                    <button id=${element.idMeal}  class="like-button">like</button>
                                <div class="comment">
                                    <button class="like-button">comments</button>
                                </div>
                                </div>
                            </div>
                    </div>`;
};

export default dataUi;
