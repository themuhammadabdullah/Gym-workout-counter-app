// Workout:1

let count = 0;

let saveEl = document.getElementById("save-el");

const handleClick = () => {
  count += 1;
  document.getElementById("count-el").textContent = count;
};

const handleSave = () => {
  let entry = count + " - ";
  saveEl.textContent += entry;
  console.log(count);
};

const handleReset = () => {
  location.reload();
};
