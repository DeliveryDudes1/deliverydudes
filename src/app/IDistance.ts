export interface IDistanceMatrix {
    destination_addresses : string[];
    origin_addresses: string[];
    rows: IRows[];
}

export interface IElements {
    distance:IDistance;
    duration: IDuration;
}

export interface IRows {
    elements: IElements[];
}
export interface IDistance {
    text: string;
    value: number;
}
export interface IDuration {
    text: string;
    value: number;
}