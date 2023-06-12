import React, { useEffect, useRef, useState } from "react";
import { About, BtnCustom, Cards, Carousel, Contact, Footer, Join, Navbar, Promotion } from "../components";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import Banner1 from "../assets/img/Cover.png";
import Banner2 from "../assets/img/Cover1.png";
import vidBanner from '../assets/video/video-banner.mp4'
import vidBanner2 from '../assets/video/video-banner2.mp4'
import Feature from "../components/Feature";
import { useStateContext } from "../context/StateContext";


const Main = () => {
    
  const {setRole,setDisplayName,loggedIn,setLoggedIn} = useStateContext()

  useEffect(() => {
    const checkIsLoggedIn = () => {
      const userToken = localStorage.getItem("token")
      const role = localStorage.getItem("role")
      const fullName = localStorage.getItem("full_name")
      if(userToken || (userToken !== null)) {
        setLoggedIn(true)
        setRole(role)
        setDisplayName(fullName)
      } 
    }
    checkIsLoggedIn()
  }, [])


  const media = [
    { type: 'video', source: vidBanner2 },
    { type: 'image', source: Banner1 },
    { type: 'image', source: Banner2 },
    { type: 'video', source: vidBanner },
  ];

    const scrollToPromotion = useRef()
    const scrollToJoin = useRef()
    const handleScrollTo = (scrollTo,setClicked) => {
      if(scrollTo == 'promotion'){
      scrollToPromotion.current?.scrollIntoView({behavior: 'smooth'})
      setClicked(false)
    } else if(scrollTo == 'join') {
        scrollToJoin.current?.scrollIntoView({behavior: 'smooth'})
        setClicked(false)
      }
    }

return (
    <div>
      <div>
      <Navbar handleScrollTo={handleScrollTo} />
      <Carousel media={media}/>
      </div>
      <About/>
      <Feature />
      <Promotion promotion={scrollToPromotion}/>
      <Join join={scrollToJoin}/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Main;
