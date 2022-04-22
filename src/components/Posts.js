import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadPosts} from "../redux/actions.creators";

export function Posts() {

    let postsDefaultState = useSelector(({postsState}) => postsState);
    let dispatch = useDispatch();
    useEffect(() => {

        dispatch(loadPosts());
    }, [])
    return (
        <div>
            {
                postsDefaultState.map(value => <div key={value.id}> {value.title}</div>)

            }

        </div>
    );
}
