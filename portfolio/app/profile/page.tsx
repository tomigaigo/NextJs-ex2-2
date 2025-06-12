

import Image from "next/image";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      {/* 省略：プロフィール本人情報セクション */}

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味 (Hobby)</h3>
        <ul className={styles.hobbyList}>
          <li className={styles.hobbyItem}>
            {/* <Image
              src="/images/hobby-photo.jpg"
              alt="写真撮影"
              width={150}
              height={150}
              className={styles.hobbyImage}
            /> */}
            <p>写真撮影：自然風景や街並みを撮影し、Instagramで発信</p>
          </li>
          <li className={styles.hobbyItem}>
            {/* <Image
              src="/images/hobby-game.jpg"
              alt="ゲーム"
              width={150}
              height={150}
              className={styles.hobbyImage}
            /> */}
            <p>ゲーム：友人とオンライン協力プレイでUI/UXのヒントを得る</p>
          </li>
          <li className={styles.hobbyItem}>
            {/* <Image
              src="/images/hobby-book.jpg"
              alt="読書"
              width={150}
              height={150}
              className={styles.hobbyImage}
            /> */}
            <p>読書：技術書やミステリー小説を読み、ストーリー構造を学ぶ</p>
          </li>
          <li className={styles.hobbyItem}>
            {/* <Image
              src="/images/hobby-cafe.jpg"
              alt="カフェ巡り"
              width={150}
              height={150}
              className={styles.hobbyImage}
            /> */}
            <p>カフェ巡り：落ち着いたカフェでアイデア出しやコーディング</p>
          </li>
        </ul>
      </section>
    </main>
);
}

// import Image from "next/image";
// import styles from "./page.module.css";

// export default function ProfilePage() {
//   return (
//     <main className={styles.container}>
//       <h2 className={styles.heading}>Profile</h2>
//       <section className={styles.profileSection}>
//         <Image
//           src="/images/profile.jpg"
//           alt="My Profile"
//           width={200}
//           height={200}
//           className={styles.profileImage}
//         />
//         <div className={styles.profileText}>
//           <p><strong>名前：</strong>○○ 太郎</p>
//           <p><strong>年齢：</strong>20歳</p>
//           <p>
//             専門学校沖縄ビジネス外語学院 Web プログラミングコースを専攻し、現在はエンジニアを目指して勉強中。
//           </p>
//         </div>
//       </section>

//       <section className={styles.hobbySection}>
//         <h3 className={styles.subHeading}>趣味</h3>
//         <div className={styles.hobbyList}>
//           <article className={styles.hobbyItem}>
//             <Image
//               src="/images/hobby-1.jpg"
//               alt="趣味1"
//               width={150}
//               height={150}
//               className={styles.hobbyImage}
//             />
//             <p className={styles.hobbyText}>写真撮影</p>
//           </article>
//           <article className={styles.hobbyItem}>
//             <Image
//               src="/images/hobby-1.jpg"
//               alt="趣味2"
//               width={150}
//               height={150}
//               className={styles.hobbyImage}
//             />
//             <p className={styles.hobbyText}>旅行</p>
//           </article>
//           {/* 必要に応じてカードを追加 */}
//         </div>
//       </section>
//     </main>
//   );
// }
