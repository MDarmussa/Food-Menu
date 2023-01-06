import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemLists from "./components/ItemLists";
import { items } from "./data";
import { useState } from "react";

function App() {
  //step 1- import our data using useState /  then pass it as a prop by define a variable for <ItemLists itemsData={itemsData}/>.
  const [itemsData, setItemsData] = useState(items)

  //step 3- get all cat unique / if we add a new category, a new button will be added on the page.
  // [...new Set()]: prevents overload or duplication.
  const allCategory = ['All', ...new Set(items.map((i) => i.category))]
  console.log(allCategory)

  // step 2- Filter by category.
  const filterByCategory = (cat) => {
    //to filter all (All button) using if statement. 
    // If (cat == All): bring all the original menu, else: bring the newArr (new categories: breakfast, luch OR dinner).
    if(cat === "All"){
      setItemsData(items)
    } else {
    //if the item is found in the original array, then add newArr in setItemsData().
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }

    // step 4- Filter by search form
    const filterBySearch = (word) => {
      //if word is not empty, filter it then add it in the useState which is in 'setItemsData'.
      if(word !== ""){
        const newArr = items.filter((item) => item.title === word)
        setItemsData(newArr)
      } 
    }

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />

      <Container>
          <Header />
          <Category filterByCategory={filterByCategory} allCategory={allCategory} />
          <ItemLists itemsData={itemsData} />
      </Container>

    </div>
  );
}

export default App;
