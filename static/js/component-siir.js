function siir({name, attrs, styles, props, data, el, proto}){
    if (!el.baslatildi){
        ch(document.head)`
        +> ${ch.dom`
            <style data-for="ahid-siir">
                ahid-siir div:after {
                    display: block;
                    position: absolute;
                    inset:0;
                    pointer-events: none;
                    content: '';
                    opacity: 0.9;
                    transition: opacity 1s ease;
                    z-index: -1;
                    border-image: url(static/img/ahid-siir/border.png) 20% 20% / 2rem 2rem / 2rem 2rem round;
                }
                :root[data-theme="dark"] ahid-siir div:after {
                    opacity: 0.4;
                }
            </style>
        `}`
        proto.baslatildi = true;
    }
    ch`
    -> ${el}
    style ${[
        ["display", "flex"],
        ["position", "relative"],
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
        ["position", "relative"]
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