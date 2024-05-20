export interface Persona {
    anagrafica?: Anagrafica,
    descrizione?: string,
    contatti?: Contatti,
    mestiere?: string,
    lingue?: Lingue[],
    hobbies?: Hobbies[],
    socials?: Socials[],
    skills?: Skills[],
    istruzione?: Istruzione[],
    esperienzeLavorative?: EsperienzeLavorative[];
    progetti?: Progetti[]
}

export interface Progetti {
    nome?: string,
    url?: string,  
    descrizione?: string,
}

export interface EsperienzeLavorative {
    azienda?: string,
    data?: string,
    descrizione?: string[]
}


export interface Istruzione {
    formazione?: string,
    data?: string,
    titolo?: string,
    descrizione?: string,
}


export interface Contatti {
    email?: string | [],
    telfFisso?: number | string | [],
    telf?: number | string | [],
}
export interface Anagrafica {
    nome?: string,
    cognome?: string,
    indirizzo?: string,
    dataDiNascita?: string,
    nazionalita?: Nazionalita[],

}
export interface Lingue {
    flag?: string;
    lingua?: string,
    level?: Nivello,
}

export enum Nivello {
    BASE = 'base',
    AVANZATO = 'Avanzato',
    MADRELINGUA = 'Madrelingua',
}

export interface Nazionalita {
    nazionalita?: string;
}
export interface Hobbies {
    icona?: string,
    descrizione?: string,
}


export interface Socials {
    icona?: string,
    social?: string,
    link?: string,
}

export interface Skills {
    hardSkills?: HardSkills[],
    softSkills?: SoftSkills[],
}

export interface SoftSkills {
    competenze?: string,
}

export interface HardSkills {
    linguaggi?: string;
    icona?: string;
}