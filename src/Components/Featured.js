import { Text, Flex } from "@chakra-ui/react";
import { useMemo } from "react";

const Featured = ({featuredInfo:{Category, Title, ReleaseYear, MpaRating, Duration, Description}}) => {

  const convertHM = (value) => {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    return hours + 'h ' + minutes + 'm'; 
  }

  const modifiedDuration = useMemo(()=>convertHM(Duration),[Duration])
  
  return (
    <Flex fontFamily='Tajawal' fontStyle='oblique' fontSize='2xl' flexDirection='column' maxWidth='300px' position='absolute' left='15%' bottom='50%' color='white' >
      <Text width='100%'>{Category}</Text>
      <Text width='100%'>{Title}</Text>
      <Flex flexDirection='row' width='200px' justifyContent='space-between'>
        <Text>{ReleaseYear}</Text>
        <Text>{MpaRating}</Text>
        <Text>{modifiedDuration}</Text> 
      </Flex>
      <Text>{Description}</Text>
    </Flex>
  );
};

export default Featured;