const Options = ({ optA, optB, handleClick }) => {
  return (
    <div className="row">
      <Option id="A" opt={optA} handleClick={handleClick} />
      <Option id="B" opt={optB} handleClick={handleClick} />
    </div>
  );
};

export default Options;

const Option = ({ id, opt, handleClick }) => {
  console.log(opt);
  return (
    <div className="col s12 m6">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content center">
            <h5>{opt}</h5>
          </div>
          <div className="card-action center">
            <span
              id={id}
              onClick={handleClick}
              className="btn-floating btn-large waves-effect waves-light light-green lighten-1 button"
            >
              {id}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
