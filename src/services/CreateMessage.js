import errorMsg from '../constants/Errors';

export function ErrorMessage(name, type) {
    return `${name} ${errorMsg[type]}`;
}