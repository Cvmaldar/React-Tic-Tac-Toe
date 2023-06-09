import React,{useState} from 'react';
import "./Tictactoe.css";
const Tictactoe = () => {

const [turn,setTurn]=useState('X');
const [cells,setcells]=useState(Array(9).fill(""));//Value to fill the array with
const [winner,setWinner]=useState();
const CheckForWinners=(squares)=>{

    let combos={
        
        across:[
            [0,1,2],
            [3,4,5],
            [6,7,8],
        ],
        Down:[
            [0,3,6],
            [1,4,7],
            [2,5,8],
        ],
        Diagonal:[
            [0,4,8],
            [2,4,6],
        ],
    };
    for (let combo in combos) {
        combos[combo].forEach((pattern) => {
            if (
                squares[pattern[0]] === '' ||
                squares[pattern[1]] === '' ||
                squares[pattern[2]] === ''
            ) {
                // do nothing
            } else if (
                squares[pattern[0]] === squares[pattern[1]] &&
                squares[pattern[1]] === squares[pattern[2]]
            ) {
                setWinner(squares[pattern[0]]);
            }
        });
    }
}

const handleRestart=()=>{

setWinner(null);
setcells(Array(9).fill(""));

}

        const handleClick =(num)=>{

        if(cells[num]!==""){
            alert("already clicked");
            return;
        }
        let squares=[...cells]
        if(turn==="X"){
            squares[num]="X";
            setTurn("O");
        }else{
            squares[num]="O";
            setTurn("X");
        }
        setcells(squares)
        CheckForWinners(squares);
    };
    const Cell =({num})=>{
        return <td onClick={()=>handleClick(num)}>{cells[num]}</td>
    }
  return (
    <div className='container'>
        <table >
            <h1 className='turns'>Turn:{turn}</h1>
            <tbody>
                <tr>
                    <Cell  num={0} />
                    <Cell  num={1} />
                    <Cell  num={2} />
                </tr>
                <tr>
                    <Cell  num={3} />
                    <Cell  num={4} />
                    <Cell  num={5} />
                </tr>
                <tr>
                    <Cell  num={6} />
                    <Cell  num={7} />
                    <Cell  num={8} />
                </tr>
            </tbody>
        </table>
        {winner &&(
            <React.Fragment >
            <p className='winner'>{winner} is the winner!</p>
            <button onClick={()=>handleRestart()}>Play Again</button>
            </React.Fragment>
        )}
    </div>
  )
}

export default Tictactoe;