# BomberMan-1

# The game we designed is all based on luck.

Given 9*9 grid which makes a total of 81 boxes.
Out of these 81 boxes 10 boxes contain bomb and other boxes are normal.
If a normal box is clicked, the user is awarded a point and if a user clicks on a
box containing a bomb, the game gets over (GAME OVER!).

# Note:if you want again play the game then click on the play new Game Button.
	
# Stratgie
1.Create an array of random numbers where each number lies between 1 to 81.

2.Every number in the array should be unique.

3.The numbers in the array are nothing but indices where the bomb is planted.

4.If a bomb is clicked you need to highlight all the boxes that contained bombwith red color.

5.You need to distinguish the boxes which have been clicked and which have not been clicked. (As a standard you may color clicked 
  boxes with green color and boxes which have not been clicked should remain white).

6.As soon as a box containing bomb is clicked you need to color that box red.

7.If the user makes 71 guesses and still has not clicked on a bomb you need to notify the user with the message "Congratulations
  you won the game"

8.After a user completes the game or clicks the bomb box, he should be asked to start afresh game.

9.User should be able to play the game on every device(desktop, mobile or a tab)

