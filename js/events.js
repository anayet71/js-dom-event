

// Important we will use this
// option two
function makeAqua() {
    document.body.style.backgroundColor = "aqua"
}

// Option 3 
const makeBlueButton   = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = "blue"
}

// Option 3 another [We will use this sometime]
const makePurpleButton   = document.getElementById('make-purple')
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = "purple"
}

// Option 4
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink'
}


// Option 4 another

const makeGreenButton = document.getElementById("make-green")
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = "green"
})

// Option 4 Final
// Important we will use this sometimes
document.getElementById('make-goldenrod').addEventListener('click', function (){
    document.body.style.backgroundColor="tomato"
  })