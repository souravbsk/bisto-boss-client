import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BannerSection from '../BannerSection/BannerSection';
import PopularMenu from '../PopularMenu/PopularMenu';
import Feature from '../Feature/Feature';
import Testimonials from '../Testimonials/Testimonials';
import CallUs from '../CallUs/CallUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BannerSection></BannerSection>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Feature></Feature>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;