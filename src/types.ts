export interface Pais {
    name: {
        common : string;
        official : string;
    };
    flags: {
        png : string;
    };
    cca2: string;
    ccn3: string;
    cca3: string;
    capital: string;
    region: string;
    subregion: string;
    area: number;
    population: number;
    languages: object;
}