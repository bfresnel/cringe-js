import clipboard from 'clipboardy';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

let bite = 'Change le terme en cringeMode : '
let cringe = '';

rl.question('Change le terme en cringeMode : ', (answer) => {
    formatToCringeMode(answer, true);
    rl.close();
});

function formatToCringeMode(texteToFormat, clipboardLocal){
    let compteur = 0;
    for (let index = 0; index < texteToFormat.length; index++) {
        const element = texteToFormat[index];
        const random = Math.random();
        if (random >= 0.5 || compteur >= 2){
            cringe = cringe + element.toUpperCase();
            compteur = 0;
        } else {
            cringe = cringe + element.toLowerCase();
            compteur++;
        }
    }

    if (clipboardLocal){
        clipboard.writeSync(cringe);
    }
    
    return cringe;
}