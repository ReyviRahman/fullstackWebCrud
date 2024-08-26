import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    }); 
  }, []);

  return (
    <div className='d-flex align-items-center flex-column'>
      {listOfPosts.map((value, key) => {
        return (
          <Card key={key} onMouseEnter={(e) => e.currentTarget.classList.add('shadow')} onMouseLeave={(e) => e.currentTarget.classList.remove('shadow')} style={{ width: '500px', cursor: 'pointer' }} className="text-center mt-4" onClick={ () => {navigate(`/post/${value.id}`)}}>
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
  )
}

export default Home