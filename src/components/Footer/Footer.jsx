import Gstore from "../../assets/icons/playstore.png";
import Appstore from "../../assets/icons/appstore.png";
import Logo from "../../assets/images/zomatoLogo.avif";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";
import Linkedin from "../../assets/images/linkedin.png";
import Youtube from "../../assets/images/youtube.png";
import footerCss from "../Style/Footer.module.css";

let Footer = () => {
  return (
    <div className={footerCss.footer}>
      <div className={footerCss.innerFooter}>
        <div className={footerCss.sec1}>
          <div className={footerCss.logoBox}>
            <img
              src={Logo}
              alt="Zomato Logo"
              className={footerCss.hero__section_logo}
            />
          </div>
          <div className={footerCss.filters}>
            <div className="section1__buttonContainer">
              <button>
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="Indian Flag"
                  style={{ width: "17px" }}
                />
                India
              </button>
              <button>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Globe_icon_2.svg/1200px-Globe_icon_2.svg.png"
                  alt="Select Language"
                  style={{ width: "17px" }}
                />
                English
              </button>
            </div>
          </div>
        </div>
        <div className={footerCss.sec2}>
          <div className={[footerCss.box1, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>ABOUT ZOMATO</div>
            <a href="" className={footerCss.boxOpt}>
              Who We Are
            </a>
            <a href="" className={footerCss.boxOpt}>
              Blog
            </a>
            <a href="" className={footerCss.boxOpt}>
              Work With Us
            </a>
            <a href="" className={footerCss.boxOpt}>
              Investor Relations
            </a>
            <a href="" className={footerCss.boxOpt}>
              Report Fraud
            </a>
          </div>
          <div className={[footerCss.box2, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>ZOMAVERSE</div>
            <a href="" className={footerCss.boxOpt}>
              Zomato
            </a>
            <a href="" className={footerCss.boxOpt}>
              Feeding India
            </a>
            <a href="" className={footerCss.boxOpt}>
              Hyperpure
            </a>
            <a href="" className={footerCss.boxOpt}>
              Zomaland
            </a>
          </div>
          <div className={[footerCss.box3, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>FOR RESTAURANTS</div>
            <a href="" className={footerCss.boxOpt}>
              Partner With Us
            </a>
            <a href="" className={footerCss.boxOpt}>
              Apps For You
            </a>

            <div className={footerCss.boxTtl}>FOR ENTERPRISES</div>
            <a href="" className={footerCss.boxOpt}>
              Zomato For Work
            </a>
          </div>
          <div className={[footerCss.box4, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>LEARN MORE</div>
            <a href="" className={footerCss.boxOpt}>
              Privacy
            </a>
            <a href="" className={footerCss.boxOpt}>
              Security
            </a>
            <a href="" className={footerCss.boxOpt}>
              Terms
            </a>
            <a href="" className={footerCss.boxOpt}>
              Sitemap
            </a>
          </div>
          <div className={[footerCss.box5, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>SOCIAL LINKS</div>
            <div className={footerCss.socialImgs}>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Facebook}
                  alt="linkedin"
                />
              </a>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Linkedin}
                  alt="instagram"
                />
              </a>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Instagram}
                  alt="facebook"
                />
              </a>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Twitter}
                  alt="twitter"
                />
              </a>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Youtube}
                  alt="youtube"
                />
              </a>
            </div>
            <a href="" className={footerCss.app}>
              <img
                className={footerCss.appImg}
                src={Gstore}
                alt="google play store"
              />
            </a>
            <a href="" className={footerCss.app}>
              <img
                className={footerCss.appImg}
                src={Appstore}
                alt="apple app store"
              />
            </a>
          </div>
        </div>
        <hr className={footerCss.breakLine} />
        <div className={footerCss.sec3}>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
