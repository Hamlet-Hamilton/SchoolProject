


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
    areaButtons.style.display = "none";
    sTButton.style.display = "none";
    sTDiv.style.display = "grid";
    sTBButton.style.display = "block";
    expAmount.style.display = "inline-block";
    playerDmg.style.display = "none"; 
    goldAmount.style.display = "none";
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
    story.style.display = "none";
    monsterIsAttacking.style.display = "block";
    beginningButton1.style.display = "none";
    beginningButton2.style.display = "inline-block";
    beginningButton3.style.display = "inline-block";
    story.style.display = "block";
    beginningButton1.style.display = "block";
    story.style.display = "none";
    beginningButton2.style.display = "none";
    beginningButton3.style.display = "none";
    monsterHealth.style.display = "block";
    mainButtons.style.display = "block";
    attackButton.style.display = "inline-block";
    goldAmount.style.display = "inline-block";
    upgradeCost.style.display = "none";
    monsterHealth.style.display = "none";
    playerDmg.style.display = "none";
    mainButtons.style.display = "none";
    monsterIsAttacking.style.display = "none";
    story.style.display = "block";
    expIncrease.textContent = ("+ " + Math.floor(baseExpDrop) + " XP");
    timeout = setTimeout(expDropTimer, 4000);

}