import { useState } from "react";
import { Box } from "@chakra-ui/react";

import Sidebar from "../Components/Sidebar";
import pageInfo from '../Components/data.json';
import Featured from "../Components/Featured";
import Carousel from '../Components/Carousel'

const Layout = () => {

  const sessionId = sessionStorage.getItem('movieId')
  let modData;

  if(sessionId) {
    modData = {...pageInfo, Featured:pageInfo.TendingNow.filter(item => item.Id === sessionId)[0]}
  } else modData={...pageInfo};

  const [data, setData] = useState(modData);
  
  const handleClick = value => {
    const modified = {...data, Featured: value}
    setData(modified);
    sessionStorage.setItem('movieId',value.Id)
  }

  return (
    <Box 
    h='100vh'
    overflow='hidden'
    backgroundImage={`/${data?.Featured?.CoverImage}`}
    backgroundPosition='center'
    backgroundRepeat="no-repeat"
    backgroundSize='cover'>
      <Sidebar/>
      <Featured featuredInfo={data.Featured}/>
      <Carousel tendingInfo={data.TendingNow} handleClick={handleClick}/>
    </Box>
  );
};

export default Layout;