import React from 'react'
import './Testimonials.css'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Aamir was a valuable member of our web development team. His commitment to his work was commendable. He consistently demonstrated a strong passion for achieving remarkable results. Aamir's teamwork and collaboration skills were exceptional, making him a true asset to our team.",
      image: 'https://media.licdn.com/dms/image/C5603AQGSP6CTJmCNKg/profile-displayphoto-shrink_400_400/0/1648491282700?e=1697068800&v=beta&t=Zz3OUddrn4vn_BAZ_PuRyN6yYpnjJRaL0BzQ7FqGAV8',
      name: 'Pushp raj "PPR" Singh',
      title: 'Co-Founder'
    },
    {
      quote: "Aamir is a person who has great skills in full-stack development. He is always punctual, and his knowledge is vast. His leadership and managerial skills have been invaluable to our company. Aamir was one of the best teammates I have ever had the opportunity of working with.",
      image: 'https://media.licdn.com/dms/image/C5603AQFyk8iVofRqxA/profile-displayphoto-shrink_400_400/0/1660806398926?e=1697068800&v=beta&t=gBY5a_E-GNxoRfWg9HYC3Nc4lFQQvQXIAeSlV-0LL00',
      name: 'Yashasvee Mehrotra',
      title: 'Product Designer at Zoho'
    },
    {
      quote: "Aamir is a very hard-working individual with a fast learning skill. He understands the products well and provides well-defined solutions. His contributions have been invaluable to our company. He consistently demonstrated a strong passion for achieving remarkable results. Best of luck in your future endeavors, Aamir!",
      image: 'https://media.licdn.com/dms/image/C5603AQE_vdZlBj8mRA/profile-displayphoto-shrink_400_400/0/1651216038040?e=1697068800&v=beta&t=-fyImWNbAwgW3K8E5k_ttEB3QxcftiSCvMu5qEXG5xY',
      name: 'Megha Singh',
      title: 'Head of Technical at InMovidu Tech Pvt Ltd'
    }
  ];
  
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <article className="testimonial">
                <div className="client__avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <h3 className='client__name'>{testimonial.name}</h3>
                <small className='client__review'>{testimonial.quote}</small>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials
