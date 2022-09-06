const circles=document.querySelectorAll(".circle");
const progressBar=document.querySelector(".progress-bar")
const prevBtn=document.querySelector(".prev");
const nextBtn=document.querySelector(".next");


//position of the active circle
let currentCircle=1;



//next button event listener 
nextBtn.addEventListener("click",()=>{
//increment the currentCircle value by 1
currentCircle++;
if(currentCircle>circles.length){
    currentCircle=circles.length;
}

if(currentCircle===circles.length){
    nextBtn.disabled=true;
}

if(currentCircle>1){
    prevBtn.disabled=true;
}
update()
})


function update(){
    //Make a cirlce border as black when active
    circles.forEach((circle,index)=>{
        if(index<currentCircle){
            circle.classList.add("active-circle");

        }else{
            circle.classList.remove("active-circle");

        }

    })

    //call all the active circles
    const activeCircles=document.querySelectorAll(".active-circle");

    //progress bar length 
    progressBar.style.width=((activeCircles.length-1))/(circles.length-1)*100+"%";
}