const Card = ({ horizontal, imgpath, children }) => {
  const renderHorizontal = () => (
    <div className="w-96 rounded flex overflow-hidden shadow-lg">
      <img className="w-32" src={imgpath} alt="Failed to load image!" />
      <div className="px-3 py-1">{children}</div>
    </div>
  );
  const renderVertical = () => (
    <div className="w-64 h-64 rounded overflow-hidden shadow-lg">
      <img className="w-64" src={imgpath} alt="Failed to load image!" />
      <div className="px-3 py-1">{children}</div>
    </div>
  );

  return horizontal ? renderHorizontal() : renderVertical();
};

export default Card;
