interface Review {
  client: string;
  message: string[];
}

const ReviewItem = ({ client, message }: Review) => {
  return (
    <article>
      <header>
        <h2>{client}</h2>
      </header>
      {message.map((mesItem, index) => {
        return <p key={index}>{mesItem}</p>;
      })}
    </article>
  );
};

export default ReviewItem;
