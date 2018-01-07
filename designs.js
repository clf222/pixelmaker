// event listeners needed.
// 1. #pixel_canvas : click, when cell is picked, change color to selected color
// 2. #sizePicker submit button: set number of rows and column values and create table
//3. listen for change in color picker, make that the color that number 1 will become.

document.getElementById("make_table").addEventListener("onclick", makeGrid);

function makeGrid(event) {
    // do i need a function to check for if tbl exists, document.removeChild(tbl)?
    console.log("started");
    let rows = document.getElementById("sizePicker").elements["input_height"].value;
    let columns = document.getElementById("input_width").value;
    console.log("Rows: "+rows+ "columns: "+ columns);
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for (let i=0; i<rows; i++) {
        let row =createElement("tr");
        for (let j=0; j<columns; j++) {
            let cell = createElement("td");
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
}
