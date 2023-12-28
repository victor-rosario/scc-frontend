export const formatPagination = (offset: number, total: number, limit: number): Array<number> => {
    const ceil = Math.ceil(limit / 2);
    const last = offset >= total - ceil;
    const calcLastInitial = last ? total - limit : offset - ceil + 1;
    const calcLastIterator = last ? total : offset + ceil;
    let btn = [];

    if (offset < ceil) {
        for (let i = 0; i < limit; i++) {
            if (i < total) btn.push(i);
        }
    } else {
        for (let i = calcLastInitial < 0 ? 0 : calcLastInitial; i < calcLastIterator; i++) {
            if (i < total) btn.push(i);
        }
    }

    return btn;
};
