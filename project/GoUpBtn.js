let GoUpBtn = document.querySelector(".GoUp");

// GoUpBtn.addEventListener("click" ()=>{
//    window.scrollTo({
//       top:0,
//       behavior:"smooth",
//    });
// });

const scrollWindow = function (){
   if (window.scrollY != 0){
      setTimeout(function (){
         window.scrollTo(0, window.scrollY - 50);
         scrollWindow();
      }, 10)
   }
};

GoUpBtn.addEventListener("click", scrollWindow);