// const starShip = {
//     hull: 20,
//     firepower: 5,
//     accuracy: 0.7,
// };

// const alienShip1 = {
//     hull: Math.floor(Math.random() * 4) + 3,
//     firepower: Math.floor(Math.random() * 3) + 2,
//     accuracy: (Math.random() * 0.2) + 0.6,
// };

// let currentAlienShip = alienShip1;
// const attackButton = document.getElementById('attack-button');
// const messageDiv = document.getElementById('message');
// const ussAssemblyImage = document.getElementById('uss-assembly');
// const alienShip1Image = document.querySelector('#alien1 .alien-ship');

// function attack() {
//     if (Math.random() < ussAssembly.accuracy) {
//         currentAlienShip.hull -= ussAssembly.firepower;
//         shakeElement(alienShip1Image);
//     }

//     if (currentAlienShip.hull <= 0) {
//         alienShip1Image.src = "images/explosion.gif";
//         messageDiv.innerText = "Congratulations!! You saved the universe!";
//         attackButton.disabled = true;
//     } else {
//         if (Math.random() < currentAlienShip.accuracy) {
//             ussAssembly.hull -= currentAlienShip.firepower;
//             shakeElement(ussAssemblyImage);
//         }

//         if (ussAssembly.hull <= 0) {
//             ussAssemblyImage.src = "images/explosion.gif";
//             messageDiv.innerText = "You failed to stop the alien ship! The universe is doomed!";
//             attackButton.disabled = true;
//         }
//     }
// }

// function shakeElement(element) {
//     element.style.animation = "shake 0.5s";
//     setTimeout(() => {
//         element.style.animation = "";
//     }, 500);
// }

// // attackButton.disabled = false;
// // messageDiv.innerText = "Click 'Attack' to start the battle.";

window.onload = function() {
    const ussAssembly = {
        hull: 20,
        firepower: 5,
        accuracy: 0.7,
    };

    const alienShip1 = {
        hull: Math.floor(Math.random() * 4) + 3,
        firepower: Math.floor(Math.random() * 3) + 2,
        accuracy: (Math.random() * 0.2) + 0.6,
    };

    let currentAlienShip = alienShip1;
    const attackButton = document.getElementById('attack-button');
    const messageDiv = document.getElementById('message');
    const ussAssemblyImage = document.getElementById('uss-assembly');
    const alienShip1Image = document.querySelector('#alien1 .alien-ship');

    messageDiv.innerText = `USS Assembly Hull: ${ussAssembly.hull} vs Alienship 1 Hull: ${currentAlienShip.hull}`;

    // attackButton.addEventListener('click', () => {
    //     if (Math.random() < ussAssembly.accuracy) {
    //         const damageDealt = ussAssembly.firepower;
    //         currentAlienShip.hull -= damageDealt;
    //         shakeElement(alienShip1Image);
    //         messageDiv.innerText = `USS Assembly hits Alienship 1 for ${damageDealt} damage.`;

    //         if (currentAlienShip.hull <= 0) {
    //             alienShip1Image.src = "images/explosion.gif";
    //             messageDiv.innerText = "Congratulations!! You saved the universe!";
    //             attackButton.disabled = true;
    //         } else {
    //             setTimeout(() => {
    //                 if (Math.random() < currentAlienShip.accuracy) {
    //                     const damageTaken = currentAlienShip.firepower;
    //                     ussAssembly.hull -= damageTaken;
    //                     shakeElement(ussAssemblyImage);
    //                     messageDiv.innerText = `Alienship 1 hits USS Assembly for ${damageTaken} damage.`;

    //                     if (ussAssembly.hull <= 0) {
    //                         ussAssemblyImage.src = "images/explosion.gif";
    //                         messageDiv.innerText = "You failed to stop Alienship 1! The universe is doomed!";
    //                         attackButton.disabled = true;
    //                     }
    //                 }
    //             }, 1000);
    //         }
    //     }
    // });

    attackButton.addEventListener('click', () => {
        attackButton.disabled = true;
    
        if (Math.random() < ussAssembly.accuracy) {
            const damageDealt = ussAssembly.firepower;
            currentAlienShip.hull -= damageDealt;
            shakeElement(alienShip1Image);
            messageDiv.innerText = `USS Assembly hits Alienship 1 for ${damageDealt} damage.`;
    
            if (currentAlienShip.hull <= 0) {
                alienShip1Image.src = "images/explosion.gif";
                messageDiv.innerText = "Congratulations!! You saved the universe!";
                attackButton.disabled = true;
            } else {
                setTimeout(() => {
                    if (Math.random() < currentAlienShip.accuracy) {
                        const damageTaken = currentAlienShip.firepower;
                        ussAssembly.hull -= damageTaken;
                        shakeElement(ussAssemblyImage);
                        messageDiv.innerText = `Alienship 1 hits USS Assembly for ${damageTaken} damage.`;
    
                        if (ussAssembly.hull <= 0) {
                            ussAssemblyImage.src = "images/explosion.gif";
                            messageDiv.innerText = "You failed to stop Alienship 1! The universe is doomed!";
                        }
    
                        attackButton.disabled = false;
                    }
                }, 1000);
            }
        } else {
            attackButton.disabled = false;
        }
    });
    

    function shakeElement(element) {
        element.style.animation = "shake 0.5s";
        setTimeout(() => {
            element.style.animation = "";
        }, 500);
    }
};
