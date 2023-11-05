// window.onload = function () {
//     const ussAssembly = {
//         hull: 20,
//         firepower: 5,
//         accuracy: 0.7,
//     };

//     const alienShips = [
//         {
//             hull: Math.floor(Math.random() * 4) + 3,
//             firepower: Math.floor(Math.random() * 3) + 2,
//             accuracy: (Math.random() * 0.2) + 0.6,
//         },
//         {
//             hull: Math.floor(Math.random() * 4) + 3,
//             firepower: Math.floor(Math.random() * 3) + 2,
//             accuracy: (Math.random() * 0.2) + 0.6,
//         },
        
//     ];

//     let currentAlienIndex = 0;

//     const attackButton = document.getElementById('attack-button');
//     const messageDiv = document.getElementById('message');
//     const ussAssemblyImage = document.querySelector('.ussAssembly img');
//     const alienShipImage = document.querySelector('.alienShip img');

//     function updateHullIndicator() {
//         const currentAlienShip = alienShips[currentAlienIndex];
//         messageDiv.innerText = `USS Assembly Hull: ${ussAssembly.hull} vs Alienship ${currentAlienIndex + 1} Hull: ${currentAlienShip.hull}`;
//     }

//     updateHullIndicator();

//     attackButton.addEventListener('click', () => {
//         attackButton.disabled = true;
//         const currentAlienShip = alienShips[currentAlienIndex];

//         if (Math.random() < ussAssembly.accuracy) {
//             const damageDealt = ussAssembly.firepower;
//             currentAlienShip.hull -= damageDealt;
//             // shakeElement(alienShipImage);
//             messageDiv.innerText = `USS Assembly hits Alienship ${currentAlienIndex + 1} for ${damageDealt} damage.`;

//             if (currentAlienShip.hull <= 0) {
//                 alienShipImage.src = "images/explosion.gif";
//                 messageDiv.innerText = `Alienship ${currentAlienIndex + 1} destroyed!`;

//                 if (currentAlienIndex < alienShips.length - 1) {
//                     if (confirm("Alienship defeated! Do you want to attack the next alienship?")) {
//                         currentAlienIndex++;
//                         setTimeout(() => {
                            
//                             const nextAlienShip = alienShips[currentAlienIndex];
//                             alienShipImage.src = nextAlienShip.image;
//                             updateHullIndicator();
//                         }, 1000);
//                     } else {
//                         messageDiv.innerText = "Congratulations!! You saved the universe!";
//                         attackButton.disabled = true;
//                     }
//                 } else {
//                     messageDiv.innerText = "Congratulations!! You saved the universe!";
//                     attackButton.disabled = true;
//                 }
//             } else {
//                 setTimeout(() => {
//                     if (Math.random() < currentAlienShip.accuracy) {
//                         const damageTaken = currentAlienShip.firepower;
//                         ussAssembly.hull -= damageTaken;
//                         // shakeElement(ussAssemblyImage);
//                         messageDiv.innerText = `Alienship ${currentAlienIndex + 1} hits USS Assembly for ${damageTaken} damage.`;

//                         if (ussAssembly.hull <= 0) {
//                             ussAssemblyImage.src = "images/explosion.gif";
//                             messageDiv.innerText = `You failed to stop Alienship ${currentAlienIndex + 1}! The universe is doomed!"`;
//                         }

//                         attackButton.disabled = false;
//                     }
//                 }, 1000);
//             }
//         } else {
//             attackButton.disabled = false;
//         }
//     });
// }

// ^^^^^^Testing resolvings to transition issues^^^^^^

window.onload = function () {
    const ussAssembly = {
        hull: 20,
        firepower: 5,
        accuracy: 0.7,
    };

    const alienShips = [
        {
            hull: Math.floor(Math.random() * 4) + 3,
            firepower: Math.floor(Math.random() * 3) + 2,
            accuracy: (Math.random() * 0.2) + 0.6,
            image: "./images/alienship1.png",
            title: "Alienship 1",
        },
        {
            hull: Math.floor(Math.random() * 4) + 3,
            firepower: Math.floor(Math.random() * 3) + 2,
            accuracy: (Math.random() * 0.2) + 0.6,
            image: "./images/alienship2.png",
            title: "Alienship 2",
        },
        {
            hull: Math.floor(Math.random() * 4) + 3,
            firepower: Math.floor(Math.random() * 3) + 2,
            accuracy: (Math.random() * 0.2) + 0.6,
            image: "./images/alienship3.png",
            title: "Alienship 3",
        },
        {
            hull: Math.floor(Math.random() * 4) + 3,
            firepower: Math.floor(Math.random() * 3) + 2,
            accuracy: (Math.random() * 0.2) + 0.6,
            image: "./images/alienship4.png",
            title: "Alienship 4",
        },
        {
            hull: Math.floor(Math.random() * 4) + 3,
            firepower: Math.floor(Math.random() * 3) + 2,
            accuracy: (Math.random() * 0.2) + 0.6,
            image: "./images/alienship5.png",
            title: "Alienship 5",
        },
        {
            hull: Math.floor(Math.random() * 4) + 3,
            firepower: Math.floor(Math.random() * 3) + 2,
            accuracy: (Math.random() * 0.2) + 0.6,
            image: "./images/alienship6.png",
            title: "Alienship 6",
        },
    ];

    let currentAlienIndex = 0;

    const attackButton = document.getElementById('attack-button');
    const messageDiv = document.getElementById('message');
    const ussAssemblyImage = document.querySelector('.ussAssembly img');
    const alienShipImage = document.querySelector('.alienShip img');
    const alienShipTitle = document.querySelector('.alienShip h2');

    function updateHullIndicator() {
        const currentAlienShip = alienShips[currentAlienIndex];
        messageDiv.innerText = `USS Assembly Hull: ${ussAssembly.hull} vs ${currentAlienShip.title} Hull: ${currentAlienShip.hull}`;
    }

    updateHullIndicator();

    attackButton.addEventListener('click', () => {
        attackButton.disabled = true;
        const currentAlienShip = alienShips[currentAlienIndex];

        setTimeout(() => {
            if (Math.random() < ussAssembly.accuracy) {
                const damageDealt = ussAssembly.firepower;
                currentAlienShip.hull -= damageDealt;
                // shakeElement(alienShipImage);
                messageDiv.innerText = `USS Assembly hits ${currentAlienShip.title} for ${damageDealt} damage.`;

                if (currentAlienShip.hull <= 0) {
                    alienShipImage.src = "images/explosion.gif";
                    messageDiv.innerText = `${currentAlienShip.title} destroyed!`;

                    if (currentAlienIndex < alienShips.length - 1) {
                        setTimeout(() => {
                            if (confirm(`${currentAlienShip.title} defeated! Do you want to attack the next alienship?`)) {
                                currentAlienIndex++;
                                const nextAlienShip = alienShips[currentAlienIndex];
                                alienShipImage.src = nextAlienShip.image;
                                alienShipTitle.innerText = nextAlienShip.title;
                                updateHullIndicator();
                            } else {
                                messageDiv.innerText = "Congratulations!! You saved the universe!";
                                attackButton.disabled = true;
                            }
                        }, 2000);
                    } else {
                        messageDiv.innerText = "Congratulations!! You saved the universe!";
                        attackButton.disabled = true;
                    }
                } else {
                    setTimeout(() => {
                        if (Math.random() < currentAlienShip.accuracy) {
                            const damageTaken = currentAlienShip.firepower;
                            ussAssembly.hull -= damageTaken;
                            // shakeElement(ussAssemblyImage);
                            messageDiv.innerText = `${currentAlienShip.title} hits USS Assembly for ${damageTaken} damage.`;

                            if (ussAssembly.hull <= 0) {
                                ussAssemblyImage.src = "images/explosion.gif";
                                messageDiv.innerText = `You failed to stop ${currentAlienShip.title}! The universe is doomed!"`;
                            }

                            attackButton.disabled = false;
                        }
                    }, 2000);
                }
            } else {
                attackButton.disabled = false;
            }
        }, 2000);
    });
};
