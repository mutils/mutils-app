import { Theme } from "./Theme";

import horizon from "./horizon";
import light from "./light";
import dark from "./dark";
import gruvbox from "./gruvbox";

interface Themes {
  [key: string]: Theme;
}

export default {
  horizon,
  light,
  dark,
  gruvbox,
} as unknown as Themes;
