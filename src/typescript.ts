import { codeColors, type TokenColor } from "./colors"

export const semanticTokenColors = {
    class: codeColors.class,
    type: codeColors.type,
    enum: codeColors.type,
    interface: codeColors.type,
    variable: codeColors.readwrite,
    property: codeColors.property,
    "*.readonly": codeColors.constant,
    "variable.defaultLibrary": codeColors.global,
    function: codeColors.function,
    method: codeColors.function
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
        scope: ["punctuation.definition.template-expression"],
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
        scope: ["meta.field.declaration", "meta.object.member"],
        settings: {
            foreground: codeColors.property,
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