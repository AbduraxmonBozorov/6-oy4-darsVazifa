import React, { useRef, useState } from 'react';
import styles from "./index.module.css";
import logo from "../../assets/images/logo.svg";
import earth from "../../assets/images/earth.svg";
import instagram from "../../assets/images/instagram.svg";
import telegram from "../../assets/images/telegram.svg";
import facebook from "../../assets/images/facebook.svg";
import github from "../../assets/images/github.svg";

function Main(props) {

    const nameRef = useRef();
    const emailRef = useRef();
    const telRef = useRef();
    const telKodRef = useRef();
    const davlatRef = useRef();
    const shaharRef = useRef();
    const manzilRef = useRef();
    const soniRef = useRef();
    const izohRef = useRef();

    const [errors, setErrors] = useState({});

    function uploadFile() {
        props.modal.setOpen(!props.modal.open)
    }

    function getData(){
        let data=[];
        if(localStorage.getItem("data")){
            data=JSON.parse(localStorage.getItem("data"));
        }

        return data;
    }

    function validate() {
        const errors = {};
        if (!nameRef.current.value) {
            errors.name = "Kompaniya nomi majburiy";
        }
        if (!emailRef.current.value || !/\S+@\S+\.\S+/.test(emailRef.current.value)) {
            errors.email = "Email majburiy va to'g'ri formatda bo'lishi kerak";
        }
        if (!telRef.current.value || !telKodRef.current.value) {
            errors.tel = "Telefon raqami va kod majburiy";
        }
        if (!davlatRef.current.value) {
            errors.davlat = "Davlat majburiy";
        }
        if (!shaharRef.current.value) {
            errors.shahar = "Shahar majburiy";
        }
        if (!manzilRef.current.value) {
            errors.manzil = "Yashash joyi majburiy";
        }
        if (!soniRef.current.value) {
            errors.soni = "Hodimlar soni majburiy";
        }
        if (!izohRef.current.value) {
            errors.izoh = "Izoh majburiy";
        }

        setErrors(errors);
        
        if (Object.keys(errors).length === 0) {
            const data = {
                companyName: nameRef.current.value,
                email: emailRef.current.value,
                tel: `${telKodRef.current.value} ${telRef.current.value}`,
                davlat: davlatRef.current.value,
                shahar: shaharRef.current.value,
                manzil: manzilRef.current.value,
                soni: soniRef.current.value,
                izoh: izohRef.current.value
            };

            let data1=getData();
            
            localStorage.setItem("data", JSON.stringify(data));
            alert("Ma'lumotlar saqlandi!");
        }
    }

    return (
        <>
            <main>
                <div className={styles.container}>
                    <div className={styles.aboutCompany}>
                        <h1>Kompaniya ma'lumotlari</h1>
                        <p>Kompaniya haqidagi ma'lumotlarni kiriting</p>
                    </div>
                    <form>
                        <div className={styles.uploadFile}>
                            <label htmlFor="fileUpload" onClick={uploadFile} className={styles["custom-file-label"]}>Yuklash</label> 
                        </div>
                        <div className={styles.companyName}>
                            <label className={styles.formLabel} htmlFor="companyName">Kompaniya nomi</label>
                            <span className={styles.formSpan}>*</span>
                            <br/>
                            <input className={styles["form-input"]} type="text" name="companyName" id="companyName" ref={nameRef} placeholder="Kompaniya nomi" />
                            {errors.name && <span className={styles.error}>{errors.name}</span>}
                        </div>

                        <div className={styles.companyEmail}>
                            <label className={styles["form-label"]} htmlFor="email">Email</label>
                            <span className={styles["form-span"]}>*</span>
                            <br />
                            <input className={styles["form-input"]} type="text" name="email" id="email" ref={emailRef} placeholder="Email" />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>

                        <div className={styles.companyTel}>
                            <label className={styles["form-label"]} htmlFor="tel">Telefon raqami</label>
                            <span className={styles["form-span"]}>*</span>
                            <br />
                            <div className={styles.tel}>
                                <select className={styles["form-select"]} name="telKod" id="telKod" ref={telKodRef}>
                                    <option value="+998">UZ +998</option>
                                    <option value="+7">RUS +7</option>
                                    <option value="+125">USA +125</option>
                                </select>
                                <input className={styles["form-input"]} type="tel" name="tel" id="tel" ref={telRef} placeholder="90 123-45-67" pattern="[0-9]{2}[0-9]{3}-[0-9]{2}-[0-9]{2}" />
                            </div>
                            {errors.tel && <span className={styles.error}>{errors.tel}</span>}
                        </div>

                        <div className={styles.companyLinks}>
                            <label htmlFor="link" className={styles["form-label"]}>Linklar</label>
                            <span className={styles["form-span"]}>*</span>
                            <div className={styles.links}>
                                <img className={styles.icons} src={earth} alt="" />
                                <img className={styles.icons} src={instagram} alt="" />
                                <img className={styles.icons} src={telegram} alt="" />
                                <img className={styles.icons} src={facebook} alt="" />
                                <img className={styles.icons} src={github} alt="" />
                            </div>
                        </div>

                        <div className={styles.companyCountry}>
                            <div className={styles.davlat}>
                                <label className={styles["form-label"]} htmlFor="country">Davlat</label>
                                <span className={styles["form-span"]}>*</span>
                                <br />
                                <select className={styles["form-select"]} name="davlat" id="davlat" ref={davlatRef}>
                                    <option value="">Davlat</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Kazakistan">Kazakistan</option>
                                    <option value="Russian">Russian</option>
                                </select>
                                {errors.davlat && <span className={styles.error}>{errors.davlat}</span>}
                            </div>
                            <div className={styles.shahar}>
                                <label className={styles["form-label"]} htmlFor="country">Shahar</label>
                                <span className={styles["form-span"]}>*</span>
                                <br />
                                <select className={styles["form-select"]} name="shahar" id="shahar" ref={shaharRef}>
                                    <option value="">Shahar</option>
                                    <option value="Tashkent">Tashkent</option>
                                    <option value="Astana">Astana</option>
                                    <option value="Moskva">Moskva</option>
                                </select>
                                {errors.shahar && <span className={styles.error}>{errors.shahar}</span>}
                            </div>
                        </div>

                        <div className={styles.companyManzil}>
                            <label className={styles["form-label"]} htmlFor="manzil">Yashash joyi</label>
                            <span className={styles["form-span"]}>*</span>
                            <input type="text" className={styles["form-input"]} name="manzil" id="manzil" ref={manzilRef} placeholder="Joy" />
                            {errors.manzil && <span className={styles.error}>{errors.manzil}</span>}
                        </div>

                        <div className={styles.employeesCount}>
                            <label className={styles["form-label"]} htmlFor="soni">Hodimlar soni</label>
                            <span className={styles["form-span"]}>*</span>
                            <select className={styles["form-select"]} name="soni" id="soni" ref={soniRef}>
                                <option value="">Hodimlar soni</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                                <option value="35">35</option>
                            </select>
                            {errors.soni && <span className={styles.error}>{errors.soni}</span>}
                        </div>

                        <div className={styles.describtion}>
                            <label className={styles["form-label"]} htmlFor="izoh">Izoh</label>
                            <span className={styles["form-span"]}>*</span>
                            <textarea className={styles["form-input"]} name="izoh" id="izoh" ref={izohRef} cols="30" rows="10" placeholder="Kompaniya haqida izoh qoldiring"></textarea>
                            {errors.izoh && <span className={styles.error}>{errors.izoh}</span>}
                        </div>

                        <div className={styles.btns}>
                            <button type="button">ORTGA</button>
                            <button onClick={validate} type="button">KEYINGISI</button>
                        </div>

                    </form>
                </div>
            </main>
        </>
    );
}

export default Main;
