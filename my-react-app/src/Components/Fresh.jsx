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
                </div>
            </div>
            <div className="bluetooth-box"></div>
            <div className="samsung-box"></div>
            </div>
        </div>
    );
};

export default Fresh;