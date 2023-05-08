
// menuBar.classList.remove("none")
document.querySelector(".home").addEventListener("click",()=>{
     document.querySelector("#home").scrollIntoView();
   
})

document.querySelector(".about").addEventListener("click",()=>{
    document.querySelector("#about").scrollIntoView();
   
})

document.querySelector(".skills").addEventListener("click",()=>{
    document.querySelector("#skills").scrollIntoView();
   
})

document.querySelector(".projects").addEventListener("click",()=>{
    document.querySelector("#projects").scrollIntoView();
   
})

document.querySelector(".res-projects-class").addEventListener("click",()=>{
    document.querySelector("#res-projects").scrollIntoView();
    console.log("clicked")
   
})

document.querySelector("#prtf").addEventListener("click" , ()=>{
    window.open("https://www.linkedin.com/in/justarshadali/");
})

document.querySelector("#lkdn").addEventListener("click" , ()=>{
    window.open("https://www.linkedin.com/in/justarshadali/");
})



document.querySelector(".contact").addEventListener("click",()=>{
    document.querySelector("#contact").scrollIntoView();
   
})

document.querySelector("#resume-button-1").addEventListener("click",()=>{
    window.location.href="https://drive.google.com/u/0/uc?id=1DjQLqOVYTK_GJf1aAnbLDK_U2T63aqt_&export=download";
    window.open("https://drive.google.com/file/d/1DjQLqOVYTK_GJf1aAnbLDK_U2T63aqt_/view?usp=share_link","_blank") ;
})

document.querySelector("#resume-button-2").addEventListener("click",()=>{
    window.location.href="https://drive.google.com/u/0/uc?id=1DjQLqOVYTK_GJf1aAnbLDK_U2T63aqt_&export=download";
   window.open("https://drive.google.com/file/d/1DjQLqOVYTK_GJf1aAnbLDK_U2T63aqt_/view?usp=share_link","_blank") ;
})

document.querySelector(".travelDep").addEventListener("click",()=>{
   window.open("https://melodic-rugelach-d8626c.netlify.app/fw22_0277home.html","_blank") ;
})


document.querySelector(".travelGit").addEventListener("click",()=>{
    window.open("https://github.com/Arshada6105/Travelocity-clone","_blank") ;
 })


 document.querySelector(".travelGitRes").addEventListener("click",()=>{
    window.open("https://github.com/Arshada6105/Travelocity-clone","_blank") ;
 })

 document.querySelector(".travelDepRes").addEventListener("click",()=>{
    window.open("https://melodic-rugelach-d8626c.netlify.app/fw22_0277home.html","_blank") ;
 })



 document.querySelector(".mailGit").addEventListener("click",()=>{
    window.open("https://github.com/Arshada6105/MailTrap-clone","_blank") ;
 })


document.querySelector(".mailDep").addEventListener("click",()=>{
    window.open("https://delightful-klepon-e7b726.netlify.app/","_blank") ;
 })

 document.querySelector(".linkedIn").addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/justarshadali/","_blank") ;
 })

 document.querySelector(".portfolio").addEventListener("click",()=>{
    console.log("clicked")
    window.open("https://github.com/Arshada6105","_blank") ;
 })

 const mediaQuery = window.matchMedia('(min-width: 1001px)');

 // Check if the media query matches
 

 let menuButton=document.getElementById("menu");
//  console.log(menuButton)
 let menuBar=document.querySelector("#nav-menu>div:nth-child(2)");

 mediaQuery.addEventListener('change',(event) => {
    if (event.matches) {
        // menuBar.style="display:flex";

      
     }
  });
 let click_count=0;
 menuButton.addEventListener("click",()=>{
    click_count++;



    if (menuButton.classList.contains('fa-xmark')) {
        menuButton.classList.remove("fa-bars");
        menuButton.classList.add("fa-xmark");
        menuBar.style="display:flex";
      } else {
        // menuBar.style="display:none";
        menuButton.classList.add("fa-bars");
        menuButton.classList.remove("fa-xmark");
      }

    // console.log(click_count)
    if(click_count%2==0){
        menuBar.style="display:none";
        menuButton.classList.add("fa-bars");
        menuButton.classList.remove("fa-xmark");
    }else{
        menuButton.classList.remove("fa-bars");
        menuButton.classList.add("fa-xmark");
        menuBar.style="display:flex";
    }
 })
