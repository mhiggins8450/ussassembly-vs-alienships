window.onload = function () {
    const ussAssembly = {
        hull: 20,
        firepower: 5,
        accuracy: 0.7,
    };

    const battleLog = document.getElementById("battle-log");
    const alienShipImage = document.getElementById("alien-ship-image");
    const alienHull = document.getElementById("alien-hull");
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

    function reportHumanAction(damage) {
        const report = document.createElement("h3");
        report.textContent = `Turn: ${turn++} - USS Assembly hits Alienship ${
            currentAlienIndex + 1
        } for ${damage} damage`;
        battleLog.appendChild(report);
        battleLog.scrollTop = battleLog.scrollHeight; // Scroll to the bottom of the log
        alienHull.textContent = `Hull: ${alienShips[currentAlienIndex].hull}`;
    }

    function attack() {
        if (Math.random() <= ussAssembly.accuracy) {
            const damageDealt = ussAssembly.firepower;
            alienShips[currentAlienIndex].hull -= damageDealt;
            reportHumanAction(damageDealt);

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
        report.textContent = `Turn: ${turn} - USS Assembly misses Alienship ${currentAlienIndex + 1}`;
        battleLog.appendChild(report);
        battleLog.scrollTop = battleLog.scrollHeight; // Scroll to the bottom of the log
    }

    function counter() {
        if (Math.random() <= alienShips[currentAlienIndex].accuracy) {
            const damageTaken = alienShips[currentAlienIndex].firepower;
            ussAssembly.hull -= damageTaken;
            const report = document.createElement("h3");
            report.textContent = `Turn: ${turn} - Alienship ${
                currentAlienIndex + 1
            } hits USS Assembly for ${damageTaken} damage`;
            battleLog.appendChild(report);
            battleLog.scrollTop = battleLog.scrollHeight; // Scroll to the bottom of the log

            if (ussAssembly.hull <= 0) {
                retreat();
            }
        } else {
            const report = document.createElement("h3");
            report.textContent = `Turn: ${turn} - Alienship ${currentAlienIndex + 1} misses USS Assembly`;
            battleLog.appendChild(report);
            battleLog.scrollTop = battleLog.scrollHeight; // Scroll to the bottom of the log
        }
    }

    // function destroyAlien() {
    //     alienShipImage.src = "images/explosion.gif";
    //     battleLog.scrollTop = battleLog.scrollHeight; // Scroll to the bottom of the log
    //     messageDiv.innerText = `Alienship ${currentAlienIndex + 1} defeated!`;

    //     setTimeout(function () {
    //         if (currentAlienIndex < alienShips.length - 1) {
    //             const nextAlienShip = alienShips[currentAlienIndex + 1];
    //             alienShipImage.src = nextAlienShip.image;
    //             alienHull.textContent = `Hull: ${nextAlienShip.hull}`;
    //             messageDiv.innerText = "Attack the next alienship?";
    //             attackButton.style.display = "block";
    //             retreatButton.style.display = "block";
    //         } else {
    //             messageDiv.innerText = "Congratulations!! You saved the universe!";
    //             attackButton.style.display = "none";
    //             retreatButton.style.display = "none";
    //         }
    //     }, 2000); 
    // }

    function retreat() {
        messageDiv.innerText = "You coward! The universe is doomed!";
        attackButton.style.display = "none";
        retreatButton.style.display = "none";
    }

    attackButton.addEventListener("click", () => {
        attackButton.disabled = true;
        attack();
    });

    retreatButton.addEventListener("click", () => {
        retreat();
    });
};
