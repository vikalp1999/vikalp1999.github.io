import { Image, Stack, Text, Spacer, Box } from "@chakra-ui/react"
import { TypeAnimation } from 'react-type-animation';
import GitHubCalendar from 'react-github-calendar';
import './CommonCSS.css'
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import VikalpImage from "../Items/vikalp.png"

// { 
// base:'',
// sm: '',
// md: '',
// lg: '',
// xl: '',
// '2xl': ''}


export default function About() {
    const { current } = useSelector(state=>state)
    return (
        <>
        <Stack  
        bgColor={ current=='dark' ? 'black' : 'white'  }
        color={ current=='dark' ? 'white' : 'black'  }
        w={{ 
        base:'100%',
        sm: '100%',
        md: '95%',
        lg: '95%',
        xl: '85%',
        '2xl': '80%'}} m='auto' mt="8%" spacing="5%">
            <Stack>
                <Text textAlign="center" className='heading1'fontSize={{ 
                base:'35px',
                sm: '35px',
                md: '40px',
                lg: '40px',
                xl: '40px',
                '2xl': '40px'}}>About Me</Text>
                <Stack pl={{ 
                    base:'0%',
                    sm: '0%',
                    md: '1%',
                    lg: '2%',
                    xl: '3%',
                    '2xl': '5%'}} 
                    pr={{ 
                    base:'0%',
                    sm: '0%',
                    md: '1%',
                    lg: '2%',
                    xl: '3%',
                    '2xl': '5%'}} 
                    direction={{ 
                    base:'column-reverse',
                    sm: 'column-reverse',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                    '2xl': 'row'}}
                    spacing='20px'
                    alignContent={'center'}
                >
                    <Stack direction="column" w={{ 
                        base:'80%',
                        sm: '80%',
                        md: '60%',
                        lg: '60%',
                        xl: '60%',
                        '2xl': '60%'}}  
                        justifyContent="center" 
                        alignSelf={'center'}
                    >
                        <TypeAnimation
                            sequence={[
                                'Front-end development', // Types 'One'
                                1000, // Waits 1s
                                'React compatible', // Types 'Three' without deleting 'Two'
                                1000, // Waits 2s
                                'Redux compatible',
                                1000,
                                'Back-end development',
                                1000,
                                'MongoDB compatible',
                                1000,
                                'RestAPI compatible',
                                1000
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2em' }}
                        />
                        <Text alignItems="center" fontSize={{ 
                            base:'14px',
                            sm: '16px',
                            md: '16px',
                            lg: '18px',
                            xl: '20px',
                            '2xl': '20px'}}
                            alignSelf={'center'}
                        >
                        A tech-savvy Web Developer with hands-on project experience on a website's front-end and back-end sides of the website. Vikalp has a strong problem solving mindset which forces him to improve the performance, scalability, and reliability of any project thrown at him
                        </Text>
                    </Stack>
                    <Spacer></Spacer>
                    <Image 
                    src={VikalpImage}
                    w={
                        { 
                            base:'50%',
                            sm: '50%',
                            md: '28%',
                            lg: '28%',
                            xl: '28%',
                            '2xl': '28%'}
                    }
                    borderRadius="50px"
                    alignSelf={'center'}
                    />
                </Stack>
            </Stack>
                <Stack spacing='20px'>
                    <Text className='heading1' fontSize={{ 
                base:'35px',
                sm: '35px',
                md: '40px',
                lg: '40px',
                xl: '40px',
                '2xl': '40px'}}>Github Stats</Text>
                    <Stack w="fit-content" alignSelf="center" spacing='20px'>
                        <Box alignSelf='center'>
                            <GitHubCalendar color={ current=='dark' ? 'white':'' }  username="vikalp1999" tooltips='true' responsive='true' />
                        </Box>
                        <Stack>
                        <Stack direction={{ 
                            base:'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            '2xl': 'row'}}
                        >   
                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:4
                            }
                        }
                        >
                            <Image
                                w={"100%"}
                                src="https://github-readme-streak-stats.herokuapp.com/?user=vikalp1999&theme=dark"
                                alt="vikalp1999"
                            />
                        </motion.div>
                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:5
                            }
                        }>
                            <Image
                                w="110%"
                                src="https://github-readme-stats.vercel.app/api/top-langs?username=vikalp1999&show_icons=true&locale=en&layout=compact&theme=dark"
                                alt="Vikalp Shandialya"
                            />
                        </motion.div>
                        </Stack>
                        <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:6
                            }
                        }>
                        <Image
                            w="100%"
                            src="https://github-readme-stats.vercel.app/api?username=vikalp1999&show_icons=true&locale=en&theme=dark"
                            alt="vikalp1999"
                        />
                        </motion.div>
                        </Stack>
                    </Stack>
                </Stack>
        </Stack>
        </>
    )
}