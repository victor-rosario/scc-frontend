import { ObjectKeyDynamicI } from "@interfaces/common/common.interface";

export const getValueTypeOfInput = (target: any) => {
    const values: { [key: string]: any } = {
        checkbox: target.checked
    }

    return Object.keys(values).includes(target.type) ? values[target.type] : target.value;
}

export const assignValueToObject = (text: string, value: any, _data: object) => {
    let keys = text.split(".");
    keys.shift();

    let len = keys.length - 1;

    return keys.reduce((a, b, i) => {
        a += `{"${b}"${i > (len - 1) ? `:${value}` : ""}${i == len ? "}".repeat(len + 1) : ""}${i < len ? ":" : ""}`
        return a;
    }, "")
}

export const inputFormToJSON = (target: HTMLFormElement): any => {
    return [...Array.from(target.querySelectorAll("input")), ...Array.from(target.querySelectorAll("textarea"))].reduce((a: ObjectKeyDynamicI, b) => {
        let name = b.name;
        let names = name.split(".");
        let value = getValueTypeOfInput(b);
        if (names.length > 1) {
            a[names[0]] = {
                ...(a[names[0]]),
                ...(name.indexOf(".") !== -1 ? JSON.parse(assignValueToObject(name, value, a[names[0]])) : value)
            }
        } else if (name) {
            a[name] = value;
        }


        return a;
    }, {})
}

export interface ValidatePasswordI{
    message: string 
    type: 'poor' | 'average' | 'strong'
    percentage: string
    color: string
}

export const validatePassword = (password: string): ValidatePasswordI => {
    const minLength = 8
    const uppercase = /[A-Z]/
    const lowercase = /[a-z]/
    const digits = /\d/
    const specialCharacters = /[!@#$%^&*()_+{}[\]:<>,.?~]/

    const colorPoor = "#ec5840"
    const percentagePoor = "10%"

    const colorAverage = "#f7a61e"
    const percentageAverage = "50%"

    const colorStrong = "#39c16c"
    const percentageStrong = "100%"


    if (password.length < minLength) {
        return {
            message: "Poor password: Too short",
            type: "poor",
            percentage: percentagePoor,
            color: colorPoor
        }
    }else if (!uppercase.test(password)) {
        return {
            message: "Average password: Must contain at least one uppercase letter",
            type: "average",
            percentage: percentageAverage,
            color: colorAverage
        }
    }else if (!lowercase.test(password)) {
        return {
            message: "Average Password: Must contain at least one lowercase letter",
            type: "average",
            percentage: percentageAverage,
            color: colorAverage
        }
    }else if (!digits.test(password)) {
        return {
            message: "Average password: Must contain at least one digit",
            type: "average",
            percentage: percentageAverage,
            color: colorAverage
        }
    }else if (!specialCharacters.test(password)) {
        return {
            message: "Average password: Must contain at least one special character",
            type: "average",
            percentage: percentageAverage,
            color: colorAverage
        }
    }else{
        return {
            message: "Your password is great.",
            type: "strong",
            percentage: percentageStrong,
            color: colorStrong
        }
    }
}