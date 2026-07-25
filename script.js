const form = document.getElementById("item-form");
const input = document.getElementById("add-item")
const list = document.getElementById("list")

const alertContainer = document.querySelector(".alert-container");
const btnCloseAlert = document.querySelector(".close-alert-icon")

let counterItems = document.querySelectorAll(".list .item").length + 1;

form.addEventListener("submit", (evento) => {
    event.preventDefault();

    const itemText = input.value.trim();

    if (itemText === "")
        return;

    const idSingle = `item${counterItems++}`;

    const newItemHTML = `
    <li class="item">
      <div class="item-info">
        <input type="checkbox" id="${idSingle}" />
        <label for="${idSingle}">${itemText}</label>
      </div>
      <button type="button" class="btn-delete">
        <img src="/imgs/assets/lixeira.svg" alt="Icone de lixeira" />
      </button>
    </li>
  `;

  list.insertAdjacentHTML("beforeend", newItemHTML);

  input.value = '';
  input.focus();
})

list.addEventListener("click", (event) => {
  const btnDelete = event.target.closest(".btn-delete");

  if (!btnDelete) return;


  const itemLi = btnDelete.closest(".item");
  if (itemLi) itemLi.remove();


  alertContainer.classList.remove("hidden");
});

btnCloseAlert.addEventListener("click", () => {
  alertContainer.classList.add("hidden");
})