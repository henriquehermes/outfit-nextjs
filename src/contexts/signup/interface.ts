export interface Props {
    children: React.ReactNode;
}

export type ContextType = {
    email: string;
    password: string;
    confirm_password: string;
};

export interface IHandleSubmit {}
