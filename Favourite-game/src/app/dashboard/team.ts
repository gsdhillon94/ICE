export interface Team {
    logo: string;
    id: number;
    abbrev: string;
    name: string;
}

export interface Teams {
    teams: Team[];
}