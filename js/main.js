// alert("Welfffffcome")
function my(val){

    alert(val)
}


let button = document.getElementById("on-off");
let count =0;


function mys(){
    console.log("This is right")
    count++
    button.textContent="OFF"
    document.getElementById("image").src="image/pic_bulbon.gif"
    if(count==2){
        button.textContent="ON"
        document.getElementById("image").src="image/pic_bulboff.gif"  
        count=0
    }
    console.log(count)
}

//function is a block of code that will execute when it is being called or invoke

// variable is container for storing data,eg var,let const

// let jack="Temple"
// jack="Sam"
// alert(jack)

// my("sjjd")
// mys()

button.addEventListener("click",mys)


