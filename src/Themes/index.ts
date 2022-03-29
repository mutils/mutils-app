import horizon from "./horizon";
import light from "./light";
import { Theme } from "./Theme";

interface Themes {
    [key: string]: Theme;
}

export default {
    horizon: horizon,
    light: light,
} as Themes;
