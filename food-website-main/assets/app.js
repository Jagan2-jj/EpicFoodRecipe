document.getElementById('userInput').addEventListener('focus', () => {
  document.querySelector('i.fa-solid').style.display = "block";
});
document.getElementById('userInput').addEventListener('blur', () => {
  document.querySelector('i.fa-solid').style.display = "none";
  if (userInput.value !== '') {
      document.querySelector('i.fa-solid').style.display = "block";
  }
});

document.querySelector('.fa-solid').addEventListener('click', () => {
  if (userInput.value !== '') {
      userInput.value = '';
  }
});

document.getElementById("btn").addEventListener("click", () => {
  let user = document.getElementById("userInput").value;

  let mealAPI = fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`
  );

  mealAPI.then((getData) => {
      return getData.json();
  }).then((sendData) => {
      console.log(sendData);
      let data = '';
      sendData.meals.forEach((e, i) => {
          let ingredientsList = '';
          let measurementsList = '';

          // Loop through ingredients and only display non-empty ones
          for (let j = 1; j <= 20; j++) {
              if (e[`strIngredient${j}`] && e[`strIngredient${j}`] !== '') {
                  ingredientsList += `<li>${e[`strIngredient${j}`]}</li>`;
              }
          }

          // Loop through measurements and only display non-empty ones
          for (let k = 1; k <= 20; k++) {
              if (e[`strMeasure${k}`] && e[`strMeasure${k}`] !== '') {
                  measurementsList += `<li>${e[`strMeasure${k}`]}</li>`;
              }
          }

          data += `
              <h2 class='text-center text-secondary mt-5'>Food Area: ${e.strArea}</h2>
              <h2 class='text-center text-warning'>Food Name: ${e.strMeal}</h2>
              <div class="row">
                  <div class="col-md-4">
                      <img src="${e.strMealThumb}" alt="" class='w-100 img'>
                  </div>
                  <div class="col-md-4">
                      <h2>Ingredients:</h2>
                      <ul>
                          ${ingredientsList}
                      </ul>
                  </div>
                  <div class="col-md-4">
                      <h2>Measurements:</h2>
                      <ul>
                          ${measurementsList}
                      </ul>
                  </div>
              </div>
              <div class="col-12">
                  <h2>Instructions:</h2>
                  <p>${e.strInstructions}</p>
              </div>
              <div class='col-6 offset-3'>
                  <h2 class='text-center'>Watch Full Video On <a class='text-danger yt' data-bs-toggle="modal" data-bs-target="#exampleModal${i}"><u>Youtube</u></a></h2>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="exampleModalLabel">${e.strMeal}</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                  <iframe src="https://youtube.com/embed/${e.strYoutube.slice(-11)}" frameborder="0" width="100%" height='300'></iframe>
                              </div>
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          heading.innerHTML = `<h1 class='text-center text-danger'>Food Category: ${sendData.meals[0].strCategory}</h1>`;
          appendData.innerHTML = data;
      });
  }).catch((error) => {
      document.querySelector('.find').style.display = 'none';
      document.querySelector('.notfound').innerHTML = "Meal Not Found 😥";
      document.querySelector('.try').innerHTML = "Try Something Else 😉";
  });
});
