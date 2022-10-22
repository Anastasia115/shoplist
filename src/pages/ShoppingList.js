import './ShoppingList.css';
import {useState} from 'react';
import {Item} from "../components/Item.js";
import Bag from "../assets/shoppingListIcons/bag.svg";

function App() {
  const [shopList, setShopList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState("");
  const [noList, setNoList] = useState("You don't have any items in your shopping list!");
  

  const handleChange = (event) => {
    setNewItem(event.target.value);
    
  };
  
  const addItem = () => {
  
    const item = {
            id: shopList.length === 0 ? 1 : shopList[shopList.length -1].id +1,
            itemName: newItem,
            completed:false,
            
          }
          if(!item) setNoList("You don't have any items in your shopping list!");

          else if(newItem && newItem.length <=25 ) {
            setShopList([item, ...shopList]);
            setError("");
            setNoList("");

          } else if(!newItem) {
            setError("You didn't type anything...");
            setNoList("You don't have any items in your shopping list!");
          }
          else if(newItem.length > 25 ) {
          setError("Character limit is 25.");
          setNoList("You don't have any items in your shopping list!");
        }
        else if(newItem.length > 25 && newItem ) {
          setError("Character limit is 25.");
          setNoList("You don't have any items in your shopping list!");
        }
          
  };

//////
  const deleteItem = (id) => {
    setShopList(shopList.filter((item) => item.id !== id));
  };
  const completeItem = (id) => {
    setShopList(
      shopList.map((item) => {
        if(item.id === id) {
          return {...item, completed: true};  
        } else {
          return item;
        }
      })
    );
  };

  const editItem = (id) => {

  }

  return (
    <>
    <div className="title">
      <h1>Shop List</h1>
      <p>Add items to your shopping list.</p>
    </div>
    <div className="form-container">
            <div className="form">
             
                <input className="input"
                type="text"
                // required
                placeholder="Type items..."
                 onChange={handleChange}
                 
                 />
                <button className="btn" type="submit" onClick={addItem}>Add Item</button>
                
            </div>
            <div className='error'>
                {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
                {noList &&
                  <div className="no-list" >
                      <img src={Bag} alt="bag-illustration"/>
                      <p>{noList}</p>
                    </div>
                }
                
            <div className="list">
              {shopList.map((item) =>{
                return(
                <Item
                itemName={item.itemName} 
                id={item.id}
                editItem={editItem}
                completed={item.completed}
                completeItem={completeItem}
                deleteItem={deleteItem} />
                
                );
              })}
            </div>
            

        </div>

        
    </>
  );
}

export default App;
