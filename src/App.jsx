import "./App.scss";
import Button from "../components/Button/Button";
import NotebookItem from "../components/NotebookItem/NotebookItem";
import Card from "../components/Card/Card";

function App() {
  const data = [
    {
      title: "Тут будет заголовок карточки",
      text: "Тут будет какой-то текст для карточки",
      date: new Date(),
    },
    {
      title: "Тут будет заголовок для другой карточки",
      text: "Тут будет какой-то текст для ещё какой-то карточки",
      date: new Date(),
    },
  ];

  return (
    <>
      <h1>Заголовок</h1>
      <p>Рандомный текст</p>
      <Button />
      <Card>
        <NotebookItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </Card>
      <Card>
        <NotebookItem
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
        />
      </Card>
    </>
  );
}

export default App;
