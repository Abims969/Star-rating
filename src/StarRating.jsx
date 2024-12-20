import { range } from './util';

function StarRating({ rating }) {

    function Star (){
      return (
        <div className="star-wrapper">
          <img
            key={crypto.randomUUID()}
            alt=""
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        </div>
      );
}

  return(
   <div class="star-wrapper">
    {range(rating).map(() => (
      <Star />
    ))}
    </div>
  );
}

export default StarRating;
