
var lobbyScene = document.getElementById("lobbyScene");
var lobbyScene1 = document.getElementById("lobbyScene1");
var lobbyScene2 = document.getElementById("lobbyScene2");

//----------------Juke Box Area----------------//
var jukeBox = document.getElementById("jukeBox");
var PetAreaButton = document.getElementById("PetAreaButton");
var PhonographRoom = document.getElementById("PhonographRoom")

//-------------------Pet Area------------------//
var petArea = document.getElementById("petArea");
var leftButton = document.getElementById("left");
var rightButton = document.getElementById("right");

var warpTrotterButton = document.getElementById("warpTrotterButton");
var trotterPage = document.getElementById("trotterPage");
var heart = document.getElementById("heart");
var selectTrotter1 = document.getElementById("selectTrotter1");
var selectTrotter12 = document.getElementById("selectTrotter12");
var selectTrotter13 = document.getElementById("selectTrotter13");

var selectTrotter2_1 = document.getElementById("selectTrotter2_1");
var selectTrotter2_2 = document.getElementById("selectTrotter2_2");
var selectTrotter2_3 = document.getElementById("selectTrotter2_3");

var exitPage = document.getElementById("exitPage");
var Trailblazer_dialogueBox = document.getElementById("Trailblazer_dialogueBox");


var trotterConvo1 = document.getElementById("trotterConvo1");
var trotterConvo2 = document.getElementById("trotterConvo2");
var trotterConvo3 = document.getElementById("trotterConvo3");
var trotterConvo5 = document.getElementById("trotterConvo5");

var warp_trotter = document.getElementById("warp_trotter");

var treat = 0;
var reveal_counter = 0;
var swarm_trigger = 0;

//---------------------pet area paintings-------//
var paintingsButton = document.getElementById("paintingsButton");
var petAreaPaintings = document.getElementById("petAreaPaintings");
var fromPaintings = document.getElementById("fromPaintings");

//-------------------Hallway------------------//
var returnToPetArea = document.getElementById("returnToPetArea");

var option_button_sound = new Audio('option_button_sound.mp3');
var acquire_items = new Audio('acquire_items.mp3');
var creepySound2 = new Audio('creepy_sound_2.mp3');

var doorHatchOpens = new Audio('hydrolic_door_open.mp3');
//------footsteps sounds------//
var footstep1 = new Audio('footsteps_1.mp3');
var footstep2 = new Audio('footsteps_2.mp3');
var footstep3 = new Audio('footsteps_3.mp3');
var footstep4 = new Audio('footsteps_4.mp3');
var footstep5 = new Audio('footsteps_5.mp3');

var doorOpen = new Audio('door_Open.mp3');
var doorClose = new Audio('door_Close.mp3');

var alien_sound1 = new Audio('alien_sound1.mp3');


var musicButton = document.getElementById("PhonoGraphButton");

var lobby = document.getElementById("lobby");
var hallwayButton = document.getElementById("hallwayButton");
var hallwayRoom = document.getElementById("hallwayRoom");
var returnToLobby = document.getElementById("returnToLobby");
var returnToJukeBox = document.getElementById("returnToJukeBox");

var DanHengRoomButton = document.getElementById("DanHengRoomButton");
var DanHengRoom = document.getElementById("DanHengRoom");

var returnToHallway = document.getElementById("returnToHallway");
var returnToHallwayFromMarch = document.getElementById("returnToHallwayFromMarch");

var MarchRoomButton = document.getElementById("MarchRoomButton");
var MarchRoom = document.getElementById("MarchRoom");

// --------------------------March Room--------------------------//

var MarchCouchButton = document.getElementById("MarchCouchButton");
var MarchTableButton = document.getElementById("MarchTableButton");
var MarchRoomCouch = document.getElementById("MarchRoomCouch");
var returnMarchRoomCouch = document.getElementById("returnMarchRoomCouch");
var returnMarchRoomTable = document.getElementById("returnMarchRoomTable");
// --------------------------March Room Couch Screen--------------------------//
var marchScreenButton = document.getElementById("marchScreenButton");
var returnMarchCouchScreen = document.getElementById("returnMarchCouchScreen");
var MarchRoomCouchScreen = document.getElementById("MarchRoomCouchScreen");

// --------------------------March Room Couch Table--------------------------//
var marchCouchTableButton = document.getElementById("marchCouchTableButton");
var MarchRoomCouchTable = document.getElementById("MarchRoomCouchTable");
var returnMarchCouchTable = document.getElementById("returnMarchCouchTable");

var pink_rollsButton = document.getElementById("pink_rollsButton");
var pink_rolls = document.getElementById("pink_rolls");
var MarchPinkRollsMonologue = document.getElementById("MarchPinkRollsMonologue");
var exitPageMarchPinkRolls = document.getElementById("exitPageMarchPinkRolls");
// --------------------------March Room Desk Table--------------------------//
var MarchTableDeskButton = document.getElementById("MarchTableDeskButton");
var MarchDeskTable = document.getElementById("MarchDeskTable");
var returnDeskTable = document.getElementById("returnDeskTable");
var glueButton = document.getElementById("glueButton");




var footStepCount = 0;
//-------------------footstep counter----------------//
function footStepCounter(){
    footStepCount ++;
    if(footStepCount <= 5){
        switch(footStepCount){
            case 1:
                footstep1.play();
                break;
            case 2:
                footstep2.play();
                break;
            case 3:
                footstep3.play();
                break;
            case 4:
                footstep4.play();
                break;
            case 5:
                footstep5.play();
                break;
        }
    }else{
        footStepCount = 1;
        footstep1.play();
    }
}



var optionButton = document.getElementById("optionButton");
var optionTray = document.getElementById("optionTray");
optionButton.onclick = function() {
    if(optionTray.classList.contains("optionTray_Appear")){
        optionTray.classList.remove("optionTray_Appear");
        optionButton.classList.remove("optionButton_Rotate");
        itemsContainer.classList.remove("itemsContainer_Appear");
        option_button_sound.play();
    }else{
        optionTray.classList.add("optionTray_Appear");
        optionButton.classList.remove("optionButton_Rotate");
        optionButton.classList.add("optionButton_Rotate");
        option_button_sound.play();
    }
}


//------------Juke Box Area-------///
var locked = document.getElementById("locked");
var exitDoorLocked1 = document.getElementById("exitDoorLocked1");
var hatch = document.getElementById("hatch");
mainDoorUnlock = false;
PetAreaButton.onclick = function(){
    if(mainDoorUnlock == true){
        hatch.classList.add("hatch_Appear");
        hallwayRoom.classList.add("hallwayRoom_Appear");
        jukeBox.classList.remove("jukeBox_Appear");
        doorHatchOpens.play();
        alien_sound1.play();
        audioElement1.play();
    }else{
        locked.classList.add("locked_Appear");
        doorClose.play();
    }
   
}
exitDoorLocked1.onclick = function(){
    locked.classList.remove("locked_Appear");
}
//------------petArea -------///
leftButton.onclick = function(){
    hatch.classList.remove("hatch_Appear");
    petArea.classList.remove("petArea_Appear");
    jukeBox.classList.add("jukeBox_Appear");
    doorClose.play();
}
rightButton.onclick = function(){
    petArea.classList.remove("petArea_Appear");
    hallwayRoom.classList.add("hallwayRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
warpTrotterButton.onclick = function(){
    if(treat == 2){
        trotterPage.classList.add("trotterPage_Appear");
        selectTrotter2_1.classList.add("trotterFed");
        selectTrotter2_2.classList.add("trotterFed");
        selectTrotter2_3.classList.add("trotterFed");
        petArea.classList.add("pet_area_blur");
        heart.classList.add("heart_Disappear");
    }else{
        trotterPage.classList.add("trotterPage_Appear");
        petArea.classList.add("pet_area_blur");
        heart.classList.add("heart_Disappear");
    }
}
selectTrotter1.onclick = function(){
    heart.classList.remove("heart_Disappear");
    heart.classList.add("heart_Appear");
    trotterPage.classList.add("trotterPage_Appear");
    trotterConvo1.classList.add("trotterConvo1_Disappear");
    trotterConvo2.classList.add("trotterConvo2_Appear");
}
selectTrotter12.onclick = function(){
    trotterConvo2.classList.remove("trotterConvo2_Appear");
    trotterConvo3.classList.add("trotterConvo3_Appear");
}
selectTrotter13.onclick = function(){
    trotterConvo2.classList.add("trotterConvo2_Appear");
    trotterConvo3.classList.remove("trotterConvo3_Appear");
}


var pickUpComp1Paper3 = document.getElementById("pickUpComp1Paper3");
var exitComp1Paper3 = document.getElementById("exitComp1Paper3");
var warp_trotter = document.getElementById("warp_trotter");

exitComp1Paper3.onclick = function(){
    pickUpComp1Paper3.style.opacity = "0";
    pickUpComp1Paper3.style.pointerEvents = "none";
}
selectTrotter2_1.onclick = function(){
    if(treat == 1){
        warp_trotter.classList.add("warp_trotter_Disappear");
        pickUpComp1Paper3.style.opacity = "1";
        pickUpComp1Paper3.style.pointerEvents = "all";
        warp_trotter.style.opacity = "0";
        trotterConvo1.classList.add("trotterConvo1_Disappear");
        trotterConvo2.classList.remove("trotterConvo2_Appear");
        trotterConvo3.classList.remove("trotterConvo3_Appear");

        heart.classList.remove("heart_Appear");
        heart.classList.add("heart_Disappear");

        treat = 2;

        items_num++;
        items_image = '<img src="comp1_piece3.png">';
        item_name = "piece of paper 6";
        comp1_code3 = true;
        addToInventory();
    }
    else{
        trotterConvo5.classList.add("trotterConvo5_Appear");
        trotterConvo1.classList.add("trotterConvo1_Disappear");
        trotterConvo2.classList.remove("trotterConvo2_Appear");
        trotterConvo3.classList.remove("trotterConvo3_Appear");
    }
}
selectTrotter2_2.onclick = function(){
    if(treat == 1){
        warp_trotter.classList.add("warp_trotter_Disappear");
        pickUpComp1Paper3.style.opacity = "1";
        pickUpComp1Paper3.style.pointerEvents = "all";
        warp_trotter.style.opacity = "0";
        trotterConvo1.classList.add("trotterConvo1_Disappear");
        trotterConvo2.classList.remove("trotterConvo2_Appear");
        trotterConvo3.classList.remove("trotterConvo3_Appear");
        
        heart.classList.remove("heart_Appear");
        heart.classList.add("heart_Disappear");
        
        treat = 2;

        items_num++;
        items_image = '<img src="comp1_piece3.png">';
        item_name = "piece of paper 6";
        comp1_code3 = true;
        addToInventory();
    }
    else{ 

        trotterConvo5.classList.add("trotterConvo5_Appear");
        trotterConvo1.classList.add("trotterConvo1_Disappear");
        trotterConvo2.classList.remove("trotterConvo2_Appear");
        trotterConvo3.classList.remove("trotterConvo3_Appear");
    }
}
selectTrotter2_3.onclick = function(){
    if(treat == 1){
        warp_trotter.classList.add("warp_trotter_Disappear");
        pickUpComp1Paper3.style.opacity = "1";
        pickUpComp1Paper3.style.pointerEvents = "all";
        warp_trotter.style.opacity = "0";
        trotterConvo1.classList.add("trotterConvo1_Disappear");
        trotterConvo2.classList.remove("trotterConvo2_Appear");
        trotterConvo3.classList.remove("trotterConvo3_Appear");

        heart.classList.remove("heart_Appear");
        heart.classList.add("heart_Disappear");
        
        treat = 2;

        items_num++;
        items_image = '<img src="comp1_piece3.png">';
        item_name = "piece of paper 6";
        comp1_code3 = true;
        addToInventory();
    }
    else{
        trotterConvo5.classList.add("trotterConvo5_Appear");
        trotterConvo1.classList.add("trotterConvo1_Disappear");
        trotterConvo2.classList.remove("trotterConvo2_Appear");
        trotterConvo3.classList.remove("trotterConvo3_Appear");
    }
}



exitPage.onclick = function(){
    trotterPage.classList.remove("trotterPage_Appear");
    petArea.classList.remove("pet_area_blur");
    trotterConvo1.classList.remove("trotterConvo1_Disappear");
    trotterConvo2.classList.remove("trotterConvo2_Appear");
    trotterConvo3.classList.remove("trotterConvo3_Appear");
    trotterConvo5.classList.remove("trotterConvo5_Appear");
    warp_trotter.classList.remove("warp_trotter_Disappear");
    heart.classList.remove("heart_Appear");
}


//--------------Pet area paintings-------------//
paintingsButton.onclick = function(){
    petArea.classList.remove("petArea_Appear");
    petAreaPaintings.classList.add("petAreaPaintings_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromPaintings.onclick = function(){
    petArea.classList.add("petArea_Appear");
    petAreaPaintings.classList.remove("petAreaPaintings_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

//-----------hallway appear-------//
hallwayButton.onclick = function(){
    lobby.classList.add("lobby_Disappear");
    jukeBox.classList.add("jukeBox_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
//--------------------Pet Area-----------------//
returnToLobby.onclick = function() {
    lobby.classList.remove("lobby_Disappear");
    jukeBox.classList.remove("jukeBox_Appear");
    hallwayRoom.classList.remove("hallwayRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
//--------------------------Hall way------------------------//
returnToPetArea.onclick = function(){
    petArea.classList.add("petArea_Appear");
    hallwayRoom.classList.remove("hallwayRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

DanHengRoomButton.onclick = function() {
    if(DanHengRoomPass == true){
        DanHengRoom.classList.add("DanHengRoom_Appear");
        hallwayRoom.classList.remove("hallwayRoom_Appear");
        doorOpen.play();
    }else{
        doorClose.play();
        doorLocked.style.opacity = "1";
        doorLocked.style.pointerEvents = "all";
    }
}
returnToHallway.onclick = function() {
    DanHengRoom.classList.remove("DanHengRoom_Appear");
    hallwayRoom.classList.add("hallwayRoom_Appear");
    doorClose.play();
}

returnToHallwayFromMarch.onclick = function() {
    MarchRoom.classList.remove("MarchRoom_Appear"); 
    hallwayRoom.classList.add("hallwayRoom_Appear");
    doorClose.play();
}

MarchRoomButton.onclick = function() {
    if(MarchRoomPass == true) {
        MarchRoom.classList.add("MarchRoom_Appear"); 
        hallwayRoom.classList.remove("hallwayRoom_Appear");
        doorOpen.play();
    }else{
        doorClose.play();
        doorLocked.style.opacity = "1";
        doorLocked.style.pointerEvents = "all";
    }
}

//---------------------March Room------------------------//
MarchCouchButton.onclick = function() {
    MarchRoomCouch.classList.add("MarchRoomCouch_Appear"); 
    MarchRoom.classList.remove("MarchRoom_Appear"); 
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
MarchTableButton.onclick = function() {
    MarchRoomTable.classList.add("MarchRoomTable_Appear"); 
    MarchRoom.classList.remove("MarchRoom_Appear"); 
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
returnMarchRoomCouch.onclick = function() {
    MarchRoomCouch.classList.remove("MarchRoomCouch_Appear"); 
    MarchRoom.classList.add("MarchRoom_Appear"); 
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
returnMarchRoomTable.onclick = function() {
    MarchRoomTable.classList.remove("MarchRoomTable_Appear"); 
    MarchRoom.classList.add("MarchRoom_Appear"); 
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
//---------------------March Room Couch ------------------------//
marchScreenButton.onclick = function() {
    if(acquired_comp1_piece1 == false){
        MarchRoomCouchScreen.classList.add("MarchRoomCouchScreen_Appear"); 
        MarchRoomCouch.classList.remove("MarchRoomCouch_Appear");  
        footStepCounter();
        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);      
        comp1_piece1.style.opacity = "1";
        comp1_piece1.style.pointerEvents = "all";
    }else{
        MarchRoomCouchScreen.classList.add("MarchRoomCouchScreen_Appear"); 
        MarchRoomCouch.classList.remove("MarchRoomCouch_Appear");  
        footStepCounter();
        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);      
        comp1_piece1.style.opacity = "0";
        comp1_piece1.style.pointerEvents = "none";
    }
    
}
returnMarchCouchScreen.onclick = function() {
    MarchRoomCouchScreen.classList.remove("MarchRoomCouchScreen_Appear"); 
    MarchRoomCouch.classList.add("MarchRoomCouch_Appear");  
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

//---------------------March Room Couch Table ------------------------//
marchCouchTableButton.onclick = function() {
    MarchRoomCouchTable.classList.add("MarchRoomCouchTable_Appear"); 
    MarchRoomCouch.classList.remove("MarchRoomCouch_Appear");  
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
returnMarchCouchTable.onclick = function() {
    MarchRoomCouchTable.classList.remove("MarchRoomCouchTable_Appear"); 
    MarchRoomCouch.classList.add("MarchRoomCouch_Appear");
    footStepCounter();  
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

pink_rollsButton.onclick = function() {
    MarchPinkRollsTable.classList.add("MarchPinkRollsTable_Blur"); 
    MarchPinkRollsMonologue.classList.add("MarchPinkRollsMonologue_Appear");  
    treat = 1;
    acquire_items.play();

    items_num++;
    items_image = '<img src="pink_rolls.webp">';
    item_name = "pinkrolls";
    addToInventory();

    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

exitPageMarchPinkRolls.onclick = function() {
    MarchPinkRollsTable.classList.remove("MarchPinkRollsTable_Blur"); 
    MarchPinkRollsMonologue.classList.remove("MarchPinkRollsMonologue_Appear");  
    pink_rolls.classList.add("pink_rolls_Disappear"); 
    pink_rollsButton.classList.add("pink_rollsButton_Disappear");
}
//---------------------March Room Desk Table ------------------------//
MarchTableDeskButton.onclick = function() {
    MarchDeskTable.classList.add("MarchDeskTable_Appear"); 
    MarchRoomTable.classList.remove("MarchRoomTable_Appear");  
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
returnDeskTable.onclick = function() {
    MarchDeskTable.classList.remove("MarchDeskTable_Appear"); 
    MarchRoomTable.classList.add("MarchRoomTable_Appear");  
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}





// --------------------------Password Desk Table--------------------------//
var number_one = document.getElementById("number_one");
var number_two = document.getElementById("number_two");
var number_three = document.getElementById("number_three");
var number_four = document.getElementById("number_four");
var number_five = document.getElementById("number_five");
var number_six = document.getElementById("number_six");
var enter = document.getElementById("enter");
var computer_Code = document.getElementById("computer_Code");
var hologramButton = document.getElementById("hologramButton");
var biometrics = document.getElementById("biometrics");
var exitBiometrics = document.getElementById("exitBiometrics");
var MarchTableBiometrics = document.getElementById("MarchTableBiometrics");

var Dan_Heng_key = document.getElementById("Dan_Heng_key");
var pick_Dan_Heng_Key = document.getElementById("pick_Dan_Heng_Key");
var exitDanHengKey = document.getElementById("exitDanHengKey");


var clicking_sound = new Audio('clicking_sound.mp3');
digit_counter = 0;
digit_value = 0;

//-----------------------------Computer 1-----------------------------//

Dan_Heng_key.onclick = function() {
    Dan_Heng_key.style.opacity= '0';
    Dan_Heng_key.style.pointerEvents= 'none';

    pick_Dan_Heng_Key.style.opacity= '1';
    pick_Dan_Heng_Key.style.pointerEvents= 'all';
    acquire_items.play();

    items_num++;
    items_image = '<img src="key.png">';
    item_name = "room 1 key";
    addToInventory();

    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
    DanHengRoomPass = true;
}
exitDanHengKey.onclick = function() {
    pick_Dan_Heng_Key.style.opacity= '0';
    pick_Dan_Heng_Key.style.pointerEvents= 'none';
}


hologramButton.onclick = function() {
    acquire_items.play();
    biometrics.classList.add("biometrics_Appear");
    MarchTableBiometrics.classList.add("MarchTableBiometrics_Blur");

    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
exitBiometrics.onclick = function() {
    biometrics.classList.remove("biometrics_Appear");
    MarchTableBiometrics.classList.remove("MarchTableBiometrics_Blur");
}

number_one.onclick = function() {
    computer_Code.classList.remove("wrongPassword");
    computer_Code.classList.remove("correctPassword");
    digit_counter++;
    digit_value = 1;
    clicking_sound.play();
    clickerSound();
    digitalizer();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_two.onclick = function() {
    computer_Code.classList.remove("wrongPassword");
    computer_Code.classList.remove("correctPassword");
    digit_counter++;
    digit_value = 2;
    clickerSound();
    digitalizer();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_three.onclick = function() {
    computer_Code.classList.remove("wrongPassword");
    computer_Code.classList.remove("correctPassword");
    digit_counter++;
    digit_value = 3;
    clickerSound();
    digitalizer();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_four.onclick = function() {
    computer_Code.classList.remove("wrongPassword");
    computer_Code.classList.remove("correctPassword");
    digit_counter++;
    digit_value = 4;
    clickerSound();
    digitalizer();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_five.onclick = function() {
    computer_Code.classList.remove("wrongPassword"); 
    computer_Code.classList.remove("correctPassword");
    digit_counter++;
    digit_value = 5;
    clickerSound();
    digitalizer();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_six.onclick = function() {
    computer_Code.classList.remove("wrongPassword"); 
    computer_Code.classList.remove("correctPassword");
    digit_counter++;
    digit_value = 6;
    clickerSound();
    digitalizer();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

enter.onclick = function() {
    computer_Code.classList.remove("wrongPassword");
    checkPassword();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

function digitalizer() {
    if (digit_counter > 4) {
        digit_counter = 1;
    }
    switch (digit_counter) {
    case 1:
    document.getElementById("digit_one").innerHTML = digit_value;
    passwordValue1 = digit_value;
    break;
    case 2:
    document.getElementById("digit_two").innerHTML = digit_value;
    passwordValue2 = digit_value;
    break;
    case 3:
    document.getElementById("digit_three").innerHTML = digit_value;
    passwordValue3 = digit_value;
    break;
    case 4:
    document.getElementById("digit_four").innerHTML = digit_value;
    passwordValue4 = digit_value;
    break;

    default:
    break;
    }
}

var clicking_sound1 = new Audio('clicking_sound1.mp3');
var clicking_sound3 = new Audio('clicking_sound3.mp3');
var clicking_sound4 = new Audio('clicking_sound4.mp3');
var correct_password = new Audio('password_correct.mp3');
var incorrect_password = new Audio('password_incorrect.mp3');

    var numOfClicks = 0;

    function clickerSound(){
        numOfClicks++;

        if(numOfClicks <= 3){
            switch(numOfClicks){
                case 1:
                    clicking_sound1.play();
                    break;
                case 2:
                    clicking_sound3.play();
                    break;
                case 3:
                    clicking_sound4.play();
                    break;
            }
        }else{
            numOfClicks = 1;
            clicking_sound1.play();
        }
    }

    var passwordValue1 = 0;
    var passwordValue2 = 0;
    var passwordValue3 = 0;
    var passwordValue4 = 0;

    var password1Value1 = 0;
    var password1Value2 = 0;
    var password1Value3 = 0;
    var password1Value4 = 0;

    function checkPassword(){
        if(passwordValue1 == 4 && passwordValue2 == 6 && passwordValue3 == 3 && passwordValue4 == 5){
            computer_Code.classList.add("correctPassword");
            correct_password.play();
            
            Dan_Heng_key.style.opacity= '1';
            Dan_Heng_key.style.pointerEvents= 'all';
            hologramButton.style.pointerEvents= 'none'; 
            biometrics.classList.remove("biometrics_Appear");
            MarchTableBiometrics.classList.remove("MarchTableBiometrics_Blur");

            rewardMysteriousCylinder.style.opacity = "1";
            rewardMysteriousCylinder.style.pointerEvents = "all";
            MarchTableBiometrics.classList.add("MarchTableBiometrics_Blur");

            items_num++;
            items_image = '<img src="geo_cylinder.webp">';
            item_name = "mysterious cylinder";
            addToInventory();
            pillar1Acquired = true;
            var randomNumber = getRandomNumber(1, 10);
            mediumNoise(randomNumber);

        }else{
            computer_Code.classList.add("wrongPassword"); 
            incorrect_password.play();
            document.getElementById("digit_one").innerHTML = 0;
            document.getElementById("digit_two").innerHTML = 0;
            document.getElementById("digit_three").innerHTML = 0;
            document.getElementById("digit_four").innerHTML = 0;
            digit_counter = 0;
        }
    }

    function checkPassword1(){
        if(password1Value1 == 3 && password1Value2 == 1 && password1Value3 == 6 && password1Value4 == 2){
            hologramButton1.style.pointerEvents = 'none';
            computer_Code1.classList.add("correctPassword");
            correct_password.play();
            biometrics1.style.opacity = "0";
            biometrics1.style.pointerEvents = "none";
            lobby_computer.style.filter = "blur(5px)";

            rewardPowerCore.style.opacity = "1";
            rewardPowerCore.style.pointerEvents = "all";

            items_num++;
            items_image = '<img src="power_cog.webp">';
            item_name = "power core";
            addToInventory();
            pillar2Acquired = true;
            var randomNumber = getRandomNumber(1, 10);
            mediumNoise(randomNumber);
        }else{
            computer_Code1.classList.add("wrongPassword"); 
            incorrect_password.play();
            document.getElementById("digit_one1").innerHTML = 0;
            document.getElementById("digit_two1").innerHTML = 0;
            document.getElementById("digit_three1").innerHTML = 0;
            document.getElementById("digit_four1").innerHTML = 0;
            digit_counter1 = 0;
        }
    }
    //---------------------------COMPUTER LOBBY ROOM -----------------------//
    var number_one1 = document.getElementById("number_one1");
    var number_two1 = document.getElementById("number_two1");
    var number_three1 = document.getElementById("number_three1");
    var number_four1 = document.getElementById("number_four1");
    var number_five1 = document.getElementById("number_five1");
    var number_six1 = document.getElementById("number_six1");
    var enter1 = document.getElementById("enter1");
    var computer_Code1 = document.getElementById("computer_Code1");

var hologramButton1 = document.getElementById('hologramButton1');
var biometrics1 = document.getElementById('biometrics1');
var exitBiometrics1 = document.getElementById('exitBiometrics1');
var lobby_computer = document.getElementById('lobby_computer');

digit_counter1 = 0;
digit_value1 = 0;

hologramButton1.onclick = function(){
    biometrics1.style.opacity = "1";
    biometrics1.style.pointerEvents = "all";
    lobby_computer.style.filter = "blur(5px)";
}
exitBiometrics1.onclick = function(){
    biometrics1.style.opacity = "0";
    biometrics1.style.pointerEvents = "none";
    lobby_computer.style.filter = "blur(0px)";
}

number_one1.onclick = function() {
    computer_Code1.classList.remove("wrongPassword");
    computer_Code1.classList.remove("correctPassword");
    digit_counter1++;
    digit_value1 = 1;
    clicking_sound.play();
    clickerSound();
    digitalizer1();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_two1.onclick = function() {
    computer_Code1.classList.remove("wrongPassword");
    computer_Code1.classList.remove("correctPassword");
    digit_counter1++;
    digit_value1 = 2;
    clickerSound();
    digitalizer1();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_three1.onclick = function() {
    computer_Code1.classList.remove("wrongPassword");
    computer_Code1.classList.remove("correctPassword");
    digit_counter1++;
    digit_value1 = 3;
    clickerSound();
    digitalizer1();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_four1.onclick = function() {
    computer_Code1.classList.remove("wrongPassword");
    computer_Code1.classList.remove("correctPassword");
    digit_counter1++;
    digit_value1 = 4;
    clickerSound();
    digitalizer1();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_five1.onclick = function() {
    computer_Code1.classList.remove("wrongPassword"); 
    computer_Code1.classList.remove("correctPassword");
    digit_counter1++;
    digit_value1 = 5;
    clickerSound();
    digitalizer1();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
number_six1.onclick = function() {
    computer_Code1.classList.remove("wrongPassword"); 
    computer_Code1.classList.remove("correctPassword");
    digit_counter1++;
    digit_value1 = 6;
    clickerSound();
    digitalizer1();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
enter1.onclick = function() {
    computer_Code1.classList.remove("wrongPassword");
    checkPassword1();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
function digitalizer1() {
    if (digit_counter1 > 4) {
        digit_counter1 = 1;
    }
    switch (digit_counter1) {
    case 1:
    document.getElementById("digit_one1").innerHTML = digit_value1;
    password1Value1 = digit_value1;
    break;
    case 2:
    document.getElementById("digit_two1").innerHTML = digit_value1;
    password1Value2 = digit_value1;
    break;
    case 3:
    document.getElementById("digit_three1").innerHTML = digit_value1;
    password1Value3 = digit_value1;
    break;
    case 4:
    document.getElementById("digit_four1").innerHTML = digit_value1;
    password1Value4 = digit_value1;
    break;

    default:
    break;
    }
}

  //--------------------------Lobby Window------------------------//
var lobby_Window_Button = document.getElementById("lobby_Window_Button");
var lobbyWindow = document.getElementById("lobbyWindow");
var lobby_Table_Button = document.getElementById("lobby_Table_Button");
var lobby_Table = document.getElementById("lobby_Table");
var fromLobbyTableButton = document.getElementById("fromLobbyTableButton");

var returnLobbyFromWindow = document.getElementById("returnLobbyFromWindow");

lobby_Table_Button.onclick = function() {
    lobby_Table.classList.add("lobby_Table_Appear");
    lobby.classList.add("lobby_Disappear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromLobbyTableButton.onclick = function() {
    lobby_Table.classList.remove("lobby_Table_Appear");
    lobby.classList.remove("lobby_Disappear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
lobby_Window_Button.onclick = function() {
    lobbyWindow.classList.add("lobbyWindow_Appear");
    lobby.classList.add("lobby_Disappear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
returnLobbyFromWindow.onclick = function() {
    lobbyWindow.classList.remove("lobbyWindow_Appear");
    lobby.classList.remove("lobby_Disappear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

//---------------------Pet Area Desk -------------------//
var pet_Area_Table_Button = document.getElementById("pet_Area_Table_Button");
var pet_Area_Desk = document.getElementById("pet_Area_Desk");
var returnFromPetDesk = document.getElementById("returnFromPetDesk");
var pet_Area_Cabinet_Button = document.getElementById("pet_Area_Cabinet_Button");
var returnFromPetCabinet = document.getElementById("returnFromPetCabinet");
var pet_Area_Cabinet = document.getElementById("pet_Area_Cabinet");

pet_Area_Table_Button.onclick = function() {
    pet_Area_Desk.classList.add("pet_Area_Desk_Appear");
    petArea.classList.remove("petArea_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
returnFromPetDesk.onclick = function() {
    pet_Area_Desk.classList.remove("pet_Area_Desk_Appear");
    petArea.classList.add("petArea_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

pet_Area_Cabinet_Button.onclick = function() {
    pet_Area_Cabinet.classList.add("pet_Area_Cabinet_Appear");
    petArea.classList.remove("petArea_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
returnFromPetCabinet.onclick = function() {
    pet_Area_Cabinet.classList.remove("pet_Area_Cabinet_Appear");
    petArea.classList.add("petArea_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
//---------------------Dan Heng Room Area -------------------//
var retronizer_button = document.getElementById("retronizer_button");
var bed_button = document.getElementById("bed_button");
var dang_heng_desk_button = document.getElementById("dang_heng_desk_button");
var stabilizer_button = document.getElementById("stabilizer_button");

var retronizer = document.getElementById("retronizer");
var DanHengBed = document.getElementById("DanHengBed");
var DanHengDesk = document.getElementById("DanHengDesk");
var stabilizer = document.getElementById("stabilizer");

var fromRetronizer = document.getElementById("fromRetronizer");
var fromDanHengBed = document.getElementById("fromDanHengBed");
var fromDanHengDesk = document.getElementById("fromDanHengDesk");
var fromStabilizer = document.getElementById("fromStabilizer");

retronizer_button.onclick = function() {
    retronizer.classList.add("retronizer_Appear");
    DanHengRoom.classList.remove("DanHengRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromRetronizer.onclick = function() {
    retronizer.classList.remove("retronizer_Appear");
    DanHengRoom.classList.add("DanHengRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

bed_button.onclick = function() {
    DanHengBed.classList.add("DanHengBed_Appear");
    DanHengRoom.classList.remove("DanHengRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromDanHengBed.onclick = function() {
    DanHengBed.classList.remove("DanHengBed_Appear");
    DanHengRoom.classList.add("DanHengRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

dang_heng_desk_button.onclick = function() {
    DanHengDesk.classList.add("DanHengDesk_Appear");
    DanHengRoom.classList.remove("DanHengRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromDanHengDesk.onclick = function() {
    DanHengDesk.classList.remove("DanHengDesk_Appear");
    DanHengRoom.classList.add("DanHengRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

stabilizer_button.onclick = function() {
    stabilizer.classList.add("stabilizer_Appear");
    DanHengRoom.classList.remove("DanHengRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromStabilizer.onclick = function() {
    stabilizer.classList.remove("stabilizer_Appear");
    DanHengRoom.classList.add("DanHengRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

/*---------hallway1---------*/

var hallway2Button = document.getElementById("hallway2Button");
var hallway2 = document.getElementById("hallway2");
var fromHallway2 = document.getElementById("fromHallway2");

var hallway3Button = document.getElementById("hallway3Button");
var hallway3 = document.getElementById("hallway3");
var fromHallway3 = document.getElementById("fromHallway3");

var hallway4Button = document.getElementById("hallway4Button");
var hallway4 = document.getElementById("hallway4");
var fromHallway4 = document.getElementById("fromHallway4");

var hallwayEndButton = document.getElementById("hallwayEndButton");
var hallwayEnd = document.getElementById("hallwayEnd");
var fromHallwayEnd = document.getElementById("fromHallwayEnd");

var forbiddenDoorButton = document.getElementById("forbiddenDoorButton");
var forbiddenDoor = document.getElementById("forbiddenDoor");
var fromForbiddenDoor = document.getElementById("fromForbiddenDoor");
var forbiddenDoorOpenButton = document.getElementById("forbiddenDoorOpenButton");
var forbiddenDoorLocked = document.getElementById("forbiddenDoorLocked");
var exitForbiddenDoorLocked = document.getElementById("exitForbiddenDoorLocked");

var end_hallway1 = document.getElementById("end_hallway1");
var fromEnd_hallway1 = document.getElementById("fromEnd_hallway1");

var end_hallway2Button = document.getElementById("end_hallway2Button");
var end_hallway2 = document.getElementById("end_hallway2");
var fromEnd_hallway2 = document.getElementById("fromEnd_hallway2");

var end_gateButton = document.getElementById("end_gateButton");
var end_gate = document.getElementById("end_gate");
var fromEnd_gate = document.getElementById("fromEnd_gate");

var end_EnterButton = document.getElementById("end_EnterButton");
var endGateDenied = document.getElementById("endGateDenied");
var exitEndDGatedDenied = document.getElementById("exitEndDGatedDenied");


var escape_1 = document.getElementById("escape_1");
var fromEscape_1Button = document.getElementById("fromEscape_1Button");

var escape_2Button= document.getElementById("escape_2Button");
var escape_2= document.getElementById("escape_2");
var fromEscape_2Button = document.getElementById("fromEscape_2Button");

var escape_FinalButton= document.getElementById("escape_FinalButton");
var escape_Final= document.getElementById("escape_Final");
var fromEscape_FinalButton = document.getElementById("fromEscape_FinalButton");

var escape_Button = document.getElementById("escape_Button");
var escapeOrNot = document.getElementById("escapeOrNot");
var exitEscapeOrNot = document.getElementById("exitEscapeOrNot");
//-------------------------forbidden door------------------------//

escape_Button.onclick = function(){
    mechanicalSoundSuccess.play();
    escapeOrNot.style.opacity = "1";
    escapeOrNot.style.pointerEvents = "all";
}

exitEscapeOrNot.onclick = function(){
    escapeOrNot.style.opacity = "0";
    escapeOrNot.style.pointerEvents = "none";
}

end_EnterButton.onclick = function() {
    if(pillar1Acquired === true && pillar2Acquired === true){
        escape_1.style.opacity = 1;
        escape_1.style.pointerEvents = "all";
        doorHatchOpens.play();
        hatch.classList.add("hatch_Appear");
        var randomNumber = getRandomNumber(1, 2);
        mediumNoise(randomNumber);
    }else{
        doorClose.play();
        endGateDenied.style.opacity = "1";
        endGateDenied.style.pointerEvents = "all";
        var randomNumber = getRandomNumber(1, 5);
        mediumNoise(randomNumber);
    }
}
escape_FinalButton.onclick = function(){
    escape_Final.style.opacity = "1";
    escape_Final.style.pointerEvents = "all";
    escape_2.style.opacity = "0";
    escape_2.style.pointerEvents = "none";
    var randomNumber = getRandomNumber(1, 2);
    mediumNoise(randomNumber);
    footStepCounter();
}

fromEscape_FinalButton.onclick = function(){
    escape_Final.style.opacity = "0";
    escape_Final.style.pointerEvents = "none";
    escape_2.style.opacity = "1";
    escape_2.style.pointerEvents = "all";
    var randomNumber = getRandomNumber(1, 2);
    mediumNoise(randomNumber);
    footStepCounter();
}


escape_2Button.onclick = function(){
    escape_2.style.opacity = "1";
    escape_2.style.pointerEvents = "all";
    escape_1.style.opacity = "0";
    escape_1.style.pointerEvents = "none";
    var randomNumber = getRandomNumber(1, 2);
    mediumNoise(randomNumber);
    footStepCounter();
}
fromEscape_2Button.onclick = function(){
    escape_2.style.opacity = "0";
    escape_2.style.pointerEvents = "none";
    escape_1.style.opacity = "1";
    escape_1.style.pointerEvents = "all";
    var randomNumber = getRandomNumber(1, 2);
    mediumNoise(randomNumber);
    footStepCounter();
}
fromEscape_1Button.onclick = function(){
    escape_1.style.opacity = "0";
    escape_1.style.pointerEvents = "none";
    end_gate.style.opacity = "1";
    end_gate.style.pointerEvents = "all";
    hatch.classList.remove("hatch_Appear");
    footStepCounter();
}

 exitEndDGatedDenied.onclick = function() {
    endGateDenied.style.opacity = "0";
    endGateDenied.style.pointerEvents = "none";
 }


var forbiddenKey = false;
forbiddenDoorOpenButton.onclick = function() {
    if(forbiddenKey == true) {
    end_hallway1.style.opacity = "1";
    end_hallway1.style.pointerEvents = "all";
    forbiddenDoorLocked.style.opacity = "0";
    forbiddenDoorLocked.style.pointerEvents = "none";
    doorOpen.play();
    }
    else{
        forbiddenDoorLocked.style.opacity = "1";
        forbiddenDoorLocked.style.pointerEvents = "all";
        var randomNumber = getRandomNumber(1, 5);
        mediumNoise(randomNumber);
        doorClose.play();
    }
}

exitForbiddenDoorLocked.onclick = function() {
    forbiddenDoorLocked.style.opacity = "0";
    forbiddenDoorLocked.style.pointerEvents = "none";
    doorOpen.play();
}

fromEnd_hallway1.onclick = function() {
    end_hallway1.style.opacity = "0";
    end_hallway1.style.pointerEvents = "none";
    doorOpen.play();
}

end_hallway2Button.onclick = function() {
    end_hallway1.style.opacity = "0";
    end_hallway1.style.pointerEvents = "none";
    end_hallway2.style.opacity = "1";
    end_hallway2.style.pointerEvents = "all";
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

fromEnd_hallway2.onclick = function() {
    end_hallway1.style.opacity = "1";
    end_hallway1.style.pointerEvents = "all";
    end_hallway2.style.opacity = "0";
    end_hallway2.style.pointerEvents = "none";
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
end_gateButton.onclick = function() {
    end_gate.style.opacity = "1";
    end_gate.style.pointerEvents = "all";
    end_hallway2.style.opacity = "0";
    end_hallway2.style.pointerEvents = "none";
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromEnd_gate.onclick = function() {
    end_gate.style.opacity = "0";
    end_gate.style.pointerEvents = "none";
    end_hallway2.style.opacity = "1";
    end_hallway2.style.pointerEvents = "all";
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

hallway2Button.onclick = function() {
    hallway2.classList.add("hallway2_Appear");
    hatch.classList.remove("hatch_Appear"); 
    hallwayRoom.classList.remove("hallwayRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromHallway2.onclick = function() {
    hallway2.classList.remove("hallway2_Appear");
    hallwayRoom.classList.add("hallwayRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

hallway3Button.onclick = function() {
    hallway3.classList.add("hallway3_Appear");
    hallway2.classList.remove("hallway2_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromHallway3.onclick = function() {
    hallway3.classList.remove("hallway3_Appear");
    hallway2.classList.add("hallway2_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

hallway4Button.onclick = function() {
    hallway4.classList.add("hallway4_Appear");
    hallway3.classList.remove("hallway3_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromHallway4.onclick = function() {
    hallway4.classList.remove("hallway4_Appear");
    hallway3.classList.add("hallway3_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}


hallwayEndButton.onclick = function() {
    hallwayEnd.classList.add("hallwayEnd_Appear");
    hallway4.classList.remove("hallway4_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromHallwayEnd.onclick = function() {
    hallwayEnd.classList.remove("hallwayEnd_Appear");
    hallway4.classList.add("hallway4_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

forbiddenDoorButton.onclick = function() {
    forbiddenDoor.classList.add("forbiddenDoor_Appear");
    hallwayEnd.classList.remove("hallwayEnd_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromForbiddenDoor.onclick = function() {
    forbiddenDoor.classList.remove("forbiddenDoor_Appear");
    hallwayEnd.classList.add("hallwayEnd_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

//------------------Laboratory ---------------------------//
var laboratoryDoorButton = document.getElementById("laboratoryDoorButton");
var laboratoryEnter = document.getElementById("laboratoryEnter");
var fromLaboratoryDoor = document.getElementById("fromLaboratoryDoor");

var doorLocked = document.getElementById("doorLocked");
var exitDoorLocked = document.getElementById("exitDoorLocked")
laboratoryDoorButton.onclick = function() {
    if(LaboratoryPass == true){
        laboratoryEnter.classList.add("laboratoryEnter_Appear");
        hallway4.classList.remove("hallway4_Appear");
        doorOpen.play();
    }else{
        doorLocked.style.opacity = "1";
        doorLocked.style.pointerEvents = "all";
        doorClose.play();
    }
}
exitDoorLocked.onclick = function() {
    doorLocked.style.opacity = "0";
    doorLocked.style.pointerEvents = "none";
}
fromLaboratoryDoor.onclick = function() {
    laboratoryEnter.classList.remove("laboratoryEnter_Appear");
    hallway4.classList.add("hallway4_Appear");
    doorClose.play();
}
//-----------------------Laboratory Radiation-------------------------//
var laboratoryRadiationButton = document.getElementById("laboratoryRadiationButton");
var laboratoryRadiation = document.getElementById("laboratoryRadiation");
var fromLaboratoryRadiation = document.getElementById("fromLaboratoryRadiation");
laboratoryRadiationButton.onclick = function() {
    laboratoryRadiation.classList.add("laboratoryRadiation_Appear")
    laboratoryMain.classList.remove("laboratoryMain_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromLaboratoryRadiation.onclick = function() {
    laboratoryRadiation.classList.remove("laboratoryRadiation_Appear")
    laboratoryMain.classList.add("laboratoryMain_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
//-----------------------Laboratory Main-------------------------//
var laboratoryStairsButton = document.getElementById("laboratoryStairsButton");
var laboratoryMain = document.getElementById("laboratoryMain");
var fromLaboratoryMain = document.getElementById("fromLaboratoryMain");
laboratoryStairsButton.onclick = function() {
    laboratoryMain.classList.add("laboratoryMain_Appear");
    laboratoryEnter.classList.remove("laboratoryEnter_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromLaboratoryMain.onclick = function() {
    laboratoryMain.classList.remove("laboratoryMain_Appear");
    laboratoryEnter.classList.add("laboratoryEnter_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
//-----------------------Laboratory Computer-------------------------//
var laboratoryComputerButton = document.getElementById("laboratoryComputerButton");
var laboratoryComputer = document.getElementById("laboratoryComputer");
var fromLaboratoryComputer = document.getElementById("fromLaboratoryComputer");
laboratoryComputerButton.onclick = function() {
    laboratoryComputer.classList.add("laboratoryComputer_Appear")
    laboratoryMain.classList.remove("laboratoryMain_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromLaboratoryComputer.onclick = function() {
    laboratoryComputer.classList.remove("laboratoryComputer_Appear")
    laboratoryMain.classList.add("laboratoryMain_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
//-----------------------Laboratory Pillars-------------------------//
var laboratoryPillarsButton = document.getElementById("laboratoryPillarsButton");
var laboratoryPillars = document.getElementById("laboratoryPillars");
var fromLaboratoryPillars = document.getElementById("fromLaboratoryPillars");
laboratoryPillarsButton.onclick = function() {
    laboratoryPillars.classList.add("laboratoryPillars_Appear")
    laboratoryMain.classList.remove("laboratoryMain_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromLaboratoryPillars.onclick = function() {
    laboratoryPillars.classList.remove("laboratoryPillars_Appear")
    laboratoryMain.classList.add("laboratoryMain_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

//-----------------------Laboratory Pillar one-------------------------//
var laboratoryPillar1Button = document.getElementById("laboratoryPillar1Button");
var pillarOne = document.getElementById("pillarOne");
var fromPillarOne = document.getElementById("fromPillarOne");
laboratoryPillar1Button.onclick = function() {
        pillarOne.classList.add("pillarOne_Appear")
        laboratoryPillars.classList.remove("laboratoryPillars_Appear")
        footStepCounter();
        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);
}
fromPillarOne.onclick = function() {
    pillarOne.classList.remove("pillarOne_Appear")
    laboratoryPillars.classList.add("laboratoryPillars_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
//-----------------------Laboratory Pillar Two-------------------------//
var laboratoryPillar2Button = document.getElementById("laboratoryPillar2Button");
var pillarTwo = document.getElementById("pillarTwo");
var fromPillarTwo = document.getElementById("fromPillarTwo");
laboratoryPillar2Button.onclick = function() {
    if(alreadyObtainedMarchKey == false){
        pillarTwo.classList.add("pillarTwo_Appear")
        laboratoryPillars.classList.remove("laboratoryPillars_Appear")
        footStepCounter();
        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);
        March_Room_Key.style.opacity = "1";
        March_Room_Key.style.pointerEvents = "all";
    }else{
        pillarTwo.classList.add("pillarTwo_Appear")
        laboratoryPillars.classList.remove("laboratoryPillars_Appear")
        footStepCounter();
        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);
        March_Room_Key.style.opacity = "0";
        March_Room_Key.style.pointerEvents = "none";
    }
}
fromPillarTwo.onclick = function() {
    pillarTwo.classList.remove("pillarTwo_Appear")
    laboratoryPillars.classList.add("laboratoryPillars_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
var March_Room_Key = document.getElementById("March_Room_Key");
var pick_March_Key = document.getElementById("pick_March_Key");
var exitMarchKey = document.getElementById("exitMarchKey");
March_Room_Key.onclick = function() {
    March_Room_Key.style.opacity= '0';
    March_Room_Key.style.pointerEvents= 'none';

    pick_March_Key.style.opacity= '1';
    pick_March_Key.style.pointerEvents= 'all';
    acquire_items.play();

    items_num++;
    items_image = '<img src="key.png">';
    item_name = "room 2 key";
    addToInventory();

    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
    MarchRoomPass = true;
    alreadyObtainedMarchKey = true;
}
exitMarchKey.onclick = function() {
    March_Room_Key.style.opacity= '0';
    March_Room_Key.style.pointerEvents= 'none';

    pick_March_Key.style.opacity= '0';
    pick_March_Key.style.pointerEvents= 'none';
}

//-----------------------Warning Page------------------------//
var warningButton = document.getElementById("warningButton");
var itemPickUpPage_warning_sign = document.getElementById("itemPickUpPage_warning_sign");
var exitWarning = document.getElementById("exitWarning");
warningButton.onclick = function() {
    itemPickUpPage_warning_sign.classList.add("itemPickUpPage_warning_sign_Appear");
    jukeBox.classList.add("jukeBox_blur");
    acquire_items.play();

    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
exitWarning.onclick = function() {
    itemPickUpPage_warning_sign.classList.remove("itemPickUpPage_warning_sign_Appear")
    jukeBox.classList.remove("jukeBox_blur");
}
//-----------------------Room Lever ------------------------//
var PhonoGraphButton = document.getElementById("PhonoGraphButton");
var roomLever = document.getElementById("roomLever");
var fromRoomLever = document.getElementById("fromRoomLever");
PhonoGraphButton.onclick = function() {
    roomLever.classList.add("roomLever_Appear");
    jukeBox.classList.remove("jukeBox_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromRoomLever.onclick = function() {
    roomLever.classList.remove("roomLever_Appear")
    jukeBox.classList.add("jukeBox_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
//-----------------------Room Lever Monologue ------------------------//
var mechanicalSoundFailed = new Audio('mechanical_sound_failed.mp3');
var mechanicalSoundSuccess = new Audio('mechanical_sound_success.mp3');
var mainDoorUnlock = false;
var leftRoomOpen = true;
var rightRoomOpen = false;
var room_lever_button = document.getElementById("room_lever_button");
var itemPickUpPage_RoomLeverMissing = document.getElementById("itemPickUpPage_RoomLeverMissing");
var itemPickUpPage_RoomLeverFound = document.getElementById("itemPickUpPage_RoomLeverFound");
var exitLeverMissing = document.getElementById("exitLeverMissing");
var exitLeverFound = document.getElementById("exitLeverFound");

var roomLeverFound = document.getElementById("roomLeverFound");
var roomCannotOpen = document.getElementById("roomCannotOpen");

var select1stRoom = document.getElementById("select1stRoom");
var select2ndRoom = document.getElementById("select2ndRoom");

var room1Open = document.getElementById("room1Open");
var room2Close = document.getElementById("room2Close");
var room2Success = document.getElementById("room2Success");
room_lever_button.onclick = function() {
    if(clockWorkPiece2 == false){
        itemPickUpPage_RoomLeverMissing.classList.add("itemPickUpPage_RoomLeverMissing_Appear");
        mechanicalSoundFailed.play();
    }else{
        itemPickUpPage_RoomLeverFound.classList.add("itemPickUpPage_RoomLeverFound_Appear");
        mechanicalSoundSuccess.play();
        mainDoorUnlock = true;
    }
}
exitLeverMissing.onclick = function() {
    itemPickUpPage_RoomLeverMissing.classList.remove("itemPickUpPage_RoomLeverMissing_Appear");
}
exitLeverFound.onclick = function() {
    itemPickUpPage_RoomLeverFound.classList.remove("itemPickUpPage_RoomLeverFound_Appear");
}
select1stRoom.onclick = function() {
    room2Success.classList.remove("room2Success_Appear");
    room1Open.classList.remove("room1Open_Disappear");
    room2Close.classList.remove("room2Close_Appear");
    mechanicalSoundSuccess.play();
}
select2ndRoom.onclick = function() {
    if(clockWorkPiece1 == true){
        forbiddenKey = true;
        room2Success.classList.add("room2Success_Appear");
        room1Open.classList.add("room1Open_Disappear");
        room2Close.classList.remove("room2Close_Appear");
        mechanicalSoundSuccess.play();
    }else{
        room2Success.classList.remove("room2Success_Appear");
        room1Open.classList.add("room1Open_Disappear");
        room2Close.classList.add("room2Close_Appear");
        mechanicalSoundFailed.play();
    }

}
select1stRoom2.onclick = function() {
    room2Success.classList.remove("room2Success_Appear");
    room1Open.classList.remove("room1Open_Disappear");
    room2Close.classList.remove("room2Close_Appear");
    mechanicalSoundSuccess.play();
}
select2ndRoom2.onclick = function() {
    if(clockWorkPiece1 == true){
        forbiddenKey = true;
        room2Success.classList.add("room2Success_Appear");
        room1Open.classList.add("room1Open_Disappear");
        room2Close.classList.remove("room2Close_Appear");
        mechanicalSoundSuccess.play();
    }else{
        room2Success.classList.remove("room2Success_Appear");
        room1Open.classList.add("room1Open_Disappear");
        room2Close.classList.add("room2Close_Appear");
        mechanicalSoundFailed.play();
    }
}


select1stRoom3.onclick = function() {
    room2Success.classList.remove("room2Success_Appear");
    room1Open.classList.remove("room1Open_Disappear");
    room2Close.classList.remove("room2Close_Appear");
    mechanicalSoundSuccess.play();
}
select2ndRoom3.onclick = function() {
    if(clockWorkPiece1 == true){
        room2Success.classList.add("room2Success_Appear");
        room1Open.classList.add("room1Open_Disappear");
        room2Close.classList.remove("room2Close_Appear");
        mechanicalSoundSuccess.play();
    }else{
        room2Success.classList.remove("room2Success_Appear");
        room1Open.classList.add("room1Open_Disappear");
        room2Close.classList.add("room2Close_Appear");
        mechanicalSoundFailed.play();
    }
}
//------------------Jukebox Desk------------------//
var jukeBoxDeskButton = document.getElementById("jukeBoxDeskButton");
var jukeboxDesk = document.getElementById("jukeboxDesk");
var fromJukeBoxDesk = document.getElementById("fromJukeBoxDesk");

jukeBoxDeskButton.onclick = function() {
    jukeboxDesk.classList.add("jukeboxDesk_Appear");
    jukeBox.classList.remove("jukeBox_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromJukeBoxDesk.onclick = function() {
    jukeboxDesk.classList.remove("jukeboxDesk_Appear");
    jukeBox.classList.add("jukeBox_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

//------------------Corner Room------------------//
var CornerRoom = document.getElementById("CornerRoom");
var cornerRoomButton = document.getElementById("cornerRoomButton");
var fromCornerRoom = document.getElementById("fromCornerRoom");

var CornerTableButton = document.getElementById("CornerTableButton");
var cornerTable = document.getElementById("cornerTable");
var fromCornerTable = document.getElementById("fromCornerTable");

var CornerDeskButton = document.getElementById("CornerDeskButton");
var cornerDesk = document.getElementById("cornerDesk");
var fromCornerDesk = document.getElementById("fromCornerDesk");

var CornerCabinetButton = document.getElementById("CornerCabinetButton");
var cornerCabinet = document.getElementById("cornerCabinet");
var fromCornerCabinet = document.getElementById("fromCornerCabinet");
cornerRoomButton.onclick = function() {
    CornerRoom.classList.add("CornerRoom_Appear");
    hallwayEnd.classList.remove("hallwayEnd_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromCornerRoom.onclick = function() {
    CornerRoom.classList.remove("CornerRoom_Appear");
    hallwayEnd.classList.add("hallwayEnd_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

CornerTableButton.onclick = function() {
    cornerTable.classList.add("cornerTable_Appear");
    CornerRoom.classList.remove("CornerRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromCornerTable.onclick = function() {
    cornerTable.classList.remove("cornerTable_Appear");
    CornerRoom.classList.add("CornerRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

CornerDeskButton.onclick = function() {
    if(alreadyObtainedLabKey == false){
        cornerDesk.classList.add("cornerDesk_Appear");
        CornerRoom.classList.remove("CornerRoom_Appear");
        footStepCounter();
        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);
        Laboratory_key.style.opacity = "1";
        Laboratory_key.style.pointerEvents = "all";
    }else{
        cornerDesk.classList.add("cornerDesk_Appear");
        CornerRoom.classList.remove("CornerRoom_Appear");
        footStepCounter();
        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);
        Laboratory_key.style.opacity = "0";
        Laboratory_key.style.pointerEvents = "none";
    }
    
}
fromCornerDesk.onclick = function() {
    cornerDesk.classList.remove("cornerDesk_Appear");
    CornerRoom.classList.add("CornerRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
var MarchRoomPass = false;
var DanHengRoomPass = false;
var LaboratoryPass = false;

var alreadyObtainedLabKey = false;
var alreadyObtainedMarchKey = false;

var Laboratory_key = document.getElementById("Laboratory_key");
var pick_Laboratory_Key = document.getElementById("pick_Laboratory_Key");
var exitLabKey = document.getElementById("exitLabKey");

Laboratory_key.onclick = function() {
    Laboratory_key.style.opacity= '0';
    Laboratory_key.style.pointerEvents= 'none';

    pick_Laboratory_Key.style.opacity= '1';
    pick_Laboratory_Key.style.pointerEvents= 'all';
    acquire_items.play();

    items_num++;
    items_image = '<img src="key.png">';
    item_name = "room 3 key";
    addToInventory();

    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
    LaboratoryPass = true;
    alreadyObtainedLabKey = true;
}
exitLabKey.onclick = function() {
    pick_Laboratory_Key.style.opacity= '0';
    pick_Laboratory_Key.style.pointerEvents= 'none';
}

CornerCabinetButton.onclick = function() {
    cornerCabinet.classList.add("cornerCabinet_Appear");
    CornerRoom.classList.remove("CornerRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
fromCornerCabinet.onclick = function() {
    cornerCabinet.classList.remove("cornerCabinet_Appear");
    CornerRoom.classList.add("CornerRoom_Appear");
    footStepCounter();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}

//---------------Collecting Papers--------------------//
var comp1_piece1 = document.getElementById("comp1_piece1");
var pickUpComp1Paper1 = document.getElementById("pickUpComp1Paper1");
var exitComp1Paper1 = document.getElementById("exitComp1Paper1");






var comp2_piece1 = document.getElementById("comp2_piece1");
var pickUpComp2Paper1 = document.getElementById("pickUpComp2Paper1");
var exitComp2Paper1 = document.getElementById("exitComp2Paper1");
var pet_area_table = document.getElementById("pet_area_table");

var comp2_piece2 = document.getElementById("comp2_piece2");
var pickUpComp2Paper2 = document.getElementById("pickUpComp2Paper2");
var exitComp2Paper2 = document.getElementById("exitComp2Paper2");
var corner_cabinet = document.getElementById("corner_cabinet");

var comp2_piece3 = document.getElementById("comp2_piece3");
var pickUpComp2Paper3 = document.getElementById("pickUpComp2Paper3");
var exitComp2Paper3 = document.getElementById("exitComp2Paper3");
var paintings = document.getElementById("paintings");

var comp1_code1 = false;
var comp1_code2 = false;
var comp1_code3 = false;

var comp2_code1 = false;
var comp2_code2 = false;
var comp2_code3 = false;

var acquired_comp1_piece1 = false;
var acquired_comp1_piece2 = false;
var acquired_comp1_piece3 = false;

comp1_piece1.onclick = function() {
    pickUpComp1Paper1.style.opacity = "1";
    pickUpComp1Paper1.style.pointerEvents = "all";
    comp1_piece1.style.opacity = "0";
    comp1_piece1.style.pointerEvents = "none";
    acquire_items.play();

    items_num++;
    items_image = '<img src="comp1_piece1.png">';
    item_name = "piece of paper 4";
    comp1_code1 = true;
    addToInventory();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);

    acquired_comp1_piece1 = true;
}
exitComp1Paper1.onclick = function() {
    pickUpComp1Paper1.style.opacity = "0";
    pickUpComp1Paper1.style.pointerEvents = "none";
}

var comp1_piece2 = document.getElementById("comp1_piece2");
var pickUpComp1Paper2 = document.getElementById("pickUpComp1Paper2");
var exitComp1Paper2 = document.getElementById("exitComp1Paper2");

comp1_piece2.onclick = function() {
    pickUpComp1Paper2.style.opacity = "1";
    pickUpComp1Paper2.style.pointerEvents = "all";
    comp1_piece2.style.opacity = "0";
    comp1_piece2.style.pointerEvents = "none";
    acquire_items.play();

    items_num++;
    items_image = '<img src="comp1_piece2.png">';
    item_name = "piece of paper 5";
    comp1_code2 = true;
    addToInventory();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
exitComp1Paper2.onclick = function() {
    pickUpComp1Paper2.style.opacity = "0";
    pickUpComp1Paper2.style.pointerEvents = "none";
}


comp2_piece1.onclick = function() {
    pickUpComp2Paper1.classList.add("pickUpComp2Paper1_Appear");
    comp2_piece1.classList.add("comp2_piece1_Disappear");
    pet_area_table.classList.add("pet_area_table_blur");
    acquire_items.play();

    items_num++;
    items_image = '<img src="comp2_piece1.png">';
    item_name = "piece of paper 1";
    comp2_code1 = true;
    addToInventory();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
exitComp2Paper1.onclick = function() {
    pickUpComp2Paper1.classList.remove("pickUpComp2Paper1_Appear");
    pet_area_table.classList.remove("pet_area_table_blur");
}


comp2_piece2.onclick = function() {
    pickUpComp2Paper2.classList.add("pickUpComp2Paper2_Appear");
    comp2_piece2.classList.add("comp2_piece2_Disappear");
    corner_cabinet.classList.add("corner_cabinet_blur");
    acquire_items.play();

    items_num++;
    items_image = '<img src="comp2_piece2.png">';
    item_name = "piece of paper 2";
    comp2_code2 = true;
    addToInventory();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
exitComp2Paper2.onclick = function() {
    pickUpComp2Paper2.classList.remove("pickUpComp2Paper2_Appear");
    corner_cabinet.classList.remove("corner_cabinet_blur");
}

comp2_piece3.onclick = function() {
    pickUpComp2Paper3.classList.add("pickUpComp2Paper3_Appear");
    comp2_piece3.classList.add("comp2_piece3_Disappear");
    paintings.classList.add("paintings_blur");
    acquire_items.play();

    items_num++;
    items_image = '<img src="comp2_piece3.png">';
    item_name = "piece of paper 3";
    comp2_code3 = true;
    addToInventory();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
exitComp2Paper3.onclick = function() {
    pickUpComp2Paper3.classList.remove("pickUpComp2Paper3_Appear");
    paintings.classList.remove("paintings_blur");
}
//-------------------Clock work pieces---------------//
var  clockWorkPiece1 = false;
var  clockWorkPiece2 = false;
var clock_piece1 = document.getElementById("clock_piece1");
var clock_piece2 = document.getElementById("clock_piece2");
var pickUpClockWork1 = document.getElementById("pickUpClockWork1");
var pickUpClockWork2 = document.getElementById("pickUpClockWork2");
var exitClockPiece1 = document.getElementById("exitClockPiece1");
var exitClockPiece2 = document.getElementById("exitClockPiece2");
var laboratory_computer = document.getElementById("laboratory_computer");
var juke_box_desk = document.getElementById("juke_box_desk");

clock_piece1.onclick = function() {
    items_num++;
    items_image = '<img src="clock_piece.png">';
    item_name = "clock piece";
    addToInventory();

    pickUpClockWork1.classList.add("pickUpClockWork1_Appear");
    clock_piece1.classList.add("clock_piece1_Disappear");
    laboratory_computer.classList.add("laboratory_computer_blur");
    clockWorkPiece1 = true;
    acquire_items.play();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
exitClockPiece1.onclick = function() {
    pickUpClockWork1.classList.remove("pickUpClockWork1_Appear");
    laboratory_computer.classList.remove("laboratory_computer_blur");
}


clock_piece2.onclick = function() {
    items_num++;
    items_image = '<img src="forbidden cog.webp">';
    item_name = "rusty cog";
    addToInventory();

    pickUpClockWork2.classList.add("pickUpClockWork2_Appear");
    clock_piece2.classList.add("clock_piece2_Disappear");
    juke_box_desk.classList.add("juke_box_desk_blur");
    clockWorkPiece2 = true;
    acquire_items.play();
    addToInventory();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
exitClockPiece2.onclick = function() {
    pickUpClockWork2.classList.remove("pickUpClockWork2_Appear");
    juke_box_desk.classList.remove("juke_box_desk_blur");
}
//-------------------inventory backpack functions---------------// 
var items_num = 0;;
var item_name = null;
var items_image = null;
var backpack = document.getElementById("backpack");
var itemsContainer = document.getElementById("itemsContainer");

backpack.onclick = function() {
    var randomNumber = getRandomNumber(1, 9);
    mediumNoise(randomNumber);
    if(itemsContainer.classList.contains("itemsContainer_Appear")){
        optionTray.classList.remove("optionTray_Appear");
        optionButton.classList.remove("optionButton_Rotate");
        itemsContainer.classList.remove("itemsContainer_Appear");
        bag_sound_close.play();
    }else{
        itemsContainer.classList.add("itemsContainer_Appear");
        bag_sound.play();
    }
}

/*--------------check the item if it is already in the inventory-------------*/
var inventory_row1 = document.getElementById("inventory_row1");
var inventory_row2 = document.getElementById("inventory_row2");
var inventory_row3 = document.getElementById("inventory_row3");
var inventory_row4 = document.getElementById("inventory_row4");
var inventory_row5 = document.getElementById("inventory_row5");
var inventory_row6 = document.getElementById("inventory_row6");
var inventory_row7 = document.getElementById("inventory_row7");
var inventory_row8 = document.getElementById("inventory_row8");
var inventory_row9 = document.getElementById("inventory_row9");
var inventory_row10 = document.getElementById("inventory_row10");
var inventory_row11 = document.getElementById("inventory_row11");
var inventory_row12 = document.getElementById("inventory_row12");
var inventory_row13 = document.getElementById("inventory_row13");
var inventory_row14 = document.getElementById("inventory_row14");
var inventory_row15 = document.getElementById("inventory_row15");
var inventory_row16 = document.getElementById("inventory_row16");
var inventory_row17 = document.getElementById("inventory_row17");
var inventory_row18 = document.getElementById("inventory_row18");
var inventory_row19 = document.getElementById("inventory_row19");
var inventory_row20 = document.getElementById("inventory_row20");
var bag_sound = new Audio('bag_sound_open.mp3');
var bag_sound_close = new Audio('bag_sound_close.mp3');
function addToInventory(){
    switch(items_num){
        case 1:
            document.getElementById("item_image1").innerHTML = items_image;
            document.getElementById("item_name1").innerHTML = item_name;
            use_item1.setAttribute("data-value", item_name);
            inventory_row1.classList.add("inventory_row1_Appear");
        break;
        case 2:
            document.getElementById("item_image2").innerHTML = items_image;
            document.getElementById("item_name2").innerHTML = item_name;
            use_item2.setAttribute("data-value", item_name);
            inventory_row2.classList.add("inventory_row2_Appear");
        break;
        case 3:
            document.getElementById("item_image3").innerHTML = items_image;
            document.getElementById("item_name3").innerHTML = item_name;
            use_item3.setAttribute("data-value", item_name);
            inventory_row3.classList.add("inventory_row3_Appear");
        break;
        case 4:
            document.getElementById("item_image4").innerHTML = items_image;
            document.getElementById("item_name4").innerHTML = item_name;
            use_item4.setAttribute("data-value", item_name);
            inventory_row4.classList.add("inventory_row4_Appear");
        break;
        case 5:
            document.getElementById("item_image5").innerHTML = items_image;
            document.getElementById("item_name5").innerHTML = item_name;
            use_item5.setAttribute("data-value", item_name);
            inventory_row5.classList.add("inventory_row5_Appear");
        break;
        case 6:
            document.getElementById("item_image6").innerHTML = items_image;
            document.getElementById("item_name6").innerHTML = item_name;
            use_item6.setAttribute("data-value", item_name);
            inventory_row6.classList.add("inventory_row6_Appear");
        break;
        case 7:
            document.getElementById("item_image7").innerHTML = items_image;
            document.getElementById("item_name7").innerHTML = item_name;
            use_item7.setAttribute("data-value", item_name);
            inventory_row7.style.opacity = "1";
            inventory_row7.style.pointerEvents = "all";
        break;
        case 8:
            document.getElementById("item_image8").innerHTML = items_image;
            document.getElementById("item_name8").innerHTML = item_name;
            use_item8.setAttribute("data-value", item_name);
            inventory_row8.style.opacity = "1";
            inventory_row8.style.pointerEvents = "all";
        break;
        case 9:
            document.getElementById("item_image9").innerHTML = items_image;
            document.getElementById("item_name9").innerHTML = item_name;
            use_item9.setAttribute("data-value", item_name);
            inventory_row9.style.opacity = "1";
            inventory_row9.style.pointerEvents = "all";
        break;
        case 10:
            document.getElementById("item_image10").innerHTML = items_image;
            document.getElementById("item_name10").innerHTML = item_name;
            use_item10.setAttribute("data-value", item_name);
            inventory_row10.style.opacity = "1";
            inventory_row10.style.pointerEvents = "all";
        break;
        case 11:
            document.getElementById("item_image11").innerHTML = items_image;
            document.getElementById("item_name11").innerHTML = item_name;
            use_item11.setAttribute("data-value", item_name);
            inventory_row11.style.opacity = "1";
            inventory_row11.style.pointerEvents = "all";
        break;
        case 12:
            document.getElementById("item_image12").innerHTML = items_image;
            document.getElementById("item_name12").innerHTML = item_name;
            use_item12.setAttribute("data-value", item_name);
            inventory_row12.style.opacity = "1";
            inventory_row12.style.pointerEvents = "all";
        break;
        case 13:
            document.getElementById("item_image13").innerHTML = items_image;
            document.getElementById("item_name13").innerHTML = item_name;
            use_item13.setAttribute("data-value", item_name);
            inventory_row13.style.opacity = "1";
            inventory_row13.style.pointerEvents = "all";
        break;
        case 14:
            document.getElementById("item_image14").innerHTML = items_image;
            document.getElementById("item_name14").innerHTML = item_name;
            use_item14.setAttribute("data-value", item_name);
            inventory_row14.style.opacity = "1";
            inventory_row14.style.pointerEvents = "all";
        break;
        case 15:
            document.getElementById("item_image15").innerHTML = items_image;
            document.getElementById("item_name15").innerHTML = item_name;
            use_item15.setAttribute("data-value", item_name);
            inventory_row15.style.opacity = "1";
            inventory_row15.style.pointerEvents = "all";
        break;
        case 16:
            document.getElementById("item_image16").innerHTML = items_image;
            document.getElementById("item_name16").innerHTML = item_name;
            use_item16.setAttribute("data-value", item_name);
            inventory_row16.style.opacity = "1";
            inventory_row16.style.pointerEvents = "all";
        break;
        case 17:
            document.getElementById("item_image17").innerHTML = items_image;
            document.getElementById("item_name17").innerHTML = item_name;
            use_item16.setAttribute("data-value", item_name);
            inventory_row17.style.opacity = "1";
            inventory_row17.style.pointerEvents = "all";
        break;
        case 18:
            document.getElementById("item_image18").innerHTML = items_image;
            document.getElementById("item_name18").innerHTML = item_name;
            use_item16.setAttribute("data-value", item_name);
            inventory_row18.style.opacity = "1";
            inventory_row18.style.pointerEvents = "all";
        break;
        case 19:
            document.getElementById("item_image19").innerHTML = items_image;
            document.getElementById("item_name19").innerHTML = item_name;
            use_item16.setAttribute("data-value", item_name);
            inventory_row19.style.opacity = "1";
            inventory_row19.style.pointerEvents = "all";
        break;
        case 20:
            document.getElementById("item_image20").innerHTML = items_image;
            document.getElementById("item_name20").innerHTML = item_name;
            use_item16.setAttribute("data-value", item_name);
            inventory_row20.style.opacity = "1";
            inventory_row20.style.pointerEvents = "all";
        break;
    }
}

//--------------------------glue pick up-----------------------//
var glueButton = document.getElementById("glueButton");
var pickUpGlue = document.getElementById("pickUpGlue");
var exitGlue = document.getElementById("exitGlue");
glueButton.onclick = function() {
    items_num++;
    items_image = '<img src="glue.png">';
    item_name = "glue";
    addToInventory();
    pickUpGlue.style.opacity = 1;
    pickUpGlue.style.pointerEvents = "all";
    glueButton.style.opacity = 0;
    cornerTable.style.filter = "blur(5px)";
    acquire_items.play();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
exitGlue.onclick = function() {
    pickUpGlue.style.opacity = 0;
    pickUpGlue.style.pointerEvents = "none";
    glueButton.style.pointerEvents = "none";
    cornerTable.style.filter = "blur(0px)";

}

//--------------------------Item Use Functions-----------------------//
var use_item1 = document.getElementById("use_item1");
var use_item2 = document.getElementById("use_item2");
var use_item3 = document.getElementById("use_item3");
var use_item4 = document.getElementById("use_item4");
var use_item5 = document.getElementById("use_item5");
var use_item6 = document.getElementById("use_item6");
var use_item7 = document.getElementById("use_item7");
var use_item8 = document.getElementById("use_item8");
var use_item9 = document.getElementById("use_item9");
var use_item10 = document.getElementById("use_item10");
var current_Item_ID = null;
var storedValue = null;
use_item1.onclick = function() {
    storedValue = use_item1.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item2.onclick = function() {
    storedValue = use_item2.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item3.onclick = function() {
    storedValue = use_item3.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item4.onclick = function() {
    storedValue = use_item4.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item5.onclick = function() {
    storedValue = use_item5.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item6.onclick = function() {
    storedValue = use_item6.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item7.onclick = function() {
    storedValue = use_item7.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item8.onclick = function() {
    storedValue = use_item8.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item9.onclick = function() {
    storedValue = use_item9.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item10.onclick = function() {
    storedValue = use_item10.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item1.onclick = function() {
    storedValue = use_item11.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item12.onclick = function() {
    storedValue = use_item12.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item13.onclick = function() {
    storedValue = use_item13.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item14.onclick = function() {
    storedValue = use_item14.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item15.onclick = function() {
    storedValue = use_item15.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item16.onclick = function() {
    storedValue = use_item16.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item17.onclick = function() {
    storedValue = use_item17.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item18.onclick = function() {
    storedValue = use_item18.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item19.onclick = function() {
    storedValue = use_item19.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
use_item20.onclick = function() {
    storedValue = use_item20.getAttribute('data-value');
    useCurrentItem();
    var randomNumber = getRandomNumber(1, 10);
    mediumNoise(randomNumber);
}
function closeInventoryBag(){
    optionTray.classList.remove("optionTray_Appear");
    optionButton.classList.remove("optionButton_Rotate");
    itemsContainer.classList.remove("itemsContainer_Appear");
    bag_sound_close.play();
}
var code_computer2 = document.getElementById('code_computer2');
var exitCodeComputer2 = document.getElementById('exitCodeComputer2');

var code_computer1 = document.getElementById('code_computer1');
var exitCodeComputer1 = document.getElementById('exitCodeComputer1');

exitCodeComputer2.onclick = function(){
    code_computer2.style.opacity = "0";
    code_computer2.style.pointerEvents = "none";
}

exitCodeComputer1.onclick = function(){
    code_computer1.style.opacity = "0";
    code_computer1.style.pointerEvents = "none";
}
function useCurrentItem(){
    closeInventoryBag();
    if(storedValue === "rusty cog"){
        pickUpClockWork2.classList.add("pickUpClockWork2_Appear");
    }else if(storedValue === "clock piece"){
        pickUpClockWork1.classList.add("pickUpClockWork1_Appear");
    }else if(storedValue === "piece of paper 1"){
        pickUpComp2Paper1.classList.add("pickUpComp2Paper1_Appear");
    }else if(storedValue === "piece of paper 2"){
        pickUpComp2Paper2.classList.add("pickUpComp2Paper2_Appear");
    }else if(storedValue === "piece of paper 3"){
        pickUpComp2Paper3.classList.add("pickUpComp2Paper3_Appear");
    }else if(storedValue === "piece of paper 4"){
        pickUpComp1Paper1.style.opacity = "1";
        pickUpComp1Paper1.style.pointerEvents = "all";
    }else if(storedValue === "piece of paper 5"){
        pickUpComp1Paper2.style.opacity = "1";
        pickUpComp1Paper2.style.pointerEvents = "all";
    }else if(storedValue === "piece of paper 6"){
        pickUpComp1Paper3.style.opacity = "1";
        pickUpComp1Paper3.style.pointerEvents = "all";
    }else if(storedValue === "glue"){
        if(comp2_code1 === true && comp2_code2 === true && comp2_code3 === true){
            code_computer2.style.opacity = "1";
            code_computer2.style.pointerEvents = "all";
            comp2_code1 = false;
            items_num++;
            items_image = '<img src="comp2_fullpiece.png">';
            item_name = "computer code 2";
            addToInventory();
        }else{
            if(comp1_code1 === true && comp1_code2 === true && comp1_code3 === true){
                code_computer1.style.opacity = "1";
                code_computer1.style.pointerEvents = "all";
                comp1_code1 = false;
                items_num++;
                items_image = '<img src="comp1_fullpiece.png">';    
                item_name = "computer code 1";
                addToInventory();
            }else{
                pickUpGlue.style.opacity = 1;
                pickUpGlue.style.pointerEvents = "all";
            }
            
        }
    }else if(storedValue === "pinkrolls"){
        MarchPinkRollsMonologue.classList.add("MarchPinkRollsMonologue_Appear");  
    }else if(storedValue === "computer code 2"){
        code_computer2.style.opacity = "1";
        code_computer2.style.pointerEvents = "all";
    }else if(storedValue === "computer code 1"){
        code_computer1.style.opacity = "1";
        code_computer1.style.pointerEvents = "all";
    }
    else if(storedValue === "room 1 key"){
        pick_Dan_Heng_Key.style.opacity= '1';
        pick_Dan_Heng_Key.style.pointerEvents= 'all';
    }
    else if(storedValue === "room 2 key"){
         pick_March_Key.style.opacity= '1';
         pick_March_Key.style.pointerEvents= 'all';
    } else if(storedValue === "room 3 key"){
        pick_Laboratory_Key.style.opacity= '1';
        pick_Laboratory_Key.style.pointerEvents= 'all';
   } else if(storedValue === "power core"){
        rewardPowerCore.style.opacity = "1";
        rewardPowerCore.style.pointerEvents = "all";
    }else if(storedValue === "mysterious cylinder"){
        rewardMysteriousCylinder.style.opacity = "1";
        rewardMysteriousCylinder.style.pointerEvents = "all";
    }   
}

var amplitude_1 = document.getElementById("amplitude_1");
var amplitude_2 = document.getElementById("amplitude_2");
var amplitude_3 = document.getElementById("amplitude_3");
var amplitude_4 = document.getElementById("amplitude_4");

var jumpScare_Container = document.getElementById("jumpScare_Container");

var getRandomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
  
    return Math.floor(Math.random() * (max - min)) + min
  }
 

function mediumNoise(randomNumber){
    if(randomNumber == 1){
        jumpScare();
        amplitude_1.style.opacity = "1";
        amplitude_2.style.opacity = "1";
        amplitude_3.style.opacity = "1";
        amplitude_4.style.opacity = "1";
        if(amplitude_4.classList.contains("amplitude_4_Appear")){
            alien_sound1.play();
            amplitude_1.classList.remove("amplitude_1_Appear");
            amplitude_2.classList.remove("amplitude_2_Appear");
            amplitude_3.classList.remove("amplitude_3_Appear");
            amplitude_4.classList.remove("amplitude_4_Appear");
            amplitude_1.style.backgroundColor = "red";
            amplitude_2.style.backgroundColor = "red";
            amplitude_3.style.backgroundColor = "red";
            amplitude_4.style.backgroundColor = "red";
        }else{
            alien_sound1.play();
            amplitude_1.classList.add("amplitude_1_Appear");
            amplitude_2.classList.add("amplitude_2_Appear");
            amplitude_3.classList.add("amplitude_3_Appear");
            amplitude_4.classList.add("amplitude_4_Appear");
            amplitude_1.style.backgroundColor = "red";
            amplitude_2.style.backgroundColor = "red";
            amplitude_3.style.backgroundColor = "red";
            amplitude_4.style.backgroundColor = "red";
        }
        triggerAlarm();
    }else{
        amplitude_1.style.opacity = "1";
        amplitude_2.style.opacity = "1";
        amplitude_3.style.opacity = "1";
        amplitude_4.style.opacity = "0";
            amplitude_1.style.backgroundColor = "aliceblue";
            amplitude_2.style.backgroundColor = "aliceblue";
            amplitude_3.style.backgroundColor = "aliceblue";
            amplitude_4.style.backgroundColor = "aliceblue";
        if( amplitude_1.classList.contains("amplitude_1_Appear")){
            amplitude_1.classList.remove("amplitude_1_Appear");
            amplitude_2.classList.remove("amplitude_2_Appear");
            amplitude_3.classList.remove("amplitude_3_Appear");
            amplitude_4.classList.remove("amplitude_4_Appear");
        }else{
            amplitude_1.classList.add("amplitude_1_Appear");
            amplitude_2.classList.add("amplitude_2_Appear");
            amplitude_3.classList.add("amplitude_3_Appear");
            amplitude_4.classList.add("amplitude_4_Appear");
        }
        jumpScare();
    }
}


var canClick = true;
var alarmActive = false;

var jumpScareImage = document.getElementById("jumpScareImage");
var TryAgainButton = document.getElementById("TryAgainButton");
var animatedPart = document.getElementById("animatedPart");
var jumpscare_sound = new Audio('jumpscare_sound.mp3');
function jumpScare(){
    if (alarmActive) {
        jumpScare_Container.style.opacity = "1";
        jumpScare_Container.style.pointerEvents = "all";
        jumpScareImage.classList.add("jumpScareImage_Appear");
        TryAgainButton.classList.add("TryAgainButton_Appear");
        animatedPart.classList.add("animatedPart_Appear");
        jumpscare_sound.play();
        clearInterval(alarmInterval);
    } else {
    }
    canClick = false;
    setTimeout(function() {
        canClick = true;
    }, 3000);
}

function triggerAlarm() {
    alarmActive = true;
    setTimeout(function() {
        alarmActive = false;
        jumpScare();
    }, 3000);
}
TryAgainButton.onclick = function() {
    location.reload();
}
//------------------------audio loop---------------------//
var audioElement1 = document.createElement('audio');
audioElement1.setAttribute('src', 'heart_beat_sound.mp3');
audioElement1.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
//------------------------device rewards---------------------//
var rewardPowerCore = document.getElementById("rewardPowerCore");
var exitPowerCore = document.getElementById("exitPowerCore");

var rewardMysteriousCylinder = document.getElementById("rewardMysteriousCylinder");
var exitMysteriousCylinder = document.getElementById("exitMysteriousCylinder");

exitPowerCore.onclick = function(){
    rewardPowerCore.style.opacity = "0";
    rewardPowerCore.style.pointerEvents = "none";
    lobby_computer.style.filter = "blur(0px)";
}
exitMysteriousCylinder.onclick = function(){
    rewardMysteriousCylinder.style.opacity = "0";
    rewardMysteriousCylinder.style.pointerEvents = "none";
    MarchTableBiometrics.classList.remove("MarchTableBiometrics_Blur");
}
//-------------------require laboratory parts----------------//
var pillar1Acquired = false;
var pillar2Acquired = false;

var endGatePass1 = false;
var endGatePass2 = false;

var pillar1RequireButton = document.getElementById("pillar1RequireButton");
var pillar2RequireButton = document.getElementById("pillar2RequireButton");
var requireItemsPillar = document.getElementById("requireItemsPillar");
var exitRequireItemsPillar = document.getElementById("exitRequireItemsPillar");
var successItemsPillar = document.getElementById("successItemsPillar");
var exitSuccessRequireItemsPillar = document.getElementById("exitSuccessRequireItemsPillar");
pillar1RequireButton.onclick = function() {
    if(pillar1Acquired === true){
        mechanicalSoundSuccess.play();
        successItemsPillar.style.opacity = "1";
        successItemsPillar.style.pointerEvents = "all";

        pillar1RequireButton.style.pointerEvents = "none";

        endGatePass1 = true;

        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);
    }else{
        requireItemsPillar.style.opacity = "1";
        requireItemsPillar.style.pointerEvents = "all";
        mechanicalSoundFailed.play();
        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);
    }
}
pillar2RequireButton.onclick = function() {
    if(pillar2Acquired === true){
        mechanicalSoundSuccess.play();
        successItemsPillar.style.opacity = "1";
        successItemsPillar.style.pointerEvents = "all";

        pillar2RequireButton.style.pointerEvents = "none";

        endGatePass2 = true;

        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);
    }else{
        requireItemsPillar.style.opacity = "1";
        requireItemsPillar.style.pointerEvents = "all";
        mechanicalSoundFailed.play();
        var randomNumber = getRandomNumber(1, 10);
        mediumNoise(randomNumber);
    }
}
exitSuccessRequireItemsPillar.onclick = function() {
    successItemsPillar.style.opacity = "0";
    successItemsPillar.style.pointerEvents = "none";
}
exitRequireItemsPillar.onclick = function() {
    requireItemsPillar.style.opacity = "0";
    requireItemsPillar.style.pointerEvents = "none";
}
//-------------------------------Tutorial--------------------------//
var help = document.getElementById("help");
var tutorial_page = document.getElementById("tutorial_page");
var tutorial_1 = document.getElementById("tutorial_1");
var tutorial_2 = document.getElementById("tutorial_2");
var tutorial_3 = document.getElementById("tutorial_3");
var tutorial_4 = document.getElementById("tutorial_4");
var tutorial_5 = document.getElementById("tutorial_5");

var exitTutorial = document.getElementById("exitTutorial");

var left_button = document.getElementById("left_button");
var right_button = document.getElementById("right_button");

help.onclick = function() {
    acquire_items.play();
    tutorial_page.style.opacity = 1;
    tutorial_page.style.pointerEvents = "all";
    tutorial_1.style.opacity = 1;
}
exitTutorial.onclick = function() {
    acquire_items.play();
    tutorial_page.style.opacity = 0;
    tutorial_page.style.pointerEvents = "none";
}
left_button.onclick = function() {
    acquire_items.play();
    if(tutorial_1.style.opacity === "1"){

    }
    else if (tutorial_2.style.opacity === "1"){
        tutorial_1.style.opacity = 1;
        tutorial_2.style.opacity = 0;
        tutorial_3.style.opacity = 0;
        tutorial_4.style.opacity = 0;
        tutorial_5.style.opacity = 0;
    }
    else if (tutorial_3.style.opacity === "1"){
        tutorial_1.style.opacity = 0;
        tutorial_2.style.opacity = 1;
        tutorial_3.style.opacity = 0;
        tutorial_4.style.opacity = 0;
        tutorial_5.style.opacity = 0;
    }
    else if (tutorial_4.style.opacity === "1"){
        tutorial_1.style.opacity = 0;
        tutorial_2.style.opacity = 0;
        tutorial_3.style.opacity = 1;
        tutorial_4.style.opacity = 0;
        tutorial_5.style.opacity = 0;
    }
    else if (tutorial_5.style.opacity === "1"){
        tutorial_1.style.opacity = 0;
        tutorial_2.style.opacity = 0;
        tutorial_3.style.opacity = 0;
        tutorial_4.style.opacity = 1;
        tutorial_5.style.opacity = 0;
    }
}
right_button.onclick = function() {
    acquire_items.play();
    if(tutorial_1.style.opacity === "1"){
        tutorial_1.style.opacity = 0;
        tutorial_2.style.opacity = 1;
        tutorial_3.style.opacity = 0;
        tutorial_4.style.opacity = 0;
        tutorial_5.style.opacity = 0;
    }
    else if (tutorial_2.style.opacity === "1"){
        tutorial_1.style.opacity = 0;
        tutorial_2.style.opacity = 0;
        tutorial_3.style.opacity = 1;
        tutorial_4.style.opacity = 0;
        tutorial_5.style.opacity = 0;
    }
    else if (tutorial_3.style.opacity === "1"){
        tutorial_1.style.opacity = 0;
        tutorial_2.style.opacity = 0;
        tutorial_3.style.opacity = 0;
        tutorial_4.style.opacity = 1;
        tutorial_5.style.opacity = 0;
    }
    else if (tutorial_4.style.opacity === "1"){
        tutorial_1.style.opacity = 0;
        tutorial_2.style.opacity = 0;
        tutorial_3.style.opacity = 0;
        tutorial_4.style.opacity = 0;
        tutorial_5.style.opacity = 1;
    }
    else if (tutorial_5.style.opacity === "1"){
       
    }
}


// var endingVideo = new Video('ending.mp4');
// endingVideo.play();


