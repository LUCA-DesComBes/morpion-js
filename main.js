const squares = document.querySelectorAll(".toto");
let currentPlayer = 1;
for(let i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", () => {
    if(currentPlayer === 1){
      squares[i].textContent = "X"
      currentPlayer = 2;
    } 
    // if(currentPlayer === "X"){
    //   currentPlayer = 0;
    // }else if(currentPlayer === "O"){
    //   currentPlayer = 2;
    // }
    else {
      squares[i].textContent = "O"
      currentPlayer = 1;
    }
  })
}