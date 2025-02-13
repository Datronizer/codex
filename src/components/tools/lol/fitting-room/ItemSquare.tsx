import { Button, Card, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
import { formatText } from "../LolUtils";

export function ItemSquare(props: {
    item: any;
    inventory: any[];
    onItemClick: (item: any) => void;
    version: string;
})
{
    const { item, version, onItemClick } = props;
    const text = item.description;
    //




    //


    return (
        <OverlayTrigger
            placement="top"
            overlay={
                <Popover>
                    <Popover.Body>
                        <div><h6>{item.name}</h6></div>
                        <div>{formatText(text)}</div>
                    </Popover.Body>
                </Popover>
            }
        >
            <div
                style={{ cursor: "pointer" }}
                onClick={() => onItemClick(item)}
            >
                <img
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                    alt={item.name}
                    width="56px"
                    height="56px"
                />
            </div>
        </OverlayTrigger>
    );
}