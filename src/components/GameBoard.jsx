export default function GameBoard( {onSelectSquare , board}){

    return (
    <ol id="game-board">
        {board.map(( row, rowIndex ) => (
            <li key = {rowIndex} >  {/* this is for creating rows */}
            <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key = {colIndex}>  {/* this is for creating 3 cols in each row,thats y we are mapping row*/}
                    <button onClick={() => onSelectSquare(rowIndex , colIndex)} 
                    disabled={playerSymbol !==null}>
                        {playerSymbol}
                        </button>
                </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>
    );
}