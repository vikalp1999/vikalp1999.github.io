import {Flex,Image, Heading, Stack, SimpleGrid, Text} from "@chakra-ui/react"
import Project1 from "./Projects/Project1"
import Project5 from "./Projects/Project5"
import Project4 from "./Projects/Project4"
import Project6 from "./Projects/Project6"
import { useSelector } from "react-redux"

export default function Projects() {
    const { current } = useSelector(state=>state)
    return (
        <>
        <Stack direction="column" 
        bgColor={ current=='dark' ? 'black' : 'white'  }
        color={ current=='dark' ? 'white' : 'black'  }
        w={
            { 
                base:'95%',
                sm: '95%',
                md: '90%',
                lg: '85%',
                xl: '80%',
                '2xl': '80%'}
        } m="auto" pt="8%">
            <Text textAlign="center" className='heading1' fontSize={{ 
                base:'35px',
                sm: '35px',
                md: '40px',
                lg: '40px',
                xl: '40px',
                '2xl': '40px'}}>Projects</Text>
            <SimpleGrid columns={{ 
            base:'1',
            sm: '1',
            md: '2',
            lg: '2',
            xl: '2',
            '2xl': '2'}} spacing="10px">
                <Project6 />
                <Project5 />
                <Project1 />
                <Project4 />
            </SimpleGrid>
        </Stack>
        </>
    )
}