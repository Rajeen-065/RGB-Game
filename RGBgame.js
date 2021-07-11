var rgb=document.querySelector(".color");
var newcol=document.querySelector(".newcol");
var easy=document.querySelector(".easy");
var hard=document.querySelector(".hard");
var butlist=document.querySelectorAll(".but");
var heading=document.querySelector(".heading");
var count_easy= 1;
var count_hard=1;
var span =document.querySelector(".msg");

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgColor;
}
//-----------correction of text after every round of game ends--------
function correct(){
    span.innerHTML="";
    newcol.innerHTML="NEW COLORS";
    heading.style.background="steelblue";
}
// -------------------------------HARD LEVEL BUTTON---------------
function btn_random(btn){
    btn.style.background=random_bg_color();
}
function random(){
    correct();
    count_easy=0;
    count_hard=1;
    rgb.innerHTML=random_bg_color();
    butlist.forEach(btn_random);
    var a = Math.floor(Math.random() * 6);
    butlist[a].style.background=rgb.innerHTML;
    
}
// ----------------------------------EASY LEVEL BUTTON-------------
function easy_btn_random(btn,i){
    if(i<3)
        btn.style.background=random_bg_color();
}

function easy_random(){
    correct();
    count_hard=0;
    count_easy=1;
    for(var i=3;i<6;i++)
    {
        butlist[i].style.background="black";
    }
    rgb.innerHTML=random_bg_color();
    butlist.forEach(easy_btn_random);
    var a = Math.floor(Math.random() * 3);
    butlist[a].style.background=rgb.innerHTML;
    
}

// ------------------------NEW COLOR BUTTON------------------------
function new_btn_random(btn){
        btn.style.background=random_bg_color();
}
function new_color(){
    correct();
    rgb.innerHTML=random_bg_color();
    if(count_easy==1)
    {
        for(var i=0;i<3;i++)
            {new_btn_random(butlist[i]);}
    }
    else{
        butlist.forEach(new_btn_random);
    }

    if(count_easy==1)
    {
        var a = Math.floor(Math.random() * 3);
    butlist[a].style.background=rgb.innerHTML; 
    }
    else
    {
        var a = Math.floor(Math.random() * 6);
        butlist[a].style.background=rgb.innerHTML;  
    }
}
//------------------automatic first call----------------------------
random();
//------------------events-------------------------------------------
newcol.addEventListener("click",new_color);
easy.addEventListener("click",easy_random);
hard.addEventListener("click",random);


// working-------------------------------------------------section

function samecolor(){
    heading.style.background=rgb.innerHTML;
    butlist.forEach(function(btn){
        if(btn.style.background!="black")
        btn.style.background=rgb.innerHTML;
        span.innerHTML="Correct!";
        newcol.innerHTML="PLAY AGAIN?";
        
    })
}

butlist.forEach(function(btn){
    btn.addEventListener("click",isright)
});

function isright(){
    if(this.style.background===rgb.innerHTML)
    {
        samecolor();
    }
    else
    {
        console.log("else");
        this.style.background="black";
        span.innerHTML="Try Again"
    }
}

