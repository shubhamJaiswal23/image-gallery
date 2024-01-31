const Tags = (props) => {
  return (
    <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 m-1">
      #{props.tag}
    </div>
  );
};

export default Tags;
