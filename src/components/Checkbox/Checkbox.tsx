import styles from "./styles.module.scss";

interface CheckboxProps {
  isChecked: boolean;
}

export const Checkbox = ({ isChecked }: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" className={styles.checkbox} checked={isChecked} />
      <div className={styles.icon}>
        <svg
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
