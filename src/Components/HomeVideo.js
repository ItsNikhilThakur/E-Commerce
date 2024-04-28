// import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import "./HomeVideo.css";
const contentStyle = {
  margin: 0,
  height: '560px',
  color: '#fff',
  lineHeight: '560px',
  textAlign: 'center',
  background: '#364d79',
};

const HomeVideo=()=>
{

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };


    //   {autoSlide=false, autoSlideInterval=15000,}
    //   useEffect(()=>{
    //     if(!autoSlide) return
    //     const slideInterval = setInterval(next, autoSlideInterval);
    //     return () => clearInterval(slideInterval);
    //   }, []);


return(<>
<Carousel afterChange={onChange}>
    
      <div>
        <h3 style={contentStyle}><video src='../v1.mp4' autoPlay muted loop /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><video src='../v2.mp4' autoPlay muted loop /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><video src='../v3.mp4' autoPlay muted loop /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><video src='../v4.mp4' autoPlay muted loop /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><video src='../v5.mp4' autoPlay muted loop /></h3>
      </div>
      
    </Carousel>
 




</>)










}

export default HomeVideo;