const squares = document.querySelectorAll(".toto");
let currentPlayer = 1;
let count = 0;
for(let i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", () => {
    if(count === 8){
      squares[i].textContent = "X"
      alert("égalité")
    }
    if(squares[i].textContent === ""){
      count ++;
        if(currentPlayer === 1){
      squares[i].textContent = "X"
      currentPlayer = 2;
    }else {
      squares[i].textContent = "O"
      currentPlayer = 1;
    }
  }
  })
}