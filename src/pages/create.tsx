import type { NextPage } from "next";
import PrivateRoute from "../components/PrivateRoute";
import { withApplicationContext } from "../contexts/application";

import CreateScreen from "../screens/Create";

const CreatePage: NextPage = () => {
    return <CreateScreen />;
};

export default PrivateRoute(withApplicationContext(CreatePage));
