/* ==========================================
   TEAM AMELINIOWY RGB 7.0
========================================== */

const logo = document.getElementById("logo");
const question = document.getElementById("question");
const answer = document.getElementById("answer");

const colors = [
    [0,255,80],      // zielony
    [255,220,0],     // żółty
    [255,140,0],     // pomarańczowy
    [255,40,40],     // czerwony
    [180,50,255],    // fiolet
    [40,120,255],    // niebieski
    [0,220,255],     // turkus
    [0,255,80]
];

const DURATION = 5000;

function lerp(a,b,t){
    return a + (b-a)*t;
}

function getColor(offset){

    const total = colors.length - 1;

    let progress = ((performance.now() / DURATION) + offset) % total;

    let current = Math.floor(progress);
    let next = (current + 1) % colors.length;

    let t = progress - current;

    const c1 = colors[current];
    const c2 = colors[next];

    const r = Math.round(lerp(c1[0], c2[0], t));
    const g = Math.round(lerp(c1[1], c2[1], t));
    const b = Math.round(lerp(c1[2], c2[2], t));

    return `rgb(${r},${g},${b})`;
}

function animate(){

    // Team Ameliniowy
    logo.style.color = getColor(0);

    // Jaki kształt ma Ziemia?
    question.style.color = getColor(2.8);

    // PŁASKA CZY KULISTA?
    answer.style.color = getColor(5.2);

    requestAnimationFrame(animate);
}

animate();
