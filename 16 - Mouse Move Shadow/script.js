const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    
    //the same like:
    //const { offsetWidth: width, offsetHeight: height } = hero;

    let { offsetX: x, offsetY: y } = e;

    // console.log(this, e.target);
    //this is a thing that we listen for (=hero)
    // target is a thing that we triggered on

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // console.log(x,y);

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // console.log(xWalk, yWalk);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(100,0,255,0.7)
    ,
    ${yWalk}px ${xWalk * -1}px 0 rgba(68, 121, 213, 1),
    ${yWalk * -1}px ${xWalk}px 0 rgba(213, 97, 68, 1)
   `
    
}


hero.addEventListener('mousemove', shadow);
