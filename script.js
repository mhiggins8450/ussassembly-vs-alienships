// window.onload = function () {
//     const ussAssembly = {
//         hull: 20,
//         firepower: 5,
//         accuracy: 0.7,
//     };

//     const battleLog = document.getElementById("battle-log");
//     const alienHull = document.getElementById("alien-hull");
//     const ussHull = document.getElementById("uss-hull"); // Added this line
//     const attackButton = document.getElementById("attack-button");
//     const messageDiv = document.getElementById("message");
//     const retreatButton = document.getElementById("retreat-button");
//     let currentAlienIndex = 0;
//     let turn = 1;

//     const alienShips = [
//         {
//             hull: Math.floor(Math.random() * 4) + 3,
//             firepower: Math.floor(Math.random() * 3) + 2,
//             accuracy: (Math.random() * 0.2) + 0.6,
//             image: "./images/alienship1.png",
//             title: "Alienship 1",
//         },
//         {
//             hull: Math.floor(Math.random() * 4) + 3,
//             firepower: Math.floor(Math.random() * 3) + 2,
//             accuracy: (Math.random() * 0.2) + 0.6,
//             image: "./images/alienship2.png",
//             title: "Alienship 2",
//         },
//         {
//             hull: Math.floor(Math.random() * 4) + 3,
//             firepower: Math.floor(Math.random() * 3) + 2,
//             accuracy: (Math.random() * 0.2) + 0.6,
//             image: "./images/alienship3.png",
//             title: "Alienship 3",
//         },
//         {
//             hull: Math.floor(Math.random() * 4) + 3,
//             firepower: Math.floor(Math.random() * 3) + 2,
//             accuracy: (Math.random() * 0.2) + 0.6,
//             image: "./images/alienship4.png",
//             title: "Alienship 4",
//         },
//         {
//             hull: Math.floor(Math.random() * 4) + 3,
//             firepower: Math.floor(Math.random() * 3) + 2,
//             accuracy: (Math.random() * 0.2) + 0.6,
//             image: "./images/alienship5.png",
//             title: "Alienship 5",
//         },
//         {
//             hull: Math.floor(Math.random() * 4) + 3,
//             firepower: Math.floor(Math.random() * 3) + 2,
//             accuracy: (Math.random() * 0.2) + 0.6,
//             image: "./images/alienship6.png",
//             title: "Alienship 6",
//         },
//     ];

//     function reportPlayerAction(damage) {
//         const report = document.createElement("h3");
//         report.textContent = `Turn: ${turn++} - USS Assembly hits ${alienShips[currentAlienIndex].title} for ${damage} damage`;
//         battleLog.appendChild(report);
//         battleLog.scrollTop = battleLog.scrollHeight;
//         alienHull.textContent = `Hull: ${alienShips[currentAlienIndex].hull}`;
//         ussHull.textContent = `Hull: ${ussAssembly.hull}`; // Update USS Assembly hull
//     }

//     function attack() {
//         if (Math.random() <= ussAssembly.accuracy) {
//             const damageDealt = ussAssembly.firepower;
//             alienShips[currentAlienIndex].hull -= damageDealt;
//             reportPlayerAction(damageDealt);

//             if (alienShips[currentAlienIndex].hull <= 0) {
//                 destroyAlien();
//             } else {
//                 counter();
//             }
//         } else {
//             miss();
//             counter();
//         }
//     }

//     function miss() {
//         const report = document.createElement("h3");
//         report.textContent = `Turn: ${turn} - USS Assembly misses ${alienShips[currentAlienIndex].title}`;
//         battleLog.appendChild(report);
//         battleLog.scrollTop = battleLog.scrollHeight;
//     }

//     function counter() {
//         if (Math.random() <= alienShips[currentAlienIndex].accuracy) {
//             const damageTaken = alienShips[currentAlienIndex].firepower;
//             ussAssembly.hull -= damageTaken;
//             const report = document.createElement("h3");
//             report.textContent = `Turn: ${turn} - ${alienShips[currentAlienIndex].title} hits USS Assembly for ${damageTaken} damage`;
//             battleLog.appendChild(report);
//             battleLog.scrollTop = battleLog.scrollHeight;

//             if (ussAssembly.hull <= 0) {
//                 retreat();
//             } else {
//                 continueRound(); // Added this line to continue the round
//             }
//         } else {
//             const report = document.createElement("h3");
//             report.textContent = `Turn: ${turn} - ${alienShips[currentAlienIndex].title} misses USS Assembly`;
//             battleLog.appendChild(report);
//             battleLog.scrollTop = battleLog.scrollHeight;
//             continueRound(); // Continue the round
//         }
//     }

//     function destroyAlien() {
//         const alienShipImage = document.querySelector(".alienShip img");
//         alienShipImage.src = "images/explosion.gif";
//         battleLog.scrollTop = battleLog.scrollHeight;
//         messageDiv.innerText = `${alienShips[currentAlienIndex].title} defeated!`;

//         if (currentAlienIndex < alienShips.length - 1) {
//             currentAlienIndex++;
//             setTimeout(() => {
//                 const nextAlienShip = alienShips[currentAlienIndex];
//                 alienShipImage.src = nextAlienShip.image;
//                 alienHull.textContent = `Hull: ${nextAlienShip.hull}`;
//                 messageDiv.innerText = "Attack the next alienship?";
//                 attackButton.style.display = "inline-block";
//                 retreatButton.style.display = "inline-block";
//                 attackButton.addEventListener("click", () => {
//                     attackButton.disabled = true;
//                     attack();
//                 });
//             }, 2000);
//         } else {
//             messageDiv.innerText = "Congratulations!! You saved the universe!";
//             attackButton.style.display = "none";
//             retreatButton.style.display = "none";
//         }
//     }

//     function retreat() {
//         messageDiv.innerText = "You coward! The universe is doomed!";
//         attackButton.style.display = "none";
//         retreatButton.style.display = "none";
//     }

//     function continueRound() {
//         if (ussAssembly.hull > 0 && alienShips[currentAlienIndex].hull > 0) {
//             setTimeout(() => {
//                 attackButton.disabled = false;
//                 attack();
//             }, 1000); // Continue the round after 1 second
//         }
//     }

//     attackButton.addEventListener("click", () => {
//         attackButton.disabled = true;
//         attack();
//     });

//     retreatButton.addEventListener("click", () => {
//         retreat();
//     });
// };

//The above successfully progresses through the entire game, 
//but sometimes the Attack button does not work.

window.onload = function () {
    const ussAssembly = {
        hull: 20,
        firepower: 5,
        accuracy: 0.7,
    };

    const battleLog = document.getElementById("battle-log");
    const alienHull = document.getElementById("alien-hull");
    const ussHull = document.getElementById("uss-hull");
    const attackButton = document.getElementById("attack-button");
    const messageDiv = document.getElementById("message");
    const retreatButton = document.getElementById("retreat-button");
    let currentAlienIndex = 0;
    let turn = 1;

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

    function reportPlayerAction(damage) {
        const report = document.createElement("h3");
        report.textContent = `Turn: ${turn++} - USS Assembly hits ${alienShips[currentAlienIndex].title} for ${damage} damage`;
        battleLog.appendChild(report);
        battleLog.scrollTop = battleLog.scrollHeight;
        alienHull.textContent = `Hull: ${alienShips[currentAlienIndex].hull}`;
        ussHull.textContent = `Hull: ${ussAssembly.hull}`;
    }

    function attack() {
        if (Math.random() <= ussAssembly.accuracy) {
            const damageDealt = ussAssembly.firepower;
            alienShips[currentAlienIndex].hull -= damageDealt;
            reportPlayerAction(damageDealt);

            if (alienShips[currentAlienIndex].hull <= 0) {
                destroyAlien();
            } else {
                counter();
            }
        } else {
            miss();
            counter();
        }
    }

    function miss() {
        const report = document.createElement("h3");
        report.textContent = `Turn: ${turn} - USS Assembly misses ${alienShips[currentAlienIndex].title}`;
        battleLog.appendChild(report);
        battleLog.scrollTop = battleLog.scrollHeight;
    }

    function counter() {
        if (Math.random() <= alienShips[currentAlienIndex].accuracy) {
            const damageTaken = alienShips[currentAlienIndex].firepower;
            ussAssembly.hull -= damageTaken;
            const report = document.createElement("h3");
            report.textContent = `Turn: ${turn} - ${alienShips[currentAlienIndex].title} hits USS Assembly for ${damageTaken} damage`;
            battleLog.appendChild(report);
            battleLog.scrollTop = battleLog.scrollHeight;

            if (ussAssembly.hull <= 0) {
                retreat();
            } else {
                continueRound();
            }
        } else {
            const report = document.createElement("h3");
            report.textContent = `Turn: ${turn} - ${alienShips[currentAlienIndex].title} misses USS Assembly`;
            battleLog.appendChild(report);
            battleLog.scrollTop = battleLog.scrollHeight;
            continueRound();
        }
    }

    function destroyAlien() {
        const alienShipImage = document.querySelector(".alienShip img");
        alienShipImage.src = "images/explosion.gif";
        battleLog.scrollTop = battleLog.scrollHeight;
        messageDiv.innerText = `${alienShips[currentAlienIndex].title} defeated!`;

        if (currentAlienIndex < alienShips.length - 1) {
            currentAlienIndex++;
            setTimeout(() => {
                const nextAlienShip = alienShips[currentAlienIndex];
                alienShipImage.src = nextAlienShip.image;
                alienHull.textContent = `Hull: ${nextAlienShip.hull}`;
                messageDiv.innerText = "Attack the next alienship?";
                attackButton.style.display = "inline-block";
                retreatButton.style.display = "inline-block";
            }, 2000);
        } else {
            messageDiv.innerText = "Congratulations!! You saved the universe!";
            attackButton.style.display = "none";
            retreatButton.style.display = "none";
        }
    }

    function retreat() {
        messageDiv.innerText = "You coward! The universe is doomed!";
        attackButton.style.display = "none";
        retreatButton.style.display = "none";
    }

    function continueRound() {
        if (ussAssembly.hull > 0 && alienShips[currentAlienIndex].hull > 0) {
            setTimeout(() => {
                attackButton.disabled = false;
                attack();
            }, 1000);
        }
    }

    attackButton.addEventListener("click", () => {
        // attackButton.disabled = true;
        attack();
    });

    retreatButton.addEventListener("click", () => {
        retreat();
    });
};
