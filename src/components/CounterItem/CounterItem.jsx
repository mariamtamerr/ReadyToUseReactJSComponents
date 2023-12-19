import React, { useEffect } from 'react';
import  './CounterItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery'; // Import jQuery


const CounterItem = () => {





    useEffect(() => {
        // jQuery logic inside useEffect
        $('.counter').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }, []); 





  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.timer');
      counters.forEach((counter) => {
        const updateCounter = () => {
          const target = +counter.getAttribute('data-to');
          const count = +counter.innerText;
          const speed = +counter.getAttribute('data-speed') || 7000; // Default speed

          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCounter, 1);
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();
      });
    };

    animateCounters();
  }, []);

  return (
    <section className="wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="300ms" style={{ visibility: 'visible', animationDuration: '300ms', animationName: 'fadeInUp' }}>
            <i className="fa fa-beer medium-icon"></i>
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
            <FontAwesomeIcon icon={faFacebook} className='medium-icon' />
            <span id="anim-number-pizza" className="counter-number"></span>
            <span className="timer counter alt-font appear" data-to="980" data-speed="7000">2800</span>
            <p className="counter-title">Counter 1</p>
          </div>
          {/* Add similar blocks for other counters */}
          <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="600ms" style={{ visibility: 'visible', animationDuration: '600ms', animationName: 'fadeInUp' }}>
                        <i className="fa fa-heart medium-icon"></i>
                        <FontAwesomeIcon icon={faHeart} className='medium-icon'/>
                         <span className="timer counter alt-font appear" data-to="980" data-speed="7000">980</span>
                        <span className="counter-title">Counter 2</span>
        </div>
          {/* ---------- */}
          <div className="col-md-3 col-sm-6 bottom-margin-small text-center counter-section wow fadeInUp xs-margin-bottom-ten animated" data-wow-duration="900ms" style={{ visibility: 'visible', animationDuration: '900ms', animationName: 'fadeInUp' }}>
                        <i className="fa fa-anchor medium-icon"></i>
                        <FontAwesomeIcon icon={faTwitter} className='medium-icon'/>
                         <span className="timer counter alt-font appear" data-to="810" data-speed="7000">810</span>
                        <span className="counter-title">Counter 3</span>
        </div>
          {/* ------------ */}
          <div className="col-md-3 col-sm-6 text-center counter-section wow fadeInUp animated" data-wow-duration="1200ms" style={{ visibility: 'visible', animationDuration: '1200ms', animationName: 'fadeInUp' }}>
                        <i className="fa fa-user medium-icon"></i>
                        <FontAwesomeIcon icon={faUser} className='medium-icon'/>
                         <span className="timer counter alt-font appear" data-to="600" data-speed="7000">600</span>
                        <span className="counter-title">Counter 4</span>
        </div>
                    {/* --------------------------------- */}
        </div>
      </div>





    </section>


  );
};

export default CounterItem;
