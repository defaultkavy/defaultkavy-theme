import { colors, type TokenColor } from "./colors";

export const markdown_tokenColors: TokenColor[] = [
    {
        scope: "meta.paragraph.markdown",
        settings: {
            foreground: colors.white,
        }
    },
    {
        scope: "markup.heading.markdown",
        settings: {
            foreground: colors.orange,
            fontStyle: 'bold',
        }
    },
    {
        scope: [
            "punctuation.definition.list.begin.markdown",
            "punctuation.definition.quote.begin.markdown",
            "punctuation.definition.link",
            "punctuation.definition.metadata.markdown",
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
    }
]