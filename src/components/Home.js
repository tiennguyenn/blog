import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Item from './Item'
import Pager from './Pager'
import Header from './Header'

import posts from './../assets/data/posts'
import homeBg from './../assets/images/home-bg.jpg'

const Home = () => {
  return (
    <>
    <Header bg={homeBg} heading="Clean Blog" subheading="A Blog Theme by Start Bootstrap" />
    <Container>
      <Row>
        <Col lg="8" md="10" className="mx-auto">
          {
            posts.map((p,i) => {
              return <Item key={`post-${i}`} {...p} />
            })
          }
          <Pager />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Home