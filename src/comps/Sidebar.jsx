import React, { useState } from 'react'
import { IoLogoChrome } from 'react-icons/io'
import { ImHome } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'
import { FiPower } from 'react-icons/fi'
import { GiWallet } from 'react-icons/gi'
import { FaUserAlt } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { Button, SidebarContainer, Logo, 
    Slickbar, Item, Text, 
    Profile, Details, Username,
    Logout, Container
} from "./Sidebar.styles"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from '../firebase.config'
import { useRecoilState } from 'recoil'
import { auth } from '../root/atom'
export default function Sidebar() {

    const [click, $click] = useState(false)
    const [authUser, $authUser] = useRecoilState(auth)
    const [profileClick, $profileClick] = useState(false)
    const handleClick = () => $click(!click)
    const Auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const Login = async () => {
        let {user} = await signInWithPopup(Auth, provider)
        localStorage.setItem('auth', JSON.stringify(user))
        $authUser(JSON.parse(localStorage.getItem('auth')))
        console.log(authUser.displayName);
    }

    return (
        <Container>
            <Button clicked={click} onClick={() => handleClick()}>Click</Button>
            <SidebarContainer>
                <Logo>
                <img src="./images/logo.png" alt="" />
                </Logo>
                <Slickbar clicked={click}>

                    <Item exact activeclass="active" to="/"><i><ImHome className="icon" /></i><Text clicked={click}>Home</Text></Item>
                    <Item activeclass="active" to="/user"><i><FaUserAlt className="icon" /></i><Text clicked={click}>Home</Text></Item>
                    <Item activeclass="active" to="/dashboard"><i><MdDashboard className="icon" /></i><Text clicked={click}>Home</Text></Item>
                    <Item activeclass="active" to="/recharge"><i><BsFillLightningChargeFill className="icon" /></i><Text clicked={click}>Home</Text></Item>
                    <Item activeclass="active" to="/withdraw"><i><GiWallet className="icon" /></i><Text clicked={click}>Home</Text></Item>

                </Slickbar>

                <Profile clicked={profileClick}>
                    {authUser ? <><img src="https://picsum.photos/200" alt="" onClick={()=>$profileClick(!profileClick)} />
                    <Details clicked={profileClick}>
                        <Username>
                            <h4>{authUser && authUser.displayName}</h4>
                            <a href="/">View profile</a>
                        </Username>
                        <Logout>
                            <FiPower className="logout"/>
                        </Logout>
                    </Details></>:<><img src="./images/user_circle.png" alt="" onClick={()=>$profileClick(!profileClick)} />
                    <Details clicked={profileClick}>
                        <Username onClick={Login}>
                            <h4>Login</h4>
                            <a href="/">Báo lỗi</a>
                        </Username>
                        <Logout>
                            <FiPower className="logout"/>
                        </Logout>
                    </Details></>}
                </Profile>
            </SidebarContainer>
        </Container>
    )
}
