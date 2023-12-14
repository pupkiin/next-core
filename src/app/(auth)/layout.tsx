import HeaderForAuth from '@/components/ui/HeaderForAuth/HeaderForAuth';
import styles from './layout.module.css'

export default function AuthLayout(
  { children }: { children : React.ReactNode}
) {
  return (
    // todo - добавить логотип для перехода
    <>
      <HeaderForAuth />
      <div className={styles.layout}>{children}</div>
    </>
  );
}