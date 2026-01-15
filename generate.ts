import { css_tokenColors } from "./src/css";
import { html_tokenColors } from "./src/html";
import { json_tokenColors } from "./src/json";
import { markdown_tokenColors } from "./src/markdown";
import { theme } from "./src/theme";
import { ts_tokenColors, semanticTokenColors } from "./src/typescript";

const json = {
    ...theme,
    tokenColors: [
        ...ts_tokenColors,
        ...html_tokenColors,
        ...css_tokenColors,
        ...markdown_tokenColors,
        ...json_tokenColors
    ],
    semanticHighlighting: true,
    semanticTokenColors
}

Bun.write('./themes/theme.json', JSON.stringify(json, null, 4));