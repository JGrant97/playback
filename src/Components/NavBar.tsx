import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Colour } from "../Constants/Colour";
import AuthContext from "../Store/Auth-Context";
import TransparentButton from "./UI/Button/TransparentButton";
import Input from "./UI/Input";

const Container = styled.header`
    width: 100%;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    background: var(--primary);
`;
const Left = styled.ul`
    flex: 1;
    display: flex;
    padding-left: 20px;
    align-items: center;
`;

const Center = styled.ul`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Right = styled.ul`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    gap: 30px;
`;

const ProfilePic = styled.div`
    height: 40px;
    width: 40px;
    overflow: hidden;
    border-radius: 50px;
    background: #fff;
    cursor: pointer;
`;

const NavItem = styled.li``;

const Link = styled(NavLink)`
    text-decoration: none;
    color: ${Colour.Text};
`;

function NavBar() {
    const ctx = useContext(AuthContext);

    return (
        <Container>
            <Nav>
                <Left>
                    <NavItem>
                        <h1 style={{ margin: 0, color: "#fff" }}>PlayBack</h1>
                    </NavItem>
                </Left>
                <Center>
                    <NavItem>
                        <Input placeholder="...Search" />
                    </NavItem>
                </Center>
                <Right>
                    <NavItem>
                        <Link to={"/Watch"}>Login</Link>
                    </NavItem>
                    {ctx.Id ? (
                        <NavItem>
                            <ProfilePic />
                        </NavItem>
                    ) : (
                        <NavItem>
                            <Link to={"/Watch"}>Login</Link>
                        </NavItem>
                    )}
                </Right>
            </Nav>
        </Container>
    );
}

export default NavBar;
