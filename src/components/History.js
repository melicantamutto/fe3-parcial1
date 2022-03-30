const History = ({ selectionHistory }) => {
  return (
    <footer className="page-footer green">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h6>
              Última selección: <span>{selectionHistory[selectionHistory.length-1]}</span>
            </h6>
            <h6>
              Historial de selecciones: {"\u00A0"}
              {selectionHistory.map((option, i) => (
                <span key={i}>
                  {option} {i !== 3 && '- '}
                </span>
              ))}
            </h6>
          </div>
            <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Melina Cantamutto</h5>
              </div>
        </div>
      </div>
    </footer>
  );
};

export default History;
