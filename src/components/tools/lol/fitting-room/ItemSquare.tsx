import { Button, Card, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
import { formatItemActive, formatItemPassive, formatItemStats, formatText } from "../LolUtils";

export function ItemSquare(props: {
    item: any;
    inventory: any[];
    onItemClick: (item: any) => void;
    version: string;
})
{
    const { item, version, onItemClick } = props;
    const text = item.description;

    formatItemStats(text)

    return (
        <OverlayTrigger
            placement="top"
            overlay={
                <Popover className="league-container">
                    <Popover.Body>
                        <div><h6 className="league-header">{item.name}</h6></div>
                        {/* <div>{formatText(text)}</div> */}
                        <div>{formatItemStats(text)}</div>
                        <div>{formatItemPassive(text)}</div>
                        <div>{formatItemActive(text)}</div>
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