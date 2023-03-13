import { Stack, Image, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useWindowSize from "../useWindowSize"
import { useSelector } from "react-redux";
import Hubspot from "../../Items/hubspot.png"

export default function Project1() {
    let size = useWindowSize()
    const { current } = useSelector(state=>state)

    return (
        <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        initial={{x:size.innerWidth>480?-90:0, opacity:size.innerWidth>480?1:0}}
        whileInView={{x:0, opacity:size.innerWidth>480?1:1}}
        transition={
            size.innerWidth>480?
            {
                type:'spring',
                bounce:0.5,
                duration:1.5
            }:
            {
                type:'easein',
                duration:0.8
            }
        }
        >
        <Stack
        bgColor={ current=='dark' ? 'black' : 'white'  }
        color={ current=='dark' ? 'white' : 'black'  }
         p="5%" border={ current=='dark' ? '3px solid white' : '1px solid black'  } borderRadius="20px" spacing="20px">
            <Image src={Hubspot}></Image>
            <Heading fontSize="22px">Hubspot</Heading>
            <Text>HubSpot is a Cloud-Based CRM. HubSpot is a Software platform designed to help Company market and sell more effectively </Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center" >React JS | JavaScript | Express JS | Node JS | MongoDB | JSON Web Token | Chakra UI | Redux | AXIOS | GITHUB</Text>
            <Flex alignSelf="center" w="50%">
            <Spacer></Spacer>
                <a href="https://animated-narwhal-cecc2b.netlify.app/" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Deployed</Button>
                </a>
                <Spacer></Spacer>
                <a href="https://github.com/vikalp1999/HubSpot.com" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Codebase</Button>
                </a>
                <Spacer></Spacer>
            </Flex>
        </Stack>
        </motion.div>
    )
}