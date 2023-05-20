export interface User {
    docId: string | null;
    name: string;
    profileId: string;
    photo: string;
    email: string | null;
    destination: string | null;
}

export interface TravelPost {
    id: string;
    title: string;
    desc: string;
    img: string;
    longDesc: string;
    cost: number;
}
