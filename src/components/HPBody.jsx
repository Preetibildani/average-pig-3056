import React from "react";
import styles from "./hbody.module.css"
const HPBody = () => {
return(
    <>
    <div className={styles.Card_Img}>
        <img src="https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg" alt="" />
        <div>
            <h1>Save instantly with Expedia Rewards</h1>
            <p>You can enjoy access to perks like Member Prices, saving an average of 15% on thousands of hotels. Terms may apply.</p>
            <button>View Member Prices</button>
        </div>
    </div>

    <div className={styles.HpBody}>
            <img src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg" alt=""  />
        <div className={styles.firstDiv}>
            <h1>Go further with the Expedia app</h1>
            <p>Save even more - Get up to 20% on select
                 hotels and earn double the points when you 
                 book on the app. Our app deals help you to 
                 save on trips so you can travel more and 
                 managing it all on the go.</p>
            <button>Get the App</button>
        </div>
        <div>
            <img src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/BEX-HP-CONTROL-27.png" alt="" />
            <p>Scan the QR code</p>
        </div>
    </div>
    </>);
}
export default HPBody;