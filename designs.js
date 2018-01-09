// event listeners needed.
// 1. #pixel_canvas : click, when cell is picked, change color to selected color
// 2. #sizePicker submit button: set number of rows and column values and create table
//3. listen for change in color picker, make that the color that number 1 will become.
const tblButton = document.getElementById("make_table");
const tblCell = document.querySelectorAll("td");
var defaultColor = "#0000ff";


// window.addEventListener("load", startup, false);
tblButton.addEventListener('click', makeGrid);
// tblCell.addEventListener('click', changeColor(e));
//initialize color picker
// function startup() {
//   colorWell = document.querySelector("#colorPicker");
//   colorWell.value = defaultColor;
//   colorWell.addEventListener("change", updateColor, false);
//   colorWell.select();
// }

function makeGrid(e) {
    e.preventDefault();
    console.log("started");
    // if table exists, get rid of it
    if (tbl !="") {
        document.body.removeChild(tbl);
    }
    let rows = document.getElementById("sizePicker").elements["input_height"].value;
    let columns = document.getElementById("input_width").value;
    console.log("Rows: "+rows+ "columns: "+ columns);
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    for (let i=0; i<rows; i++) {
        let row =document.createElement("tr");
        for (let j=0; j<columns; j++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
}

// updateColor() {
//     let pickedColor = colorWell.value;
//     return pickedColor;
// }
