
const rock = './img/rock.png';
const paper = './img/paper.png';
const scissors = './img/scissors.png';
let yourScore = 0;
let compScore = 0; 
const choices = [rock, paper, scissors]; 

// alert(choices[Math.floor(Math.random() * 3)]); 

const _img = document.getElementsByClassName('image'); 
const _r = document.getElementById('rock');
const _p = document.getElementById('paper'); 
const _s = document.getElementById('scissors'); 
const _imgComp = document.querySelector('#imageComp'); 
const _resPanel = document.querySelector('.result'); 
const _resText = document.querySelector('#result_text'); 
const _yourScore = document.querySelector('.score-0'); 
const _compScore = document.querySelector('.score-1'); 
const _btnNew = document.querySelector('.btn-new'); 

// const _btnCont = document.querySelector('.btn-cont'); 
// const _btnPlay = document.querySelector('.play'); 


init();

// Array.from(_img, el => el.addEventListener('click', function(){
//     el.classList.toggle('chosen'); 
// })); 

_r.addEventListener('click', function(){
    getCompChoice();
    gamePlay('r'); 
});

_p.addEventListener('click', function(){
    getCompChoice();
    gamePlay('p'); 
});

_s.addEventListener('click', function(){
    getCompChoice();
    gamePlay('s'); 
});

_btnNew.addEventListener('click', init); 

function init(){
    _imgComp.style.display = 'none';
    _resPanel.style.visibility = 'hidden';  
    yourScore = 0;
    compScore = 0; 
    _yourScore.textContent = '0'; 
    _compScore.textContent = '0'; 
}

function getCompChoice(){
    _imgComp.style.display = 'inline-block'; 
    const randNum = Math.floor(Math.random() * 3); 
    const choices_short = ['r', 'p', 's']; 
    _imgComp.src = choices[randNum];
    return choices_short[randNum]; 
}

function gamePlay(choice){
    const compChoice = getCompChoice();
    switch (choice + compChoice){
        case 'rp':
        case 'ps':
        case 'sr':
            losing();
            break;

        case 'rs':
        case 'pr':
        case 'sp':
            winning();
            break; 

        default:
            _resPanel.style.display = 'block'; 
            _resText.textContent = 'Tie!'; 
            
    }

}

function losing(){
    _resPanel.style.visibility = 'visible'; 
    _resText.textContent = 'you loose!'; 
    compScore ++;
    _compScore.textContent = compScore; 
}

function winning(){
    _resPanel.style.visibility = 'visible'; 
    _resText.textContent = 'you win!'; 
    yourScore++;
    _yourScore.textContent = yourScore; 
}


// _btnPlay.addEventListener('click', function(){
//     _imgComp.style.display = 'inline-block'; 
//     _imgComp.src = choices[Math.floor(Math.random() * 3)];
// }); 