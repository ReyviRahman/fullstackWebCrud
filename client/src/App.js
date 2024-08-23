// import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    }); 
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {listOfPosts.map((value, key) => {
        return (
          <Card style={{ width: '500px' }} className="text-center mt-4">
            <Card.Header className="bg-primary text-white py-3">
              <Card.Title>{value.title}</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex align-items-center justify-content-center" style={{height: '180px'}}>
              <Card.Text>
                {value.postText}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-primary text-white py-3 text-start">{value.username}</Card.Footer>
          </Card>            
        );
      })}
    </div>
  );
}

export default App;
