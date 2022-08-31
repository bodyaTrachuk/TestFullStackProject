import React from "react";
import "./Footer.css";
import { ReactComponent as FooterLogo } from "./footerImg/logo-dark.svg";
import AppStote from "./footerImg/app-store.png";
import GooglePlay from "./footerImg/google-play.png";
import { ReactComponent as DevLogo } from "./footerImg/REDSTONE_logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footerItem">
        <div className="footerLogo">
          <a href="##">
            <FooterLogo />
          </a>
        </div>

        <div className="adress">
          <p>м. Львів</p>
          <ul className="adressList">
            <li>
              <a href="##">Боткіна, 36</a>
            </li>
            <li>
              <a href="##">Героїв УПА, 73</a>
            </li>
            <li>
              <a href="##">Героїв УПА, 73</a>
            </li>
            <li>
              <a href="##">Січових Стрільців, 10</a>
            </li>
            <li>
              <a href="##">Торф'яна, 10</a>
            </li>
            <li>
              <a href="##">Хуторівка, 59б</a>
            </li>
            <li>
              <a href="##">Шевченка, 60</a>
            </li>
          </ul>
        </div>

        <div className="telephone">
          <a href="$$" className="numbers" >097 440 40 60</a>
          <div className="mobApp">
            <p>Завантажуй мобільний додаток</p>
            <div className="img">
              <a href="##">
                <img src={AppStote} alt="" />
              </a>
              <a href="##">
                <img src={GooglePlay} alt="" />
              </a>
            </div>
          </div>
          <div className="dev">
            <p>Розробка сайтів</p>
            <DevLogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
