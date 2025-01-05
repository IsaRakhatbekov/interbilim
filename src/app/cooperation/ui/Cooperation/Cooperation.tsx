import styles from './Cooperation.module.scss'

export const Cooperation = () => {
    return(
        <section className={styles.cooperation}>
            <div className={`${styles.cooperationContainer} container`}>
                <h2 className={`${styles.title} def-title`}>Сотрудничество
                    <span>c Интер <span>билим</span></span>
                </h2>

                <p className={styles.subtitle}>
                Присоединяйтесь к нашей миссии! Мы предлагаем три формата сотрудничества, чтобы каждый мог внести свой вклад в развитие важных инициатив.
                </p>
            </div>
        </section>
    )
}