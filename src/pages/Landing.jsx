import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/banner.jpg'
import { Card } from 'react-bootstrap'
import landingImg1 from '../assets/1.jpeg'
import landingImg2 from '../assets/3.jpeg'
import landingImg3 from '../assets/4.jpeg'



const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* landing */}
      <div className="row d-flex align-items-center p-5">
    <div className="col-lg-6 mt-5 d-flex flex-column">
        <h3>
            Welcome to <span className="text-warning">Media Player</span>
        </h3>
        <p className="pt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eos necessitatibus iusto, eveniet nobis quasi! Alias molestiae perspiciatis quisquam aliquam voluptatem beatae quidem magni, debitis vel in nam amet doloremque?
        </p>
        <Link to={'/Home'} className="btn-btn-info mt-3">Get Started</Link>
    </div>
    <div className="col-lg-6 d-flex justify-content-center">
        <img style={{ width: "100%", paddingLeft:"10px" }} src={landingImg} alt="Landing image" />
    </div>
</div>

      {/* features */}
    <div style={{paddingLeft:"70px"}} className='features my-5'>
      <h3 className='text-center'>Features</h3>
      <div className='row mt-5'>
        <div className="col-lg-4">
        <Card className="p-2" style={{ width: '20rem' }}>
      <Card.Img style={{height:"250px"}} variant="top" src={landingImg1} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove videos
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-4">
        <Card className="p-2" style={{ width: '20rem' }}>
      <Card.Img style={{height:"250px"}} variant="top" src={landingImg2} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove videos
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-4">
        <Card className="p-2" style={{ width: '20rem' }}>
      <Card.Img style={{height:"250px"}} variant="top" src={landingImg3} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove videos
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
      {/* links */}
      <div className='row border d-flex align-items-center p-5 mb-3'>
        <div style={{textAlign:"justify"}} className="col-lg-6 my-2 py-2 d-flex flex-column">
          <h3 className='text-warning mb-4'>SImple,Fast and Powerful</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore enim soluta exercitationem excepturi, aliquid iure nam impedit ad molestiae laudantium natus veniam incidunt vel temporibus sint nesciunt minus laborum officiis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit earum vel dolores, modi ullam excepturi minima rerum voluptatem consequatur nesciunt aspernatur incidunt, molestias, dolorum expedita distinctio blanditiis quasi eligendi ut?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus sit minus commodi nam! Esse doloremque, beatae fuga quos repellendus odio hic, minus nostrum veniam, quisquam numquam. Quasi, nostrum dignissimos?</p>
        </div>
        <div className="col-lg-6 mt-2 d-flex flex-column">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tOM-nWPcR4U?si=I_7eg6UCDhEL_jpv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing