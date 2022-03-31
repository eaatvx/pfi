import styles from "../styles/Bio.module.scss";
import Image from "next/image";
import avatar from "../../public/assets/images/avatar.jpg";

export default function Bio() {
    return (
        <div className="d-flex mb-4">
            <div className={`flex-shrink-1 ${styles.avatar}`}>
                <Image
                    src={avatar}
                    alt="SmoothNanners"
                    className={`img-fluid rounded-2`}
                    layout="responsive"
                    quality={100}
                />
            </div>

            <div id="bio" className={`w-100 text-white fs-4 ms-3 ${styles.bio}`}>
                <p>site PFI.</p>

                <p>"test 2".</p>

                <p className="mb-3">"test"</p>
            </div>
        </div>
    );
}
