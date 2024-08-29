import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios.post("http://localhost:3001/comments", {commentBody: newComment, PostId: id}, {headers: {accessToken: sessionStorage.getItem("accessToken")}}).then((response) => {
      if (response.data.error) {
        alert(response.data.error.message);
      } else {
        const commentToAdd = { commentBody: newComment};
        setComments([...comments, commentToAdd]);
        setNewComment("");
      }
    })
  };

  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Card className="text-center">
            <Card.Header className="bg-primary text-white py-3">
              <Card.Title>{postObject.title}</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex align-items-center justify-content-center" style={{height: '180px'}}>
              <Card.Text>
                {postObject.postText}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-primary text-white py-3 text-start">{postObject.username}</Card.Footer>
          </Card>    
        </Col>
        <Col md>
          <InputGroup>
            <Form.Control as="textarea" aria-label="With textarea" placeholder='Add a Comment' value={newComment} onChange={(event) => {
              setNewComment(event.target.value);
            }}/>
          </InputGroup>
          <div className='d-grid mt-2'>
            <Button variant="primary" onClick={addComment}>Add Comment</Button>
          </div>
          {comments.map((value, key) => {
            return (
              <Card key={key} className='mt-3'>
                <Card.Body>{value.commentBody}</Card.Body>
              </Card>            
            );
          })}
        </Col>
      </Row>
    </Container>

    // <div>{postObject.postText}</div>
  )
}

export default Post