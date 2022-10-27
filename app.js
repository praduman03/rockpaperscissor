const rock = document.getElementById("rock-logo")
const paper = document.getElementById('paper-logo')
const scissors = document.getElementById('scissors-logo')
 const you_rock = document.getElementById('you-rock-img')
 const you_paper = document.getElementById('you-paper-img')
 const you_scissors = document.getElementById('you-scissors-img')
 const comp_rock = document.getElementById('comp-rock-img')
 const comp_paper = document.getElementById('comp-paper-img')
 const comp_scissors = document.getElementById('comp-scissors-img')
 const img_holder = document.getElementById('abc')
 const score = document.getElementById('score')
 const overlay = document.getElementById('overlay')
 const reset = document.getElementById("reset-game")
 const player = document.getElementById('player')
 let score_you = 0
 let score_comp = 0

 





 rock.onclick=()=>{
     you_paper.style.display = 'none'
    you_rock.style.display = 'inline'
    you_scissors.style.display = 'none'

    
    comp_paper.style.display = 'none'
    comp_scissors.style.display = 'none'
    comp_rock.style.display = 'none'

    qwe = Math.floor(Math.random()*3);
    switch(qwe){
        case 0: number1 = comp_paper;break;
        case 1: number1 = comp_scissors;break;
        case 2: number1 = comp_rock;break;

    }
    number1.style.display = 'inline'
    const rty = document.getElementById('comp-box');
    rty.backgroundImage = number1




    if(rty.backgroundImage == comp_paper){
        score_comp++
    }
    else if(rty.backgroundImage == comp_scissors){
        score_you++
    }

    score.innerHTML = score_you +"-" + score_comp
    
    if(score_you == 5){
        player.innerHTML = 'You'
        overlay.classList.add('active')
    
        
    }
    else if(score_comp == 5){
        player.innerHTML = 'Comp'
        overlay.classList.add('active')
    }
    
}

 paper.onclick =()=>{

    

    

    you_paper.style.display = 'inline'
    you_rock.style.display = 'none'
    you_scissors.style.display = 'none'

    comp_rock.style.display = 'none'
    comp_scissors.style.display = 'none'
    comp_paper.style.display = 'none'

    qwe = Math.floor(Math.random()*3);
    switch(qwe){
        case 0: number2 = comp_paper;break;
        case 1: number2 = comp_scissors;break;
        case 2: number2 = comp_rock;break;2
    }
    number2.style.display = 'inline'
    const rty = document.getElementById('comp-box');
    rty.backgroundImage = number2


    if(rty.backgroundImage == comp_scissors){
        score_comp++
    }
    else if(rty.backgroundImage == comp_rock){
        score_you++
    }

    score.innerHTML = score_you +"-" + score_comp

    if(score_you == 5){
        player.innerHTML = 'You'
        overlay.classList.add('active')
    
        
    }
    else if(score_comp == 5){
        player.innerHTML = 'Comp'
        overlay.classList.add('active')
    }
}

 scissors.onclick =()=>{

    you_paper.style.display = 'none'
    you_rock.style.display = 'none'
    you_scissors.style.display = 'inline'

    comp_rock.style.display = 'none'
    comp_paper.style.display = 'none'
    comp_scissors.style.display = 'none'

    

    qwe = Math.floor(Math.random()*3);
    switch(qwe){
        case 0: number3 = comp_paper;break;
        case 1: number3 = comp_scissors;break;
        case 2: number3 = comp_rock;break;

    }
    number3.style.display = 'inline'
    const rty = document.getElementById('comp-box');
    rty.backgroundImage = number3

    if(rty.backgroundImage == comp_rock){
        score_comp++
    }
    else if(rty.backgroundImage == comp_paper){
        score_you++
    }

    score.innerHTML = score_you +"-" + score_comp

    if(score_you == 5){
        player.innerHTML = 'You'
        overlay.classList.add('active')
    
        
    }
    else if(score_comp == 5){
        player.innerHTML = 'Comp'
        overlay.classList.add('active')
    }
}





reset.onclick=()=>{
    window.location.reload()
}

 