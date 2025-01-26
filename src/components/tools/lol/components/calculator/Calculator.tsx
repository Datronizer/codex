import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ChampionDataDto } from "components/tools/lol/dto/Champion.dto";

export function Calculator()
{
    const [version, setVersion] = useState<string>("");
    const [champions, setChampions] = useState<ChampionDataDto[]>([]);

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


    console.log(champions);

    return (
        <div>
            <h1>Calculator</h1>
            {
                champions && champions.length > 0 ?
                    champions.map((champion: any) => (
                        
                        <div key={champion.id}>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`} alt={champion.name} />
                            <p>{champion.name}</p>
                        </div>
                    ))
                    : <Spinner animation="border" />
            }
        </div>
    );
}