var numberOfButtons=document.querySelectorAll(".drum").length;
 for(var i=0;i<numberOfButtons;i++)
 {
   document.querySelectorAll("button")[i].addEventListener("click",handleClick);
   function handleClick ()
   {

     this.style.color="white";
     var buttonInner=this.innerHTML;
     keyPress(buttonInner);

   }
 }

document.addEventListener("keydown",function(event){
  keyPress(event.key);
});


function keyPress (character)
{
    switch (character)
    {
         case "w":
       var tom1 =new Audio('sounds/tom-1.mp3');
       tom1.play();
       break;

       case "a":
       var tom2 =new Audio('sounds/tom-2.mp3');
       tom2.play();
       break;

       case "s":
       var tom3 =new Audio('sounds/tom-3.mp3');
       tom3.play();
       break;

       case "d":
       var tom4 =new Audio('sounds/tom-4.mp3');
       tom4.play();
       break;

       case "j":
       var crash1 =new Audio('sounds/crash.mp3');
       crash1.play();
       break;

       case "k":
       var kick1 =new Audio('sounds/kick-bass.mp3');
       kick1.play();
       break;

       case "l":
       var snare1 =new Audio('sounds/snare.mp3');
       snare1.play();
       break;

    }
}
