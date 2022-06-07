export interface User {
    firstName: string;
    lastName: string;
    email: string;
    inviteCode?: string;
    avatar: Avatar;
    password: string;
}

interface Avatar {
    key: string;
    location: string;
    originalname: string;
}

export interface ProfileProps {
    user: User;
    handleCreateUser: any;
}
