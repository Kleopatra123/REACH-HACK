"reach 0.1";
const [ isOutcome, B_WINS, DRAW, A_WINS, A_and_B_LOST ] = makeEnum(4);

const getWinner = (handPlayer1, handPlayer2) => {
    if (handPlayer1 == 1 && handPlayer2 == 3){
        return A_WINS;
    }else if(handPlayer1 == 3 && handPlayer2 == 2){
        return B_WINS;
    } else if (handPlayer1 ==3 && handPlayer2 == 3){
        return A_and_B_LOST;
    } else return DRAW;


}
const payWinner = (outcome, wager, Player1, Player2) => {
    if (outcome == DRAW) {
        transfer(wager).to(Player1);
        transfer(wager).to(Player2);
    }
    else if(outcome == A_WINS) {
        transfer(2*wager).to(Player1);
    } 
    else if(outcome == B_WINS) {
        transfer(2*wager). to(Player2);
    }
    else if(outcome == A_and_B_LOST) {
        transfer(wager). to(Player1);
        transfer(wager). to(Player2);
    }   
}
const Player = {
    ...hasRandom,
    getGuess: Fun([], UInt),
    seeResult: Fun([UInt], Null),
    getResult: Fun([],UInt)


}
export const main = Reach.App(() => {
    const Player1 = Participant('Player1', {
        ...Player,
        wager: UInt,
        deadline: UInt,
        informAcceptedWager: Fun([], Null),
      });

    const Player2 = Participant('Player2', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });

    init();
    Player1.only(() => {
        const wager = declassify(interact.wager);
        
      });
      Player1.publish(wager)
        .pay(wager);
      commit();

    Player2.only(() => {
    interact.acceptWager(wager);
  });
  Player2.pay(wager)
    
    
  commit();
  Player1.only(() => {
    const _handPlayer1 = interact.getGuess();
    
    const [_commitPlayer1, _saltPlayer1] = makeCommitment(interact, _handPlayer1);
    const commitPlayer1 = declassify(_commitPlayer1);
  });
  Player1.publish(commitPlayer1)
    
  commit();

  unknowable(Player2, Player1(_handPlayer1, _saltPlayer1));
  Player2.only(() => {
    const handPlayer2 = declassify(interact.getGuess());
    
  });
  Player2.publish(handPlayer2)
  
    
  commit();
  Player1.only(() => {
    const saltPlayer1 = declassify(_saltPlayer1);
    const handPlayer1 = declassify(_handPlayer1);
    
  });
  Player1.publish(saltPlayer1, handPlayer1)
  
    
  checkCommitment(commitPlayer1, saltPlayer1, handPlayer1);
  const outcome = getWinner(handPlayer1, handPlayer2);
  payWinner(outcome,wager,Player1, Player2);

  Player1.only(() => {
    const guess1 = declassify(interact.getResult());  
  });
  //Player1.publish(guess1);
  
  Player2.only(() => {
    const guess2 = declassify(interact.getResult());
    //Player2.publish(guess2)
    
  }
  )

  


  commit();

});
