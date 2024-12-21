interface Review {
  client: string;
  message: string[];
}
import style from '@/app/style/ResponseItem.module.css'
const ReviewItem = ({ client, message }: Review) => {
  return (
    
    <article className={`${style.item}`}>
      <header>
        <h2 className={`${style.client} ${style.colorWhite}`}>{client}</h2>
      </header>
      {message.map((mesItem, index) => {
        return <p key={index} className={`${style.description} ${style.colorWhite}`}>{mesItem}</p>;
      })}
    </article>
  );
};

export default ReviewItem;
