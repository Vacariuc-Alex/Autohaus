export const deepCopy = (obj) => {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = deepCopy(obj[key]);
        }
    }
    return newObj;
}
