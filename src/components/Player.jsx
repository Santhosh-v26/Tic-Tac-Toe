import { useState } from "react";

export default function Player({initialName , symbol , isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false); 
    /*isEditing is initially false and when we click the edit button the setIsEditing return true
    setIsEditing changes the state as per input , the isEditing is the current holding state when the setIsEditing changes it 
     gives the value to isEditing and this will hold until the next state changes
        */

    function handleEditClick(){ // creation func inside func so that it can access the use state variable and manage the edit button click
        setIsEditing((editing)=> !editing);
        
        if(isEditing){
        onChangeName(symbol, playerName);
        }
         //setIsEditing(false) it is initially false so when the button is clicked we changing the state to true
        // this callback func will make sure the opp value like change edit to save and save to edit
        /* 
        the idea is the state is false initially , when we click the edit button the setIsEditing state changes to true and allow
        us to enter the player name once we entered the state again goes to false
        */
    }

    function handleChange(event){// this func is for changing and holding the value of player name
        setPlayerName(event.target.value);
    }

    let editableplayerName = <span className="player-name">{playerName}</span> // storing in variable to make the player name for input dynamically
    let btnCaption = 'Edit' // intially the btn name should be edit once we click edit and writing name,...it should change to save
     
    if(isEditing) {
        editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption="Save"
    }
        
    return (
        <li className={isActive ? 'active' : undefined}> {/*this is for highlighting which player turn*/}
        <span className="player">
         {editableplayerName} {/*after dynamically asking input name from player in the constant variable */}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>  
        {/* here onClick will detect if button is clicked it call the handleEditClick func 
         note * we should not use () after mentioning function name for onClick ,.. making the btn name dynamic if we are
         editing the name should change to save.
         */}
        
      </li>
    );
}