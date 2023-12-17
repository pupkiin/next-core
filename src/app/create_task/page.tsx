"use client";
import { useState } from "react";
import styles from "./CreateTask.module.css";
import Select from "@/components/ui/Select/Select";

export default function CreateTask() {
  const [type, setType] = useState("");

  function findOption(event: React.FormEvent<HTMLSelectElement>) {
    var select: string = event.currentTarget.value;
    setType(select);
    console.log(select); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.createTaskTitle}>Опишите вашу задачу</h1>
      <p className={styles.createTaskDescription}>ввв zdesi kakoeto opisanie</p>
      <div className={styles.createTaskForm}>
        <div className={styles.createTaskInputBlock}>
          <label className={styles.createTaskInputLabel}>
            <span className={styles.createTaskInputText}>
              <svg
                className={styles.createTaskInputSvg}
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M4 11a1 1 0 112 0v1a1 1 0 11-2 0v-1zm6-4a1 1 0 112 0v5a1 1 0 11-2 0V7zM7 9a1 1 0 012 0v3a1 1 0 11-2 0V9z" />
                <path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" />
              </svg>
              Введите название
            </span>
            <input
              className={styles.createTaskInput}
              type="text"
              name="text"
              maxLength={70}
              placeholder="Название, описывающее вашу задачу"
            />
          </label>
        </div>
        <div className={styles.createTaskInputBlock}>
          <label className={styles.createTaskInputLabel}>
            <span className={styles.createTaskInputText}>
              <svg
                className={styles.createTaskInputSvg}
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M1 2.5A1.5 1.5 0 012.5 1h1A1.5 1.5 0 015 2.5h4.134a1 1 0 110 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0112.5 11h1a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5H6.866a1 1 0 110-1h1.711a2.839 2.839 0 01-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 013.5 5h-1A1.5 1.5 0 011 3.5v-1zM2.5 2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm10 10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
                />
              </svg>
              Детально опишите задачу
            </span>
            <textarea
              className={styles.createTaskTextarea}
              name="text"
              maxLength={1500}
              placeholder="Расскажите, что нужно сделать, с помощью каких технологий и за какой промежуток времени"
            />
          </label>
        </div>

        <div className={styles.createTaskSelectBlock}>
          <div className={styles.createTaskInputBlock}>
            <label className={styles.createTaskInputLabel} htmlFor="work-type">
              <span className={styles.createTaskInputText}>
                <svg
                  className={styles.createTaskInputSvg}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M3 14.5A1.5 1.5 0 011.5 13V3A1.5 1.5 0 013 1.5h8a.5.5 0 010 1H3a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V8a.5.5 0 011 0v5a1.5 1.5 0 01-1.5 1.5H3z" />
                  <path d="M8.354 10.354l7-7a.5.5 0 00-.708-.708L8 9.293 5.354 6.646a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0z" />
                </svg>
                Направление
              </span>
            </label>

            <select
              onChange={findOption}
              className={styles.createTaskInputSelect}
              name="work-type"
              id="work-type"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Выберите направление
              </option>
              <option value="dev">Разработка и IT</option>
              <option value="design">Дизайн и Творчество</option>
              <option value="marketing">Соцсети и Продажи</option>
              <option value="translate">Тексты и Переводы</option>
              <option value="finance">Бизнес и Финансы</option>
              <option value="engineering">Архитектура и Инженерия</option>
              <option value="education">Образование</option>
            </select>
          </div>

          {type !== "" && <Select type={type} />}

          {/* {type !== "" && (
            <div className={styles.createTaskInputBlock}>
              <select
                onChange={findOption}
                className={styles.createTaskInputSelect}
                name="pets"
                id="work-type"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled>
                  Выберите направление
                </option>
                <option value="dev">Разработка и IT</option>
                <option value="design">Дизайн и Творчество</option>
                <option value="marketing">Соцсети и Продажи</option>
                <option value="translate">Тексты и Переводы</option>
                <option value="finance">Бизнес и Финансы</option>
                <option value="engineering">Архитектура и Инженерия</option>
                <option value="education">Образование</option>
              </select>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
