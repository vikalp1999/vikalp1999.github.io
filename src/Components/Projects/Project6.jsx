import { Stack, Image, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useWindowSize from "../useWindowSize"
import { useSelector } from "react-redux"

export default function Project6() {
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
        bgColor={ current=='dark' ? ' black' : 'white'  }
        color={ current=='dark' ? 'white' : 'black'  }
        p="5%" border={ current=='dark' ? '3px solid white' : '1px solid black'  } borderRadius="20px" spacing="25px">
            <Image src="https://i.imgur.com/ywR4v3s.png"></Image>
            <Heading fontSize="22px">NEXTIN - Productivity focused webapp</Heading>
            <Text>NextIn is a productivity focused webapp where you can create a chatroom for your team. Along with the chatting application of this app the the team leader can also assign you tasks and its status can be changed and tracked.</Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center" >NEXTJS | EXPRESSJS | NODEJS | JAVASCRIPT | MONGODB | SOCKET.IO | CHAKRAUI | REDUX</Text>
            <Flex alignSelf="center" w="50%">
            <Spacer></Spacer>
                <a href="https://next-g00y1v67s-vikalp1999.vercel.app/" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Deployed</Button>
                </a>
                <Spacer></Spacer>
                <a href="https://github.com/vikalp1999/Zeera" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Codebase</Button>
                </a>
                <Spacer></Spacer>
            </Flex>
        </Stack>
        </motion.div>
    )
}