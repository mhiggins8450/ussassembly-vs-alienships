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

//     let currentAlienIndex = 0;

//     const attackButton = document.getElementById('attack-button');
//     const messageDiv = document.getElementById('message');
//     const ussAssemblyImage = document.querySelector('.ussAssembly img');
//     const alienShipImage = document.querySelector('.alienShip img');
//     const alienShipTitle = document.querySelector('.alienShip h2');

//     function updateHullIndicator() {
//         const currentAlienShip = alienShips[currentAlienIndex];
//         messageDiv.innerText = `USS Assembly Hull: ${ussAssembly.hull} vs ${currentAlienShip.title} Hull: ${currentAlienShip.hull}`;
//     }

//     updateHullIndicator();

//     attackButton.addEventListener('click', () => {
//         attackButton.disabled = true;
//         const currentAlienShip = alienShips[currentAlienIndex];

//         setTimeout(() => {
//             if (Math.random() < ussAssembly.accuracy) {
//                 const damageDealt = ussAssembly.firepower;
//                 currentAlienShip.hull -= damageDealt;
//                 // shakeElement(alienShipImage);
//                 messageDiv.innerText = `USS Assembly hits ${currentAlienShip.title} for ${damageDealt} damage.`;

//                 if (currentAlienShip.hull <= 0) {
//                     alienShipImage.src = "images/explosion.gif";
//                     messageDiv.innerText = `${currentAlienShip.title} destroyed!`;

//                     if (currentAlienIndex < alienShips.length - 1) {
//                         setTimeout(() => {
//                             if (confirm(`${currentAlienShip.title} defeated! Do you want to attack the next alienship?`)) {
//                                 currentAlienIndex++;
//                                 const nextAlienShip = alienShips[currentAlienIndex];
//                                 alienShipImage.src = nextAlienShip.image;
//                                 alienShipTitle.innerText = nextAlienShip.title;
//                                 updateHullIndicator();
//                             } else {
//                                 messageDiv.innerText = "Congratulations!! You saved the universe!";
//                                 attackButton.disabled = true;
//                             }
//                         }, 2000);
//                     } else {
//                         messageDiv.innerText = "Congratulations!! You saved the universe!";
//                         attackButton.disabled = true;
//                     }
//                 } else {
//                     setTimeout(() => {
//                         if (Math.random() < currentAlienShip.accuracy) {
//                             const damageTaken = currentAlienShip.firepower;
//                             ussAssembly.hull -= damageTaken;
//                             // shakeElement(ussAssemblyImage);
//                             messageDiv.innerText = `${currentAlienShip.title} hits USS Assembly for ${damageTaken} damage.`;

//                             if (ussAssembly.hull <= 0) {
//                                 ussAssemblyImage.src = "images/explosion.gif";
//                                 messageDiv.innerText = `You failed to stop ${currentAlienShip.title}! The universe is doomed!"`;
//                             }

//                             attackButton.disabled = false;
//                         }
//                     }, 2000);
//                 }
//             } else {
//                 attackButton.disabled = false;
//             }
//         }, 2000);
//     });
// };

// ^^^^^^Next steps^^^^^^

window.onload = function () {
    const USShip = {
      hull: 20,
      firepower: 5,
      accuracy: 0.7,
    };
  
    const carrier = {
      ships: [
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
      ],
    };
  
    let unit = 0;
    let turn = 1;
  
    const battleLog = document.getElementById('battle-log');
  
    function reportHumanAction(damage) {
      const report = document.createElement('h3');
      report.textContent = `Turn: ${turn++} - USS Assembly hits Alienship ${unit + 1} for ${damage} damage.`;
      battleLog.appendChild(report);
    }
  
    function miss() {
      const report = document.createElement('h3');
      report.textContent = `Turn: ${turn++} - USS Assembly misses Alienship ${unit + 1}.`;
      battleLog.appendChild(report);
    }
  
    function counter() {
      if (Math.random() <= carrier.ships[unit].accuracy) {
        USShip.hull -= carrier.ships[unit].firepower;
        const report = document.createElement('h3');
        report.textContent = `Turn: ${turn++} - Alienship ${unit + 1} hits USS Assembly for ${carrier.ships[unit].firepower} damage.`;
        battleLog.appendChild(report);
      } else {
        const report = document.createElement('h3');
        report.textContent = `Turn: ${turn++} - Alienship ${unit + 1} misses USS Assembly.`;
        battleLog.appendChild(report);
      }
  
      if (USShip.hull > 0 && carrier.ships[unit].hull > 0) {
        setTimeout(attack, 1000);
      } else {
        destroyAlien();
      }
    }
  
    function destroyAlien() {
      const report = document.createElement('h3');
      report.textContent = `Turn: ${turn++} - Alienship ${unit + 1} is defeated! Here comes the next alienship.`;
      battleLog.appendChild(report);
  
      unit++;
  
      if (unit >= carrier.ships.length) {
        const messageDiv = document.getElementById('message');
        if (confirm("Attack the next alienship?")) {
          unit = 0;
          USShip.hull = 20;
          battleLog.innerHTML = ""; // Clear the battle log
        } else {
          messageDiv.textContent = "You coward! The universe is doomed!";
          document.getElementById('attack-button').disabled = true;
        }
      } else {
        setTimeout(attack, 2000);
      }
    }
  
    function attack() {
      if (Math.random() <= USShip.accuracy) {
        const damage = USShip.firepower;
        carrier.ships[unit].hull -= damage;
        reportHumanAction(damage);
      } else {
        miss();
      }
  
      if (carrier.ships[unit].hull > 0) {
        counter();
      } else {
        destroyAlien();
      }
    }
  
    const attackButton = document.getElementById('attack-button');
    attackButton.addEventListener('click', () => {
      attackButton.disabled = true;
      attack();
    });
  };
  