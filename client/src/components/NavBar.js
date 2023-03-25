import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>iFruit</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            onClick={()=>navigate(ADMIN_ROUTE)}
                            variant={"outline-light"}
                        >
                            Admin panel
                        </Button>
                        <Button
                            onClick={()=>navigate(LOGIN_ROUTE)}
                            className="ms-2" variant={"outline-light"}
                        >
                            Go out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button onClick={() => user.setIsAuth(true)} variant={"outline-light"}>Sign In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;