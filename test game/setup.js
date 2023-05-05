let attack = 5;            
let baseHealth = 100;        
let health = 100;     
let baseCost = 5;
let baseGoldDrop = 3;
let gold = 0;
let storyToken = 0;
let baseExp = 0;
let baseExpDrop = 1;
let exp = 0;
let activateSystem = false;
let gluttony = false; 
let predation = false;
let greed = false;
let hoarding = false;
let pride = false;
let pity = false;

let story = document.getElementById("theBeginningText");
let beginningButton1 = document.getElementById("theBeginningButton1");
let beginningButton2 = document.getElementById("theBeginningButton2");
let beginningButton3 = document.getElementById("theBeginningButton3");
let monsterHealth = document.getElementById("text1");
let monsterHasDied = document.getElementById("text2");
let goldAmount = document.getElementById("text3");
let dmgIncrease = document.getElementById("text4");
let goldIncrease = document.getElementById("text5");
let playerDmg = document.getElementById("text6");
let expIncrease = document.getElementById("text7");
let expAmount = document.getElementById("text8");
let newAreaUnlocked = document.getElementById("text9");
let mainButtons = document.getElementsByClassName("mainButtons")[0];
let attackButton = document.getElementById("attackButton");
let sTButton = document.getElementById("skillTreeButton");
let sTBButton = document.getElementById("skillTreeBackButton");
let sTDiv = document.getElementsByClassName("skillTreeDiv")[0];
let firstSTSkill = document.getElementsByClassName("firstSkillTreeSkill")[0];
let gluttonySkill1 = document.getElementById("gluttony1");
let gluttonySkill2 = document.getElementById("gluttony2");
let prideSkill1 = document.getElementById("pride1");
let prideSkill2 = document.getElementById("pride2");
let greedSkill1 = document.getElementById("greed1");
let greedSkill2 = document.getElementById("greed2");
let upgradeCost = document.getElementById("upgradeCost");
let monsterIsAttacking = document.getElementById("monsterAttackingText");
let selectArea = document.getElementById("selectArea");
let areaButtons = document.getElementById("areaButtons");
let wildernessSelect = document.getElementById("wildernessSelect");

function displayChanger(x, y){
    x.style.display = y;
}


let tempVar1 = sum(10, 1, 100);
let tempVar2 = sum(10, 100, false);
let tempVar3 = sum(10, 1900, "köttbulle");



monsterHealth.textContent = ("Monster's health is " + health);
playerDmg.textContent = ("You currently deal " + attack + " damage!");

function backgroundChanger(x)
{
    x.style.backgroundColor = "red";
}

//selectArea Buttons
let currentArea = "nil"; 
selectArea.addEventListener("change", function(){
    
    currentArea = this.value;
    if(currentArea === "inn"){innArea()}
    else if(currentArea === "blacksmith"){blacksmithArea()}
    else if(currentArea === "wilderness"){wildernessArea()}

    if(storyToken == 58){
        displayNone(story);
   }

});

innSelect.addEventListener("change", innArea);
blacksmithSelect.addEventListener("click", blacksmithArea);

function innArea(){ /*Inn area select function*/
    displayChanger(mainButtons, "block");   
    displayChanger(sTButton, "block");
    displayChanger(upgradeCost, "none");
    displayChanger(monsterIsAttacking, "none");
    displayChanger(monsterHealth, "none");
    displayChanger(attackButton, "none");
    
}

function blacksmithArea(){ /*Blacksmith area select function */
   
    displayChanger(mainButtons, "block");
    displayChanger(upgradeCost, "block");
    displayChanger(sTButton, "none");
    displayChanger(monsterIsAttacking, "none");
    displayChanger(monsterHealth, "none");
    displayChanger(attackButton, "none");
}

function wildernessArea(){ /*Wilderness area select function */
    displayChanger(mainButtons, "block");
    displayChanger(upgradeCost, "none");
    displayChanger(sTButton, "none");
    displayChanger(monsterIsAttacking, "block");
    displayChanger(monsterHealth, "block");
    displayChanger(attackButton, "block");
   
}

function newAreaTimer(){ /* "New area unlocked" Timer Function */
    newAreaUnlocked.textContent = "";
}

function monsterFunction(){ /* Monster health Function */
    
    health = health - attack;
    monsterHealth.textContent = ("Monster's health is " + health); 
    playerDmg.textContent = ("You currently deal " + attack + " damage!");
    if(health < 1){

        /* Monster difficulty increase system */
        baseHealth = Math.floor(baseHealth * 1.25);
        health = baseHealth;
        monsterHasDied.textContent = "Monster has died!";
        monsterHealth.textContent = ("Monster's health is " + health);
        

        /* Gold drop system */
        gold = Math.floor(gold + baseGoldDrop);
        goldIncrease.textContent = ("+ " + Math.floor(baseGoldDrop) + " gold");
        baseGoldDrop = baseGoldDrop * 1.20;
        goldAmount.textContent = ("You have " + gold + " gold!");

        /* Exp drop System */
        exp = Math.floor(exp + baseExpDrop);
        baseExpDrop = baseExpDrop * 1.20;
        expAmount.textContent = ("You have " + exp + " XP!");
        if(storyToken > 29){
            expIncrease.textContent = ("+ " + Math.floor(baseExpDrop) + " XP");
        }
        else if(storyToken == 6){
            skillTreeStory();
        }
        else if(storyToken == 29){
            theBeginning();
        }

        /* Timers for above */
        timeout = setTimeout(monsterDiedTimer, 4000); /*Monster Has Died Timer*/
        timeout = setTimeout(coinDropTimer, 4000); /*Coin Drop Timer*/
        timeout = setTimeout(expDropTimer, 4000); /*EXP Drop Timer*/

    }

    /* if(storytoken < 24){
        if(health > 1){
            monsterHealth.textContent = "Monster is almost dead";
        }

        if(health > 20){
            monsterHealth.textContent = "Monster is hurt";
        }

        if(health > 50){
            monsterHealth.textContent = "Monster is exhausted";
        }

        if(health > 80){
            monsterHealth.textContent = "Monster is healthy";
        }
    } */

} function buyWeapon(){ /* Upgrade Damage Function*/

if(gold > baseCost - 5){

    gold = gold - baseCost;
    baseCost = baseCost * 10;
    attack = attack * 10;
    goldAmount.textContent = "You have " + gold + " gold!";
    dmgIncrease.textContent = "Your damage has increased!";
    timeout = setTimeout(damageIncreasedTimer, 4000);
    if(storyToken == 57){
        theBeginning();
        displayChanger(wildernessSelect, "block");
        newAreaUnlocked.textContent = "You have unlocked a new area! (Wilderness)";
        timeout = setTimeout(newAreaTimer, 4000);
    }
    
}

//rework this VVV
if(attack >= 10){

    upgradeCost.textContent = "Buy an iron sword! (" + baseCost + " gold)";

}

if(attack >= 100){

    upgradeCost.textContent = "Buy a Diamond sword! (" + baseCost + " gold)";

}

if(attack >= 1000){

    upgradeCost.textContent = "Buy a mythril sword! (" + baseCost + " gold)";

}

if(attack >= 10000){

    displayChanger(upgradeCost, "none");

}

playerDmg.textContent = "You currently deal " + attack + " damage!";

}

function monsterDiedTimer(){ /* "Monster Has Died" Timer Function */ 

monsterHasDied.textContent = "";

}

function damageIncreasedTimer(){ /* "Your Damage Has Increased" Timer Function */

dmgIncrease.textContent = "";

}

function coinDropTimer(){ /* Coin Drop Timer Function */

goldIncrease.textContent = "";

}

function expDropTimer(){ /* Exp Drop Timer Function */

    expIncrease.textContent = "";

}