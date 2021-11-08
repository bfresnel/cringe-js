//import clipboard from 'clipboardy';

function formatToCringeMode(inputIDToCringify) {
    let cringeLocal = '';
    let cringifyAreaText = document.getElementById(inputIDToCringify).value;
    let cringifiedText = document.getElementById('cringifiedText');
    console.log({ cringifyAreaText });
    console.log({ cringifiedText });
    let compteur = 0;
    for (let index = 0; index < cringifyAreaText.length; index++) {
        const element = cringifyAreaText[index];
        const random = Math.random();
        if (random >= 0.5 || compteur >= 2) {
            cringeLocal = cringeLocal + element.toUpperCase();
            compteur = 0;
        } else {
            cringeLocal = cringeLocal + element.toLowerCase();
            compteur++;
        }
    }

    // if (clipboardLocal) {
    //     clipboard.writeSync(cringe);
    // }

    cringifiedText.value = cringeLocal;
}