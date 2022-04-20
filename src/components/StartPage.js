import {Link, Outlet} from "react-router-dom";

const StartPage = () => {
    const user = {id:1, name:'Max', age:30}
    return (
        <div>
            StartPage
            <Link to={'/about/8'} state={user}>toAbout</Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {StartPage};
