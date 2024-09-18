import { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';


function Home() {
  const navigate = useNavigate();
  const { authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn } = useAuth();

  useEffect(() => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
            axios.get('http://localhost:2000/user/auth', {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((response) => {
                    setAuthUser(response.data);
                    setIsLoggedIn(true);
                    console.log("login successfully");
                })
                .catch((error) => {
                    console.error(error);
                    // localStorage.removeItem('JWT_Token');
                });
        }
    }, []);
  

  return (
    <>
      {/* <h1>home</h1> */}

      {/* <!-- Hero Section --> */}
      <header class="hero d-flex align-items-center">
        <div class="hero-content">
          <h1 class="hero-title">The Best Library That Every Book Lover Must Visit</h1>
          <p class="hero-description">Explore a vast collection of books and resources in a serene and
            inspiring environment. Our library is designed to cater to all your literary needs and
            provide a cozy space for reading and learning.</p>
          <a href="books.html" class="btn btn-light btn-lg">Browse Books</a>
        </div>
      </header>



      {/* <!-- Categories Section --> */}
      <section class="categories py-5">
        <div class="container">
          <h2 class="text-center mb-4">Book Categories</h2>
          <div class="row">
            {/* <!-- Category Card 1 --> */}
            <div class="col-md-4 mb-4">
              <div class="card shadow-sm border-0">
                <img src="images/oxana-melis-P0FrzZVB7DE-unsplash.jpg"
                  class="card-img-top" alt="Category 1" />
                <div class="card-body">
                  <h5 class="card-title">Fiction</h5>
                  <p class="card-text">Dive into a world of imagination and
                    creativity with our extensive collection of fiction
                    books.</p>
                </div>
              </div>
            </div>
            {/* <!-- Category Card 2 --> */}
            <div class="col-md-4 mb-4">
              <div class="card shadow-sm border-0">
                <img src="images/pexels-pixabay-60582.jpg" class="card-img-top"
                  alt="Category 2" />
                <div class="card-body">
                  <h5 class="card-title">Non-Fiction</h5>
                  <p class="card-text">Explore real-life stories and insights with
                    our diverse range of non-fiction books.</p>
                </div>
              </div>
            </div>
            {/* <!-- Category Card 3 --> */}
            <div class="col-md-4 mb-4">
              <div class="card shadow-sm border-0">
                <img src="images/pexels-pixabay-415071.jpg" class="card-img-top"
                  alt="Category 3" />
                <div class="card-body">
                  <h5 class="card-title">Science</h5>
                  <p class="card-text">Enhance your knowledge with our collection
                    of science books covering various fields and topics.</p>
                </div>
              </div>
            </div>
            {/* <!-- Category Card 4 --> */}
            <div class="col-md-4 mb-4">
              <div class="card shadow-sm border-0">
                <img src="images/pexels-pixabay-60582.jpg" class="card-img-top"
                  alt="Category 4" />
                <div class="card-body">
                  <h5 class="card-title">History</h5>
                  <p class="card-text">Uncover the past with our extensive range
                    of history books that delve into different eras and
                    events.</p>
                </div>
              </div>
            </div>
            {/* <!-- Category Card 5 --> */}
            <div class="col-md-4 mb-4">
              <div class="card shadow-sm border-0">
                <img src="images/pexels-pixabay-415071.jpg" class="card-img-top"
                  alt="Category 5" />
                <div class="card-body">
                  <h5 class="card-title">Biography</h5>
                  <p class="card-text">Learn about the lives of inspiring
                    individuals through our collection of biography books.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Category Card 6 --> */}
            <div class="col-md-4 mb-4">
              <div class="card shadow-sm border-0">
                <img src="images/pexels-pixabay-60582.jpg" class="card-img-top"
                  alt="Category 6" />
                <div class="card-body">
                  <h5 class="card-title">Travel</h5>
                  <p class="card-text">Discover new places and cultures with our
                    selection of travel books.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Gallery Section --> */}
      <section class="gallery py-5">
        <div class="container">
          <h2 class="text-center mb-4">Library Gallery</h2>
          <div class="row">
            {/* <!-- Gallery Item 1 --> */}
            <div class="col-md-4 mb-4">
              <div class="gallery-item">
                <img src="images/4.jpg" class="img-fluid" alt="Gallery Image 1" />
                <div class="overlay" >
                  <div class="text">Image Description 1</div>
                </div>
              </div>
            </div>
            {/* <!-- Gallery Item 2 --> */}
            <div class="col-md-4 mb-4">
              <div class="gallery-item">
                <img src="images/2.jpg" class="img-fluid" alt="Gallery Image 2" />
                <div class="overlay" >
                  <div class="text">Image Description 2</div>
                </div>
              </div>
            </div>
            {/* <!-- Gallery Item 3 --> */}
            <div class="col-md-4 mb-4">
              <div class="gallery-item">
                <img src="images/3.jpg" class="img-fluid" alt="Gallery Image 3" />
                <div class="overlay" >
                  <div class="text">Image Description 3</div>
                </div>
              </div>
            </div>
            {/* <!-- Add more gallery items as needed --> */}

          </div>
        </div>
      </section>




      {/* <!-- What Others Are Saying Section --> */}
        <section class="testimonials py-5">
                <div class="container">
                        <h2 class="text-center mb-5">What Others Are Saying About Our Library</h2>
                        <div id="testimonialCarousel" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                        {/* <!-- Testimonial 1 --> */}
                                        <div class="carousel-item active">
                                                <div class="testimonial-item">
                                                        <div class="row">
                                                                <div class="col-lg-4 col-md-5">
                                                                        <div class="testimonial-img">
                                                                                <img src="images/user1.jpg"
                                                                                        class="img-fluid rounded-circle"
                                                                                        alt="User 1" />
                                                                        </div>
                                                                </div>
                                                                <div class="col-lg-8 col-md-7">
                                                                        <div class="testimonial-content">
                                                                                <h4>John Doe</h4>
                                                                                <p class="testimonial-text">"The library
                                                                                        is fantastic! A peaceful haven
                                                                                        with a diverse range of books.
                                                                                        The staff is friendly and always
                                                                                        willing to help."</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* <!-- Testimonial 2 --> */}
                                        <div class="carousel-item">
                                                <div class="testimonial-item">
                                                        <div class="row">
                                                                <div class="col-lg-4 col-md-5">
                                                                        <div class="testimonial-img">
                                                                                <img src="images/user2.jpg"
                                                                                        class="img-fluid rounded-circle"
                                                                                        alt="User 2" />
                                                                        </div>
                                                                </div>
                                                                <div class="col-lg-8 col-md-7">
                                                                        <div class="testimonial-content">
                                                                                <h4>Jane Smith</h4>
                                                                                <p class="testimonial-text">"An
                                                                                        incredible collection of books
                                                                                        and a wonderful atmosphere. This
                                                                                        library has become my go-to
                                                                                        place for all my reading needs."
                                                                                </p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* <!-- Testimonial 3 --> */}
                                        <div class="carousel-item">
                                                <div class="testimonial-item">
                                                        <div class="row">
                                                                <div class="col-lg-4 col-md-5">
                                                                        <div class="testimonial-img">
                                                                                <img src="images/user3.jpg"
                                                                                        class="img-fluid rounded-circle"
                                                                                        alt="User 3" />
                                                                        </div>
                                                                </div>
                                                                <div class="col-lg-8 col-md-7">
                                                                        <div class="testimonial-content">
                                                                                <h4>Emily Johnson</h4>
                                                                                <p class="testimonial-text">"I love the
                                                                                        variety of genres available
                                                                                        here. The quiet environment and
                                                                                        comfortable seating make it the
                                                                                        perfect spot for long reading
                                                                                        sessions."</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                {/* <!-- Carousel Controls --> */}
                                <a class="carousel-control-prev" href="#testimonialCarousel" role="button"
                                        data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#testimonialCarousel" role="button"
                                        data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                </a>
                        </div>
                </div>
        </section>


    </>
  )
}

export default Home;
