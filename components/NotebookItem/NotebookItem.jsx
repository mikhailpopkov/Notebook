import "./NotebookItem.scss";

function NotebookItem({ title, text, date }) {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date);

  return (
    <>
      <div className="notebook-item__title">{title}</div>
      <div className="notebook-item__content">
        <div className="notebook-item__content-date">{formatedDate}</div>
        <div className="notebook-item__content-text">{text}</div>
      </div>
    </>
  );
}

export default NotebookItem;
