       
       
       
       
        let fighter1DOM = document.querySelector('#fighter1')
        let fighter2DOM = document.querySelector('#fighter2')
        let fighter3DOM = document.querySelector('#fighter3')
        let fighter4DOM = document.querySelector('#fighter4')
        let championDOM = document.querySelector('#champion')
        let challengerDOM = document.querySelector('#challenger')
        let championHealthDOM = document.querySelector('#championHealth')
        let challengerHealthDOM = document.querySelector('#challengerHealth')
        let championAttackDOM = document.querySelector('#championAttack')
        let challengerAttackDOM = document.querySelector('#challengerAttack')
        let dispalyTextDOM = document.querySelector('#displayText')
        let operator = 0
        let dodgeNumber = 0
        let dodgeNumber2 = 0
        const fighter1 = {
            name: 'Yoda',
            health: 120,
            attackPower: 30,
            counterAttack: 20,
            hit: ' force pushed',
            dodge: 50,
        }
        const fighter2 = {
            name: 'Darth Vader',
            health: 160,
            attackPower: 30,
            counterAttack: 25,
            hit: ' force choke',
            dodge: 10,
        }
        const fighter3 = {
            name: 'Boba Fett',
            health: 140,
            attackPower: 40,
            counterAttack: 25,
            hit: ' pew pew',
            dodge: 15,
        }
        const fighter4 = {
            name: 'Stormtrooper',
            health: 75,
            attackPower: 10,
            counterAttack: 5,
            hit: ' pew pew',
            dodge: 2,
        }
        let champion = ''
        let challenger = ''
        let wins = 0

       

        document.querySelector("#fighter1").onclick = function() {
            if (champion === fighter1){
                
            }
            else if (operator === 0) {
                championDOM.append(fighter1DOM)
                champion = fighter1
                championAttackDOM.textContent = "Yoda's attack is force push"
                operator++
                dispalyTextDOM.textContent = "Choose a challenger"
                
            }
            else if (operator === 1) {
                operator++;
                challengerDOM.append(fighter1DOM)
                challenger = fighter1
                challengerAttackDOM.textContent = "Yoda's attack is force push"
                dispalyTextDOM.textContent = "ATTACK!!"
                operator++
                show()
                update()
            } else  {
                operator = 1
            }
           
            
        }
        document.querySelector("#fighter2").onclick = function() {
            if (champion === fighter2){
                //this is a black statement to stop game from breaking
            }else if (operator === 0) {
                championDOM.append(fighter2DOM)
                champion = fighter2
                championAttackDOM.textContent = "Darth Vader's attack is force choke"
                dispalyTextDOM.textContent = "Choose a challenger"
               
                ++operator

            } else if (operator === 1) {
                challengerDOM.append(fighter2DOM)
                challenger = fighter2
                challengerAttackDOM.textContent = "Darth Vader's attack is force choke"
                ++operator
                dispalyTextDOM.textContent = "ATTACK!!"
                show()
                update()
            }  else  {
                operator = 1
            }
            ;
            
            
        }
        document.querySelector("#fighter3").onclick = function() {
            if (champion === fighter3){
                //this is a black statement to stop game from breaking
            }else if (operator === 0) {
                championDOM.append(fighter3DOM);
                champion = fighter3
                championAttackDOM.textContent = "Boba Fett's attack is a blaster"
                dispalyTextDOM.textContent = "Choose a challenger"
          
                ++operator
            } else if (operator === 1) {
                challengerDOM.append(fighter3DOM);
                challenger = fighter3
                challengerAttackDOM.textContent = "Boba Fett's attack is a blaster"
                dispalyTextDOM.textContent = "ATTACK!!"
                ++operator
                show()
                update()
            }  else  {
                operator = 1
            }
          
            
        }
        document.querySelector("#fighter4").onclick = function() {
            if (champion === fighter4){
                //this is a black statement to stop game from breaking
            }else if (operator === 0) {
                championDOM.append(fighter4DOM);  
                champion = fighter4 
                championAttackDOM.textContent = "Stormtrooper's attack is a blaster"
                dispalyTextDOM.textContent = "Choose a challenger"
                ++operator
            } else if (operator === 1) {
                challengerDOM.append(fighter4DOM);
                challenger = fighter4
                championAttackDOM.textContent = "Stormtrooper's attack is a blaster"
                dispalyTextDOM.textContent = "ATTACK!!"
                ++operator
                show()
                update()
            }  else  {
                operator = 1
            }
          
            
        }

        function show() {
            console.log(champion.name)
            document.querySelector('#attackButton').classList.toggle("visable")
        }

        function update() {
            championHealthDOM.textContent = "health: " + champion.health
            console.log(champion.health)
            challengerHealthDOM.textContent = "health: " + challenger.health
            
        }

        function attack() {
            dodgeNumber = Math.floor(Math.random() * 100)
            dodgeNumber2 = Math.floor(Math.random() * 100)


            console.log(dodgeNumber)
            if (dodgeNumber <= champion.dodge) {
                challengerAttackDOM.textContent = challenger.name + challenger.hit + " missed for 0 damage"
            } else {                
                champion.health = champion.health - challenger.counterAttack
                challengerAttackDOM.textContent = challenger.name + challenger.hit + " for " + challenger.counterAttack + " damage"
            }
            
            if (dodgeNumber2 <= challenger.dodge) {
                championAttackDOM.textContent = champion.name + champion.hit + " missed for 0 damage"
            } else {
                challenger.health = challenger.health - champion.attackPower
                championAttackDOM.textContent = champion.name + champion.hit + " for " + champion.attackPower + " damage"
            }
            

            update()
            console.log(champion.health)  
            if (champion.health <= 0 ) {
                dispalyTextDOM.textContent = "YOU SUCK AT THIS! TRY AGAIN!"
                document.querySelector('#reload').classList.toggle("visable")
                show()

            } else  if (challenger.health <= 0) {
                --operator
                challenger = ''
                challengerDOM.innerHTML = ''
                
                champion.health = champion.health * 2
                champion.attackPower = champion.attackPower * 2
                update()
                show()
                ++wins
                if (wins === 3) {
                    dispalyTextDOM.textContent = "YOU ARE THE GRAND MASTER!!"
                    document.querySelector('#reload').classList.toggle("visable")
                    challengerHealthDOM.textContent = "dead"
                    
                } else {
                    challengerHealthDOM.textContent = "dead"
                    dispalyTextDOM.textContent = "Pick a new challenger"
                }


            }
        }

        function reload() {
            location.reload()
        }
