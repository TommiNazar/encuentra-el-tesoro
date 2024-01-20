
// funcion q me da numero aleatorio
let getRandonNumber = size =>{
    return Math.floor (Math.random () * size);
}

// funcion q mide distancia de dos puntos

let getDistance = (target, e) =>{
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.Y;

    

    return Math.sqrt((diffX * diffX) + (diffY * diffY));

}

let getDistanceHint = distance =>{
    if (distance < 50){
        return "muuuuy caliente";
    } else if (distance < 80){
        return "muy caliente";
    }else if (distance < 120){
        return "caliente";
    }else if (distance < 150){
        return "tibio";
    }else if (distance < 180){
        return "frio";
    }else if (distance < 300){
        return "muy frio";
    }else {
        return"congelado";
    }

}