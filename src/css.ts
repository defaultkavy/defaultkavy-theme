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
            foreground: colors.green
        }
    },
    {
        scope: "meta.selector.css",
        settings: {
            foreground: colors.yellow
        }
    },
    {
        scope: [
            "support.function"
        ],
        settings: {
            foreground: colors.purple
        }
    },
    {
        scope: ["variable.css", "variable.argument.css"],
        settings: {
            foreground: colors.orange
        }
    },
    {
        scope: ["keyword.other.unit"],
        settings: {
            foreground: colors.red
        }
    },
]