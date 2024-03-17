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
        const 
            kita = +ch.gatr("kita") || 4,
            ayrac = ch.gatr("ayrac") || "***",
            baslik = ch.gatr("baslik") || "";
        let text = ch.get("textContent");
        v.text = ["", ...text.split(/\n/g).filter(Boolean), ""].map(d => d.trim())
        .reduce((ac,d,i) => {
            ac.push(d);
            !(i % kita) && ac.push(ayrac);
            return ac;
        }, []).join("\n");
        v.baslik = baslik;
    }}
    >> textContent ${""}
    +-> div:${ch.div}
    style ${[
        ["width", "auto"],
        ["padding", "1rem"],
        ["border-image", "url(static/img/ahid-siir/border.png) 20% 20% / 2rem 2rem / 2rem 2rem round"]
    ]}
    +-> ${ch.span} +-> ${ch.strong}
    => ${({values:v}) => () => {
        ch.set("textContent", v.baslik);
    }}
    => ${({values:v}) => () => {
        ch(v.div)`+> ${ch.dom`<span>${v.text}</span>`}`
    }}
    `
}

export const render = siir;