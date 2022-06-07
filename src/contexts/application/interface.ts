import { User } from "../../components/Profile/interface";

export interface Props {
    children: React.ReactNode;
}

export type ContextType = {
    userData?: User | null;
    setUserData?: any;
};
