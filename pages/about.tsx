import payload from "payload";
import { RichTextCustomElement } from "payload/types";
import React from "react";
import { kasei } from "../components/Layout/Layout";
import RichText from "../components/RichText";
import { File } from "../utilities/types";

interface About {
  imageAbout: File;
  sentenceAbout: String;
  contentAbout: RichTextCustomElement;
}

interface Props {
  infos: About;
}

const About: React.FC<Props> = ({ infos }) => {
  console.log(infos.imageAbout);

  return (
    <div className="page_about__container container--medium">
      <div className="about__hero-bannier">
        <img src={infos.imageAbout.url} alt="" />
      </div>
      <div className="about__text-container">
        <div className="about__text-content about__text-content_1">
          <div className="about__catch-phrase">
            <h2 className={`phrase ${kasei.className}`}>
              {infos.sentenceAbout}
            </h2>
          </div>
          <div className="about__button-container">
            <div className="about__button about__button--work">
              <button>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.92046 8.70136C2.62864 11.4127 2.64165 14.5398 3.04772 17.2401C3.2724 18.7343 4.49185 19.8797 5.99713 20.0106L7.57029 20.1473C10.8505 20.4325 14.1494 20.4325 17.4296 20.1473L19.0028 20.0106C20.5081 19.8797 21.7275 18.7343 21.9522 17.2401C22.3583 14.5398 22.3713 11.4129 22.0795 8.70152C22.0417 8.38719 21.9993 8.07328 21.9522 7.75989C21.7275 6.26574 20.5081 5.12027 19.0028 4.98942L17.4296 4.85267C14.1494 4.56752 10.8505 4.56752 7.57029 4.85267L5.99713 4.98942C4.49185 5.12027 3.2724 6.26574 3.04772 7.75989C3.0006 8.07322 2.95818 8.38708 2.92046 8.70136ZM7.7056 6.4093C10.8958 6.13198 14.1041 6.13198 17.2943 6.4093L18.8675 6.54605C19.6532 6.61436 20.2898 7.21229 20.4071 7.99224C20.4192 8.07324 20.4311 8.15427 20.4426 8.23534L14.6499 11.4535C13.3128 12.1963 11.687 12.1963 10.3499 11.4535L4.55729 8.23538C4.56881 8.1543 4.58066 8.07325 4.59284 7.99224C4.71013 7.21229 5.34668 6.61436 6.13244 6.54605L7.7056 6.4093ZM20.6338 9.91656C20.8359 12.2788 20.7603 14.6589 20.4071 17.0078C20.2898 17.7877 19.6532 18.3857 18.8675 18.454L17.2943 18.5907C14.1041 18.868 10.8958 18.868 7.7056 18.5907L6.13244 18.454C5.34668 18.3857 4.71013 17.7877 4.59284 17.0078C4.23962 14.6589 4.16404 12.2788 4.36609 9.9166L9.59111 12.8194C11.4001 13.8244 13.5997 13.8244 15.4087 12.8194L20.6338 9.91656Z"
                    fill="black"
                  />
                </svg>
              </button>
              <p className={kasei.className}>Work</p>
            </div>
            <div className="about__button about__button--contact">
              <button>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.92046 8.70136C2.62864 11.4127 2.64165 14.5398 3.04772 17.2401C3.2724 18.7343 4.49185 19.8797 5.99713 20.0106L7.57029 20.1473C10.8505 20.4325 14.1494 20.4325 17.4296 20.1473L19.0028 20.0106C20.5081 19.8797 21.7275 18.7343 21.9522 17.2401C22.3583 14.5398 22.3713 11.4129 22.0795 8.70152C22.0417 8.38719 21.9993 8.07328 21.9522 7.75989C21.7275 6.26574 20.5081 5.12027 19.0028 4.98942L17.4296 4.85267C14.1494 4.56752 10.8505 4.56752 7.57029 4.85267L5.99713 4.98942C4.49185 5.12027 3.2724 6.26574 3.04772 7.75989C3.0006 8.07322 2.95818 8.38708 2.92046 8.70136ZM7.7056 6.4093C10.8958 6.13198 14.1041 6.13198 17.2943 6.4093L18.8675 6.54605C19.6532 6.61436 20.2898 7.21229 20.4071 7.99224C20.4192 8.07324 20.4311 8.15427 20.4426 8.23534L14.6499 11.4535C13.3128 12.1963 11.687 12.1963 10.3499 11.4535L4.55729 8.23538C4.56881 8.1543 4.58066 8.07325 4.59284 7.99224C4.71013 7.21229 5.34668 6.61436 6.13244 6.54605L7.7056 6.4093ZM20.6338 9.91656C20.8359 12.2788 20.7603 14.6589 20.4071 17.0078C20.2898 17.7877 19.6532 18.3857 18.8675 18.454L17.2943 18.5907C14.1041 18.868 10.8958 18.868 7.7056 18.5907L6.13244 18.454C5.34668 18.3857 4.71013 17.7877 4.59284 17.0078C4.23962 14.6589 4.16404 12.2788 4.36609 9.9166L9.59111 12.8194C11.4001 13.8244 13.5997 13.8244 15.4087 12.8194L20.6338 9.91656Z"
                    fill="black"
                  />
                </svg>
              </button>
              <p className={kasei.className}>Contact</p>
            </div>
          </div>
        </div>
        <div className="about__text-content about__text-content_2">
          <RichText
            className={`about__description ${kasei.className}`}
            content={infos.contentAbout}
          />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { about } = await payload.findGlobal({
    slug: "infos",
  });

  return {
    props: {
      infos: about,
    },
  };
}

export default About;
