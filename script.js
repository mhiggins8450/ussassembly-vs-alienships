window.onload = function () {
    // Initialize USS Assembly and game variables
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
    let currentAlienIndex = 0; // Index to keep track of the current alienship
    let turn = 1;

    // Create an array of alienships with random attributes
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

    // Function to report the player's action
    function reportPlayerAction(damage) {
        const report = document.createElement("h3");
        report.textContent = `Turn: ${turn++} - USS Assembly hits ${alienShips[currentAlienIndex].title} for ${damage} damage`;
        battleLog.appendChild(report);
        battleLog.scrollTop = battleLog.scrollHeight;
        alienHull.textContent = `Hull: ${alienShips[currentAlienIndex].hull}`;
        ussHull.textContent = `Hull: ${ussAssembly.hull}`;
    }

    // Function to handle USSAssembly's attack
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

    // Function to handle a missed attack by USS Assembly
    function miss() {
        const report = document.createElement("h3");
        report.textContent = `Turn: ${turn} - USS Assembly misses ${alienShips[currentAlienIndex].title}`;
        battleLog.appendChild(report);
        battleLog.scrollTop = battleLog.scrollHeight;
    }

    // Function to handle the alienships' counterattacks
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

    // Function to handle when an alienship is destoryed
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
                document.querySelector(".alienShip h2").textContent = nextAlienShip.title;
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

    //Function to handle USS Assembly's destruction
    function gameOver() {
        messageDiv.innerText = "USS Assembly has been destroyed! The universe is doomed!";
        const ussAssembly = document.querySelector(".ussAssembly img");
        ussAssembly.src = "images/explosion.gif";
        attackButton.style.display = "none";
        retreatButton.style.display = "none";
    }

    // Function to handle USS Assembly's retreat
    function retreat() {
        if (ussAssembly.hull <= 0) {
            gameOver();
        } else {
        messageDiv.innerText = "You coward! The universe is doomed!";
        attackButton.style.display = "none";
        retreatButton.style.display = "none";
        }
    }

    // Function to continue the round
    function continueRound() {
        if (ussAssembly.hull > 0 && alienShips[currentAlienIndex].hull > 0) {
            setTimeout(() => {
                attackButton.disabled = false;
                attack();
            }, 1000);
        }
    }

    // EventListener for the Attack button
    attackButton.addEventListener("click", () => {
        attack();
    });

    // EventListener for the Retreat button
    retreatButton.addEventListener("click", () => {
        retreat();
    });
};