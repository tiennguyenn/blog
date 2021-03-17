import { useEffect } from 'react';
import $ from 'jquery'

import Nav from './components/Nav'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Post from './components/Post'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './assets/css/clean-blog.min.css'

function App() {

  useEffect(() => {
    // Show the navbar when the page is scrolled up
    const MQL = 992;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
      const headerHeight = $('#mainNav').height();
      $(window).on('scroll', {
          previousTop: 0
        },
        function() {
          const currentTop = $(window).scrollTop();
          //check if user is scrolling up
          if (currentTop < this.previousTop) {
            //if scrolling up...
            if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
              $('#mainNav').addClass('is-visible');
            } else {
              $('#mainNav').removeClass('is-visible is-fixed');
            }
          } else if (currentTop > this.previousTop) {
            //if scrolling down...
            $('#mainNav').removeClass('is-visible');
            if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
          }
          this.previousTop = currentTop;
        });
    }
  }, [])

  return (
    <>
      <Nav />
      <Header />
      <Home />
      <hr />
      <Footer />
    </>
  );
}

export default App;
