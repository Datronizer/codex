import { ChampionDto, PassiveDto, SpellDto, StatsDto } from "../dto/Champion.dto";
import { useEffect, useState } from "react";
import { Col, Row, Spinner, Table, Button, Accordion } from "react-bootstrap";
import "../LeagueTooltip.scss";
import { BonusStats, formatText } from "../LolUtils";
import { ItemSquare } from "./ItemSquare";
import { ChampionStats } from "./ChampionStats";
import { ChampionAbility } from "./ChampionAbility";
import { LolEvents } from "./LolEvents";


export function FittingRoom()
{
    const [champions, setChampions] = useState<ChampionDto[]>([]);
    const [champion, setChampion] = useState<ChampionDto>();
    const [championFull, setChampionFull] = useState<any>();
    const [championLevel, setChampionLevel] = useState<number>(1);

    const [version, setVersion] = useState<string>("");
    const [items, setItems] = useState<any[]>([]);
    const [selectedItems, setSelectedItems] = useState<any[]>([]);
    const [bonusStats, setBonusStats] = useState<BonusStats>({
        FlatHPPoolMod: 0,
        FlatMPPoolMod: 0,
        FlatPhysicalDamageMod: 0,
        FlatMagicDamageMod: 0,
        FlatArmorMod: 0,
        FlatSpellBlockMod: 0,
        PercentAttackSpeedMod: 0,
        FlatCooldownMod: 0,
        FlatCritChanceMod: 0,
        FlatMovementSpeedMod: 0,
        PercentMovementSpeedMod: [0],
        MultiplicativeMovementSpeedMod: [],
    });

    useEffect(() =>
    {
        const getLatestVersion = async () =>
        {
            const url = `https://ddragon.leagueoflegends.com/api/versions.json?api_key=${process.env.REACT_APP_RIOT_API_KEY}`;
            const response = await fetch(url);
            const versions = await response.json();
            setVersion(versions[0]);
        };

        getLatestVersion();
    }, []);

    useEffect(() =>
    {
        if (version.length === 0)
        {
            return;
        }

        const getChampions = async (version: string) =>
        {
            const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json?api_key=${process.env.REACT_APP_RIOT_API_KEY}`;
            const response = await fetch(url)
                .then(res => res.json())
                .then(json => json.data)
                .then(json => Object.keys(json).map((key) => json[key]))
                .catch((err) =>
                {
                    throw new Error("Failed to fetch champions", err);
                });
            setChampions(response);
        };

        getChampions(version);
    }, [version]);

    useEffect(() =>
    {
        let stats: BonusStats = {
            FlatHPPoolMod: 0,
            FlatMPPoolMod: 0,
            FlatPhysicalDamageMod: 0,
            FlatMagicDamageMod: 0,
            FlatArmorMod: 0,
            FlatSpellBlockMod: 0,
            PercentAttackSpeedMod: 0,
            FlatCooldownMod: 0,
            FlatCritChanceMod: 0,
            FlatMovementSpeedMod: 0,
            PercentMovementSpeedMod: [0],
            MultiplicativeMovementSpeedMod: [],
        };

        // Loop thru inventory, get stats' keys, map that key to statsMapping, then add to bonusStats
        selectedItems?.forEach(item =>
        {
            item.stats &&
                Object.keys(item.stats).forEach(key =>
                {
                    if (key in stats)
                    {
                        if (key === "PercentMovementSpeedMod" && Array.isArray(stats[key as keyof BonusStats]))
                        {
                            (stats[key as keyof BonusStats] as number[]).push(item.stats[key]);
                            return;
                        }
                        stats[key as keyof BonusStats] += item.stats[key];
                    }
                }
                );
            // console.log("adding item", item, stats);
        }
        );

        // console.log("final stats", stats);
        setBonusStats(stats);
        // console.log("check stats", bonusStats);
    }, [selectedItems]);



    useEffect(() =>
    {
        if (version.length === 0)
        {
            return;
        }

        const getItems = async (version: string) =>
        {
            // TODO: We need a DTO here jfc
            const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json?api_key=${process.env.REACT_APP_RIOT_API_KEY}`;
            const response = await fetch(url)
                .then(res => res.json())
                .then(json => json.data)
                .then(object => Object.keys(object).map(key => ({ ...object[key], id: key })))
                .catch((err) =>
                {
                    throw new Error("Failed to fetch items", err);
                    // throw new Error(err);
                });
            setItems(response);
        };

        getItems(version);
    }, [version]);


    const selectChampion = (champion?: ChampionDto) =>
    {
        if (!champion)
        {
            setChampion(undefined);
            setChampionFull(undefined);
            return;
        }

        const getChampion = async () =>
        {
            const fullDetailUrl = `https://raw.communitydragon.org/latest/game/data/characters/${champion.id.toLowerCase()}/${champion.id.toLowerCase()}.bin.json`;
            const champFullRes = await fetch(fullDetailUrl)
                .then(res => res.json())
                .catch(err => console.error(err));
            setChampionFull(champFullRes);

            const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${champion?.id}.json?api_key=${process.env.REACT_APP_RIOT_API_KEY}`;
            const champRes = await fetch(url)
                .then(res => res.json())
                .then(json => json.data)
                .then(data => data[champion?.id!]);
            setChampion(champRes);
        };

        getChampion();
    };

    return (
        <div className="mx-2 my-2 league-container">
            <Row>
                <Col>
                    <Accordion defaultActiveKey={["0"]} alwaysOpen className="league-container">
                        <Accordion.Item eventKey="0" className="league-container">
                            <Accordion.Header>Champion</Accordion.Header>
                            <Accordion.Body>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                    <ChampionColumn
                                        champions={champions}
                                        champion={champion}
                                        championFull={championFull}
                                        bonusStats={bonusStats}
                                        version={version}
                                        championLevel={championLevel}
                                        selectChampion={selectChampion}
                                        setChampionLevel={setChampionLevel}
                                    />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="league-container">
                            <Accordion.Header>Item</Accordion.Header>
                            <Accordion.Body>
                                <div >
                                    <Row>
                                        <SelectedItemsTable
                                            inventory={selectedItems}
                                            version={version}
                                            setInventory={setSelectedItems}
                                            bonusStats={bonusStats}
                                        />
                                    </Row>
                                    <br /><br />
                                    <Row>
                                        <ItemColumn
                                            inventory={selectedItems}
                                            shop={items}
                                            version={version}
                                            setInventory={setSelectedItems}
                                        />
                                    </Row>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col>
                    <h1 style={{ textAlign: "center" }}>Calculator</h1>
                    {/* <Graph champion={champion} /> */}
                </Col>
                <Col>
                    <h1 style={{ textAlign: "center" }}>Events</h1>
                    <div>
                        <LolEvents/>
                        {/* <EventList />
                        {champion?.spells.map((spell) => (
                            <ChampionAbility
                                champFull={championFull}
                                champName={champion.id}
                                ability={spell}
                                version={version}
                                resource={champion.partype}
                                // simplified
                                key={spell.name}
                            />
                        ))} */}
                    </div>
                </Col>
            </Row>
        </div>
        // <div>
        //     <Card.Title>
        //         {champion.name}, <small>{champion.title}</small>
        //     </Card.Title>
        //     <Link to={`/tools/lol/${version}/champions`}>Back</Link>
        //     <Row>
        //         <Col>
        //             <h2>Abilities</h2>
        //             <Table className="">
        //                 <tbody>
        //                     <ChampionPassive ability={champion.passive} version={version} />
        //                     {champion.spells.map((spell) => (
        //                         <ChampionAbility ability={spell} version={version} resource={champion.partype} />
        //                     ))}
        //                 </tbody>
        //             </Table>
        //         </Col>
        //     </Row>
        // </div >
    );
}

function ChampionColumn(props: {
    champions?: ChampionDto[],
    champion?: ChampionDto;
    championFull?: any;
    bonusStats: BonusStats;
    version: string;
    championLevel: number;
    selectChampion: (champion?: ChampionDto) => void;
    setChampionLevel: (e: number) => void;
}): JSX.Element
{
    const { champion, champions, championFull, version, championLevel, bonusStats, selectChampion, setChampionLevel } = props;
    if (!champion || !championFull)
    {
        return champions && champions.length > 0
            ? <>
                {champions.map(champion => (
                    <div key={champion.id}
                        onClick={() => selectChampion(champion)}
                        style={{ cursor: "pointer" }}>
                        <img
                            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
                            alt={champion.name}
                            width="56px"
                            height="56px"
                        />
                        {/* <p><small>{champion.name}</small></p> */}
                    </div>
                ))}
            </>
            : <Spinner animation="border" />;
    }

    // console.log(championFull[`Characters/${champion.id}/CharacterRecords/Root`]);
    return (
        <div>
            <Button onClick={() => selectChampion(undefined)}>Reset</Button>
            <br />
            <img
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
                alt={champion.name}
                width="56px"
                height="56px"
            />
            <p>
                <ChampionStats
                    stats={championFull[`Characters/${champion.id}/CharacterRecords/Root`]}
                    championLevel={championLevel}
                    bonus={bonusStats}
                    setChampionLevel={setChampionLevel}
                />
            </p>
        </div>
    );
}


function ItemColumn(props: {
    shop?: any[],
    inventory: any[],
    version: string;
    setInventory: (e: any[]) => void;
}): JSX.Element
{
    const { shop, inventory, version, setInventory } = props;

    return (
        shop && shop.length > 0
            ? <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {shop
                    .filter(item => item.maps["11"] === true && item.gold.purchasable === true && item.name !== "Empyrean Promise")
                    .map(item => (
                        <ItemSquare
                            item={item}
                            inventory={inventory}
                            onItemClick={item =>
                            {
                                inventory.length < 6 ? setInventory([...inventory, item]) : setInventory([...inventory]);
                                console.log(item);
                            }
                            }
                            version={version}
                            key={item.id}
                        />

                    ))}
            </div>
            : <Spinner animation="border" />
    );
}
function SelectedItemsTable(props: {
    inventory: any[],
    version: string;
    armor?: number;
    bonusStats: BonusStats;
    setInventory: (e: any[]) => void;
    setBonusStats?: (e: StatsDto) => void;
}): JSX.Element
{
    const { inventory, version, setInventory, bonusStats } = props;

    return (
        <>
            {
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    {inventory.map((item, index) => (
                        <ItemSquare
                            key={inventory + "-" + Math.round(Math.random() * 1000)}
                            item={item}
                            inventory={inventory}
                            onItemClick={item => setInventory([...inventory.filter((_, i) => i !== index)])}
                            version={version}
                        />
                    ))}
                </div>
            }
            <div>
                Bonus stats:
                <Table>
                    <tbody>
                        <tr>
                            <td>Health</td>
                            <td>{bonusStats.FlatHPPoolMod}</td>
                        </tr>
                        <tr>
                            <td>Mana</td>
                            <td>{bonusStats.FlatMPPoolMod}</td>
                        </tr>
                        <tr>
                            <td>Attack Damage</td>
                            <td>{bonusStats.FlatPhysicalDamageMod}</td>
                        </tr>
                        <tr>
                            <td>Ability Power</td>
                            <td>{bonusStats.FlatMagicDamageMod}</td>
                        </tr>
                        <tr>
                            <td>Armor</td>
                            <td>{bonusStats.FlatArmorMod}</td>
                        </tr>
                        <tr>
                            <td>Magic Resist</td>
                            <td>{bonusStats.FlatSpellBlockMod}</td>
                        </tr>
                        <tr>
                            <td>Attack Speed</td>
                            <td>{bonusStats.PercentAttackSpeedMod * 100}%</td>
                        </tr>
                        <tr>
                            <td>Ability Haste</td>
                            <td>{bonusStats.FlatCooldownMod}</td>
                        </tr>
                        <tr>
                            <td>Crit Chance</td>
                            <td>{bonusStats.FlatCritChanceMod * 100}%</td>
                        </tr>
                        <tr>
                            <td>Movement Speed</td>
                            <td>{bonusStats.FlatMovementSpeedMod} | {bonusStats.PercentMovementSpeedMod.reduce((p, c) => p + c) * 100}%</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
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