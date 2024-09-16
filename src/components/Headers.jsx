// eslint-disable-next-line react/prop-types
function Headers({ title, subtitle }) {
  return (
    <div className="ml-3 mt-6">
      <p className="text-3xl font-bold text-primary">{title}</p>
      <p className="text-xl text-secondary">{subtitle}</p>
    </div>
  );
}

export default Headers;
