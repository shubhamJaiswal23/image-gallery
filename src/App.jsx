import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './components/ImageCard';
import image404 from './images/image404.png';
import loading from './images/loading.gif';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://pixabay.com/api/?key=42111079-a4141965da77951cc224269d4&q=${term}&image_type=photo&pretty=true`
      );
      const data = response.data;
      setImages(data.hits);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setTerm('');
  };

  if (isLoading) {
    return (
      <div className="container mx-auto">
        {/* Form */}
        <div className="my-12 mx-auto text-center">
          <form>
            <input
              type="text"
              className="border border-slate-300 py-1 px-8 rounded placeholder:capitalize outline-none mx-1"
              placeholder="search image term..."
            />
            <button className="bg-green-500 py-1 px-4 rounded text-white hover:bg-green-700">
              Search
            </button>
          </form>
        </div>
        {/* Loading GIF */}
        <div className="flex justify-center items-center mt-40">
          <img src={loading} alt="" className="w-20 h-20" />
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="container mx-auto">
        {/* Form */}
        <div className="my-12 mx-auto text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="border border-slate-300 py-1 px-8 rounded placeholder:capitalize outline-none mx-1"
              placeholder="search image term..."
            />
            <button className="bg-green-500 py-1 px-4 rounded text-white hover:bg-green-700">
              Search
            </button>
          </form>
        </div>
        {/* No Image Found Message */}
        <div className="mt-32 flex justify-center items-center">
          <img src={image404} className="w-88 h-88" alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      {/* Form */}
      <div className="my-12 mx-auto text-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="border border-slate-300 py-1 px-8 rounded placeholder:capitalize outline-none mx-1"
            placeholder="search image term..."
          />
          <button className="bg-green-500 py-1 px-4 rounded text-white hover:bg-green-700">
            Search
          </button>
        </form>
      </div>
      {/* Image card */}
      <div className="flex flex-col items-center md:items-stretch md:grid md:grid-cols-3 2xl:grid-cols-4 md:gap-5 gap-3">
        {images.map((image) => {
          return <ImageCard key={image.id} {...image} />;
        })}
      </div>
    </div>
  );
};

export default App;
