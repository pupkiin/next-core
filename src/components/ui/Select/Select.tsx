import { DESIGN_LIST } from "../FindMasterTypes/Design/Design";
import { DEV_LIST } from "../FindMasterTypes/Development/Develompent";
import { EDUCATION_LIST } from "../FindMasterTypes/Education/Education";
import { ENGINEERING_LIST } from "../FindMasterTypes/Engineering/Engineering";
import { FINANCE_LIST } from "../FindMasterTypes/Finance/Finance";
import { MARKETING_LIST } from "../FindMasterTypes/Marketing/Marketing";
import { TRANSLATE_LIST } from "../FindMasterTypes/Translate/Translate";
import styles from "./Select.module.css";

const DIRECTION: IDirection = {
  dev: DEV_LIST,
  design: DESIGN_LIST,
  marketing: MARKETING_LIST,
  translate: TRANSLATE_LIST,
  finance: FINANCE_LIST,
  engineering: ENGINEERING_LIST,
  education: EDUCATION_LIST,
};

interface IDirection {
  [key: string]: { topic: string; }[],
}

interface ISelect {
  type: string;
}

export default function Select({ type }: ISelect) {
  return (
    <div className={styles.createTaskSelectBlock}>
      <div className={styles.createTaskInputBlock}>
        <label className={styles.createTaskInputLabel} htmlFor="work-direction">
          <span className={styles.createTaskInputText}>
            <svg
            className={styles.createTaskInputSvg}
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
            Специальность
          </span>
        </label>

        <select
          className={styles.createTaskInputSelect}
          name="work-direction"
          id="work-direction"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Выберите специальность
          </option>

          {DIRECTION[type].map(({ topic }) => (
            <option value={topic} key={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
