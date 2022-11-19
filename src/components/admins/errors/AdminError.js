import { useRouteError } from "react-router-dom";
import SideBar from "../SideBar";
import '../Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useProSidebar } from 'react-pro-sidebar';

export default function AdminError() {
  const error = useRouteError();
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="admin-container">
        <div className="admin-sidebar">
            <SideBar />
        </div>
        <div className="admin-main">
            <div className="admin-header">
                <FaBars onClick={() => collapseSidebar()} />
            </div>
            <div className="admin-content">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <i>{error.statusText || error.message}</i>
            </div>
        </div>
    </div>
  );
}
