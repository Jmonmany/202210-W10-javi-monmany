export type GentlemanType = {
    id: number;
    name: string;
    status: string;
    profession: string;
    twitter: string;
    picture: string;
    alternativeText: string;
    selected: boolean;
};

export const gentlemen: GentlemanType[] = [
    {
        id: 1,
        name: 'Bertin Osborne',
        status: 'Alive',
        profession: 'Youtuber',
        twitter: '@osbourne',
        picture: 'bertin.jpg',
        alternativeText: 'Osbourne pointing at you',
        selected: false,
    },
    {
        name: 'The Farytale',
        status: 'RIP',
        profession: 'Influencer',
        twitter: 'pending',
        picture: 'fary.jpg',
        alternativeText: 'The Fary pointing at you',
        id: 2,
        selected: false,
    },
    {
        id: 3,
        name: 'Julius Churchs',
        status: 'Alive',
        profession: 'Java developer',
        twitter: '@julius_churchs',
        picture: 'julio.jpg',
        alternativeText: 'Churchs pointing at you',
        selected: false,
    },
];
