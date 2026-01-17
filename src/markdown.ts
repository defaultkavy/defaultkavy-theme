import { colors, type TokenColor } from "./colors";

export const markdown_tokenColors: TokenColor[] = [
    {
        scope: "meta.paragraph.markdown",
        settings: {
            foreground: colors.white,
        }
    },
    {
        // 标题
        scope: [
            "markup.heading.markdown", 
            "punctuation.definition.heading.markdown"
        ],
        settings: {
            foreground: colors.orange,
            fontStyle: 'bold',
        }
    },
    {
        // 符号
        scope: [
            "punctuation.definition.markdown",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.list.begin.markdown",
            "punctuation.definition.link.title.begin.markdown",
            "punctuation.definition.link.title.end.markdown",
            "punctuation.definition.link.description.begin.markdown",
            "punctuation.definition.link.description.end.markdown",
            "punctuation.definition.metadata.markdown",
            "punctuation.definition.table.markdown",
            "punctuation.separator.table.markdown",
            "meta.separator.markdown"
        ],
        settings: {
            foreground: colors.cyan,
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
            foreground: colors.green
        }
    },
    {
        scope: "string.other.link.title.markdown",
        settings: {
            foreground: colors.green
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
        scope: "fenced_code.block.language.markdown",
        settings: {
            foreground: colors.cyan
        }
    }
]