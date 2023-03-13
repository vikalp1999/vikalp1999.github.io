import { Stack, Image, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useWindowSize from "../useWindowSize"
import { useSelector } from "react-redux"

export default function Project3() {
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
            <Image src="https://i.imgur.com/fmNQmGG.png"></Image>
            <Heading fontSize="22px">FITNESSBLENDER - Online Fitness Solutions</Heading>
            <Text>Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.</Text>
            <Heading textAlign="center" fontSize="19px">Tech Stack</Heading>
            <Text textAlign="center">HTML/CSS | JAVASCRIPT | GITHUB</Text>
            <Flex alignSelf="center" w="50%">
                <Spacer></Spacer>
                <a href="https://coruscating-churros-2b31ea.netlify.app/" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Deployed</Button>    
                </a>    
                <Spacer></Spacer>
                <a href="https://github.com/skshm2000/melted-group-7444" target="_blank">
                    <Button colorScheme={ current=='dark' ? 'whiteAlpha':"blackAlpha"} >Codebase</Button>
                </a>
                <Spacer></Spacer>
            </Flex>
        </Stack>
        </motion.div>
    )
}