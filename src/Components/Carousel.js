import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex, Image, Box } from "@chakra-ui/react";



const Featured = ({tendingInfo, handleClick}) => {

    var settings = {
        dots: true,
        arrows:true,
        slidesToShow:8,
      };
  
  return (
    <Flex pos='absolute'  flexDirection='column' maxWidth='70%' h='296px' position='absolute' left='15%' bottom='5%' >
        <Slider {...settings}>
            {tendingInfo.map( item => (
                <Box key={item.Id} onClick={()=>handleClick(item)}>
                <Image w='200px' h='296px' alt={item.Title} src={`/${item.CoverImage}`}/>
                </Box>
))} 
        </Slider>
    </Flex>
  );
};

export default Featured;