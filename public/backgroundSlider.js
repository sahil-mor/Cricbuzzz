var i = 0 ;
function changeBackground(){
  console.log("in function")
  if(i%4 == 0){
    url = "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }else if( i%4 == 1 ){
    url = "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }else if(i%4 == 2){
    url = "https://images.unsplash.com/photo-1568290747765-1b4a44724fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }else{
    url = "https://images.unsplash.com/photo-1559579313-021b6ec9f6d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
  $("body").css("background-image", "url(" + url + ")");   
  i++;
}
$(document).ready(function(){
    myVar = setInterval("changeBackground()", 4000);
})