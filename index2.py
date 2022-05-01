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

    def fmt(x):
        return rpc('/stdlib/formatCurrency', x, 4)

    def get_balance(w):
        return fmt(rpc('/stdlib/balanceOf', w))

    before_Player1 = get_balance(acc_player1)
    before_Player2 = get_balance(acc_player2)

    ctc_alice    = rpc('/acc/contract', acc_player1)
    def player(who):
        def getGuess():
            while player2PlayCount != 3 and hand2[i2 - 1] != num:
                if who == player1:
                    hand1.append(int(input("ENTER THE NUMBER OF YOUR CHOICE")))
                    for indexHand1 in i:
                        print(who, "played ", hand1[indexHand1])
                        if hand1[indexHand1] == num:
                            break
                        return 1
                    i =+1
                    
                    
                    

                elif who == player2 and hand1[i-1] != num:
                    hand2.append(int(input("ENTER A NUMBER OF  YOUR CHOICE")))
                    for ind in i2:
                        print(who,"played", hand2[ind])
                        if hand2[ind] == num:
                            break
                        return 2
                            
                    i2 =+ 1
                    player2PlayCount =+ 1
                
            if player2PlayCount == 3 :
                return 3

        def seeResult (n):
           print("saw result")

        return {'stdlib.hasRandom': True,
                'getGuess':          getGuess,
                'seeResult':       seeResult,
               }
                    
                    
                

        







#generate number directly

'''
#initialize global variables
player1 = "Human"
player2 = "Alien"
playerx = ""
player1PlayCount = 0
player2PlayCount = 0
maxPlayTimes = 3

#game logic
def Game():
    global player1, player2, player, player1PlayCount, player2PlayCount, maxPlayTimes, num
    """enter and assign names to players"""
    print("WELCOME TO THE PRICE IS RIGHT")
    player1Name = input('Player1 Enter Your Name: ')
    player2Name = input('Player2 Enter Your Name: ')
    

    print("THE NUMBER HAS BEEN CHOSEN")
    player1 = player1Name
    
    player2 = player2Name
    
    player = player1

    print(player1, 'turn')
    
    while ((player1PlayCount and player2PlayCount) != maxPlayTimes):
        guessNum = int(input("Enter the number you guessed: "))

        if guessNum == num:
            print(player, "won")
            exit()
            
        elif player == player1:
            player1PlayCount +=1
            player = player2
            print(player2, 'its your turn')
            
        elif player == player2:
            player2PlayCount +=1
            player = player1
            print(player1, 'its your turn')
    else:
        print("NOBODY WON")
        print ("The right price was ", num, " better luck next time" )
player1Wager = input("THE WAGER FOR THIS GAME IS 5 ALGO\n Press 'Y'to agree and 'N' to disagree: " )
player2Wager = input("THE WAGER FOR THIS GAME IS 5 ALGO\n Press 'Y'to agree and 'N' to disagree: " )
if player1Wager and player2Wager == 'Y':
    Game()
else:
    print("YOU CANNOT PLAY THE GAME WITHOUT A WAGER")
    secondChance = input("YOU CAN GO BACK TO THE GAME WITH IF YOU CHANGE YOUR MIND /n PRESS 'Y' IF YOUVE CHANGED YOUR MIND: ")
    if secondChance == 'Y':
        Game()
    else:
        exit()
 '''
