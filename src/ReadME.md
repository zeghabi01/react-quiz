THE LOGIC :


the default settings :

    sections : {
        startSection : true,
        gameSection : false
    },
    status : {
        correct : false,
        wrong : false,
        fail : false,
        timer : true,
        loader : false
    },
    result : {
        win : false,
        loss : false 
    }

this return back when the game ends (
  when we click on exit (loss or win)
)


--> game over when the time's up
  -- time is up                           *
  -- show loader for a certain period     ****  THE HERO IS setTimeout
  -- when loader ends show sad emoji      ****
  -- show the game over section           *

--> choosing option 
  -- make the body unclickable
  -- waiting for a period and show the result (show the loader)
  -- if the answer correct : 
    * make the option green 
    * show the correct logo
    * jump to the next question (index++)
        if all answers correct and the question ends show the result section (win)
  -- if the answer wrong :
    * make the option red and show the correct answer with green color
    * show the wrong logo
    * show the result section after a few seconds (loss)

BUGS : 
  --- TIMER BUG 
  --- Question Not Shuffling after Start again 
  --- hover still shown when choose answer 



