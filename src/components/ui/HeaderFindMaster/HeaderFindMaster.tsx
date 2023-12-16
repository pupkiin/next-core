import styles from './HeaderFindMaster.module.css'

export default function HeaderFindMaster() {
  return (
    <div className={styles.headerFindMaster}>
      <button className={styles.headerFindMaterButton}>Find Master</button>
      <div className={styles.headerFindMaterDropdown}>
        
      </div>
    </div>
  );
}