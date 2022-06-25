if ((age > 65 || age < 21) && res === "U.S.") {
	return true
}

if (age > 65 || (age < 21 && res === "U.S.")) {
	reurn false
}