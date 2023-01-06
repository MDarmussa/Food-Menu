import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemLists from "./components/ItemLists";
import { items } from "./data";
import { useState } from "react";

function App() {
  //step 1 -- then pass it as a prop by define a variable for <ItemLists itemsData={itemsData}/>
  const [itemsData, setItemsData] = useState(items)

  return (
    <div className="color-body font">
      <NavBar />

      <Container>
          <Header />
          <Category />
          <ItemLists itemsData={itemsData} />
      </Container>

    </div>
  );
}

export default App;
