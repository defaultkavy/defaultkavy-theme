export const colors = {
    red: '#b84f61',
    blue: '#668fe7',
    white: '#9caab3',
    orange: '#ce7d58',
    purple: '#A792E0',
    grey: '#9caab3',
    cyan: '#51adb9',
    lime: '#a4ac3d',
    green: '#6c853e',
    lightGreen: '#80b690',
    pink: '#d67cbb',
    yellow: '#cea944',
    comment: '#506779'
}

export const codeColors = {
    keyword: colors.red,
    constant: colors.blue,
    readwrite: colors.white,
    parameter: colors.orange,
    function: colors.purple,
    property: colors.white,
    class: colors.yellow,
    type: colors.yellow,
    primitive: colors.green,
    punctuation: colors.cyan,
    global: colors.cyan,
    string: colors.lightGreen,
    tag: colors.pink,
    attribute: colors.yellow,
    comment: colors.comment,
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

