function ShotArea({ pitch, setPitch, row, column }) {
  function handleDefenderOnClick(event, row, column) {
    const updatedPitch = JSON.parse(JSON.stringify(pitch));
    updatedPitch[row][column].defenders =
      updatedPitch[row][column].defenders + 1;
    setPitch(updatedPitch);
  }
  return (
    <div className={`shot-area ${row}-${column}`}>
      <div
        onClick={(event) => handleDefenderOnClick(event, row, column)}
        className="defenders"
      >
        Defenders ={pitch[row][column].defenders}
      </div>
      <div className="shots">Shots</div>
      <div className="goals">Goals</div>
    </div>
  );
}
export default ShotArea;
