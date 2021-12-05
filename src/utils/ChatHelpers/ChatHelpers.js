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

export const getIsAlreadyAsked = (prevFormulations, formulationQstId) => prevFormulations
    .reduce((acc, { questionId }) => {
        if (questionId === formulationQstId) {
            acc = true;
        }

        return acc;
    },
false);
