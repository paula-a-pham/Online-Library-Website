let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");


sidebarBtn.onclick = function(){
  sidebar.classList.toggle("active");
    
}



 function changebgcoloratRuntime(color , colorcode)
      {
          if(colorcode==""){
             document.body.style.background = color;
          }
          else{
              document.body.style.background=colorcode;
          }
      }