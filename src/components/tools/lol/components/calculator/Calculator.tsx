import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ChampionDataDto, ChampionDto } from "components/tools/lol/dto/Champion.dto";
import { Line } from "react-chartjs-2";
import
{
    Chart as ChartJS,
    ChartData,
    CategoryScale,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    scales,
} from "chart.js";
import { statAtLevel } from "../../LolUtils";


export function Calculator()
{
    const [version, setVersion] = useState<string>("");
    const [champions, setChampions] = useState<ChampionDataDto[]>([]);
    const [champion, setChampion] = useState<ChampionDto>();
    const [items, setItems] = useState<any[]>([]);

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

    }, [items]);


    const selectChampion = (champion: ChampionDto) =>
    {
        setChampion(champion);

        const url = `https://raw.communitydragon.org/latest/game/data/characters/${champion.name.toLowerCase()}/${champion.name.toLowerCase()}.bin.json`;
        const keyForChampionStats = `Characters/${champion.name}/CharacterRecords/Root`;

        fetch(url)
            .then(res => res.json())
            .then((json: any) => console.log(json[keyForChampionStats]))
            .catch(err => console.error(err));
    };

    return (
        <div className="mx-2 my-2">
            <Row>
                <Col>
                    <h1>Champions</h1>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        {
                            champions && champions.length > 0 ?
                                champions.map((champion: any) => (
                                    <div key={champion.id} onClick={() => selectChampion(champion)} style={{ cursor: "pointer" }}>
                                        <img
                                            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
                                            alt={champion.name}
                                            width="56px"
                                            height="56px"
                                        />
                                        {/* <p><small>{champion.name}</small></p> */}
                                    </div>
                                ))
                                : <Spinner animation="border" />
                        }
                    </div>
                </Col>
                <Col>
                    <h1>Calculator</h1>
                    <Graph champion={champion} />
                </Col>
                <Col>
                    <h1>Items</h1>
                </Col>
            </Row>
        </div>
    );
}

function Graph(props: { champion?: ChampionDto; })
{
    const { champion } = props;
    if (!champion)
    {
        return <div>No champion selected</div>;
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Level',
                },
            },
        },
    };

    const labels = Array.from({ length: 18 }, (_, i) => i + 1);

    const data = {
        labels,
        datasets: [
            {
                label: "Health",
                data: labels.map(lvl => statAtLevel(
                    champion.stats.hp,
                    champion.stats.hpperlevel,
                    lvl
                )),
                borderColor: "rgb(28, 135, 28)",
                backgroundColor: "rgba(0, 128, 0, 0.5)",
            },
            {
                label: "Mana",
                data: labels.map(lvl => statAtLevel(
                    champion.stats.mp,
                    champion.stats.mpperlevel,
                    lvl)
                ),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    );
}