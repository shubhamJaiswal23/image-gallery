import Tags from './Tags';

const ImageCard = ({ downloads, likes, views, tags, largeImageURL, user }) => {
  const tag = tags.split(',');

  return (
    <div className="max-w-sm mx-2 rounded overflow-hidden shadow-lg">
      <img src={largeImageURL} className="w-full" alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Download: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tag.map((tag, index) => {
          return <Tags key={index} tag={tag} />;
        })}
      </div>
    </div>
  );
};

export default ImageCard;
