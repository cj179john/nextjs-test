export const convertArrayToString = (arr: string[]) =>
    arr.reduce((result, day, idx) => {
        const suffix = idx < arr.length - 1 ?  ', ' : '';
        return  result + day + suffix;
    }, '')