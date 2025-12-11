// const value = document.querySelector('form')
// value.addEventListener('submit', function (p) {
//     p.preventDefault()

//     const height = parseInt(document.querySelector('height').value)
//     const weight = parseInt(document.querySelector('weight').value)
//     const results = document.querySelector('results')

//     if (height) {
//         console.log(height.value);
//     }
//     else {
//         console.log('element nhi mila');
//     }
//     // if (height === '' || height < 0 || isNaN(height)) {
//     //     results.innerHTML = `please give me vaild height ${height}`;
//     // } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     //     results.innerHTML = `please give me vaild weight ${weight}`;
//     // } else {
//     //     const bmi = (weight / ((height * height) / 10000)).toFixed(2)
//     //     //show the results
//     //     results.innerHTML = `<span>${bmi}</span>`
//     //     results.innerHTML = 'invaild number for height'
//     // }
// })
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


