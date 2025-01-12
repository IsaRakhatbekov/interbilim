import styles from "./Organization.module.scss";

const Organization = () => {
  return (
    <div className={styles.organization}>
      <h2 className={`${styles.organizationTitle} secondDef-title`}>
        Струк<span>тура</span> организации
      </h2>
    </div>
  );
};

export default Organization;
