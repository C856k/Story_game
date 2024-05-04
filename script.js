"use strict";
window.addEventListener("load", start);

function start() {
    console.log("javascript kører");
    showScene(scene1);
    //currentScene = scene1;
    registerButtonClicks();
}

let currentScene;

const scene1A = {
    title: "Path",
    text: /*html*/ `<p>You decide to go down the path that was leading behind the trees. </p>
    <p> As you walk down the path, you hear this sound that is like an animal cry. </p>`,
    choises: [
        "Investigate the sound",
        "Ignore the sound and continue down the path"
    ]
}


const scene1 = {
    title: "The story begins here",
    text: /*html*/ `<p>You wake up in what seems to be an unknown area. </p>
    <p>But you then realise that you are laying in a forest, which you dont recognise</p>
    <p>As you look around you see two paths that will lead you away from the area you are in.</p>
    <p>On your left you see a path leading behind the tress and on your right you see a tunnel</p>
    <p>Which one do you choose?</p>`,
    choises: [
        {
        name:"Path",
        node: scene1A
        },
        {
        name: "Tunnel",
        node: scene1B
        }
    ]
}

const scene1B = {
    title: "Tunnel",
    text: /*html*/ `<p>Du beslutter dig for at gå ind i tunnelen. Det er mørkt og fugtigt, og du kan høre lyden af vand, der drypper et sted i nærheden.</p>
    <p>Efter at have vandret et stykke tid, ser du et svagt lys forude. Vil du fortsætte mod lyset, eller vil du vende om og prøve en anden vej?</p>`,
    choises: [
        {
            name: "Fortsæt mod lyset",
        },
        {
            name: "Vend om",
            node: scene1 // Dette vil tage spilleren tilbage til den oprindelige scene
        }
    ]
}



function registerButtonClicks() {
    document.querySelector("main").addEventListener("click", userClicked);

    function userClicked(event) {
        const target = event.target;
        if (target.tagName === "BUTTON") {
            buttonClicked(target);
        }
    }

    function buttonClicked(button) {
        button.parentElement.remove();
        const index = Number(button.id.substring(10));
        const choice = currentScene.choises[index];
        
        if (choice.node) {
            currentScene = choice.node;
        }
    
        showScene(currentScene);
    }
    
}

function showScene(scene) {
    const html = /*html*/ `<div class="scene">
        <h2>${scene.title}</h2>
        <div class="text">
            ${scene.text}
        </div>
        <div class="choices">
        ${scene.choises.map((choice, i) => `<button id="btn-choice${i}">${choice.name}</button>`).join("")}
        </div>
    </div>`;

    document.querySelector("main").insertAdjacentHTML("beforeend", html);
}

