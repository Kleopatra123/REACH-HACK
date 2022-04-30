"""This game generates random number, then players try to guess the number generated"""

import random
#generate number directly
num = random.randrange(0,10)

#initialize global variables
player1 = "Human"
player2 = "Alien"
player = ""
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