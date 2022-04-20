import {useLocation, useParams} from "react-router-dom";

const First = () => {
    const {id} = useParams();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            First
            <div>{id}</div>
        </div>
    );
};

export {First};
