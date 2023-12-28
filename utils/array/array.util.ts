export function insertByCondition(condition: boolean, ...elements: Array<any>): any[] {
    return condition ? elements : [];
}