let random= parseInt(Math.random()*100+1)
console.log(random)

const submit=document.querySelector("#submit")
const userinput=document.querySelector("#userinput")
const gusseslot=document.querySelector(".gusses")
const remaing=document.querySelector(".lastremain")
let pravin=document.querySelector("#lowhi")
let Start=document.querySelector(".result")
let p=document.createElement("p")

let prev=[]
let num=1
let play=true
if(play){
    submit.addEventListener('click',function (e){
e.preventDefault()
const guss= parseInt(userinput.value)
validate(guss)

    })
}
function validate(guss){
    if(isNaN(guss)){
        alert("please enter validate ")
    }else if(guss<1){
        alert("please enter validate")
    }else if (100<guss){
        alert("please enter validate") 
    }else{
        prev.push(guss)
        if(num===10){
            displayGuss(guss)
            displaymsg(`game is over.the Random is ${random}`)
            endgame()
        }else{
            displayGuss(guss)
            checkGuess(guss)
        }
    }

}
function checkGuess(guss){
    if(guss===random){
        displaymsg('you win , the number is matched')
        endgame()
    }else if(guss > random){
        displaymsg('your too high')
    }else if(guss < random){
        displaymsg('your too low ')
    }

}
function displayGuss(guss){
    userinput.value=''
    gusseslot.innerHTML+=`${guss} `
    remaing.innerHTML=`${10-num}`
    num++;

}
function displaymsg(msg){
pravin.innerHTML=`<h2>${msg}</h2>`


}

function endgame(){
    userinput.value=""
    userinput.setAttribute('disabled',"")
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">start game</h2>`
   Start.appendChild(p)
    play=false
    newgame()


}
function newgame(){
    let newb = document.querySelector('#newgame')
    newb.addEventListener('click',function(e){
        random= parseInt(Math.random()*100+1)
        console.log(random)
        prev=[]
        num=1
        gusseslot.innerHTML=''
        pravin.innerHTML=''
        remaing.innerHTML=`${11-num}`
        userinput.removeAttribute('disabled')
        Start.removeChild(p)
        play=true
    }) 
}