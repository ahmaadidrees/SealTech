import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Blog.css';
import { FaAngleDoubleRight, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    const blogs = [
        {
          id: 1,
          title: 'How To Spot An Asphalt Paving Scam Before It Happens: 9 Warning Signs',
          image: '/images/blog1.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: 'June 1, 2023',
        },
        {
          id: 2,
          title: 'A Step-By-Step Guide To Infrared Repairs For Your Asphalt Pavement',
          image: '/images/blog2.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: 'June 2, 2023',
        },
        {
          id: 3,
          title: 'A List Of The Common Crack Failures Asphalt Pavement Can Experience',
          image: '/images/blog3.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: 'June 3, 2023',
        },
        {
          id: 4,
          title: '7 Top Paint Stripping Precautions To Keep Your Team Safe',
          image: '/images/blog3.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: 'June 4, 2023',
        },
        {
          id: 5,
          title: '7 Top Paint Stripping Precautions To Keep Your Team Safe',
          image: '/images/blog2.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: 'June 5, 2023',
        },
        {
          id: 6,
          title: '7 Top Paint Stripping Precautions To Keep Your Team Safe',
          image: '/images/blog1.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: 'June 6, 2023',
        },
      ];
      

  return (
    <Container className='blog-container'>
      <h1 className="blog-title">Blogs</h1>
      <Row className="blog-row">
        {blogs.map((blog) => (
          <Col key={blog.id} lg={4} md={6} xs={12}>
            <Card className="blog-card">
              <Card.Img style={{background:"black"}} variant="top" src={'/images/sealtech.png'} className="blog-image" />
              <Card.Body className='card-body'>
                <Card.Title style={{fontWeight:"900", marginBottom:20}}>{blog.title}</Card.Title>
                <Card.Text style={{marginBottom:30}}>{blog.description}</Card.Text>
                <Button as={Link} to='/article' style={{background:'transparent', color:'#ec5d24', borderWidth:0, fontWeight:800}} variant="primary">READ MORE<FaAngleDoubleRight style={{marginLeft:5}} size={10}/></Button>
                <hr />
                <Card.Text className="blog-date">{blog.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPage;
