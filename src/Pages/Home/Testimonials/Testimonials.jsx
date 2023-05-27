import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import {FaQuoteRight} from "react-icons/fa"
import { Navigation } from "swiper";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);
  return (
    <div className="st container">
      <SectionTitle
        subTitle="What Our Clients Say"
        headingTitle="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24  flex flex-col items-center justify-center">
              <Rating
                style={{ maxWidth: 100 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteRight className="text-8xl my-8"></FaQuoteRight>
              <p className="text-center mb-4">{review.details}</p>
              <h2 className="text-2xl text-orange-400 ">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
