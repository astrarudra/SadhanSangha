import React from 'react';
import { SSALogoIcon } from '../components/UIElements';
import { useStore } from '../appStore';
import { Link } from 'react-router-dom';
import { socialLinks, contactDetails } from '../constants';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const thisYear = new Date().getFullYear()
const NoWrap = ({children}) => <span style={{whiteSpace: 'nowrap'}}>{children}</span>

const responsiveStyle = {
    display: { xs: 'none', sm: 'none', md: 'block', lg: 'block'}, 
    opacity: { md: 0.1, lg: 0.3},
}

const FooterImgaes = () => {
    return <div>
        <Box className="shiva-footer" sx={responsiveStyle}>
            <img src="https://i.imgur.com/Oq8nLuf.png" alt="Shiva Sandhan Sangha Ashram" height="100%"/>
        </Box>
        <Box className="logo-footer" sx={{opacity: {sm: 0.05, xs: 0.05, md: 0.1, lg: 0.1}}}>
            <SSALogoIcon variant='variant-white' />
        </Box>
        <Box className="shiva-footer" sx={{...responsiveStyle, right: 0, left: "inherit" }}>
            <img src="https://i.imgur.com/99R0Osy.png" alt="Guruji Sandhan Sangha Ashram" height="100%"/>
        </Box>
    </div>
}

const FooterBottomSection = () => {
    return <div className="footer-bottom">
        <div style={{width: 'calc(50% - 172px', minWidth: "50px", textAlign: 'left', padding: "10px 15px"}}> 
            Developed By <NoWrap>Rudra Roy</NoWrap>
        </div>
        <div>
            {`© 2005 - ${thisYear}`} Sadhan Sangha Ashram. All Rights Reserved.
        </div>
        <div style={{marginLeft: "auto", padding: "10px 15px"}}>
            Privacy Policy
        </div>
    </div>
}

const FooterNavigation = ({pages}) => {
    return <div style={{ padding: '0px 20px', maxWidth: '100px'}}>
         <div className="footer-header"> Navigation </div>
        {Object.keys(pages).map((key) => {
            const { name, path, Icon } = pages[key]
            return <Link to={path} style={{textDecoration: "none", color: "inherit"}}>
                <div className="v-center footer-social">
                    <Icon className="footer-social-icons" />
                    <div>{name}</div>
                </div>
            </Link>
        })}
    </div>
}

const FooterReachUs = () => {
    return (<div style={{ padding: '0px 20px', maxWidth: '180px'}}>
        <div className="footer-header"> Reach Us </div>
        <div className="v-center footer-social" style={{alignItems: 'normal'}}>
            <PlaceIcon className="footer-social-icons" style={{height: '100%', color: 'red'}}/>
            <div>{contactDetails.location}</div>
        </div>
        <div className="v-center footer-social">
            <PhoneIcon className="footer-social-icons" style={{color: 'green'}}/>
            <div>{contactDetails.phone}</div>
        </div>
        <div className="v-center footer-social">
            <EmailIcon className="footer-social-icons" />
            <div>{contactDetails.email}</div>
        </div> 
    </div>
    )
}
const FooterFollowUs = () => {
    return <div>
        <div className="footer-header"> Follow Us </div>
        {Object.keys(socialLinks).map((key) => {
            const { i, n, l } = socialLinks[key]
            return <div className="v-center footer-social" onClick={() => window.open(l, "_blank")}>
                <Icon className={"footer-social-icons"} icon={i}/>
                <div>{n}</div>
            </div>
        })}
    </div>
}

const Footer = () => {
    const [pages] = useStore(s => [s.pages])
    return (
        <footer style={{marginTop: "30px"}}>
            <div className="footer d-flex">
                <FooterImgaes />
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <div className="d-flex" style={{zIndex: 1, width: '100%', maxWidth: '850px' }}>
                        <FooterNavigation pages={pages} />
                        <div className="d-flex" style={{marginLeft: 'auto'}}>
                            <FooterReachUs />
                            <FooterFollowUs />
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottomSection />
        </footer>
    );
};

export default Footer;