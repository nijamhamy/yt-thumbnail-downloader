import { useEffect } from "react";

const AdsterraNative = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.setAttribute("data-cfasync", "false");
        script.src =
            "//esteemfurytooth.com/326953bea12822236f7d8c3fa93d2af6/invoke.js";

        const container = document.getElementById(
            "container-326953bea12822236f7d8c3fa93d2af6"
        );

        if (container && !container.hasChildNodes()) {
            container.appendChild(script);
        }
    }, []);

    return (
        <div
            id="container-326953bea12822236f7d8c3fa93d2af6"
            style={{ width: "100%", margin: "20px 0", textAlign: "center" }}
        ></div>
    );
};

export default AdsterraNative;
