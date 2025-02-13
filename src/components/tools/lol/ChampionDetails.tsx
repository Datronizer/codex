import { Link, useParams } from "react-router-dom";
import { ChampionDto, PassiveDto, SpellDto, StatsDto } from "./dto/Champion.dto";
import { useEffect, useState } from "react";
import { Card, Carousel, Col, Row, Spinner, Table, Form } from "react-bootstrap";
import "./LeagueTooltip.scss";
import { attackSpeedAtLevel, formatText, LOL_TAGS, statAtLevel } from "./LolUtils";


const STATS_ICON_URL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/ux/fonts/texticons/lol/statsicon/";

export function ChampionDetails()
{
    const version = useParams().version!;
    const championName = useParams().champion!;

    const [champion, setChampion] = useState<ChampionDto | null>(null);
    const [championFull, setChampionFull] = useState<any | null>(null);
    const [championLevel, setChampionLevel] = useState<number>(1);

    const [activeCarouselIndex, setActiveCarouselIndex] = useState<number>(0);


    useEffect(() =>
    {
        setChampion(null);

        const getChampion = async () =>
        {
            const fullDetailUrl = `https://raw.communitydragon.org/latest/game/data/characters/${championName.toLowerCase()}/${championName.toLowerCase()}.bin.json`;
            // const keyForChampionStats = `Characters/${championName}/CharacterRecords/Root`;

            const champFullRes = await fetch(fullDetailUrl)
                .then(res => res.json())
                .then(json => json)
                .catch(err => console.error(err));

            const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json?api_key=${process.env.REACT_APP_RIOT_API_KEY}`;
            const champRes = await fetch(url)
                .then(res => res.json())
                .then(json => json.data)
                .then(data => data[championName]);

            setChampionFull(champFullRes);
            setChampion(champRes);
        };


        setActiveCarouselIndex(0);
        getChampion();
    }, [championName]);


    if (!champion)
    {
        return <Spinner animation="border" />;
    }

    const stats = champion.stats;


    return (
        <div>
            <Card.Title>
                {champion.name}, <small>{champion.title}</small>
            </Card.Title>
            <Link to={`/tools/lol/${version}/champions`}>Back</Link>

            <Row>
                <Col>
                    <ChampionStats
                        stats={championFull[`Characters/${championName}/CharacterRecords/Root`]}
                        championLevel={championLevel}
                        setChampionLevel={setChampionLevel}
                    />
                </Col>
                <Col>
                    <Carousel interval={5500} fade={true} activeIndex={activeCarouselIndex} onSelect={(index) => setActiveCarouselIndex(index)}>
                        {champion?.skins.map((skin, index) => (
                            <Carousel.Item key={index}>
                                <ChampionSplashImage championName={championName} skinNumber={skin.num} skinName={skin.name} />
                                <Carousel.Caption>
                                    <h3>{skin.name}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col></Col >
            </Row>
            <Row>
                <Col>
                    <h2>Abilities</h2>
                    <Table className="">
                        <tbody>
                            <ChampionPassive ability={champion.passive} version={version} />
                            {champion.spells.map((spell) => (
                                <ChampionAbility ability={spell} version={version} resource={champion.partype} />
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div >
    );
}


function ChampionSplashImage({ championName, skinNumber, skinName }: { championName: string, skinNumber: number, skinName: string; })
{
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skinNumber}.jpg`} alt={skinName} />
        </div>
    );
}

function ChampionAbility({ ability, version, resource, simplified }: { ability: SpellDto; version: string; resource: string; simplified?: boolean; })
{

    const replacePlaceholderWithValue = (text: string, placeholder: string, value: string): string =>
    {
        // Find all substrings that is in between {{ }}
        const regex = new RegExp(`{{\\s*\\w+\\s*}}`, 'g');
        const matches = text.match(regex);


        return "aaa";
    };

    return (
        <tr key={ability.name} className="league-container champion-abilities">
            <td>
                <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${ability.image.full}`} alt={ability.name} />
            </td>
            <td>
                {/*  */}
                <p>{
                    ability.resource
                        .replace("{{ cost }}", ability.cost[0].toString())
                        .replace("{{ abilityresourcename }}", resource)
                }
                </p>
            </td>
            <td>
                <h3>{ability.name}</h3>
                <p>
                    {
                        simplified
                            ? formatText(ability.description)
                            : formatText(ability.tooltip)

                    }
                </p>
                <p>{replacePlaceholderWithValue(ability.tooltip, "qbasedamageNL", "69")}</p>
            </td>
            <td>
                <h3>original</h3>
                <p>
                    {
                        simplified
                            ? ability.description
                            : ability.tooltip

                    }
                </p>
                {/* <p>{replacePlaceholderWithValue(formatText(ability.tooltip), "qbasedamageNL", "69")}</p> */}
            </td>
        </tr>
    );
}
function ChampionPassive({ ability, version }: { ability: PassiveDto; version: string; })
{
    return (
        <tr key={ability.name} className="league-container champion-abilities">
            <td>
                <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${ability.image.full}`} alt={ability.name} />
            </td>
            <td>
                {/* <p>{ability.name}</p> */}
            </td>
            <td>
                <h3>{ability.name}</h3>
                <p>{formatText(ability.description)}</p>
            </td>
            <td>
                <h3>original</h3>
                <p>{ability.description}</p>
            </td>
        </tr>
    );
}




const ChampionStats = (props: {
    stats: any,
    championLevel: number,
    setChampionLevel: (e: number) => void,
}) =>
{
    const { stats, championLevel, setChampionLevel } = props;
    return (
        <Table className="league-container">
            <tbody>
                <tr>
                    <td colSpan={2}>
                        <span>{championLevel}</span>
                        <Form.Range min={1} max={18} value={championLevel} onChange={(e) => setChampionLevel(parseInt(e.target.value))} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalehealth.png`} alt="Health" />
                        {statAtLevel(stats.baseHP, stats.hpPerLevel, championLevel)} {/* Health */}
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalemana.png`} alt="Mana" />
                        {statAtLevel(stats.primaryAbilityResource.arBase, stats.primaryAbilityResource.arPerLevel, championLevel)} {/* Mana */}
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalead.png`} alt="Attack Damage" />
                        {statAtLevel(stats.baseDamage, stats.damagePerLevel, championLevel)} {/* Attack damage */}
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scaleap.png`} alt="Ability Power" />
                        {0}
                        {/* Ability power is not included in base stats */}
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalearmor.png`} alt="Armor" />
                        {statAtLevel(stats.baseArmor, stats.armorPerLevel, championLevel)} {/* Armor */}
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalemr.png`} alt="Magic Resist" />
                        {statAtLevel(stats.baseSpellBlock, stats.spellBlockPerLevel, championLevel)} {/* Magic resist */}
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={`${STATS_ICON_URL}/scaleas.png`} alt="Attack Speed" />
                        {attackSpeedAtLevel(stats.attackSpeed, stats.attackSpeedPerLevel, championLevel, stats.attackSpeedRatio)} {/* Attack speed */}
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalecooldown.png`} alt="Ability Haste" />
                        {0}
                        {/* Ability haste is not included in base stats */}
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalecrit.png`} alt="Crit chance" />
                        0
                        {/* {statAtLevel(stats.crit, stats.critperlevel, championLevel)} Critical strike chance */}
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalems.png`} alt="Movement Speed" />
                        {statAtLevel(stats.baseMoveSpeed, 0, championLevel)} {/* Movement speed */}
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};