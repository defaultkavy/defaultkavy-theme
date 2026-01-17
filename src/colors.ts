export const colors = {
    red: '#b84f61',
    blue: '#7593d3',
    white: '#9caab3',
    orange: '#ce7d58',
    purple: '#A792E0',
    cyan: '#76efff',
    lightCyan: '#86c2ca',
    darkCyan: '#1b747a',
    green: '#80b690',
    darkGreen: '#888a6b',
    pink: '#c572da',
    yellow: '#cea944',
    comment: '#506779'
}

export const baseColors = {
    bg: '#08080b',
    fg: '#787c99',
    highlight: '#ffffff',

    primary_fg2: '#a9b1d6',

    secondary_bg: '#167474',
    secondary_fg: '#ffffff',
    secondary_bg_hover: '#23b6b6',

    accent_bg: '#55f8f8',
    accent_fg: '#08080b',

    border: '#101014'
}

export const codeColors = {
    keyword: colors.red,
    constant: colors.blue,
    readwrite: colors.white,
    parameter: colors.orange,
    function: colors.purple,
    property: colors.white,
    propertyString: colors.darkGreen,
    class: colors.yellow,
    type: colors.yellow,
    primitive: colors.darkCyan,
    punctuation: colors.cyan,
    global: colors.cyan,
    string: colors.green,
    tag: colors.orange,
    attribute: colors.yellow,
    comment: colors.comment,
}

export const bracketColors = {
    1: colors.white,
    2: colors.blue,
    3: colors.lightCyan,
    4: colors.white,
    5: colors.blue,
    6: colors.lightCyan
}

export type TokenColor = {
    scope: string | string[],
    settings: {
        foreground?: string,
        fontStyle?: string,
        fontFamily?: string,
        fontSize?: string,
        lineHeight?: number
    }
}

