export const getId = (length, id) => !id ? length.toString() : `${length}${id.toLowerCase()}`;