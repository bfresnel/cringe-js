function formatToCringeMode(textToCringify) {
    let result = "";

    // for each letter of the written text
    for (let letter of textToCringify) {
        const random = Math.random();
        random >= 0.5
            ? (result += letter.toUpperCase())
            : (result += letter.toLowerCase());
    }

    return result;
}
