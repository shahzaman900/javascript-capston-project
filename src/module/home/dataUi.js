const context = document.querySelector('.home-page');

const dataUi = (element) => {
  //   console.log(element.idMeal);
  context.innerHTML += `

                    <div class="items">
                            <img class="img" src="${element.strMealThumb}" alt="logo">
                            <div class="details">
                                <h1 class="title">${element.strMeal}</h1>
                                <div class="like">
                                    <button id=${element.idMeal}  class="like-button"> <i class="fa-regular fa-heart"></i>likes</button>
                                      </div>
                                        <div class="comment">
                                    <button class="comment-btn">comments</button>
                                </div>
                                      </div>
                              
                              
                            
                    </div>`;
};

export default dataUi;
