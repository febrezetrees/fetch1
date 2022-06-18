import { useState, useEffect } from "react";
import Form from "./Form";
//import List from "./List";
import Table from "./Table";


function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState('users'); //sets initial state of 'reqType'. Flows through in useEffect as the initial reqType be read from the url
  const [items, setItems] = useState([]); //data we get back in the API read / get. In a JSON array

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json(); //taking JSON input and parsing it to produce a JavaScript object
        console.log(data);
        setItems(data);
      } catch (err) {
          console.log(err);
      }
    }
    fetchItems();
  }, [reqType]) // dependency - will run function on render / then will read each time the reqType changes (users, comments or posts). Also runs initially?

  return (
    <div className = "App">
      <Form 
        reqType={reqType}
        setReqType={setReqType} 
      />
      {/*<List
        items={items}/>*/} 
      <Table 
        items={items}
      />    
    </div>
  );
}

export default App;
