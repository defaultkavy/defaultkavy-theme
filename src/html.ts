import { codeColors, type TokenColor } from "./colors";

export const html_tokenColors: TokenColor[] = [
    {
        // HTML tag
        scope: "entity.name.tag",
        settings: {
            foreground: codeColors.tag,
            fontStyle: "bold"
        }
    },
    {
        // HTML attribute name
        scope: "meta.attribute",
        settings: {
            foreground: codeColors.attribute,
            fontStyle: "bold"
        }
    },
]