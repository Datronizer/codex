import { SpellDto } from "../dto/Champion.dto";
import "../LeagueTooltip.scss";
import { formatText } from "../LolUtils";

export function ChampionAbility({ ability, version, resource, simplified, champFull, champName }: { ability: SpellDto; version: string; resource: string; simplified?: boolean; champFull: any; champName: string; })
{
    const replacePlaceholderWithValue = (text: string, placeholder: string, value: string): string =>
    {
        // Find all substrings that is in between {{ }}
        const regex = new RegExp(`{{\\s*\\w+\\s*}}`, 'g');
        const matches = text.match(regex);


        // console.log(matches);
        return "aaa";
    };

    const findPlaceholderValue = () =>
    {
        const keyName = `Characters/${champName}/Spells/${ability.id}Ability/`;
        const skill = champFull[keyName];
        // const skillChildren = Object.keys(skill).map(key => skill[key]);

        // console.log("ability", ability);
        // console.log("keyName", keyName, champFull);
        console.log("champFull", champFull[keyName]);
    };


    findPlaceholderValue();
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