const form = document.getElementById("item-form");
const input = document.getElementById("add-item")
const list = document.getElementById("list")

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