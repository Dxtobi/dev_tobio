

// export const createGridOnLoad = () => {






// }

let columns = 0,
    rows = 0
   // toggled = false;



const createTile = index => {
    const tile = document.createElement("div");
    
    tile.classList.add("tile");
    
   
    
    
    return tile;
  }

const createTiles = (quantity, wrapper) => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index));
    });
  }
  

export const createGrid = () => {
    const wrapper = document.getElementById("tiles");

    wrapper.innerHTML = "";
    
    const size = document.body.clientWidth > 800 ? 150 : 100;
    
    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);
    
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    
    createTiles(columns * rows, wrapper);
  }
//window.onresize = () => createGrid();

