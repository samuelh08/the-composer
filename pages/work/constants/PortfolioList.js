import { lazy } from "react";

const RavenObject = () => lazy(() => import('./TheSignOfTheRavenObject'));
const SerenidadObject = () => lazy(() => import("./SerenidadObject"));
const RebotObject = () => lazy(() => import("./RebotObject"));
const PolarityObject = () => lazy(() => import("./PolarityObject"));
const PanaceaObject = () => lazy(() => import("./PanaceaObject"));
const FallingStarObject = () => lazy(() => import("./FallingStarObject"));
const AlkymObject = () => lazy(() => import("./AlkymObject"));
const AftermathOfBattleObject = () => lazy(() => import("./AftermathOfBattleObject"));
const MonsterHunterObject = () => lazy(() => import("./MonsterHunterObject"));

const ImagesDisplayInfo = [
  RavenObject,
  SerenidadObject,
  RebotObject,
  PolarityObject,
  PanaceaObject,
  FallingStarObject,
  AlkymObject,
  AftermathOfBattleObject,
  AnnoMutationObject,
  MonsterHunterObject
]

export default ImagesDisplayInfo;
