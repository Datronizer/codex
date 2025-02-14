import { Form, Table } from "react-bootstrap";
import { STATS_ICON_URL, statAtLevel, attackSpeedAtLevel, calculateMovespeed, BonusStats, calculateArmorDmgReduction, calculateMRDmgReduction } from "../LolUtils";

export const ChampionStats = (props: {
    stats: any,
    championLevel: number,
    bonus: BonusStats,
    setChampionLevel: (e: number) => void,
}) =>
{
    const { stats, championLevel, bonus, setChampionLevel } = props;
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
                        {statAtLevel(stats.baseHP, stats.hpPerLevel, championLevel, bonus.FlatHPPoolMod)} {/* Health */}
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalemana.png`} alt="Mana" />
                        {statAtLevel(stats.primaryAbilityResource.arBase, stats.primaryAbilityResource.arPerLevel, championLevel, bonus.FlatMPPoolMod)} {/* Mana */}
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalead.png`} alt="Attack Damage" />
                        {statAtLevel(stats.baseDamage, stats.damagePerLevel, championLevel, bonus.FlatPhysicalDamageMod)} {/* Attack damage */}
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scaleap.png`} alt="Ability Power" />
                        {bonus.FlatMagicDamageMod}
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalearmor.png`} alt="Armor" />
                        {
                            statAtLevel(stats.baseArmor, stats.armorPerLevel, championLevel, bonus.FlatArmorMod)
                            + ` (${Math.round(
                                (1 - calculateArmorDmgReduction(
                                    statAtLevel(stats.baseArmor, stats.armorPerLevel, championLevel, bonus.FlatArmorMod)
                                )) * 100)}% dmg red.)`
                        }
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalemr.png`} alt="Magic Resist" />
                        {
                            statAtLevel(stats.baseSpellBlock, stats.spellBlockPerLevel, championLevel, bonus.FlatSpellBlockMod)
                            + ` (${Math.round(
                                (1 - calculateMRDmgReduction(
                                    statAtLevel(stats.baseSpellBlock, stats.spellBlockPerLevel, championLevel, bonus.FlatSpellBlockMod)
                                )) * 100)}% dmg red.)`
                        } 
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={`${STATS_ICON_URL}/scaleas.png`} alt="Attack Speed" />
                        {attackSpeedAtLevel(stats.attackSpeed, stats.attackSpeedPerLevel, championLevel, stats.attackSpeedRatio, bonus.PercentAttackSpeedMod)} {/* Attack speed */}
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalecooldown.png`} alt="Ability Haste" />
                        {bonus.FlatCooldownMod}
                        {/* Ability haste is not included in base stats */}
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalecrit.png`} alt="Crit chance" />
                        {bonus.FlatCritChanceMod * 100}%
                    </td>
                    <td>
                        <img src={`${STATS_ICON_URL}/scalems.png`} alt="Movement Speed" />
                        {calculateMovespeed(stats.baseMoveSpeed, bonus.FlatMovementSpeedMod, bonus.PercentMovementSpeedMod, [], 0)}
                        {/* TODO: Make a list of all multiplicative / additive % ms. */}
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};