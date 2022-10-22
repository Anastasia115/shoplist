import React from "react";
import {useState} from 'react';
import "./Item.css";
import PlusIcon from "../assets/shoppingListIcons/plusicon.svg";
import EditIcon from "../assets/shoppingListIcons/editicon.svg";
import TrashIcon from "../assets/shoppingListIcons/trashicon.svg";
import PlusQuantity from "../assets/shoppingListIcons/plus.svg";
import MinusQuantity from "../assets/shoppingListIcons/minus.svg";


 export const Item = (props) => {
const[deleteItem, setDeleteItem] = useState(false);
console.log(deleteItem)
const[editItem, setEditItem] = useState(false);
console.log(editItem)

const [counter, setCounter] = useState(1);
const incrementCounter = () => setCounter(counter + 1);
const decrementCounter = () => setCounter(counter - 1);
// if (counter<=0) {
//     decrementCounter = () => setCounter();
// }

    return (
      <>
      <div className="item-container">
        <div className="item"
      
        >
        
            <img
        style={{ cursor: "pointer" }}
        onClick={() => props.completeItem(props.id)}
          // style={{ backgroundColor: props.completed ? "green" : "white" }}
          src={PlusIcon}
        alt="mark item complete"
      />
      
          <h1>{props.itemName}</h1>

          <div className="quantity">

            <img 
            style={{ cursor: "pointer" }}
            onClick={decrementCounter} 
            src={MinusQuantity} alt=""/>

            <p >{counter}</p>

            <img
            style={{ cursor: "pointer" }}
            onClick={incrementCounter}
            src={PlusQuantity}
            alt=""
            />
        </div>

          <img
        style={{ cursor: "pointer" }}
        onClick={() => setEditItem(true)}
        src={EditIcon}
        alt="edit item"
      />
        <img
        style={{ cursor: "pointer" }}
        onClick={() => setDeleteItem(true)}
        src={TrashIcon}
        alt="delete item"
      />
          {/* <button onClick={() =>props.completeItem(props.id)}>Complete</button> */}
          {/* <button onClick={() => props.deleteItem(props.id)}>Delete</button> */}
        


        </div>
        {deleteItem && 
        <div className="popup">
          <p>Do you want to delete this item? </p>
          <h1>"{props.itemName}"</h1>
          <div className="buttons">
            <button className="btn" onClick={() => setDeleteItem(false)}>Cancel</button>
            <button className="btn" type="submit" onClick={() => props.deleteItem(props.id)}>Delete</button>
          </div>
        </div>
        }

        {editItem && 
        <div className="popup">
          <p>Do you want to edit this item? </p>
          
          <h1>"{props.itemName}"</h1>
        
          <div className="buttons">
            <button className="btn" onClick={() => setEditItem(false)}>Cancel</button>
            <button className="btn" type="submit" onClick={() => props.editItem(props.id)}>Save</button>
          </div>
        </div>
        }
        </div>
        </>
      );
};