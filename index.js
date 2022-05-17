function result(){
    var score=0;
    if (document.getElementById('correct10%').checked)
    {
        score+=10;
    }
    if (document.getElementById('correct20%').checked)
    {
        score+=10;
    }
    if (document.getElementById('correct30%').checked)
    {
        score+=10;
    }
    if (document.getElementById('correct40%').checked)
    {
        score+=10;
    }
    if (document.getElementById('correct50%').checked)
    {
        score+=10;
    }
    if (document.getElementById('correct60%').checked)
    {
        score+=10;
    }
    if (document.getElementById('correct70%').checked)
    {
        score+=10;
    }
    if (document.getElementById('correct80%').checked)
    {
        score+10;
    }
    if (document.getElementById('correct90%').checked)
    {
        score+=10;
    }
    if (document.getElementById('correct100%').checked)
    {
        score+=10;
    }
    alert('Your score is:'+score +"%");
    document.write("Your score is:"+score +"%");
}    

let form = document.querySelector("#exam");
let start = document.querySelector("#start");


function introduction(){
    club.innerHTML = ""
    club.innerHTML = form.value + ",start your quiz";
}