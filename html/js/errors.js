let ErrorDisplay = function(selector) {

    let el = document.querySelectorAll(selector)[0];

    this.show = function(msg) {
        el.textContent = msg;
        el.classList.remove("hidden");
    }

    this.hide = function() {
        el.classList.add("hidden");
    }

};

export function skErrMsg(size, skLen) {
    let errMsg = "Secret Key length must be ";
    errMsg += (skLen * 2).toString();
    errMsg += " hex chars, ";
    errMsg += size.toString();
    errMsg += " provided.";
    return errMsg;
}

export function pkErrMsg(size, pkLen) {
    let errMsg = "Public Key length must be ";
    errMsg += (pkLen * 2).toString();
    errMsg += " hex chars, ";
    errMsg += size.toString();
    errMsg += " provided.";
    return errMsg;
}

export function sigErrMsg(size, sigLen) {
    let errMsg = "Signature length must be ";
    errMsg += (sigLen * 2).toString();
    errMsg += " hex chars, ";
    errMsg += size.toString();
    errMsg += " provided.";
    return errMsg;
}

export function msgErrMsg(size) {
    let errMsg = "Message length must be ";
    errMsg += (maxMsgLen).toString();
    errMsg += " chars, ";
    errMsg += size.toString();
    errMsg += " provided.";
    return errMsg;
}

export function ctErrMsg(size) {
    let errMsg = "Ciphertext length must be ";
    errMsg += (ctLen * 2).toString();
    errMsg += " hex chars, ";
    errMsg += size.toString();
    errMsg += " provided.";
    return errMsg;
}

export let deriveError = new ErrorDisplay("#sk-to-pk .error");
export let signError = new ErrorDisplay("#sign-msg .error");
export let verifyError = new ErrorDisplay("#verify .error");
export let encryptError = new ErrorDisplay("#encrypt .error");
export let decryptError = new ErrorDisplay("#decrypt .error");
