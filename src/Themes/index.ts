import { Theme } from "./Theme";

import horizon from "./horizon";
import light from "./light";
import dark from "./dark";
import gruvbox from "./gruvbox";
import Default from "./default";

interface Themes {
  [key: string]: Theme;
}

export default {
  Default,
  horizon,
  light,
  dark,
  gruvbox,
} as unknown as Themes;
