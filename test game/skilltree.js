


function test05(x01, x02, x03) {
    x01.style.backgroundColor = "block";
}




function skillTreeFunction(){ /* Skill Tree Function */

    if(storyToken == 23){
        displayChanger(story, "none");
        displayChanger(playerDmg, "none");
        displayChanger(sTButton, "none");
        displayChanger(sTDiv, "grid");
        
    } else{skillTreeOpening()}

    if(exp == 1 && storyToken == 23){
        firstSTSkill.style.pointerEvents = "auto";
    }

    
}

function systemSkillFunction(){ /* "Activate system" Skill Tree Skill */
    exp = exp - 1;
    activateSystem = true;
    displayChanger(sTBButton, "block");
    firstSTSkill.style.pointerEvents = "none";
    firstSTSkill.style.backgroundColor = "lightcoral";
    firstSTSkill.textContent = "Activate system (Active)";
    greedSkill1.textContent = "Greed (10XP)";
    prideSkill1.textContent = "Pride (10XP)";
    gluttonySkill1.textContent = "Gluttony (10XP)";
    expAmount.textContent = ("You have " + exp + " XP!")
}

function skillTreeClosing(){ /*Back from skill tree*/
    
    if(storyToken == 23){
        displayChanger(sTDiv, "none");
        displayChanger(story, "block");
        displayChanger(beginningButton1, "block");
        displayChanger(playerDmg, "block");
        displayChanger(sTBButton, "none");
        theBeginning();
    } else{
        displayChanger(mainButtons, "inline-block");
        displayChanger(sTButton, "block");
        displayChanger(upgradeCost, "none");
        displayChanger(monsterIsAttacking, "none");
        displayChanger(monsterHealth, "none");
        displayChanger(attackButton, "none");
        displayChanger(sTDiv, "none");
        displayChanger(sTBButton, "none");
        displayChanger(areaButtons, "block");
        displayChanger(playerDmg, "block");
        displayChanger(goldAmount, "inline-block");
        
    }

}

function gluttonySkillFunction(){ /*Gluttony 1 Skill Tree Skill */
    exp = exp - 10;
    gluttony = true;
    gluttonySkill1.style.pointerEvents = "none";
    gluttonySkill1.style.backgroundColor = "gray";
    gluttonySkill1.textContent = "Gluttony (Awakened)";
    gluttonySkill2.textContent = "Predation (100XP)";
    expAmount.textContent = ("You have " + exp + " XP!")
    skillTreeAppearance();
}

function prideSkillFunction(){ /*Pride 1 Skill Tree Skill */
    exp = exp - 10;
    pride = true;
    prideSkill1.style.pointerEvents = "none";
    prideSkill1.style.backgroundColor = "gray";
    prideSkill1.textContent = "Pride (Awakened)";
    prideSkill2.textContent = "Pity (100XP)";
    expAmount.textContent = ("You have " + exp + " XP!")
    skillTreeAppearance();
}

function greedSkillFunction(){ /*Greed 1 Skill Tree Skill */
    exp = exp - 10;
    greed = true;
    greedSkill1.style.pointerEvents = "none";
    greedSkill1.style.backgroundColor = "gray";
    greedSkill1.textContent = "Greed (Awakened)";
    greedSkill2.textContent = "Hoarding (100XP)";
    expAmount.textContent = ("You have " + exp + " XP!")
    skillTreeAppearance();
}

function predationSkillFunction(){ /*Predation/Gluttony 2 Skill Tree Skill */
    exp = exp - 100;
    predation = true;
    gluttonySkill2.style.pointerEvents = "none";
    gluttonySkill2.style.backgroundColor = "gray";
    gluttonySkill2.textContent = "Predation (Awakened)";
    expAmount.textContent = ("You have " + exp + " XP!")
    skillTreeAppearance();
}

function pitySkillFunction(){ /*Pity/Pride 2 Skill Tree Skill */
    exp = exp - 100;
    pity = true;
    prideSkill2.style.pointerEvents = "none";
    prideSkill2.style.backgroundColor = "gray";
    prideSkill2.textContent = "Pity (Awakened)";
    expAmount.textContent = ("You have " + exp + " XP!")
    skillTreeAppearance();
}

function hoardingSkillFunction(){ /*Hoarding/Greed 2 Skill Tree Skill */
    exp = exp - 100;
    hoarding = true;
    greedSkill2.style.pointerEvents = "none";
    greedSkill2.style.backgroundColor = "gray";
    greedSkill2.textContent = "Hoarding (Awakened)";
    expAmount.textContent = ("You have " + exp + " XP!")
    skillTreeAppearance();
}

function skillTreeOpening(){ //skill tree function (Endgame)
    displayChanger(areaButtons, "none");
    displayChanger(sTButton, "none");
    displayChanger(sTDiv, "grid");
    displayChanger(sTBButton, "block");
    displayChanger(expAmount, "inline-block");
    displayChanger(playerDmg, "none");
    displayChanger(goldAmount, "none");
    skillTreeAppearance(); 

}

function skillTreeAppearance(){ //skill tree skill function (2) (endgame)

    if(exp >= 10 && activateSystem == true && gluttony == false){ /*Gluttony*/
        gluttonySkill1.style.pointerEvents = "auto";
        gluttonySkill1.style.backgroundColor = "white";
    
    }else if(gluttony == true){
        gluttonySkill1.style.pointerEvents = "none";
        gluttonySkill1.style.backgroundColor = "lightcoral";

    }else{
        gluttonySkill1.style.pointerEvents = "none";
        gluttonySkill1.style.backgroundColor = "gray";

    }

    if(exp >= 10 && activateSystem == true && greed == false){ /*greed*/
        greedSkill1.style.pointerEvents = "auto";
        greedSkill1.style.backgroundColor = "white";
        
    }else if(greed == true){
        greedSkill1.style.pointerEvents = "none";
        greedSkill1.style.backgroundColor = "lightcoral";

    }else{
        greedSkill1.style.pointerEvents = "none";
        greedSkill1.style.backgroundColor = "gray";

    }

    if(exp >= 10 && activateSystem == true && pride == false){ /*Pride*/
        prideSkill1.style.pointerEvents = "auto";
        prideSkill1.style.backgroundColor = "white";
        
    }else if(pride == true){
        prideSkill1.style.pointerEvents = "none";
        prideSkill1.style.backgroundColor = "lightcoral";

    }else{
        prideSkill1.style.pointerEvents = "none";
        prideSkill1.style.backgroundColor = "gray";

    }

    if(exp >= 100 && gluttony == true && predation == false){ /*predation*/
        gluttonySkill2.style.pointerEvents = "auto";
        gluttonySkill2.style.backgroundColor = "white";

    }else if(predation == true){
        gluttonySkill2.style.pointerEvents = "none";
        gluttonySkill2.style.backgroundColor = "lightcoral";

    }else{
        gluttonySkill2.style.pointerEvents = "none";
        gluttonySkill2.style.backgroundColor = "gray";

    }

    if(exp >= 100 && greed == true && hoarding == false){ /*hoarding*/
        greedSkill2.style.pointerEvents = "auto";
        greedSkill2.style.backgroundColor = "white";

    }else if(hoarding == true){
        greedSkill2.style.pointerEvents = "none";
        greedSkill2.style.backgroundColor = "lightcoral";

    }else{
        greedSkill2.style.pointerEvents = "none";
        greedSkill2.style.backgroundColor = "gray";

    }

    if(exp >= 100 && pride == true && pity == false){ /*pity*/
        prideSkill2.style.pointerEvents = "auto";
        prideSkill2.style.backgroundColor = "white";

    }else if(pity == true){
        prideSkill2.style.pointerEvents = "none";
        prideSkill2.style.backgroundColor = "lightcoral";

    }else{
        prideSkill2.style.pointerEvents = "none";
        prideSkill2.style.backgroundColor = "gray";

    }

}

function skipButton(){ //skip button function

    storyToken=21;
    exp = 1; 
    displayChanger(beginningButton1, "block");
    displayChanger(beginningButton2, "none");
    displayChanger(beginningButton3, "none");
    displayChanger(attackButton, "inline-block");
    displayChanger(goldAmount, "inline-block");
    displayChanger(upgradeCost, "none");
    displayChanger(monsterHealth, "none");
    displayChanger(playerDmg, "none");
    displayChanger(mainButtons, "none");
    displayChanger(monsterIsAttacking, "none");
    displayChanger(story, "block");
    expIncrease.textContent = ("+ " + Math.floor(baseExpDrop) + " XP");
    timeout = setTimeout(expDropTimer, 4000);

}