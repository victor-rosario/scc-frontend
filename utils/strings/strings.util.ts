export function truncateURL(url: string, l: number = 50) {
    const chunk_l = (l / 2);
    url = url.replace("http://", "").replace("https://", "");

    if (url.length <= l) { return url; }

    const start_chunk = shortString(url, chunk_l, false);
    const end_chunk = shortString(url, chunk_l, true);
    return start_chunk + ".." + end_chunk;
}

function shortString(s: string, l: any, reverse: boolean) {
    const stop_chars = [' ', '/', '&'];
    const acceptable_shortness = l * 0.80; // When to start looking for stop characters
    reverse = typeof (reverse) != "undefined" ? reverse : false;
    s = reverse ? s.split("").reverse().join("") : s;
    let short_s = "";

    for (let i = 0; i < l - 1; i++) {
        short_s += s[i];
        if (i >= acceptable_shortness && stop_chars.indexOf(s[i]) >= 0) {
            break;
        }
    }
    if (reverse) { return short_s.split("").reverse().join(""); }
    return short_s;
}

export const validatePassword = (password: string): boolean => {
    if (password.length < 8) return false

    const regexMayuscula = /[A-Z]/
    const regexMinuscula = /[a-z]/
    const regexNumero = /[0-9]/
    const regexSimbolo = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/

    if (
        !regexMayuscula.test(password) ||
        !regexMinuscula.test(password) ||
        !regexNumero.test(password) ||
        !regexSimbolo.test(password)
    ) {
        return false
    }

    return true
}

export const formatBreadcrumbText = (text: string): string => {
    const formattedText = text.replace(/[-_]/g, ' ');
    return formattedText.replace(/\b\w/g, (char) => char.toUpperCase());
}

export const shortenString = (inputString: string, length = 8): string => {
    return inputString.substring(0, length) + "...";
}

export const capitalize = (text: string): string => {
    return `${text[0].toUpperCase()}${text.substring(1)}`
}

export const maskEmail = (email: string): string => {
    const maskedEmail = email.replace(/[^@]*(?=@)/g, '*****');
    return maskedEmail;
}

export const generateUUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
