import { Link, useNavigate, useParams } from "react-router-dom";
import { ChampionDataDto, ChampionDto } from "./dto/Champion.dto";
import { useEffect, useState } from "react";
import { Button, Card, Carousel, Form, Spinner } from "react-bootstrap";


export function ChampionDetails()
{
    const version = useParams().version!;
    const championName = useParams().champion!;

    const [champion, setChampion] = useState<ChampionDto | null>(null);
    const [activeCarouselIndex, setActiveCarouselIndex] = useState<number>(0);
    useEffect(() =>
    {
        setChampion(null);

        const getChampion = async () =>
        {
            const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json?api_key=${process.env.REACT_APP_RIOT_API_KEY}`;
            const response = await fetch(url)
                .then(res => res.json())
                .then(json => json.data)
                .then(data => data[championName]);

            console.log(response);
            setChampion(response);
        };


        setActiveCarouselIndex(0);
        getChampion();
    }, [championName]);

    if (!champion)
    {
        return <Spinner animation="border" />;
    }

    return (
        <div>
            <Card.Title>
                {champion.name}, {champion.title}
            </Card.Title>
            <Link to={`/tools/lol/${version}/champions/Ashe`}>Ashe</Link>
            <Link to={`/tools/lol/${version}/champions/Teemo`}>Teemo</Link>
            <Link to={`/tools/lol/${version}/champions`}>Back</Link>

            <Carousel interval={3000} fade={true} activeIndex={activeCarouselIndex} onSelect={(index) => setActiveCarouselIndex(index)}>
                {champion?.skins.map((skin, index) => (
                    <Carousel.Item key={index}>
                        <ChampionSplashImage championName={championName} skinNumber={skin.num} skinName={skin.name} />
                        <Carousel.Caption>
                            <h3>{skin.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
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