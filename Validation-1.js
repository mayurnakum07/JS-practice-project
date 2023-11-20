let EditData = 0;
let show = true;

const prevdata = JSON.parse(localStorage.getItem("tabledata"));
console.log("mapTable", prevdata);
if (prevdata) {
  prevdata.map((e) => {
    console.log("e", e);
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
     <td>${e.fname}</td> 
    <td>${e.lname}</td>
    <td>${e.email}</td>
    <td>${e.pass}</td>
    <td><button class='btn text-primary' onclick='editRow(this)'>Edit</button></td>
    <td><button class='btn text-danger' onclick='deleteRow(this)'>Delete</button></td>
    `;
    document.getElementById("dataTable").appendChild(newRow);
    console.log("newRow", newRow);
  });
}
function addFormData() {
  const Fname = document.getElementById("Fname").value;
  const Lname = document.getElementById("Lname").value;
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("Password").value;

  if (EditData === 0) {
    const newRow = document.createElement("tr");

    const newFormData = {
      fname: Fname,
      lname: Lname,
      email: Email,
      pass: Password,
    };
    console.log(newFormData);

    const prevdata = JSON.parse(localStorage.getItem("tabledata"));

    let TableData;
    if (prevdata) {
      TableData = [...prevdata, newFormData];
    } else {
      TableData = [newFormData];
    }

    newRow.innerHTML = `
     <td>${Fname}</td>
    <td>${Lname}</td>
    <td>${Email}</td>
    <td>${Password}</td>
    <td><button class='btn text-primary' onclick='editRow(this)'>Edit</button></td>
    <td><button class='btn text-danger' onclick='deleteRow(this)'>Delete</button></td>
    `;

    localStorage.setItem("tabledata", JSON.stringify(TableData));
    document.getElementById("dataTable").appendChild(newRow);
  } else {
    const row = document.getElementById("dataTable").rows[EditData];
    row.cells[0].textContent = Fname;
    row.cells[1].textContent = Lname;
    row.cells[2].textContent = Email;
    row.cells[3].textContent = Password;
    EditData = 0;
    console.log('row', row.cells);
  }

  document.getElementById("Fname").value = "";
  document.getElementById("Lname").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Password").value = "";
}

showTable();

function editRow(button) {
  const row = button.parentNode.parentNode;
  const Fname = row.cells[0].textContent;
  const Lname = row.cells[1].textContent;
  const Email = row.cells[2].textContent;
  const Password = row.cells[3].textContent;

  document.getElementById("Fname").value = Fname;
  document.getElementById("Lname").value = Lname;
  document.getElementById("Email").value = Email;
  document.getElementById("Password").value = Password;
  EditData = row.rowIndex;
  console.log("edit Row");
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
  console.log("deleteRow");
}

function showHide() {
  if (show) {
    document.getElementById("dataTable").style.display = "none";
  } else {
    document.getElementById("dataTable").style.display = "block";
  }
}

function showTable() {
  show = false;
  showHide();
}

showHide();

function checkForm() {
  var input = document.getElementsByClassName("form-control");
  let btn = document.getElementById("submitForm");
  let isValid = true;
  for (let i = 0; i < input.length; ++i) {
    let changeInput = input[i];
    if (changeInput.value === "" || changeInput.value === null) {
      isValid = false;
      break;
    }
  }
  btn.disabled = !isValid;
  console.log("Valid", isValid);
}

// (() => {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll(".needs-validation");
//   // Loop over them and prevent submission
//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();

// function addFormData() {
//   const Fname = document.getElementById("Fname").value;
//   const Lname = document.getElementById("Lname").value;
//   const Email = document.getElementById("Email").value;
//   const Password = document.getElementById("Password").value;
//   const editRowIndex = document.getElementById("editRowIndex").value;
//   console.log(editRowIndex);

//   if (editRowIndex === "-1") {
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `
//     <td>${Fname}</td>
//     <td>${Lname}</td>
//     <td>${Email}</td>
//     <td>${Password}</td>
//     <td><button type="button" class="btn text-primary" onclick="editRow(this)">Edit</button></td>
//     <td><button type="button" class="btn text-danger" onclick="deleteRow(this)">Delete</button></td>
//     `;
//     document.getElementById("dataTable").appendChild(newRow);
//     console.log(newRow);
//   } else {
//     const row = document.getElementById("dataTable").rows[editRowIndex];
//     row.cells[0].textContent = Fname;
//     row.cells[1].textContent = Lname;
//     row.cells[2].textContent = Email;
//     row.cells[3].textContent = Password;
//     document.getElementById("editBowBox").value = "-1";
//     console.log(row);
//   }

//   document.getElementById("Fname").value = "";
//   document.getElementById("Lname").value = "";
//   document.getElementById("Email").value = "";
//   document.getElementById("Password").value = "";
// }
// function editRow(button) {
//   const row = button.parentNode.parentNode;
//   const Fname = row.cells[0].textContent;
//   const Lname = row.cells[1].textContent;
//   const Email = row.cells[2].textContent;
//   const Password = row.cells[3].textContent;

//   document.getElementById("Fname").value = Fname;
//   document.getElementById("Lname").value = Lname;
//   document.getElementById("Email").value = Email;
//   document.getElementById("Password").value = Password;
//   document.getElementById("editRowIndex").value = row.rowIndex;
//   console.log("Edit");
// }

// function deleteRow(button) {
//   const row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);
//   console.log("delete");
// }
