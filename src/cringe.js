function formatToCringeMode(inputIDToCringify) {
    let cringifiedText = '';
    let textToCringify = document.getElementById(inputIDToCringify).value;
    let inputCringifiedText = document.getElementById('cringifiedText');

    // for each letter of the written text
    for (let letter of textToCringify) {
        const random = Math.random();
        if (random >= 0.5 || compteur >= 2) {
            cringifiedText = cringifiedText + letter.toUpperCase();
        } else {
            cringifiedText = cringifiedText + letter.toLowerCase();
        }
    }

    inputCringifiedText.value = cringifiedText;
}
