
export const STATS_ICON_URL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/ux/fonts/texticons/lol/statsicon/";
// Color coded stats
export const LOL_TAGS = [
    { tag: 'physicalDamage', color: 'orange', iconUrl: `${STATS_ICON_URL}/scalead.png` },
    { tag: 'magicDamage', color: '#9168df', iconUrl: `${STATS_ICON_URL}/scaleap.png` },
    { tag: 'attackSpeed', color: '#F5EE99', iconUrl: `${STATS_ICON_URL}/scaleas.png` },
    { tag: 'scaleArmor', color: '#F2AD4E', iconUrl: `${STATS_ICON_URL}/scalearmor.png` },
    { tag: 'scaleMR', color: '#4EF2F2', iconUrl: `${STATS_ICON_URL}/scalemr.png` },
    { tag: 'healing', color: 'green', iconUrl: `${STATS_ICON_URL}/scalehealth.png` },
    { tag: 'mana', color: 'blue', iconUrl: `${STATS_ICON_URL}/scalemana.png` },
    { tag: 'cooldown', color: 'red', iconUrl: `${STATS_ICON_URL}/scalecooldown.png` },
    { tag: 'critChance', color: 'yellow', iconUrl: `${STATS_ICON_URL}/scalecrit.png` },
    { tag: 'speed', color: 'beige', iconUrl: `${STATS_ICON_URL}/scalems.png` },
    { tag: 'spellName', color: '#dfd6be', iconUrl: "" },
    { tag: 'shield', color: 'cyan', iconUrl: "" },
    { tag: 'spellPassive', color: '#dfd6be', iconUrl: "" },
    { tag: 'spellActive', color: '#dfd6be', iconUrl: "" },
    { tag: 'status', color: '#c082cb', iconUrl: "" },
];
// export const LOL_PLACEHOLDERS = [
//     "basehealth",
//     "zoneduration",
//     "slowpercent",
//     "slowduration",
//     "onewavedamage",
//     "totaldamagetooltip",
    
// ]


export type BonusStats = {
    FlatHPPoolMod: number;
    FlatMPPoolMod: number;
    FlatPhysicalDamageMod: number;
    FlatMagicDamageMod: number;
    FlatArmorMod: number;
    FlatSpellBlockMod: number;
    PercentAttackSpeedMod: number;
    FlatCooldownMod: number;
    FlatCritChanceMod: number;
    FlatMovementSpeedMod: number;
    PercentMovementSpeedMod: number[];
    MultiplicativeMovementSpeedMod: number[];
};



export const statAtLevel = (
    base: number,
    growthRate: number,
    currentLevel: number,

    bonus: number = 0,  // Bonus from items, runes, etc.
) =>
{
    return Math.round(base + bonus + growthRate * (currentLevel - 1) * (0.7025 + 0.0175 * (currentLevel - 1)));
};

export const attackSpeedAtLevel = (
    base: number,
    growthRate: number,
    currentLevel: number,
    asRatio: number = base,  // Modified bonus ratio (not all champs have this)
    bonus: number = 0,  // Bonus from items, runes, etc.
) =>
{
    console.log(base, growthRate, currentLevel, asRatio, bonus);
    growthRate = growthRate / 100;
    // bonus = bonus / 100;

    const growthFactor = growthRate * (currentLevel - 1) * (0.7025 + 0.0175 * (currentLevel - 1));
    const totalBonus = bonus + growthFactor;
    const attackSpeed = base + totalBonus * asRatio;
    return attackSpeed >= 3.003 ? 3.003 : attackSpeed.toFixed(3);
};

export const calculateMovespeed = (
    base: number = 0,
    flatBonus: number = 0,
    additivePercentBonuses: number[] = [],
    multiplicativeBonuses: number[] = [],
    highestSlowRatio: number = 0,
) =>
{
    const adds = additivePercentBonuses.length > 0 ? additivePercentBonuses : [0];
    const mult = multiplicativeBonuses.length > 0 ? multiplicativeBonuses : [1];

    //(Base MS + Flat MS bonuses) × (1 + Sum of all Additive Percent MS bonuses) × (1 - Highest Slow ratio) × Product of (1 + each Multiplicative Movement Speed bonus)
    let speed = (base + flatBonus)
        * (1 + adds.reduce((p, c) => p + c))
        * (1 - highestSlowRatio) * (mult.reduce((p, c) => p * (1 + c)));

    // Soft caps
    if (speed > 415 && speed <= 490)
    {
        // Before cap1 + between cap1 and 2
        speed = 415 + ((speed - 415) * 0.8);
    }
    else if (speed > 490)
    {
        // Before cap1 + between cap1 and 2 + after cap2
        speed = 415 + (75 * 0.8) + ((speed - 490) * 0.5);
    }
    else if (speed < 220)
    {
        speed = 110 + (base * 0.5);
    }
    else if (speed < 0)
    {
        speed = 110 + (base * 0.01)
    }
    return Math.round(speed);
};



export const calculateDamage = () =>
{
    // TODO
};



// FORMATTING
export const formatText = (text: string): JSX.Element => 
{
    LOL_TAGS.forEach(condition =>
    {
        // Finds all pairs of tags and the text between them
        const regex = new RegExp(`<${condition.tag}>(.*?)</${condition.tag}>`, 'g');
        text = text.replace(regex, (match, p1) =>
        {
            return condition.iconUrl
                ? `<img src="${condition.iconUrl}" alt="${condition.tag} Icon" style="vertical-align: middle;" /> <span style="color: ${condition.color};">${p1}</span>`
                : `<span style="color: ${condition.color};">${p1}</span>`;
        });
    });

    return <div dangerouslySetInnerHTML={{ __html: text }} />;
};
export const formatTextWithStats = (text: string, stats: any): JSX.Element =>
{
    LOL_TAGS.forEach(condition =>
    {
        // Finds all pairs of tags and the text between them
        const regex = new RegExp(`<${condition.tag}>(.*?)</${condition.tag}>`, 'g');
        text = text.replace(regex, (match, p1) =>
        {
            return condition.iconUrl
                ? `<img src="${condition.iconUrl}" alt="${condition.tag} Icon" style="vertical-align: middle;" /> <span style="color: ${condition.color};">${p1}</span>`
                : `<span style="color: ${condition.color};">${p1}</span>`;
        });
    });

    return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

const getStatsFromDescription = (description: string) =>
{
    const stats = description.match(/(\d+(\.\d+)?)/g);
    return stats ? stats.map(Number) : [];
};


// Boots, any legendary items, TODO
const uniqueItems = [1001];

// To prevent buying multiple boots
const tier2Boots = [3006, 3111, 3047, 3158, 3117, 3020, 3152];
const tier3Boots = [3170, 3171, 3172, 3173, 3174, 3175, 3176];

// Executioner's sword build paths
const itemsWithGrieviousWounds = [3123, 3075, 3033, 3123, 3123];
// const itemsWithGrieviousWounds = [3075]
