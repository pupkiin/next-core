"use client";
import Development from "@/components/ui/FindMasterTypes/Development/Develompent";
import styles from "./findTask.module.css";
import { useState } from "react";
import Design from "@/components/ui/FindMasterTypes/Design/Design";
import Marketing from "@/components/ui/FindMasterTypes/Marketing/Marketing";
import Translate from "@/components/ui/FindMasterTypes/Translate/Translate";
import Finance from "@/components/ui/FindMasterTypes/Finance/Finance";
import Engineering from "@/components/ui/FindMasterTypes/Engineering/Engineering";
import Education from "@/components/ui/FindMasterTypes/Education/Education";

export default function FindTask() {
  const LIST = [
    { element: <Development /> },
    { element: <Design /> },
    { element: <Marketing /> },
    { element: <Translate /> },
    { element: <Finance /> },
    { element: <Engineering /> },
    { element: <Education /> },
  ];

  const [state, setState] = useState(1);

  return (
    <main className={styles.container}>
      <div className={styles.findTaskTitleBlock}>
        <h1 className={styles.findTaskTitle}>
          <svg
            className={styles.findTaskTitleImg}
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
          >
            <path
              fillRule="evenodd"
              d="M1.5 1.5A.5.5 0 001 2v4.8a2.5 2.5 0 002.5 2.5h9.793l-3.347 3.346a.5.5 0 00.708.708l4.2-4.2a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 8.3H3.5A1.5 1.5 0 012 6.8V2a.5.5 0 00-.5-.5z"
            />
          </svg>
          Найди работу для себя
        </h1>
        <p className={styles.findTaskDescription}>
          Ищите работу, выполняйте поставленную клиентом задачу и получайте
          деньги.
        </p>

        <div className={styles.findTaskExploreBlock}>
          <div className={styles.findTaskTypes}>
            <h2 className={styles.findTaskExploreBlockTitle}>
              Направления
            </h2>

            <div className={styles.radioControl}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="1"
                  className="radio focus:outline-3 focus:outline-indigo-300 checked:bg-indigo-500"
                  onClick={() => setState(1)}
                  defaultChecked
                />
                <span className={styles.radioType}>Разработка и IT</span>
              </label>
            </div>

            <div className={styles.radioControl}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="1"
                  className="radio focus:outline-3 focus:outline-indigo-300 checked:bg-indigo-500"
                  onClick={() => setState(2)}
                />
                <span className={styles.radioType}>Дизайн и Творчество</span>
              </label>
            </div>

            <div className={styles.radioControl}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="1"
                  className="radio focus:outline-3 focus:outline-indigo-300 checked:bg-indigo-500"
                  onClick={() => setState(3)}
                />
                <span className={styles.radioType}>Соцсети и Продажи</span>
              </label>
            </div>

            <div className={styles.radioControl}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="1"
                  className="radio focus:outline-3 focus:outline-indigo-300 checked:bg-indigo-500"
                  onClick={() => setState(4)}
                />
                <span className={styles.radioType}>Тексты и Переводы</span>
              </label>
            </div>

            <div className={styles.radioControl}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="1"
                  className="radio focus:outline-3 focus:outline-indigo-300 checked:bg-indigo-500"
                  onClick={() => setState(5)}
                />
                <span className={styles.radioType}>Бизнес и Финансы</span>
              </label>
            </div>

            <div className={styles.radioControl}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="1"
                  className="radio focus:outline-3 focus:outline-indigo-300 checked:bg-indigo-500"
                  onClick={() => setState(6)}
                />
                <span className={styles.radioType}>
                  Архетектура и инженерия
                </span>
              </label>
            </div>

            <div className={styles.radioControl}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="1"
                  className="radio focus:outline-3 focus:outline-indigo-300 checked:bg-indigo-500"
                  onClick={() => setState(7)}
                />
                <span className={styles.radioType}>Образование</span>
              </label>
            </div>
          </div>
          <div className={styles.findTaskTaskTopics}>
            <h2 className={styles.findTaskExploreBlockTitle}>
              Выберите интересующую специальность
            </h2>

            {LIST[state - 1].element}
          </div>
        </div>
      </div>
    </main>
  );
}
