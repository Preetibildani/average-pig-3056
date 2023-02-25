import React from "react";
import styles from "./hbody.module.css"
import { Input } from "@chakra-ui/react";
const HPBody = () => {
return(
    <>
    <div className={styles.Card_Img}>
        <img src="" alt="" />
        <div className={styles.card_para} >
            <h1>Top bucket list<br></br> trips</h1>
            <p>From the Amalfi Coast to Patagonia, make 2023 your best travel year, and save more as a member.</p>
            <button>See the list</button>
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
                 <br></br>
                 <h2 >Text yourself a download link for easy access</h2>
           
                 <Input marginRight={"20px"} height={"60px"} fontSize={"14px"} width={"28%"} placeholder="Phone Number" />
                 <select marginRight={"20px"} height={"60px"} >
                 <option value="">Country code </option>
                 <option value=""> USA+1</option>
                 </select>
    
            <button marginRight={"-30px"} >Get the App</button>
            <p fontSize={"16px"} >Get a link to download the app in the Apple App Store or Google Play Store. 1 message per request. Message and data rates may apply. Text HELP for help or STOP to unsubscribe. Review the App Download SMS terms at www.expedia.com/app. For privacy, please go to www.expedia.com/lp/lg-privacypolicy.</p>
        </div>
        <div className={styles.image_con_qr} >
            <img className={styles.Qr_code} 
            src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/BEX-HP-CONTROL-27.png" 
            alt="" />
            <p>Scan the QR code</p>
        </div>
    </div>
    </>);
}
export default HPBody;