// Import necessary components and icons
import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaEnvelope, FaUserCircle, FaClock, FaRegFileAlt, FaArrowRight } from 'react-icons/fa';

// Define the Article component
function Article() {
  

  return (
    <Container fluid className="p-4"  >

      <Row className="justify-content-center mt-5">
        <Col md={5} className="col-md-5" style={{justifyContent:'center'}}>
          <Image style={{background:'black', maxHeight:1000}} src="/images/sealtech.png" rounded fluid className="mb-3"/>

          <h1>How To Spot An Asphalt Paving Scam Before It Happens: 9 Warning Signs</h1>
          <Row className="align-items-center mb-3 text-muted">
            <Col>
             <a><FaUserCircle className='mx-3'/>SealTech Pavement Co.</a> 
           <a> <FaClock className="mx-3"/>June 21, 2023   </a>
           <a> <FaRegFileAlt className="mx-3"/>Other Blogs </a> </Col>
          </Row>

          <Row className="align-items-center mb-4">

           <Col> <Button variant="link"className="text-dark"><FaFacebookF/></Button>
           <Button variant="link" className="text-dark"><FaTwitter/></Button>
            <Button variant="link" className="text-dark"><FaEnvelope/></Button></Col>
          </Row>

          <div>
          Asphalt paving scams can be very costly for homeowners who fall victim to them. If you’re unfamiliar with common warning signs, you could hire a shady contractor who will take your money and run.

So today, Black & Yellow Pavement Inc. will show you nine ways to spot an asphalt paving scam before it happens. So, before you hire anyone to pave your driveway, read this article! You’ll be glad you did.

Unreasonable Pricing:
A legitimate contractor will give you a fair price based on the scope of work. If the price is significantly lower than other quotes, be cautious.

It could signify that they are not using quality materials or will cut corners to save money. Also, an unreasonably low price indicates additional costs later on.

Asking For Full Payment Upfront:
A legitimate contractor will not ask you to pay the full amount upfront. They may ask for a deposit to cover materials but should not request the entire payment before starting work.

No References:
When you’re considering hiring a contractor, ask for references. A reputable company should have no problem providing you with a list of past clients.

Once you have the references, call them and ask about their experience. However, if the company is unable to provide any references, beware. It’s a red flag.

Beware of Door-To-Door Sales Assistants:
One of the most common ways that scams are perpetrated is by door-to-door sales clerks. These individuals will often show up unannounced and pressure you into hiring them on the spot.

They may even offer a discount if you make a decision right away. In most cases, sending these salesmen on their way is best.

Cash Only Sales Claim:
Another red flag to watch out for is when a contractor demands that you pay in cash. It is often a sign that they are not legitimate and are looking to avoid paying taxes on their work.

No License or Insurance:
All reputable contractors should have both liability insurance and workers’ compensation insurance. If they don’t, it’s a major red flag.

Not only does this mean they are not legitimate, but it also means that you could be held responsible for any accidents or injuries during the job.

Pressure to Sign a Contract in a Hurry:
If a contractor is pressing you to sign immediately, it could be because they’re not legitimate. They may be trying to take advantage of you before you have time to research them or get other quotes.

No Physical Address or Website:
If the contractor you’re considering hiring doesn’t have a physical address or website, that’s a major red flag. A legitimate business will have both of these things.

Unmarked Truck:
If the truck that arrives to do the job is unmarked, that’s another warning sign. A professional paving company will have their name and contact information printed on their truck.

Black & Yellow Pavement Inc. is the most economical choice for any pavement project in Burlington, VT. That is because we offer a free estimate and have friendly staff who will work with you on your budget to get what’s needed done right!
          </div>

          <h2 className="mt-4">Related Articles</h2>

          <Row>
           
            <Col className="col-md-4" style={{justifyContent:'center'}} >
              <Card>
                <Card.Img style={{background:'black'}} variant="top" src="/images/sealtech.png" />
                <Card.Body >
                  <Card.Title>A List Of The Common Crack Failures Asphalt Pavement Can Experience</Card.Title>
                  <Card.Text>
                    <small className="text-muted">June 30, 2023</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-4" >
              <Card>
                <Card.Img style={{background:'black'}} variant="top" src="/images/sealtech.png" />
                <Card.Body>
                  <Card.Title>A List Of The Common Crack Failures Asphalt Pavement Can Experience</Card.Title>
                  <Card.Text>
                    <small className="text-muted">June 30, 2023</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-4" >
              <Card>
                <Card.Img style={{background:'black'}} variant="top" src="/images/sealtech.png" />
                <Card.Body>
                  <Card.Title>A List Of The Common Crack Failures Asphalt Pavement Can Experience</Card.Title>
                  <Card.Text>
                    <small className="text-muted">June 30, 2023</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Col>
        <Col className="col-md-3">
          <h2>Recent Posts</h2>
          <ul className="list-unstyled">
            
              <li><a href="#">How To Spot An Asphalt Paving Scam Before It Happens: 9 Warning Signs <FaArrowRight/></a></li>
              <li ><a href="#">A Step-By-Step Guide To Infrared Repairs For Your Asphalt Pavement <FaArrowRight/></a></li>
              <li><a href="#">A List Of The Common Crack Failures Asphalt Pavement Can Experience <FaArrowRight/></a></li>
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Article;
