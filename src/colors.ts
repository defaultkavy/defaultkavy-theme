export const colors = {
    red: '#bd5959',
    blue: '#63aad4',
    white: '#A9B1D6',
    orange: '#b96944',
    purple: '#A792E0',
    grey: '#9caab3',
    cyan: '#51adb9',
    lime: '#a4ac3d',
    green: '#6c853e',
    lightGreen: '#80b690',
    pink: '#d67cbb',
    yellow: '#c4a142',
    comment: '#506779'
}

export const codeColors = {
    keyword: colors.red,
    constant: colors.blue,
    readwrite: colors.white,
    parameter: colors.orange,
    function: colors.purple,
    property: colors.grey,
    class: colors.yellow,
    type: colors.lime,
    primitive: colors.green,
    punctuation: colors.cyan,
    global: colors.cyan,
    string: colors.lightGreen,
    tag: colors.pink,
    attribute: colors.yellow,
    comment: colors.comment
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

