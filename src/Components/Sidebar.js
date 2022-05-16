import React, { useState } from 'react'
import { Flex, Divider, Avatar, Heading, Text } from '@chakra-ui/react'

import { FiHome, FiSearch } from 'react-icons/fi'
import { GiDualityMask, GiBackwardTime } from 'react-icons/gi'
import { MdLocalMovies, MdSlideshow } from 'react-icons/md';

import NavItem from '../Components/NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("small")
    return (
        <Flex
            pos="sticky"
            zIndex='10'
            onMouseOverCapture={() => {changeNavSize("large")}}
            onMouseOut={() => {changeNavSize("small")}}
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "180px"}
            flexDir="column"
            justifyContent="space-between"
        >
          <Flex
                p="5%"
                flexDir="column"
                //w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" color="white" size="sm">Aram Harutyunyan</Heading>
                    </Flex>
                </Flex>
            </Flex>
          <Flex
            p="5%"
            h='80vh'
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
            as="nav"
        >
            <NavItem navSize={navSize} icon={FiSearch} title="Search" />
            <NavItem navSize={navSize} icon={FiHome} title="Home" />
            <NavItem navSize={navSize} icon={MdLocalMovies} title="Movies" />
            <NavItem navSize={navSize} icon={MdSlideshow} title="TV shows" />
            <NavItem navSize={navSize} icon={GiDualityMask} title="Genres" />
            <NavItem navSize={navSize} icon={GiBackwardTime} title="Watch later" />
            <Flex flexDir="column" marginTop='10px'>
              <Text ml={5} marginTop='5' color="white" display={navSize === "small" ? "none" : "flex"}>Language</Text>
              <Text ml={5} marginTop='5' color="white" display={navSize === "small" ? "none" : "flex"}>Get Help</Text>
              <Text ml={5} marginTop='5' color="white" display={navSize === "small" ? "none" : "flex"}>Exit</Text>
            </Flex>
          </Flex>
        </Flex>
    )
}