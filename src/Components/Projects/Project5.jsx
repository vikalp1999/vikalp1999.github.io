import { Stack, Image, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useWindowSize from "../useWindowSize"
import { useSelector } from "react-redux"


export default function Project5() {
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
        p="5%" border={ current=='dark' ? '3px solid white' : '1px solid black'  } borderRadius="20px" spacing="20px" >
            <Image src="https://i.imgur.com/ro3xBl1.png"></Image>
            <Heading fontSize="22px" pt='7px'>CHARGENOW - Realtime Bulk Emailer</Heading>
            <Text pb='25px'>Charge Now is a bulk mailing web service where user can create a mailing list and send mails to all all of those emails with just one click, with realtime status for mails sent.</Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center">NEXT JS | EXPRESS JS | NODEMAILER | SOCKET.IO | JWT | MONGODB | REDUX | JAVASCRIPT | CHAKRAUI | AXIOS | GITHUB</Text>
            <Flex alignSelf="center" w="50%" pt='10px'>
                <Spacer></Spacer>
                <a href="https://abandoned-reaction-8426-dhamisir.vercel.app/" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Deployed</Button>    
                </a>    
                <Spacer></Spacer>
                <a href="https://github.com/vikalp1999/abandoned-reaction-8426" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Codebase</Button>
                </a>
                <Spacer></Spacer>
            </Flex>
        </Stack>
        </motion.div>
    )
}