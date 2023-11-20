let Edit = 0;

const prevTable = JSON.parse(localStorage.getItem("tableData"));
console.log("MapTable", prevTable);
if (prevTable) {
  prevTable.map((e) => {
    console.log("e", e);
    const newRow = document.createElement("tr");

    newRow.innerHTML = ` 
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td>${e.pass}</td>
    <td>${e.add}</td>
    <td>${e.study}</td>
    <td>${e.gender}</td>
    <td> <img src='${e.file}'/> </td> 
    <td>${e.date}</td>
    <td><button class='btn text-white bg-primary'onclick='editRow(this)'>Edit</button></td>
    <td><button class='btn text-white bg-danger'onclick='deleteRow(this)'>Delete</button></td>
    `;
    console.log("newRow", newRow);

    document.getElementById("tableData").appendChild(newRow);
  });
}
function addData() {
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;
  const address = document.getElementById("Address").value;
  const study = document.getElementById("Study").value;
  const gender = document.getElementById("Gender").value;
  const file = document.getElementById("File").value;
  const date = document.getElementById("Date").value;

  if (Edit == 0) {
    const newRow = document.createElement("tr");

    const newFormData = {
      name: name,
      email: email,
      pass: password,
      add: address,
      study: study,
      gender: gender,
      file: file,
      date: date,
    };
    console.log(newFormData);

    const prevData = JSON.parse(localStorage.getItem("tableData"));

    let TableData;
    if (prevData) {
      TableData = [...prevData, newFormData];
    } else {
      TableData = [newFormData];
    }

    newRow.innerHTML = `
    
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${address}</td>
    <td>${study}</td>
    <td>${gender}</td>
    <td>${file}</td>
    <td>${date}</td>
    
    <td><button class='btn text-white bg-primary'onclick='editRow(this)'>Edit</button></td>
    <td><button class='btn text-white bg-danger'onclick='deleteRow(this)'>Delete</button></td>
    `;

    localStorage.setItem("tableData", JSON.stringify(TableData));
    document.getElementById("tableData").appendChild(newRow);
    console.log("newRow", newRow);
  } else {
    const row = document.getElementById("tableData").rows[Edit];
    row.cells[0].textContent = name;
    row.cells[1].textContent = email;
    row.cells[2].textContent = password;
    row.cells[3].textContent = address;
    row.cells[4].textContent = study;
    row.cells[5].textContent = gender;
    EditData = 0;
    console.log("row", row.cells);
  }

  document.getElementById("Name").value = " ";
  document.getElementById("Email").value = " ";
  document.getElementById("Password").value = "";
  document.getElementById("Address").value = " ";
  document.getElementById("Study").value = " ";
  document.getElementById("Gender").value = "";
  document.getElementById("File").value = " ";
  document.getElementById("Date").value = " ";
}
function editRow(button) {
  const row = button.parentNode.parentNode;
  const name = row.cells[0].textContent;
  const email = row.cells[1].textContent;
  const pass = row.cells[2].textContent;
  const address = row.cells[3].textContent;
  const study = row.cells[4].textContent;
  const gender = row.cells[5].textContent;
  const file = row.cells[6].textContent;
  const date = row.cells[7].textContent;

  document.getElementById("Name").value = name;
  document.getElementById("Email").value = email;
  document.getElementById("Password").value = pass;
  document.getElementById("Address").value = address;
  document.getElementById("Study").value = study;
  document.getElementById("Gender").value = gender;
  document.getElementById("File").value = file;
  document.getElementById("Date").value = date;
  Edit = row.rowIndex;
  console.log("edit Row");
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
  console.log("delete");
}

// Form Buttons Disable Andable

function checkForm() {
  var input = document.getElementsByClassName("form-control");
  var btn = document.getElementById("form-submit");
  var btn2 = document.getElementById("form-reset");
  let valid = true;
  let reset = true;
  for (let i = 0; i < input.length; i++) {
    const changeInput = input[i];
    if (changeInput.value == 0 || changeInput.value == null) {
      valid = false;
      break;
    }
  }
  for (let i = 0; i < input.length; i++) {
    const resetInput = input[i];
    if (resetInput.value === 0 || resetInput.value === null) {
      reset = false;
      break;
    }
  }
  btn.disabled = !valid;
  btn2.disabled = !reset;
  console.log("Sumbit", valid);
}
