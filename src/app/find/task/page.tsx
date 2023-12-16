"use client";
import Development from "@/components/ui/FindMasterTypes/Development/Develompent";
import styles from "./findTask.module.css";
import { useEffect, useState } from "react";
import Footer from "@/components/ui/Footer/Footer";
import { Header } from "@/components";
import { DropdownHideButton } from "@/components/Dropdown/components";

export default function FindTask() {
  const LIST = [
    { element: <Development /> },
    { element: <Footer /> },
    { element: <Header /> },
    { element: <DropdownHideButton /> },
    { element: <Development /> },
    { element: <Development /> },
    { element: <Development /> },
    { element: <Development /> },
    { element: <Development /> },
  ];

  const [state, setState] = useState(1);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
              Выберите направление
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
                <span className={styles.radioType}>Дизайн и творчество</span>
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
                <span className={styles.radioType}>Продажи и маркетинг</span>
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
                <span className={styles.radioType}>Администрирование</span>
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
                <span className={styles.radioType}>Тексты и переводы</span>
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
                <span className={styles.radioType}>Финансы и учёт</span>
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
                <span className={styles.radioType}>HR и обучение</span>
              </label>
            </div>

            <div className={styles.radioControl}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="1"
                  className="radio focus:outline-3 focus:outline-indigo-300 checked:bg-indigo-500"
                  onClick={() => setState(8)}
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
                  onClick={() => setState(9)}
                />
                <span className={styles.radioType}>Образование</span>
              </label>
            </div>
          </div>
          <div className={styles.findTaskTaskTopics}>
            <h2 className={styles.findTaskExploreBlockTitle}>
              Найдите интересующую специальность
            </h2>

            {LIST[state - 1].element}
          </div>
        </div>
      </div>
    </main>
  );
}
