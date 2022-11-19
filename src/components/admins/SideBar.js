import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { AiOutlineUser, AiOutlineDashboard } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <>
            <Sidebar>
                <Menu>
                    <MenuItem icon={<AiOutlineDashboard />} routerLink={<Link to="/admin" />}> Dashboard </MenuItem>
                    <SubMenu
                        icon={<AiOutlineUser />}
                        label="Users"
                    >
                        <MenuItem routerLink={<Link to="/admin/users" />}> List Users </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </>
    )
}

export default SideBar;
