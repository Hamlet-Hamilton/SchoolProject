

function theBeginning(){ /* The "tutorial" */

    /*The First Encounter */
    //storyToken = storyToken + 1;
    storyToken++;
    // storyToken += 1; 

    if(storyToken == 1){
        story.textContent = ("You took on an F-rank herb harvesting quest from the adventurer guild in your town.");
    }

    else if(storyToken == 2){
        story.textContent = ("You're physically weak, hence you only task yourself with low-tier quests far away from danger.");
    }

    else if(storyToken == 3){
        story.textContent = ("You collect enough herbs to complete your quest so you start heading back towards your town.");
    }

    else if(storyToken == 4){
        story.textContent = ("On your way back you hear a branch snap behind you.");
    }

    else if(storyToken == 5){
        story.textContent = ("You turn around and see a monster about 3 times your size.");
    }

    else if(storyToken == 6){

        displayChanger(story, "none");
        displayChanger(monsterIsAttacking, "block");
        displayChanger(beginningButton1, "none");
        displayChanger(beginningButton2, "inline-block");
        displayChanger(beginningButton3, "inline-block");
        
    }

    /* The Aftermath */
    else if(storyToken == 8){
        story.textContent = "The monster's corpse turns into ash and gold coins appear out of thin air.";
    }

    else if(storyToken == 9){
        story.textContent = "You gasp for air after pushing your body to it's limit.";
    }

    else if(storyToken == 10){
        story.textContent = "You process that you have survived and cover your face with your hand out of relief.";
    }

    else if(storyToken == 11){
        story.textContent = "Your relief doesn't last very long, you notice a shining blue light underneath the ash that the monster had left behind.";
    }

    else if(storyToken == 12){
        story.textContent = "Standing completely still out of exhastion and fear, you can't do anything except stare at the mysterious light.";
    }

    else if(storyToken == 13){
        story.textContent = "The ash starts to vibrate and an orb that seems to be the cause of the blue light emerges from the ash.";
    }

    else if(storyToken == 14){
        story.textContent = "You stare at the blue orb out of disbelief, you haven't heard about anything like this in the stories the adventurers at the guild told you.";
    }

    else if(storyToken == 15){
        story.textContent = "As you try to make sense of the situation the orb starts to vibrate again.";
    }

    else if(storyToken == 16){
        story.textContent = "The orb forms into the shape of a lance and pierces your chest.";
    }

    else if(storyToken == 17){
        story.textContent = "You black out.";
    }

    else if(storyToken == 18){
        story.textContent = "...";
        expIncrease.textContent = ("+ " + Math.floor(baseExpDrop) + " XP");
        timeout = setTimeout(expDropTimer, 4000);
    }

    else if(storyToken == 19){
        story.textContent = "You wake up, still in the middle of the forest.";
    }

    else if(storyToken == 20){
        story.textContent = "The wound that the orb should have given you has completely healed.";
    }

    else if(storyToken == 21){
        story.textContent = "You notice a familiar blue light shining from a circle shaped mark on your left hand.";
    }

    else if(storyToken == 22){
        story.textContent = "You touch it instinctually.";
    }

    else if(storyToken == 23){
        story.textContent = "A window with a bunch of text and a button appears.";
        displayChanger(sTButton, "block");
        displayChanger(beginningButton1, "none");
        displayChanger(playerDmg, "block");
        displayChanger(mainButtons, "inline-block");
        displayChanger(attackButton, "none");
        displayChanger(goldAmount, "none");
        displayChanger(expAmount, "block")
    }

    else if(storyToken == 24){
        story.textContent = "Your eyes heat up and you start to feel dizzy.";
    }

    else if(storyToken ==25){
        story.textContent = "10 minutes pass.";
    }

    else if(storyToken ==26){
        story.textContent = "You've finally gotten used to this new sensation and the dizziness has left you.";
    }

    else if(storyToken ==27){
        story.textContent = "You plan on heading back to your town so you can ask the adventurers about what you just experienced.";
    }

    else if(storyToken ==28){
        story.textContent = "As you start to head back, another monster appears from between the trees.";
    }

    else if(storyToken ==29){
        displayChanger(monsterIsAttacking, "block");
        displayChanger(beginningButton1, "none");
        displayChanger(beginningButton2, "inline-block");
        displayChanger(beginningButton3, "inline-block");
        beginningButton2.textContent = "Flee!";
        beginningButton3.textContent = "KILL!";
    }

    else if(storyToken == 30){
        displayChanger(story, "block");
        displayChanger(monsterHealth, "none");
        displayChanger(playerDmg, "block");
        displayChanger(attackButton, "none");
        displayChanger(beginningButton1, "block");
        displayChanger(monsterIsAttacking, "none");
        story.textContent = "You defeated a monster once again.";
        
    }

    else if(storyToken == 31){
        story.textContent = "The monsters corpse turns to ash and gold coins appear again.";
    }

    else if(storyToken == 32){
        story.textContent = "A wide smile forms on your face.";
    }

    else if(storyToken == 33){
        story.textContent = "You flinch and start stomping on the pile of ash out of fear as you remember what happened last time you killed a monster.";
    }

    else if(storyToken == 34){
        story.textContent = "You stomp on the pile of ash over and over again until all of the ash has been compressed into the ground.";
    }

    else if(storyToken == 35){
        story.textContent = "No orb seem to have appeared this time.";
    }

    else if(storyToken == 36){
        story.textContent = "You don't know whether to feel relieved or scared.";
    }

    else if(storyToken == 37){
        story.textContent = "This confirms that an orb appearing after you kill a monster is an abnormal occurrence.";
    }

    else if(storyToken == 38){
        story.textContent = "You think about the orb, what it is, and what it did do to you";
    }

    else if(storyToken == 39){
        story.textContent = "It's getting late.";
    }
    else if(storyToken == 40){
        story.textContent = "You realize that you might as well be thinking about this within the safe walls of your village.";
    }

    else if(storyToken == 41){
        story.textContent = ".";
    }

    else if(storyToken == 42){
        story.textContent = "..";
    }

    else if(storyToken == 43){
        story.textContent = "...";
    }
    
    else if(storyToken == 44){
        story.textContent = "You wake up inside of the inn that you're currently living in.";
    }

    else if(storyToken == 45){
        story.textContent = "You decide to visit the adventurer guild so that you can ask about the blue orb and the weird blue mark on your hand.";
    }

    else if(storyToken == 46){
        story.textContent = "No one seems to know anything about it so you leave.";
    }

    else if(storyToken == 47){
        story.textContent = "Your stomach rumbles and you realize that you failed to bring back the herbs you were tasked to gather.";
    }

    else if(storyToken == 48){
        story.textContent = "You worry about rent and money for daily necessities.";
    }

    else if(storyToken == 49){
        story.textContent = "That's when you remember the gold that the monsters had dropped yesterday.";
    }

    else if(storyToken == 50){
        story.textContent = "6 gold coins... That's more than three times as much money as the herb quest would've given you.";
    }

    else if(storyToken == 51){
        story.textContent = "A wide grin forms on your face.";
    }

    else if(storyToken == 52){
        story.textContent = "You smile from cheek to cheek as you consider switching career path.";
    }

    else if(storyToken == 53){
        story.textContent = "You had earned three times as much money from killing monsters as you usually earned in a day collecting herbs.";
    }

    else if(storyToken == 54){
        story.textContent = "You didn't even have a weapon at hand when you killed the monsters previously so killing monsters must be lightwork else if you have a weapon.";
    }

    else if(storyToken == 55){
        story.textContent = "Now that you are used to the monsters movements and you have this weird information window, you might actually be able to live a better life using the money you get from killing monsters.";
    }

    else if(storyToken == 56){
        story.textContent = "It is decided.";
    }

    else if(storyToken == 57){
        story.textContent = "Before you go out in the woods and hunt more monsters you'll need a better weapon.";
        displayChanger(beginningButton1, "none");
        displayChanger(areaButtons, "inline-block");
        newAreaUnlocked.textContent = "You have unlocked new areas! (Inn, Blacksmith)";
        timeout = setTimeout(newAreaTimer, 4000);
    }

    else if(storyToken == 58){
        story.textContent = "Now that you've bought a weapon it's time to test it out in the wild.";
    }



} 

function theBeginningFlight(){

    if(storyToken == 29){
        beginningButton3.textContent = ("KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL KILL!");
    } else{
        story.textContent = ("Out of fear you decide to run away but the monster catches up to you almost immediately and rips you apart. (THE END)");
        displayChanger(beginningButton2, "none");
        displayChanger(beginningButton3, "none");
        displayChanger(story, "block");
        displayChanger(monsterIsAttacking, "none");
        
    }

    

}

function theBeginningFight(){

    displayChanger(story, "none");
    displayChanger(beginningButton2, "none");
    displayChanger(beginningButton3, "none");
    displayChanger(monsterHealth, "block");
    displayChanger(mainButtons, "block");
    displayChanger(attackButton, "inline-block");
    displayChanger(goldAmount, "block");
    displayChanger(upgradeCost, "none");

    if(storyToken == 29){
        displayChanger(story, "none");
        displayChanger(beginningButton2, "none");
        displayChanger(beginningButton3, "none");
        displayChanger(monsterHealth, "block");
        displayChanger(playerDmg, "block");
        displayChanger(mainButtons, "block");
        displayChanger(upgradeCost, "none");
        
    }
    
}

/*Story Idea: Start the game off as seeing the monster health as "healthy" "injured" "barely alive"etc, but then after you buy a 1xp skill called "unlock system" you gain a detailed numberic view of damage and health. */

function skillTreeStory(){ /* Story Part 2, Skill Tree Function */

    storyToken++;
    if(storyToken == 7){
        story.textContent = "You killed the monster.";
        displayChanger(story, "block");
        displayChanger(beginningButton1, "block");
        displayChanger(monsterHealth, "none");
        displayChanger(playerDmg, "none");
        displayChanger(mainButtons, "none");
        displayChanger(monsterIsAttacking, "none");
 
    }

}
