import "../App.css";

const Newsletter = ({ data }) => {
  return (
    <div>
      <div className="news">
      <div className="news__card">
        <h1 className="news__title">{data.title}</h1>
        <p className="news__desc">{data.description}</p>
        <span className="news__author">{data.author}</span> <br />
        <span className="news__published">{data.publishedAt}</span>
        <div className="news__source">{data.source.name}</div>
      </div>
      </div>
    </div>
  );
};

export default Newsletter;
