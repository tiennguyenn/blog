import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Item from './Item'
import Pager from './Pager'

import posts from './../assets/data/posts'

const Home = () => {
  return (
    <Container>
      <Row>
        <div className="col-lg-8 col-md-10 mx-auto">
          {
            posts.map((p,i) => {
              return <Item key={`post-${i}`} {...p} />
            })
          }

          <Pager />
        </div>
      </Row>
    </Container>
  )
}

export default Home