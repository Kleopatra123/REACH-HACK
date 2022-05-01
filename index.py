"""This game generates random number, then players try to guess the number generated"""

# flake8: noqa

import random
from threading import Thread
from reach_rpc import mk_rpc

playery = [0,1]
hand1 = []
hand2 = []
i =0
i2 =0
num = random.randrange(0,10)
player1 = "Human"
player2 = "Alien"
playerx = ""
player1PlayCount = 0
player2PlayCount = 0
maxPlayTimes = 3
def main():

    rpc, rpc_callbacks = mk_rpc()
    starting_balance = rpc('/stdlib/parseCurrency', 100)
    acc_player1        = rpc('/stdlib/newTestAccount', starting_balance)
    acc_player2         = rpc('/stdlib/newTestAccount', starting_balance)

    OUTCOME = [
        "PLAYER1 WINS",
        "PLAYER2 WINS"
        "BOTH DRAW",
        "BOTH PLAYERS LOSE"
    ]

    def fmt(x):
        return rpc('/stdlib/formatCurrency', x, 4)

    def get_balance(w):
        return fmt(rpc('/stdlib/balanceOf', w))

    before_Player1 = get_balance(acc_player1)
    before_Player2 = get_balance(acc_player2)

    ctc_player1    = rpc('/acc/contract', acc_player1)
    def player(who):
        def getGuess():
            while player2PlayCount != 3 and hand2[i2 - 1] != num:
                if who == player1:
                    hand1.append(int(input("ENTER THE NUMBER OF YOUR CHOICE")))
                    for indexHand1 in i:
                        print(who, "played ", hand1[indexHand1])
                        if hand1[indexHand1] == num:
                            break
                        a = 1
                        return a
                    i =+1
                    
                    
                    

                elif who == player2 and hand1[i-1] != num:
                    hand2.append(int(input("ENTER A NUMBER OF  YOUR CHOICE")))
                    for ind in i2:
                        print(who,"played", hand2[ind])
                        if hand2[ind] == num:
                            break
                        b = 2
                        return b
                            
                    i2 =+ 1
                    player2PlayCount =+ 1
                
            if player2PlayCount == 3 :
                c = 3
                return c
        def getResult():
            a = getGuess()
            b = getGuess()
            c = getGuess()
            '''
            a = getGuess(player2)
            b = getGuess(player2)
            c = getGuess(player2)
            '''
            if who == player1:
                if getGuess() == a:
                    return 1
                elif getGuess() == c:
                    return 2
            if who == player2:
                if getGuess() == b:
                    return 3
                elif getGuess() == c:
                    return 4
            
        def informTimeout():
            print('%s observed a timeout' % who)
            

        def seeResult (n):
           print(
            "%s saw outcome %s this round"
            % (who, OUTCOME[rpc("/stdlib/bigNumberToNumber", n)]))

        return {'stdlib.hasRandom': True,
                'getGuess':          getGuess,
                'seeResult':       seeResult,
                'getResult':         getResult,
                'informTimeout':    informTimeout
               }
    def play_1():
        rpc_callbacks(
            '/backend/Player1',
            ctc_player1,
            dict(wager=rpc('/stdlib/parseCurrency', 5), deadline=10, **player('human')))

    alice = Thread(target=play_1)
    alice.start()
 
    def play_2():
        def acceptWager(amt):
            wager2 = input(int("Player2 do you accept the wager 'Y' or 'N': "))
            if wager2 == 'Y':
                print('Player2 accepts the wager of %s' % fmt(amt))

                ctc_player2 = rpc('/acc/contract', acc_player2, rpc('/ctc/getInfo', ctc_player1))
                rpc_callbacks(
                    '/backend/Player2',
                    ctc_player2,
                    dict(acceptWager=acceptWager, **player('alien')))
                rpc('/forget/ctc', ctc_player2)
                #return 1
                
            else:
                print("CANNOT PLAY GAME WITHOUT WAGER")
                exit()


    bob = Thread(target=play_2)
    bob.start()

    alice.join()
    bob.join()

    after_player1 = get_balance(acc_player1)
    after_player2   = get_balance(acc_player2)

    print('Player1 went from %s to %s' % (before_Player1, after_player1))
    print('Player2 went from %s to %s' % (before_Player2,   after_player2))

    rpc('/forget/acc', acc_player1, acc_player2)
    rpc('/forget/ctc', ctc_player1)


if __name__ == '__main__':
    main()
                    
                    
                

        







#generate number directly
