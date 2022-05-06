// Select color input
// Select size input
let form = document.getElementById("sizePicker");
form.addEventListener("submit",(evt)=>{
  evt.preventDefault();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  
  // Your code goes here!
  let color = document.getElementById("colorPicker");
  let sizeHeight = document.getElementById("inputHeight").value;
  let sizeWidth = document.getElementById("inputWidth").value;
  
  if(document.getElementById("pixelCanvas").firstElementChild !== null)
    document.getElementById("pixelCanvas").innerHTML = '';

  let table = document.getElementById("pixelCanvas")
  table.addEventListener("click", (event)=>{
      event.preventDefault();
    if(event.target.nodeName === "TD")
      event.target.style.backgroundColor= color.value;
  });

  color.addEventListener("click",() => {
    color = document.getElementById("colorPicker");
  })

    
  for(let i = 0; i < sizeHeight; i++){
      let row = document.createElement("tr");
      table.appendChild(row);
      for(let j = 0; j < sizeWidth; j++){
        if(i === 0)
        {
            row.appendChild(document.createElement("td"));
        }
        else
        {
            row.appendChild(document.createElement("td"));
        }
      }
  }
  document.body.appendChild(table);
}
