export interface User {
    firstName: string;
    lastName: string;
    email: string;
    inviteCode?: string;
    image: Avatar;
    password: string;
}

export interface Avatar {
    key: string;
    location: string;
    originalname: string;
}

export interface ProfileProps {
    user: User;
    handleCreateUser: any;
    isLoading: boolean;
}
