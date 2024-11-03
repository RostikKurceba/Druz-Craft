import React from 'react';
import styles from './About.css';
import AboutPhoto from './photo/AboutPhoto.png';

const About = () => (
    <div className={styles.container}>
        <div className={styles.aboutText}>
            <h1 className={styles.aboutTitle}>Про нас</h1>
            <p className={styles.aboutP}><b>"Druz Craft"</b> - це інтернет-магазин виробів з дерева, де ви не просто обираєте вироби з наявного асортименту, а створюєте справжні унікальні речі. Ви можете спроектувати власний виріб чи навіть цілий інтер'єр, використовуючи кілька інноваційних способів: від швидкого ескізу на папері до опису своєї ідеї. Наш штучний інтелект не лише перетворить ваші думки на професійний 3D-дизайн, але й допоможе підібрати матеріали, кольори та текстури, адаптувавши все до ваших потреб. Ви отримаєте візуалізацію майбутнього виробу чи простору, яку можна замовити і втілити в реальність. Інтерактивний процес дозволить вам редагувати дизайн у реальному часі, поки ви не будете повністю задоволені результатом.</p>
        </div>
        <div className={styles.aboutImgContainer}>
            <img className={styles.aboutImg} src={AboutPhoto} alt="Про нас" />
        </div>
    </div>
);

export default About;
