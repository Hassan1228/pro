import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.css";
import "@/vendors/custom-animate.css";
import "@/vendors/flaticon.css";
import "@/vendors/fontawesome-all.css";
import "@/vendors/home.css";
import { useEffect } from 'react';

import "@/vendors/linoor-icons.css";
import "@/vendors/reey-font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-circular-progressbar/dist/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "tiny-slider/dist/tiny-slider.css";


// extra css
import "@/styles/style.css";
import "@/styles/hover.css";
import "@/styles/responsive.css";
import CustomCursor from "@/components/CustomCursor";



const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with your configuration
  }, []);

  return (
  
    <ContextProvider>
      <Component {...pageProps}  /> 
       <CustomCursor/>
    </ContextProvider>

  );
};

export default MyApp;
