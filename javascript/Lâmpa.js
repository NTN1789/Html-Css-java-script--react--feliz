const turnon = document.getElementById('turnon');
const turnoff = document.getElementById('turnoff');
const lamp = document.getElementById('lamp');






function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );







turnon.addEventListener( 'click', lampon );
turnoff.addEventListener('click', lampoff);
