const list = document.querySelector("#list");
const trash = document.querySelector(".delete");
const listItem = document.querySelector(".patientinfo");
const form = document.querySelector(".needs-validation");

list.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    listItem.classList.add("trash");
  }
});

const generateList = (index, fname, lname, payType) => {
  const patientForm = ` 
  <div class="patientinfo row mb-1 rounded-3">
        <div class="col-1 themed-grid-col">${index}</div>
        <div class="col-2 themed-grid-col">${fname} ${lname}</div>
        <div class="col-2 themed-grid-col">
          ${address}
        </div>
        <div class="col-2 themed-grid-col">${email}</div>
        <div class="col-2 themed-grid-col">${payType}</div>
        <div class="col-2 themed-grid-col">
          <a href=""><i class="fas fa-file-alt fa-2x"></i></a>
          <a href=""><i class="delete fas fa-trash-alt fa-2x"></i></a>
          <a href=""><i class="far fa-edit fa-2x"></i></a>
        </div>
      </div> `;

  list.innerHTML += patientForm;
};
