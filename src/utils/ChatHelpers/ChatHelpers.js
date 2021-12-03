export const getNextActiveQstId = (activeId, qstsArr) => {
    return qstsArr.reduce((acc, { id }, i) => {
        if (id === activeId) {
            const nextQst = qstsArr[i + 1];

            if (nextQst) {
                acc = nextQst.id;
            }
        }

        return acc;
    }, '');
}