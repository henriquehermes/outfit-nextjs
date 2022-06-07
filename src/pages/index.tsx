import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import HomeScreen from "../screens/Home";
import Welcome from "../screens/Welcome";

const Home: NextPage = () => {
    const [cookies] = useCookies(["token"]);
    const [action, setAction] = useState("LOADING");

    useEffect(() => {
        if (cookies["token"]) {
            setAction("HOME");
        } else {
            setAction("WELCOME");
        }
    }, [cookies]);

    if (action === "LOADING") return <div />;

    if (action === "HOME") {
        return <HomeScreen />;
    } else {
        return <Welcome />;
    }
};

export default Home;
