import { 
    CreatureTargetMode, CreatureCombatMode, 
    Dices, SkillName 
} from "@enums";

import { BaseUndead } from "../../";
import { Entity } from "../../../entities";

import { 
    AncientRune, BlackPlantWithThorns, BloodBerry, 
    DarknessEssence, GoldCoin, MagicDust, Ruby, SmallLifePotion, 
    SmallManaPotion, ElementalDust, EnervatedStaff, Skull, 
    MagicEssence, FireEssence, BoneRing
} from "@items";

export class SkeletonMage extends BaseUndead {
    public override namespace = "SkeletonMage";
    public override name = "Skeleton Mage";
    public override customVisual = "POSkeletonMage";
    public override passive = false;

    public override targetMode = CreatureTargetMode.DamageCaused;
    public override combatMode = CreatureCombatMode.Ranged;
    public override movementDistance: number = 2000;
    public override maxDistanceToRespawn: number = 6000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D2D8;
    public override speed = 600;

    constructor(){
        super();

        this.setLife(120, 150);

        this.setStr(10, 20);
        this.setDex(10, 20); 
        this.setInt(80, 90);

        this.addAction("Firebolt", 50);
        this.addAction("Fireball", 30);
        this.addAction("Poisonbolt", 30);
        this.addAction("Poison", 5);
        this.addAction("Blink", 20);

        this.setSkill(SkillName.Necromancy, 5);
        this.setSkill(SkillName.Elementarism, 5);

        this.loot.dropChance(GoldCoin, 90, 10, 50);
        this.loot.dropChance(Ruby, 5, 1);
        this.loot.dropChance(BlackPlantWithThorns, 50, 1, 3);
        this.loot.dropChance(BloodBerry, 50, 1, 3);
        this.loot.dropChance(AncientRune, 1, 1, 1);
        this.loot.dropChance(SmallLifePotion, 30, 1, 2);
        this.loot.dropChance(SmallManaPotion, 30, 1, 3);
        this.loot.dropChance(FireEssence, 10, 1, 2);
        this.loot.dropChance(DarknessEssence, 10, 1, 2);
        this.loot.dropChance(MagicDust, 1, 1, 2);
        this.loot.dropChance(ElementalDust, 10, 1);
        this.loot.dropChance(MagicEssence, 10, 1);
        this.loot.dropChance(EnervatedStaff, 1, 1);
        this.loot.dropChance(Skull, 10, 1);
        this.loot.dropChance(BoneRing, 5, 1);
    }
}

Entity.addEntityBase("SkeletonMage", SkeletonMage);