import React from "react";
import "./Fresh.css";
import { FaRegHeart } from "react-icons/fa";

const Fresh = () => {
    return (
        <div className="main-box">
            <div className="fresh-title">Fresh recommendations</div>
            <div className="boxes">
            <div className="makhmalabad-box">
                <div className="room-img">
                    <img src="https://lh3.googleusercontent.com/U8VZuarxe1TFCV9eOe8_JfgOlnI89TkpNC91MmSwgziVOlXlqfQkNguoDz7IU-u4zdL09Wop9mpzq9DxkEVKg6zWfGMJ9MI=s1600"></img>
                    <div className="like-icons1"><FaRegHeart /></div>
                    <div className="feature">FEATURED</div>
                    <div className="price">₹ 14,500</div>
                    <div className="bds">2 Bds - 2 Ba - 900 ft2</div>
                    <div className="nashik">Makhmalabad, nashik 422004</div>
                    <div className="day">
                        <div className="gadthan">MAKHAMALABAD GADTHAN NASHIK</div>
                        <div className="days">3 DAYS AGO</div>
                    </div>
                </div>
            </div>
            <div className="stringwheel-box">
                <div className="wheel-img">
                    <img src="https://cdn11.bigcommerce.com/s-5or0xc2x/images/stencil/1280x1280/products/15736/49407/$(KGrHqJ_!joE9UbgeycIBPZgT1C!jQ~~60_59__05693.1537401776.jpg?c=2"></img>
                    <div className="like-icons2"><FaRegHeart /></div>
                    <div className="featured">FEATURED</div>
                    <div className="prices">₹ 2,500</div>
                    <div className="willys">Willys streing wheel jeep spare parts</div>
                    <div className="day">
                        <div className="marathwada">MARATHWADA CHOWK, BALAPUR HIN...</div>
                        <div className="date">JAN 27</div>
                    </div>
                </div>
            </div>
            <div className="bluetooth-box">
                <div className="bluetooth-img">
                    <img src="https://www.ninesmw.com/cdn/shop/products/Nines_29234_1024x1024.jpg?v=1698970631"></img>
                    <div className="like-icons3"><FaRegHeart /></div>
                    <div className="prices">₹ 349</div>
                    <div className="all">All type Of brand new Bluetooth speaker...</div>
                    <div className="day">
                        <div className="marathwada">SAMUDRAPUR, MAHARASHTRA</div>
                        <div className="date">2 DAYS AGO</div>
                    </div>
                </div>
            </div>
            <div className="samsung-box">
                <div className="samsung-img">
                    <img src="https://technukti.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra-camera-upgrades-revealed.jpeg"></img>
                    <div className="like-icons4"><FaRegHeart /></div>
                    <div className="prices">₹ 30,000</div>
                    <div className="all">Selling my 6 months old Samsung need...</div>
                    <div className="day">
                        <div className="marathwada">SAMUDRAPUR MIDC, MAHARASHTRA</div>
                        <div className="date">5 DAYS AGO</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Fresh;