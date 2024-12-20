import SectionLists from './SectionLists';
import StarRating from './StarRating';

const lists = [
  {
    id: crypto.randomUUID(),
    name: "Winner's Orbit",
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: "Winner's Circle",
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    name: 'Very Good',
    rating: 3,
  },
  {
    id: crypto.randomUUID(),
    name: 'Good',
    rating: 2,
  },
  {
    id: crypto.randomUUID(),
    name: 'Fair',
    rating: 1,
  },
  {
    id: crypto.randomUUID(),
    name: 'Bad',
    rating: 0,
  },
];

function App() {
  return (
    <>
      {lists.map((list) => {
        return (
          <SectionLists key={list.id} name={list.name} rating={list.rating} />
        );
      })}
    </>
  );
}

export default App;
