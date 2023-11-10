import { DateTime } from 'luxon';

export * from './util'

/// Hex Color functions
export function isHexColor(str: string): boolean
{
    let reg = /^#[0-9A-F]{6}$/i;
    return reg.test(str);
}

export function setColor(colorInput: string): void
{
    switch (isHexColor(colorInput))
    {
        case true:
            document.body.style.backgroundColor = colorInput;
            break;
        default:
            console.error("Input not recognized as hex color");
            break;
    }
}

export function formatHexColor(str: string): string
{
    return str[0] !== '#' ? `#${str}` : str;
}

export function formatShortDate(e: Date | string): string
{
    return DateTime.fromJSDate(new Date(e)).toLocaleString({ month: "short", year: "numeric" })
}

export function formatShortDateRange(start: Date|string, end: Date|string): string
{
    return `${formatShortDate(start)} - ${formatShortDate(end)}`
}