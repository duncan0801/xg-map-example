import ShotArea from "./ShotArea";

function Pitch({pitch, setPitch}) {
    return <div className="pitch">
        {pitch && pitch.map((row, i) => {
            return row.map((area, j) => {
                return <ShotArea pitch={pitch} setPitch={setPitch} row={i} column={j}/>
            })
        }) }
    </div>
}

export default Pitch
