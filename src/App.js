import {Routes, Route, useLocation} from "react-router-dom";
import {First} from "./components/First";
import {StartPage} from "./components/StartPage";
import {HzPage} from "./components/HZPage";
import {useEffect, useState} from "react";

const App = () => {
    const dataLift = (asd) => {
        const {state} = useLocation();
        useEffect(()=>{
        const [useState1] = useState(state);
        const sss= [1,'dd',true]
        },[])
        console.log(asd);
    }
    return (
        <Routes>
            <Route path={'/'} element={<StartPage/>}>
                <Route path={'about/:id'} element={<First/>}/>
                <Route path={'hz'} element={<HzPage/>}>
                    <Route path={'about/:id'} element={<First/>}/>
                    <Route path={'about2/:id'} element={<First/>}/>
                    <Route path={'about3/:id'} element={<First/>}/>
                </Route>
            </Route>
            <Route path={'/d'} element={<sdfsdf/>}/>
        </Routes>
        // <First asd={111} dataLift={dataLift}/>
    );
};

export default App;
