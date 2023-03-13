import { Stack, Flex, Image, Text, Heading } from "@chakra-ui/react"
import {motion} from 'framer-motion'
import "../CommonCSS.css"
import useWindowSize from "../useWindowSize";
import { useSelector } from "react-redux";

export default function TechStack() {
    const windowSize = useWindowSize()
    const { current } = useSelector(state=>state)
    return(
        <>
        <Stack direction="column" 
        bgColor={ current=='dark' ? 'black' : 'white'  }
        color={ current=='dark' ? 'white' : 'black'  }
        w={{ 
            base:'100%',
            sm: '100%',
            md: '90%',
            lg: '85%',
            xl: '85%',
            '2xl': '80%'}} m="auto" pt="8%">
            <Text className='heading1' 
                fontSize={{ 
                base:'28px',
                sm: '28px',
                md: '35px',
                lg: '35px',
                xl: '40px',
                '2xl': '40px'}} 
                textAlign="center"
            >
            Here's what I can do
            </Text>
            <Stack>
                
                <Flex justify="space-around">
                    <Stack
                    spacing='20px'
                    >
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}
                            >
                                <img className="Icon" src={ current=='dark' ? 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png' : "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/HTML5-512.png" }></img>
                                <Heading>HTML</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? 'https://cdn-icons-png.flaticon.com/512/732/732190.png' :"https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-512.png"}></img>
                                <Heading>CSS</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' :"https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-512.png"}></img>
                                <Heading>JavaScript</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' : "https://cdn-icons-png.flaticon.com/512/5968/5968566.png" }></img>
                                <Heading>TypeScript</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? 'https://cdn-icons-png.flaticon.com/512/1260/1260667.png' :"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"}></img>
                                <Heading>React</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? 'https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png' :"https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-512.png"}></img>
                                <Heading>Next JS</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? 'https://cdn-icons-png.flaticon.com/512/2214/2214046.png' :"https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/element_thunder_energy_electric_lightning_flash-512.png"}></img>
                                <Heading>Chakra UI</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? 'https://cdn.worldvectorlogo.com/logos/material-ui.svg' :"https://i.imgur.com/Kj3WpxX.png"}></img>
                                <Heading>Material UI</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" : "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png" }></img>
                                <Heading>Redux</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? "https://cdn.iconscout.com/icon/free/png-256/npm-3-1175132.png" : "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/npm-512.png" }></img>
                                <Heading>NPM</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? -250:-40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            {/* <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" : "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/python-512.png"}></img>
                                <Heading>Python</Heading>
                            </Stack> */}
                        </motion.div>
                    </Stack>


                    {/* BACKEND */}


                    <Stack
                    spacing='20px'
                    >
                    <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? "https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-256.png" : "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/node-js-512.png"}></img>
                                <Heading>NodeJS</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? "https://img.icons8.com/office/480/express-js.png" : "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"}></img>
                                <Heading>ExpressJS</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" : "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mongodb-512.png"}></img>
                                <Heading>MongoDB</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? "https://cdn-icons-png.flaticon.com/512/4494/4494748.png" : "https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/git-512.png" }></img>
                                <Heading>GIT</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? "https://cdn-icons-png.flaticon.com/512/873/873120.png" : "https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-heroku-512.png" }></img>
                                <Heading>Heroku</Heading>
                            </Stack>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.2}}
                        whileTap={{scale:0.9}}
                        initial={{x:windowSize.innerWidth>480 ? 250:40}}
                        whileInView={{x:0}}
                        transition={
                            {
                                type:'spring',
                                bounce:0.5,
                                duration:1
                            }
                        }
                        >
                            <Stack justify="left" align="center" direction={{ 
                                base:'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                '2xl': 'row'}}>
                                <img className="Icon" src={ current=='dark' ? "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png" : "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png" } alt="" />
                                <Heading>Netlify</Heading>
                            </Stack>
                        </motion.div>
                    </Stack>
                </Flex>
            </Stack>
        </Stack>
        </>
    )
}