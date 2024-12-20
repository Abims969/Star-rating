import StarRating from './StarRating';

function SectionLists(props) {
  const {name, rating} = props
  
  const TOTAL = 5;
  return (
    <section>
      <h2>{name}</h2>
      <p>
        Rating: {rating} / {TOTAL}
      </p>
      <StarRating rating={rating} />
    </section>
  );
}

export default SectionLists;
