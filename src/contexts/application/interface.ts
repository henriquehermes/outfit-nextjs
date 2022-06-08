import { Avatar } from "../../components/Profile/interface";

export interface UserLogged {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    inviteCode?: string;
    image: Avatar;
    password: string;
}

export interface Props {
    children: React.ReactNode;
}

export type ContextType = {
    userID: string;
    setUserData?: any;
};
