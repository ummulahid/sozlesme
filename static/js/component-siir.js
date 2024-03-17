function siir({name, attrs, styles, props, data, el}){
    ch`
    -> ${el}
    style ${[
        ["display", "flex"],
        ["margin", "auto"],
        ["justify-content", "center"],
        ["align-items", "center"],
        ["padding", "2rem"],
        ["white-space", "pre"],
        ["text-align", "center"],
        ["transition", "all 1s ease"]
    ]}
    => ${({values:v}) => () => {
        const kita = ch.gatr("kita") || 4;
        let text = ch.get("textContent");
        v.text = ["", ...text.split(/\n/g).filter(Boolean), ""].map(d => d.trim())
        .reduce((ac,d,i) => {
            ac.push(d);
            !(i % kita) && ac.push("");
            return ac;
        }, []).join("\n");
    }}
    +-> ${ch.div}
    style ${[
        ["width", "auto"],
        ["padding", "1rem"],
        ["border-image", "url(static/img/ahid-siir/border.png) 20% 20% / 2rem 2rem / 2rem 2rem round"]
    ]}
    >> textContent ${({values:v}) => v.text}
    `
}

export const render = siir;