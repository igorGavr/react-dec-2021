import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <div>
                <ul style={{display:'flex'}}>
                    <li>ssdfsdf</li>
                    <li>sdfsdf</li>
                    <li>sdfsdf</li>
                    <li>sdfsdf</li>
                    <li>sdfs</li>
                    <li>sfdsdfsdf</li>
                </ul>
            </div>
            <Outlet/>
        </div>
    );
};

export {AdminLayout};
