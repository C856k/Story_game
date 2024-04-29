"use strict";
window.addEventListener("load", start);

function start()  {
    console.log("javascript kører");
}

const scene = {
    title: "The story begins here",
    text:/*html*/ `<p>You wake up in what seems to be an unknown area. </p>
    <p>But you then realise that you are laying in a forest, which you dont recognise</p>
    <p>As you look around you see two paths that will lead you away from the area you are in.</p>
    <p>On your left you see a path leading behind the tress and on your right you see a tunnel</p>
    <p>Which one do you choose?</p>`,
    choises: [
        "Path",
        "Tunnel"
    ]
}