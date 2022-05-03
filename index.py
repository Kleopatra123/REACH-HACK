# flake8: noqa

import time
import random
from threading import Thread
from reach_rpc import mk_rpc



def main():
    rpc, rpc_callbacks = mk_rpc()

    starting_balance = rpc('/stdlib/parseCurrency', 100)
    acc_alice        = rpc('/stdlib/newTestAccount', starting_balance)
    acc_bob          = rpc('/stdlib/newTestAccount', starting_balance)

    def fmt(x):
        return rpc('/stdlib/formatCurrency', x, 4)

    def get_balance(w):
        return fmt(rpc('/stdlib/balanceOf', w))

    before_alice = get_balance(acc_alice)
    before_bob   = get_balance(acc_bob)

    ctc_alice    = rpc('/acc/contract', acc_alice)

    
    OUTCOME      = ['Bob wins', 'Draw', 'Alice wins,']
    

    def player(who):
        def getHand():
            hand = int(input(who + " ENTER A NUMBER FROM 0 TO 10: "))
            print('%s played %s' % (who, hand))
            return hand
        def getResult():
            print("WELCOME TO PRICE IS RIGHT\nYOU HAVE 3 TRIALS TO GUESS THE RIGHT PRICE ")
            time.sleep(2)
            num =random.randrange(0,10)
            print("THIS IS THE RANDOM NUMBER CHOOSEN BY THE MACHINE " + str(num) + "\nNOTE THIS IS VISIBLE  SOLELY FOR DEBUGGING PURPOSES." )
            return num
        '''
        count=[0]  
        def counter():
            count[0] += 1
            print(count[0])
            return count[0]
        '''
       

        def informTimeout():
            print('%s observed a timeout' % who)

        def seeOutcome(n):
            print('%s saw outcome %s'
                  % (who, OUTCOME[rpc('/stdlib/bigNumberToNumber', n)]))

        return {'stdlib.hasRandom': True,
                'getHand':          getHand,
                'getResult':        getResult,
                'informTimeout':    informTimeout,
                'seeOutcome':       seeOutcome,
                }

    def play_alice():
        
        rpc_callbacks(
            '/backend/Alice',
            ctc_alice,
            dict(wager=rpc('/stdlib/parseCurrency', 5), deadline=10,  **player('Alice')))

    alice = Thread(target=play_alice)
    alice.start()

    def play_bob():
        def acceptWager(amt):
            print('Bob accepts the wager of %s' % fmt(amt))

        ctc_bob = rpc('/acc/contract', acc_bob, rpc('/ctc/getInfo', ctc_alice))
        rpc_callbacks(
            '/backend/Bob',
            ctc_bob,
            dict(acceptWager=acceptWager, **player('Bob')))
        rpc('/forget/ctc', ctc_bob)
        

    bob = Thread(target=play_bob)
    bob.start()

    alice.join()
    bob.join()

    after_alice = get_balance(acc_alice)
    after_bob   = get_balance(acc_bob)

    print('Alice went from %s to %s' % (before_alice, after_alice))
    print('  Bob went from %s to %s' % (before_bob,   after_bob))

    rpc('/forget/acc', acc_alice, acc_bob)
    rpc('/forget/ctc', ctc_alice)


if __name__ == '__main__':
    main()
