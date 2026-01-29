import { rule, writeToProfile, map } from "karabiner.ts";
import { hrm, capsWord } from "karabiner.ts-greg-mods";

writeToProfile(
  "Default profile",
  [
    rule("Caps Lock to Escape").manipulators([map("caps_lock").to("escape")]),
    capsWord().toggle(map("caps_lock", "shift").build()[0]).build(),
    rule("Home row mods").manipulators(
      hrm(
        new Map([
          ["a", "l⌃"],
          ["s", "l⌥"],
          ["d", "l⌘"],
          ["f", "l⇧"],
          ["j", "r⇧"],
          ["k", "r⌘"],
          ["l", "r⌥"],
          [";", "r⌃"],
        ]),
      )
        .lazy(true)
        .holdTapStrategy("permissive-hold")
        .chordalHold(true)
        .simultaneousThreshold(90)
        .tappingTerm(110)
        .build(),
    ),
  ],
  {
    "basic.to_if_held_down_threshold_milliseconds": 50,
  },
);
