function siir({name, attrs, styles, props, data, el}){
    ch`
    -> ${el}
    style ${[
        ["display", "block"],
        ["width", `100%`],
        ["padding", "0.5rem"],
        ["white-space", "pre"],
        ["text-align", "center"],
        ["transition", "all 1s ease"]
    ]}
    => ${() => () => {
        const kita = ch.gatr("kita") || 4;
        let text = ch.get("textContent");
        text = ["", ...text.split(/\n/g).filter(Boolean)].map(d => d.trim())
        .reduce((ac,d,i) => {
            ac.push(d);
            !(i % kita) && ac.push("");
            return ac;
        }, []).join("\n");
        ch.set("textContent", text);
    }}
    `
}

export const render = siir;