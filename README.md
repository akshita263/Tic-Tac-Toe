# Tic-Tac-Toe
The game of Tic-Tac-Toe using react-native.
It isa pretty basic application, that created a grid in the view and hid the borders around the corner of the the grid, 
to give the look of a tic-tac-toe board.
the game considers player as 1 and player 2 as -1. Also we have assigned Cross the value of 1 and circle value of -1.
Thus player 1 is always initialized by cross and player two by -1.
The blank spaces are represnted by 0. thus the game board is initialised as a 2D array with all values equal to zero in the beginning.
As a player clicks on any box, that value in the gameState is changer to the respective player number and their corresponding symbol is visible to the viewer.
Every time a new symbol is added to the grid, current player vallue is changed.
To make sure that a player doesnt click on already selected box an if-else statement is added.
Everytime a new symbol is added the getWinner function is invoked.
it runs a loop through the columns, rows and diagonals to check the sum of each.
if the sum of any of those is 3, player one is returned as winner, else if the sum is -3 player two is declared as winner, and the game is initialised automatically.
else the function continues.
For cases when they are draw, a New Game button is added to the game, that would initialise the gameState to 0 for 2D array and 1 to the current player.
