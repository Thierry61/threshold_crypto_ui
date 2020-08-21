// Encoding conversions

// modified from https://stackoverflow.com/a/11058858
export function asciiToUint8Array(a) {
    let b = new Uint8Array(a.length);
    for (let i=0; i<a.length; i++) {
        b[i] = a.charCodeAt(i);
    }
    return b;
}
// https://stackoverflow.com/a/19102224
// TODO resolve RangeError possibility here, see SO comments
export function uint8ArrayToAscii(a) {
    return String.fromCharCode.apply(null, a);
}
// https://stackoverflow.com/a/50868276
export function hexToUint8Array(h) {
    return new Uint8Array(h.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}
export function uint8ArrayToHex(a) {
    return a.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
}
// https://stackoverflow.com/a/12713326
export function uint8ArrayToBase64(a) {
    return btoa(String.fromCharCode.apply(null, a));
}
export function base64ToUint8Array(b) {
    return new Uint8Array(atob(b).split("").map(function(c) {
            return c.charCodeAt(0);
    }));
}
