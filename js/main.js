const WIDTH = 400
const HEIGTH = 400

let target = {
    x : getRandonNumber (WIDTH),
    Y: getRandonNumber (HEIGTH),
    
}

let mapa = document.getElementById('map');
let $distance = document.getElementById('distance')
let clicks = 0

mapa.addEventListener('click' , function(e) {

    clicks++;

    let distance = getDistance (target, e);
    
    let distanceHint = getDistanceHint (distance);
    $distance.innerHTML = `<h1>${distanceHint}<h1/>`

    if (distance <30 ){
        alert(`encontraste el tesoro en ${clicks} clicks`);
        location.reload()
    }
})

