import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { useProSidebar } from 'react-pro-sidebar';

const Admin = (props) => {
    const { collapseSidebar } = useProSidebar();

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar />
            </div>
            <div className="admin-content">
                <div>
                    <FaBars onClick={() => collapseSidebar()} />
                </div>
                content goes here
            </div>
        </div>
    )
}
export default Admin;
