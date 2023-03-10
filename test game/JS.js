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


monsterHealth.textContent = ("Monster's health is " + health);
playerDmg.textContent = ("You currently deal " + attack + " damage!");

//selectArea Buttons
let currentArea = "nil"; 
selectArea.addEventListener("change", function(){
    
    currentArea = this.value;
    if(currentArea === "inn"){my16thFunction()}
    else if(currentArea === "blacksmith"){my17thFunction()}
    else if(currentArea === "wilderness"){my18thFunction()}

    if(storyToken == 58){
        story.style.display = "none";
    }
});

innSelect.addEventListener("change", my16thFunction);
blacksmithSelect.addEventListener("click", my17thFunction);

function theBeginning(){ /* The "tutorial" */

    /*The First Encounter */
    //storyToken = storyToken + 1;
    storyToken++;
    // storyToken += 1; 

    if(storyToken == 1){
        story.textContent = ("You took on an F-rank herb harvesting quest from the adventurer guild in your town.");
    }

    if(storyToken == 2){
        story.textContent = ("You're physically weak, hence you only task yourself with low-tier quests far away from danger.");
    }

    if(storyToken == 3){
        story.textContent = ("You collect enough herbs to complete your quest so you start heading back towards your town.");
    }

    if(storyToken == 4){
        story.textContent = ("On your way back you hear a branch snap behind you.");
    }

    if(storyToken == 5){
        story.textContent = ("You turn around and see a monster about 3 times your size.");
    }

    if(storyToken == 6){
        story.style.display = "none";
        monsterIsAttacking.style.display = "block";
        beginningButton1.style.display = "none";
        beginningButton2.style.display = "inline-block";
        beginningButton3.style.display = "inline-block";
    }

    /* The Aftermath */
    if(storyToken == 8){
        story.textContent = "The monster's corpse turns into ash and gold coins appear out of thin air.";
    }

    if(storyToken == 9){
        story.textContent = "You gasp for air after pushing your body to it's limit.";
    }

    if(storyToken == 10){
        story.textContent = "You process that you have survived and cover your face with your hand out of relief.";
    }

    if(storyToken == 11){
        story.textContent = "Your relief doesn't last very long, you notice a shining blue light underneath the ash that the monster had left behind.";
    }

    if(storyToken == 12){
        story.textContent = "Standing completely still out of exhastion and fear, you can't do anything except stare at the mysterious light.";
    }

    if(storyToken == 13){
        story.textContent = "The ash starts to vibrate and an orb that seems to be the cause of the blue light emerges from the ash.";
    }

    if(storyToken == 14){
        story.textContent = "You stare at the blue orb out of disbelief, you haven't heard about anything like this in the stories the adventurers at the guild told you.";
    }

    if(storyToken == 15){
        story.textContent = "As you try to make sense of the situation the orb starts to vibrate again.";
    }

    if(storyToken == 16){
        story.textContent = "The orb forms into the shape of a lance and pierces your chest.";
    }

    if(storyToken == 17){
        story.textContent = "You black out.";
    }

    if(storyToken == 18){
        story.textContent = "...";
        expIncrease.textContent = ("+ " + Math.floor(baseExpDrop) + " XP");
        timeout = setTimeout(my7thFunction, 4000);
    }

    if(storyToken == 19){
        story.textContent = "You wake up, still in the middle of the forest.";
    }

    if(storyToken == 20){
        story.textContent = "The wound that the orb should have given you has completely healed.";
    }

    if(storyToken == 21){
        story.textContent = "You notice a familiar blue light shining from a circle shaped mark on your left hand.";
    }

    if(storyToken == 22){
        story.textContent = "You touch it instinctually.";
    }

    if(storyToken == 23){
        story.textContent = "A window with a bunch of text and a button appears.";
        sTButton.style.display = "block";
        beginningButton1.style.display = "none";
        playerDmg.style.display = "block";
        mainButtons.style.display = "inline-block";
        attackButton.style.display = "none";
        goldAmount.style.display = "none";
    }

    if(storyToken == 24){
        story.textContent = "Your eyes heat up and you start to feel dizzy.";
    }

    if(storyToken ==25){
        story.textContent = "10 minutes pass.";
    }

    if(storyToken ==26){
        story.textContent = "You've finally gotten used to this new sensation and the dizziness has left you.";
    }

    if(storyToken ==27){
        story.textContent = "You plan on heading back to your town so you can ask the adventurers about what you just experienced.";
    }

    if(storyToken ==28){
        story.textContent = "As you start to head back, another monster appears from between the trees.";
    }

    if(storyToken ==29){
        monsterIsAttacking.style.display = "block";
        beginningButton1.style.display = "none";
        beginningButton2.style.display = "inline-block";
        beginningButton3.style.display = "inline-block";
        beginningButton2.textContent = "Flee!";
        beginningButton3.textContent = "KILL!";
    }

    if(storyToken == 30){
        story.style.display = "block";
        monsterHealth.style.display = "none";
        playerDmg.style.display = "block";
        attackButton.style.display = "none";
        beginningButton1.style.display = "block";
        story.textContent = "You defeated a monster once again.";
        monsterIsAttacking.style.display = "none";
    }

    if(storyToken == 31){
        story.textContent = "The monsters corpse turns to ash and gold coins appear again.";
    }

    if(storyToken == 32){
        story.textContent = "A wide smile forms on your face.";
    }

    if(storyToken == 33){
        story.textContent = "You flinch and start stomping on the pile of ash out of fear as you remember what happened last time you killed a monster.";
    }

    if(storyToken == 34){
        story.textContent = "You stomp on the pile of ash over and over again until all of the ash has been compressed into the ground.";
    }

    if(storyToken == 35){
        story.textContent = "No orb seem to have appeared this time.";
    }

    if(storyToken == 36){
        story.textContent = "You don't know whether to feel relieved or scared.";
    }

    if(storyToken == 37){
        story.textContent = "This confirms that an orb appearing after you kill a monster is an abnormal occurrence.";
    }

    if(storyToken == 38){
        story.textContent = "You think about the orb, what it is, and what it did do to you";
    }

    if(storyToken == 39){
        story.textContent = "It's getting late.";
    }
    if(storyToken == 40){
        story.textContent = "You realize that you might as well be thinking about this within the safe walls of your village.";
    }

    if(storyToken == 41){
        story.textContent = ".";
    }

    if(storyToken == 42){
        story.textContent = "..";
    }

    if(storyToken == 43){
        story.textContent = "...";
    }
    
    if(storyToken == 44){
        story.textContent = "You wake up inside of the inn that you're currently living in.";
    }

    if(storyToken == 45){
        story.textContent = "You decide to visit the adventurer guild so that you can ask about the blue orb and the weird blue mark on your hand.";
    }

    if(storyToken == 46){
        story.textContent = "No one seems to know anything about it so you leave.";
    }

    if(storyToken == 47){
        story.textContent = "Your stomach rumbles and you realize that you failed to bring back the herbs you were tasked to gather.";
    }

    if(storyToken == 48){
        story.textContent = "You worry about rent and money for daily necessities.";
    }

    if(storyToken == 49){
        story.textContent = "That's when you remember the gold that the monsters had dropped yesterday.";
    }

    if(storyToken == 50){
        story.textContent = "6 gold coins... That's more than three times as much money as the herb quest would've given you.";
    }

    if(storyToken == 51){
        story.textContent = "A wide grin forms on your face.";
    }

    if(storyToken == 52){
        story.textContent = "You smile from cheek to cheek as you consider switching career path.";
    }

    if(storyToken == 53){
        story.textContent = "You had earned three times as much money from killing monsters as you usually earned in a day collecting herbs.";
    }

    if(storyToken == 54){
        story.textContent = "You didn't even have a weapon at hand when you killed the monsters previously so killing monsters must be lightwork if you have a weapon.";
    }

    if(storyToken == 55){
        story.textContent = "Now that you are used to the monsters movements and you have this weird information window, you might actually be able to live a better life using the money you get from killing monsters.";
    }

    if(storyToken == 56){
        story.textContent = "It is decided.";
    }

    if(storyToken == 57){
        story.textContent = "Before you go out in the woods and hunt more monsters you'll need a better weapon.";
        beginningButton1.style.display = "none";
        areaButtons.style.display = "block";
        newAreaUnlocked.textContent = "You have unlocked new areas! (Inn, Blacksmith)";
        timeout = setTimeout(my19thFunction, 4000);
    }

    if(storyToken == 58){
        story.textContent = "Now that you've bought a weapon it's time to test it out in the wild.";
    }



    // goldAmount.style.display = "inline-block";





} 

function theBeginningFlight(){

    if(storyToken == 29){
        beginningButton3.textContent = ("KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL!");
    } else{
        story.textContent = ("Out of fear you decide to run away but the monster catches up to you almost immediately and rips you apart. (THE END)");
        beginningButton2.style.display = "none";
        beginningButton3.style.display = "none";
        story.style.display = "block";
        monsterIsAttacking.style.display = "none";
    }

    

}

function theBeginningFight(){

    story.style.display = "none";
    beginningButton2.style.display = "none";
    beginningButton3.style.display = "none";
    monsterHealth.style.display = "block";
    mainButtons.style.display = "block";
    attackButton.style.display = "inline-block";
    goldAmount.style.display = "inline-block";
    upgradeCost.style.display = "none";

    if(storyToken == 29){
        story.style.display = "none";
        beginningButton2.style.display = "none";
        beginningButton3.style.display = "none";
        monsterHealth.style.display = "block";
        playerDmg.style.display = "block";
        mainButtons.style.display = "block";
        upgradeCost.style.display = "none";
    }
    
}

/*Story Idea: Start the game off as seeing the monster health as "healthy" "injured" "barely alive"etc, but then after you buy a 1xp skill called "unlock system" you gain a detailed numberic view of damage and health. */

function skillTreeStory(){ /* Story Part 2, Skill Tree Function */

    storyToken++;
    if(storyToken == 7){
        story.textContent = "You killed the monster.";
        story.style.display = "block";
        beginningButton1.style.display = "block";
        monsterHealth.style.display = "none";
        playerDmg.style.display = "none";
        mainButtons.style.display = "none";
        monsterIsAttacking.style.display = "none";
        story.style.display = "block";
    }

}

function my1stFunction(){ /* Monster health Function */
    
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
        timeout = setTimeout(my3rdFunction, 4000); /*Monster Has Died Timer*/
        timeout = setTimeout(my5thFunction, 4000); /*Coin Drop Timer*/
        timeout = setTimeout(my7thFunction, 4000); /*EXP Drop Timer*/

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

} 

function my2ndFunction(){ /* Upgrade Damage Function*/

    if(gold > baseCost - 5){

        gold = gold - baseCost;
        baseCost = baseCost * 10;
        attack = attack * 10;
        goldAmount.textContent = "You have " + gold + " gold!";
        dmgIncrease.textContent = "Your damage has increased!";
        timeout = setTimeout(my4thFunction, 4000);
        if(storyToken == 57){
            theBeginning();
            wildernessSelect.style.display = "block";
            newAreaUnlocked.textContent = "You have unlocked a new area! (Wilderness)";
            timeout = setTimeout(my19thFunction, 4000);
        }
        
    }

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

        upgradeCost.style.display = "none";

    }

    playerDmg.textContent = "You currently deal " + attack + " damage!";

}

function my3rdFunction(){ /* "Monster Has Died" Timer Function */ 
    
    monsterHasDied.textContent = "";

}

function my4thFunction(){ /* "Your Damage Has Increased" Timer Function */

    dmgIncrease.textContent = "";

}

function my5thFunction(){ /* Coin Drop Timer Function */

    goldIncrease.textContent = "";

}

function my6thFunction(){ /* Skill Tree Function */



    if(storyToken == 23){
        story.style.display = "none";
        playerDmg.style.display = "none";
        sTButton.style.display = "none";
        sTDiv.style.display = "grid";
    } else{my20thFunction()}

    if(exp == 1 && storyToken == 23){
        firstSTSkill.style.pointerEvents = "auto";
    }

    
}

function my7thFunction(){ /* Exp Drop Timer Function */

    expIncrease.textContent = "";

}

function my8thFunction(){ /* "Activate system" Skill Tree Skill */
    exp = exp - 1;
    activateSystem = true;
    sTBButton.style.display = "block";
    firstSTSkill.style.pointerEvents = "none";
    firstSTSkill.style.backgroundColor = "gray";
    firstSTSkill.textContent = "Activate system (Active)";
    greedSkill1.textContent = "Greed (10XP)";
    prideSkill1.textContent = "Pride (10XP)";
    gluttonySkill1.textContent = "Gluttony (10XP)";
    expAmount.textContent = ("You have " + exp + " XP!")
}

function my9thFunction(){ /*Back from skill tree*/
    
    if(storyToken == 23){
        sTDiv.style.display = "none";
        story.style.display = "block";
        beginningButton1.style.display = "block";
        playerDmg.style.display = "block";
        sTBButton.style.display = "none";
        theBeginning();
    } else{
        mainButtons.style.display = "inline-block";
        sTButton.style.display = "block";
        upgradeCost.style.display = "none";
        monsterIsAttacking.style.display = "none";
        monsterHealth.style.display = "none";
        attackButton.style.display = "none";
        sTDiv.style.display = "none";
        sTBButton.style.display = "none";
        areaButtons.style.display = "block";
        playerDmg.style.display = "block"; 
        goldAmount.style.display = "inline-block";
    }

}

function my10thFunction(){ /*Gluttony 1 Skill Tree Skill */
    exp = exp - 10;
    gluttony = true;
    gluttonySkill1.style.pointerEvents = "none";
    gluttonySkill1.style.backgroundColor = "gray";
    gluttonySkill1.textContent = "Gluttony (Awakened)";
    gluttonySkill2.textContent = "Predation (100XP)";
    expAmount.textContent = ("You have " + exp + " XP!")
    my21stFunction();
}

function my11thFunction(){ /*Pride 1 Skill Tree Skill */
    exp = exp - 10;
    pride = true;
    prideSkill1.style.pointerEvents = "none";
    prideSkill1.style.backgroundColor = "gray";
    prideSkill1.textContent = "Pride (Awakened)";
    prideSkill2.textContent = "Pity (100XP)";
    expAmount.textContent = ("You have " + exp + " XP!")
    my21stFunction();
}

function my12thFunction(){ /*Greed 1 Skill Tree Skill */
    exp = exp - 10;
    greed = true;
    greedSkill1.style.pointerEvents = "none";
    greedSkill1.style.backgroundColor = "gray";
    greedSkill1.textContent = "Greed (Awakened)";
    greedSkill2.textContent = "Hoarding (100XP)";
    expAmount.textContent = ("You have " + exp + " XP!")
    my21stFunction();
}

function my13thFunction(){ /*Predation/Gluttony 2 Skill Tree Skill */
    exp = exp - 100;
    predation = true;
    gluttonySkill2.style.pointerEvents = "none";
    gluttonySkill2.style.backgroundColor = "gray";
    gluttonySkill2.textContent = "Predation (Awakened)";
    expAmount.textContent = ("You have " + exp + " XP!")
    my21stFunction();
}

function my14thFunction(){ /*Pity/Pride 2 Skill Tree Skill */
    exp = exp - 100;
    pity = true;
    prideSkill2.style.pointerEvents = "none";
    prideSkill2.style.backgroundColor = "gray";
    prideSkill2.textContent = "Pity (Awakened)";
    expAmount.textContent = ("You have " + exp + " XP!")
    my21stFunction();
}

function my15thFunction(){ /*Hoarding/Greed 2 Skill Tree Skill */
    exp = exp - 100;
    hoarding = true;
    greedSkill2.style.pointerEvents = "none";
    greedSkill2.style.backgroundColor = "gray";
    greedSkill2.textContent = "Hoarding (Awakened)";
    expAmount.textContent = ("You have " + exp + " XP!")
    my21stFunction();
}

function my16thFunction(){ /*Inn area select function*/
    mainButtons.style.display = "block";
    sTButton.style.display = "block";
    upgradeCost.style.display = "none";
    monsterIsAttacking.style.display = "none";
    monsterHealth.style.display = "none";
    attackButton.style.display = "none";
}

function my17thFunction(){ /*Blacksmith are select function */
    mainButtons.style.display = "block";
    upgradeCost.style.display = "block";
    sTButton.style.display = "none";
    monsterIsAttacking.style.display = "none";
    monsterHealth.style.display = "none";
    attackButton.style.display = "none";
}

function my18thFunction(){ /*Wilderness area select function */
    mainButtons.style.display = "block";
    upgradeCost.style.display = "none";
    sTButton.style.display = "none";
    monsterIsAttacking.style.display = "block";
    monsterHealth.style.display = "block";
    attackButton.style.display = "block";
    
}

function my19thFunction(){ /* "New area unlocked" Timer Function */
    newAreaUnlocked.textContent = "";
}

function my20thFunction(){ //skill tree function (Endgame)
    areaButtons.style.display = "none";
    sTButton.style.display = "none";
    sTDiv.style.display = "grid";
    sTBButton.style.display = "block";
    expAmount.style.display = "inline-block";
    playerDmg.style.display = "none"; 
    goldAmount.style.display = "none";

    console.log(activateSystem);
    console.log(exp);
    my21stFunction(); 

}

function my21stFunction(){ //skill tree function (2) (endagame)
    if(exp >= 10 && activateSystem == true && gluttony == false){ /*Gluttony*/
        gluttonySkill1.style.pointerEvents = "auto";
        gluttonySkill1.style.backgroundColor = "white";
    
    }else{
        gluttonySkill1.style.pointerEvents = "none";
        gluttonySkill1.style.backgroundColor = "gray";

    }

    if(exp >= 10 && activateSystem == true && greed == false){ /*greed*/
        greedSkill1.style.pointerEvents = "auto";
        greedSkill1.style.backgroundColor = "white";
        
    }else{
        greedSkill1.style.pointerEvents = "none";
        greedSkill1.style.backgroundColor = "gray";

    }

    if(exp >= 10 && activateSystem == true && pride == false){ /*Pride*/
        prideSkill1.style.pointerEvents = "auto";
        prideSkill1.style.backgroundColor = "white";
        
    }else{
        prideSkill1.style.pointerEvents = "none";
        prideSkill1.style.backgroundColor = "gray";

    }

    if(exp >= 100 && gluttony == true && predation == false){ /*predation*/
        gluttonySkill2.style.pointerEvents = "auto";
        gluttonySkill2.style.backgroundColor = "white";

    }else{
        gluttonySkill2.style.pointerEvents = "none";
        gluttonySkill2.style.backgroundColor = "gray";

    }

    if(exp >= 100 && greed == true && hoarding == false){ /*hoarding*/
        greedSkill2.style.pointerEvents = "auto";
        greedSkill2.style.backgroundColor = "white";

    }else{
        greedSkill2.style.pointerEvents = "none";
        greedSkill2.style.backgroundColor = "gray";

    }

    if(exp >= 100 && pride == true && pity == false){ /*pity*/
        prideSkill2.style.pointerEvents = "auto";
        prideSkill2.style.backgroundColor = "white";

    }else{
        prideSkill2.style.pointerEvents = "none";
        prideSkill2.style.backgroundColor = "gray";

    }

}
