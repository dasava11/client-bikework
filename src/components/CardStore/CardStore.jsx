import {Link} from 'react-router-dom';

const CardStore = ({ store }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white text-black">
      <Link to={`/stores/${store.id}`}>
        <img className='w-full h-32 object-contain' src={store.image} alt={store.name} />
        <h3 className="font-bold text-lg text-gray-600">{store.name}</h3>
      </Link>
    </div>
  );
};

export default CardStore;
