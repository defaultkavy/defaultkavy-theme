import { codeColors, colors, type TokenColor } from "./colors";

export const css_tokenColors: TokenColor[] = [
    {
        scope: "meta.property-name.css",
        settings: {
            foreground: codeColors.property
        }
    },
    {
        scope: "meta.property-value.css",
        settings: {
            foreground: colors.cyan
        }
    },
    {
        scope: "meta.selector.css",
        settings: {
            foreground: codeColors.type
        }
    },
    {
        scope: [
            "support.function"
        ],
        settings: {
            foreground: codeColors.function
        }
    },
    {
        scope: ["variable.css", "variable.argument.css"],
        settings: {
            foreground: codeColors.readwrite
        }
    },
    {
        scope: ["keyword.other.unit"],
        settings: {
            foreground: colors.pink
        }
    },
]