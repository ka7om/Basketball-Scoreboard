let Tm1PEl = document.getElementById("Tm1P-el") 
let Tm2PEl = document.getElementById("Tm2P-el") 

let team1Points = 0
let team2Points = 0

function add1PointsTm1() {
    team1Points += 1
    Tm1PEl.textContent = team1Points
}
function add2PointsTm1() {
    team1Points += 2
    Tm1PEl.textContent = team1Points
}
function add3PointsTm1() {
    team1Points += 3
    Tm1PEl.textContent = team1Points
}

function add1PointsTm2() {
    team2Points += 1
    Tm2PEl.textContent = team2Points
}
function add2PointsTm2() {
    team2Points += 2
    Tm2PEl.textContent = team2Points
}
function add3PointsTm2() {
    team2Points += 3
    Tm2PEl.textContent = team2Points
}
