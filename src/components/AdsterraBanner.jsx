import { useEffect } from "react";

const AdsterraBanner = () => {
    useEffect(() => {
        const script1 = document.createElement("script");
        script1.type = "text/javascript";
        script1.innerHTML = `
      atOptions = {
        'key' : '2115ef708cf78fb981ab4318270bbc67',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;

        const script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src =
            "//esteemfurytooth.com/2115ef708cf78fb981ab4318270bbc67/invoke.js";
        script2.async = true;

        const container = document.getElementById("adsterra-banner-top");

        if (container && !container.hasChildNodes()) {
            container.appendChild(script1);
            container.appendChild(script2);
        }
    }, []);

    return (
        <div
            id="adsterra-banner-top"
            style={{
                width: "100%",
                textAlign: "center",
                margin: "10px 0",
                overflow: "hidden",
            }}
        ></div>
    );
};

export default AdsterraBanner;
