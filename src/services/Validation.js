function hasValue(val) {
    if(!String(val).trim) {
        return false;
    }
    return true;
}

function isValidNumber(value) {
	return /^[\d,\s]+$/.test(value);
}

function isValidEmail(value) {
	if (!value) {
		return true;
	}
	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
}

export default {
    hasValue,
    isValidNumber,
    isValidEmail
}