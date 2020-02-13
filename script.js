var block = document.querySelector(".block");

for(var i=0; i<9; i++){
  var blockDiv = document.createElement("div");
  blockDiv.classList.add("style");
  block.append(blockDiv);
}
startGame()
function startGame(){

  var style = document.querySelectorAll(".style");
  var win = document.querySelector("span");
  win.classList.remove("span");

  for(var i=0; i<style.length; i++){
    style[i].innerText = ""
    style[i].classList.add("item");
  }

  block.addEventListener("click", function(e){
    var x = "X";
    var winner =true

    x = 'X'
    if(e.target.innerText == "X" || e.target.innerText == "O"){
      return;
    }else{

    var div = document.querySelectorAll(".item");
   
    
    e.target.innerText = x;
    if(checkWin(x)){
      win.classList.toggle("span")
      win.innerText = "WIN " + x;
      winner = false;
    }
    
    e.target.classList.remove("item");
    
    var div = document.querySelectorAll(".item");
    var ran = getRandomInt(0, div.length-1);
    
    if(div.innerText == 'X' && div.innerText == 'O'){
      return;
    } else {
        x = 'O'
        if(div.length === 0){
          return;
        }else{

        if(winner){
          div[ran].innerText = x;
        }

        if(checkWin(x) && winner){
          win.classList.toggle("span")
          win.innerText = "WIN " + x;
        }
        div[ran].classList.remove("item");
        }
      }
    }
  })
  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function checkWin(z){

  var item = document.querySelectorAll(".style");
  var t = document.querySelectorAll(".item");
  if(t.length == 1){

    var win = document.querySelector("span");
    win.classList.toggle("span");
    win.innerText = "No One ";

  } else {

    var x=3;
    var y = 0;

    for(var i=0; i<=x*x-x; i+=x){ 

      for(var j=i; j<i+x; j++){
        if(item[j].innerText == z){
          y++;
        }
      }
      if(y==x){
        return true;
      }
      y=0;
    }

    for(var i=0; i<x; i++){
      for(var j=i; j<x*x; j+=3){
        if(item[j].innerText == z){
          y++;
        }
      }
      if(y==x){
        return true;
      }
      y=0;
    }

    for(var i=0; i<x*x; i+=x+1){
      if(item[i].innerText == z){
        y++;
      }
    }
    if(y==x){
      return true;
    }
    y=0;

    for(var i=x-1; i<x*x-1; i+=x-1){
      if(item[i].innerText == z){
        y++;
      }
    }
    if(y==x){
      return true;
    }
    y=0;
}

}