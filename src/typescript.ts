import { codeColors, type TokenColor } from "./colors"

export const semanticTokenColors = {
    class: codeColors.class,
    type: codeColors.type,
    enum: codeColors.type,
    interface: codeColors.type,
    variable: codeColors.readwrite,
    "variable.defaultLibrary": codeColors.global,
    property: codeColors.property,
    "*.readonly": codeColors.constant,
    "*.deprecated": {
        fontStyle: 'strikethrough'
    },
    function: codeColors.function,
    method: codeColors.function,
    typeParameter: codeColors.parameter
}

export const ts_tokenColors: TokenColor[] = [
    {
        // import export for if / const let var
        scope: [
            "keyword.operator", 
            "keyword.control", 
            "storage"
        ],
        settings: {
            foreground: codeColors.keyword,
            fontStyle: "bold"
        }
    },
    {
        // 常量
        scope: ["constant", "variable.other.constant"],
        settings: {
            foreground: codeColors.constant,
        }
    },
    {
        // 函数
        scope: "entity.name.function",
        settings: {
            foreground: codeColors.function,
        }
    },
    {
        // 字符串
        scope: "string",
        settings: {
            foreground: codeColors.string,
        }
    },
    {
        scope: [
            "punctuation.definition.template-expression",
            "punctuation.accessor.optional"
        ],
        settings: {
            foreground: codeColors.punctuation,
        }
    },
    {
        // 参数
        scope: ["variable.parameter"],
        settings: {
            foreground: codeColors.parameter,
        }
    },
    {
        // 可读写变量
        scope: ["variable.other.readwrite"],
        settings: {
            foreground: codeColors.readwrite,
        }
    },
    {
        // 类型名
        scope: ["meta.type.declaration"],
        settings: {
            foreground: codeColors.type,
        }
    },
    {
        // 原生数据类型
        scope: "support.type.primitive",
        settings: {
            foreground: codeColors.primitive,
            fontStyle: "bold"
        }
    },
    {
        // object/interface/type 属性名
        scope: [
            "meta.field.declaration", 
            "meta.object-literal.key",
            "variable.other.property",
        ],
        settings: {
            foreground: codeColors.property,
        }
    },
    {
        // object/interface/type 属性名 by string
        scope: [
            "meta.object-literal.key string",
        ],
        settings: {
            foreground: codeColors.propertyString,
        }
    },
    {
        // Comments
        scope: "comment",
        settings: {
            foreground: codeColors.comment
        }
    },
    {
        // class
        scope: ["meta.class", "variable.language"],
        settings: {
            foreground: codeColors.class,
        }
    },
]