export interface User {
    firstName: string;
    lastName: string;
    email: string;
    inviteCode?: string;
    avatar: string;
    password: string;
}

export interface ProfileProps {
    buttonAction: any;
    user: User;
    handleCreateUser: any;
}
