import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg'

const Home = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <Navbar expand="lg py-3">

                        <Navbar.Brand href="#home" className='logo'><span>UrbanEdge</span> Constructions</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>About Us</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>Projects</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                                <Nav.Link href="#link" className='nav-link'>Contact Us</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                </div>

            </header>
            <main>
                <section className='section-1'>
                    <div className='hero d-flex align-items-center'>
                        <div className='container-fluid'>
                            <div className='text-center'>
                                <span>Welcome Amazing Constructions</span>
                                <h1>Crafting Dreams with<br /> precision and excellence</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                                <a className='btn btn-primary'>Contact Now</a>
                                <a className='btn btn-secondary ms-2    '>View Projects</a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* About us secton */}
                <section className='section-2 py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={AboutImg} className='w-100' />
                            </div>

                            <div className='col-md-6'>
                                <span>About Us</span>
                                <h2>Crafting Structure that last a lifetime</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <footer>

            </footer>
        </>

    )
}

export default Home