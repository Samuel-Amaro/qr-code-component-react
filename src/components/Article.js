export function Article(props) {
    return (
      <article className="article">
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
      </article>
    );
}