import type { NextPage } from "next";
import PrivateRoute from "../components/PrivateRoute";

import NewScreen from "../screens/New";

const NewPage: NextPage = () => {
    return <NewScreen />;
};

export default PrivateRoute(NewPage);
