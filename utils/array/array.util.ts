export function insertByCondition(condition: boolean, ...elements: Array<any>): any[] {
    return condition ? elements : [];
}

export const convertArrayToObject = (arr: Array<any>): any => {
    return arr.reduce((result, item) => {
        return { ...result, ...item };
    }, {});
}