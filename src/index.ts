import { rule, writeToProfile } from "karabiner.ts";
import { hrm } from "karabiner.ts-greg-mods";

// TODO: https://github.com/gregorias/karabiner.ts-greg-mods?tab=readme-ov-file#caps-word

writeToProfile("Default profile", [
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
]);
