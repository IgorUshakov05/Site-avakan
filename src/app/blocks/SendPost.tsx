"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import style from "@/app/style/SendPost.module.css";
import { useState } from "react";
import useSendRequest from "../hooks/useSendRequest";

function SendPost() {
  const { mutate, isPending } = useSendRequest();
  const [media] = useState([
    { img: "telegram", alt: "Телеграм" },
    { img: "vk", alt: "Вк" },
    { img: "tenchat", alt: "Тенчат" },
    { img: "email", alt: "Почта" },
  ]);

  const [selectedContact, setSelectedContact] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [budgetValue, setBudgetValue] = useState(0);
  const [budgetFormatted, setBudgetFormatted] = useState("0");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\s/g, "");

    if (!isNaN(Number(rawValue))) {
      const numericValue = Number(rawValue);
      let formattedValue = numericValue.toLocaleString("ru-RU");

      if (numericValue >= 1000000) {
        formattedValue = numericValue / 1000000 + "м";
      } else if (numericValue >= 100000 && numericValue % 100000 === 0) {
        formattedValue = numericValue / 1000 + "к";
      }

      setBudgetFormatted(formattedValue);
      setBudgetValue(numericValue);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("connect", link);
    formData.append("description", description);
    formData.append("price", budgetValue.toString());

    if (file) {
      formData.append("file", file);
    }

    mutate(formData, {
      onSuccess: () => alert("Заявка успешно отправлена!"),
      onError: (error) => console.error(error),
    });
  };

  return (
    <div className={style.content}>
      <div className={style.parentTitle}>
        <span className={style.title}>Работаем?</span>
        <span className={style.describe}>
          Мы внимательно рассмотрим вашу заявку...
        </span>
      </div>
      <div className={`${style.flex} ${style.main}`}>
        <div className={`${style.flex} ${style.center}`}>
          <div className={style.feed}>
            <div className={`${style.flex} ${style.text}`}>
              <span className={style.default}>Укажите контакт</span>
              <span className={`${style.star} ${style.defaultStar}`}>*</span>
            </div>
            <div className={style.inputs}>
              {media.map((item, index) => (
                <div key={index} className={style.container}>
                  <label htmlFor={item.alt} className={style.selectItem}>
                    <img src={`/icon/${item.img}.svg`} alt={item.alt} />
                  </label>
                  <input
                    type="radio"
                    className={style.input}
                    name="message"
                    id={item.alt}
                    onChange={() => setSelectedContact(item.alt)}
                  />
                </div>
              ))}
            </div>
            <input
              type="text"
              name="link"
              id="link"
              className={`${style.textarea} ${style.inputLink}`}
              placeholder={"Вставьте ссылку"}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <div className={style.fileTZ}>
              <span className={style.default}>Добавьте файл</span>
              <div className={style.inputFIle}>
                <input
                  type="file"
                  className={style.file}
                  onChange={handleFileChange}
                />
                <div className={style.textAndDown}>
                  <span className={style.default}>
                    {file ? file.name : "Перетяните файл и положите в это поле"}
                  </span>
                  {/* SVG... */}
                </div>
              </div>
            </div>
          </div>
          <div className={style.video}>
            <video src="/video/sa.webm" autoPlay muted loop playsInline></video>
          </div>
        </div>
        <Right
          description={description}
          setDescription={setDescription}
          budgetValue={budgetValue}
          isPending={isPending}
          budgetFormatted={budgetFormatted}
          handleBudgetChange={handleBudgetChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

interface RightProps {
  description: string;
  setDescription: (v: string) => void;
  budgetValue: number;
  isPending: boolean;
  budgetFormatted: string;
  handleBudgetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const Right = ({
  description,
  setDescription,
  isPending,
  budgetValue,
  budgetFormatted,
  handleBudgetChange,
  onSubmit,
}: RightProps) => {
  return (
    <div>
      <div className={style.textareaParent}>
        <span className={style.star}>*</span>
        <textarea
          name="twoWord"
          id="twoWord"
          className={style.textarea}
          placeholder={"Расскажите о компании в двух словах"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className={`${style.buget} ${style.main}`}>
        <span className={style.default}>Укажите бюджет</span>
        <div>
          <input
            type="range"
            className={style.selectValue}
            value={budgetValue}
            min={10000}
            max={1000000}
            onChange={handleBudgetChange}
          />
        </div>
        <div>
          <input
            className={style.value}
            value={budgetFormatted}
            type="text"
            onChange={handleBudgetChange}
            placeholder="Введите сумму"
          />
        </div>
      </div>
      <div className={style.main}>
        <button
          className={style.sendQuery}
          onClick={onSubmit}
          disabled={isPending}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default SendPost;
