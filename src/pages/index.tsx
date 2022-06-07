import type { NextPage } from "next";
import { useCookies } from "react-cookie";

import HomeScreen from "../screens/Home";
import Welcome from "../screens/Welcome";

const Home: NextPage = () => {
    const [cookie, setCookie] = useCookies(["user"]);

    return <Welcome />;
};

export default Home;
