const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { target } = e;
  const { name, description } = target;
  console.log(name, description);
  console.log(e);
});
