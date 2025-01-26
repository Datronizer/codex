export interface ImageDto {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface SkinDto {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}

export interface InfoDto {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

export interface StatsDto {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

export interface SpellDto {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: {
        label: string[];
        effect: string[];
    };
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: any;
    effect: Array<number[] | null>;
    effectBurn: string[];
    vars: any[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: ImageDto;
    resource: string;
}

export interface PassiveDto {
    name: string;
    description: string;
    image: ImageDto;
}

export interface ChampionDto {
    id: string;
    key: string;
    name: string;
    title: string;
    image: ImageDto;
    skins: SkinDto[];
    lore: string;
    blurb: string;
    allytips: string[];
    enemytips: string[];
    tags: string[];
    partype: string;
    info: InfoDto;
    stats: StatsDto;
    spells: SpellDto[];
    passive: PassiveDto;
    recommended: any[];
}

export interface ChampionDataDto {
    type: string;
    format: string;
    version: string;
    data: {
        [key: string]: ChampionDto;
    };
}