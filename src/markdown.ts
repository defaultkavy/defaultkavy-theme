import { colors, type TokenColor } from "./colors";

export const markdown_tokenColors: TokenColor[] = [
    {
        scope: "meta.paragraph.markdown",
        settings: {
            foreground: colors.white,
        }
    },
    {
        scope: ["markup.heading.markdown", "punctuation.definition.heading.markdown"],
        settings: {
            foreground: colors.orange,
            fontStyle: 'bold',
        }
    },
    {
        scope: [
            "punctuation.definition",
        ],
        settings: {
            foreground: colors.cyan,
            fontStyle: 'bold',
        }
    },
    {
        scope: "markup.bold.markdown",
        settings: {
            fontStyle: 'bold',
        }
    },
    {
        scope: "markup.italic.markdown",
        settings: {
            fontStyle: 'italic',
        }
    },
    {
        scope: "punctuation.definition.bold.markdown",
        settings: {
            foreground: colors.lightGreen
        }
    },
    {
        scope: "punctuation.definition.italic.markdown",
        settings: {
            foreground: colors.cyan
        }
    },
    {
        scope: "string.other.link.title.markdown",
        settings: {
            foreground: colors.lightGreen
        }
    },
    {
        scope: "markup.underline.link",
        settings: {
            foreground: colors.blue
        }
    },
    {
        scope: "markup.table.markdown",
        settings: {
            foreground: colors.white
        }
    },
    {
        scope: "punctuation.separator.table.markdown",
        settings: {
            foreground: colors.cyan
        }
    },
    {
        scope: "fenced_code.block.language.markdown",
        settings: {
            foreground: colors.cyan
        }
    }
]