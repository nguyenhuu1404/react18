import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <>
            <Sidebar>
                <Menu>
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        icon={<FaGithub />}
                        label="Charts"
                        >
                        <MenuItem routerLink={<Link to="/documentation" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}

export default SideBar;