export * from './util'

export function isHexColor(str: string): boolean {
    let formattedString = str[0] !== '#' ? str : "#" + str;
    let reg = /^#[0-9A-F]{6}$/i;

    return reg.test(formattedString);
}

export function setColor(colorInput: string): void {
    switch (isHexColor(colorInput)) {
        case true:
            document.body.style.backgroundColor = colorInput;
            break;
        default:
            console.error("Input not recognized as hex color");
            break;
    }
}