import type { NextPage } from "next";
import { TwitterShareButton, TwitterIcon } from "react-share";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import omake from "../images/2022omake.png";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      年賀状謎2022クリア <p>＆</p>
      新年あけましておめでとうございます！！！！！
      <span className={styles.tweetButton}>
        <TwitterShareButton url="@tos あけましておめでとうございます！！！まにぽんの年賀状謎をクリアしたよ！！！！！ @mp_gumi">
          <TwitterIcon size={0} className={styles.tweetText} />
          <FontAwesomeIcon icon={faTwitter} />
          クリアツイート
        </TwitterShareButton>
      </span>
      <Image src={omake} alt="おまけ謎" />
    </div>
  );
};

export default Home;
