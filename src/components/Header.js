import { Col, Container, Row } from 'react-bootstrap'


const Header = ({bg, heading, subheading, isPost=false, user=false, createdAt=false}) => {
  return (
    <header className="masthead" style={{backgroundImage: `url(${bg})`}}>
      <div className="overlay" />
      <Container>
        <Row>
          <Col lg="8" md="10" className="mx-auto">
            <div className={isPost ? 'post-heading' : 'site-heading'}>
              <h1>{heading}</h1>
              <h2 className="subheading">{subheading}</h2>
              {
                user && 
                <span class="meta">
                  Posted by <a href="/user">{user}</a> on {createdAt}
                </span>
              }
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header