// eslint-disable-next-line react/prop-types
function ProgressCircle({ progress, size }) {
  return (
    <div
      className="radial-progress text-secondary"
      style={{
        "--value": progress,
        "--size": size + "rem",
        "--thickness": "5px",
      }}
    >{`${progress}%`}</div>
  );
}

export default ProgressCircle;
