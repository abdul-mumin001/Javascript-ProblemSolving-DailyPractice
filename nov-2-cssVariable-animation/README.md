1. Css Variables :- 
What are variables ?
--> Declaring variable and intializing its value;
        --variable-name: value;
--> Using the variable wherever we want.
        var(--variable-name);

Why variables?
Variable are used to make our wep-page more simpler. Styling easier.
We can make a variable and use that variable wherever we want and if we need to change the value. So need to change at one place only and it will be reflected everywhere.

Types of variables :- 
1. Local variables :- It is a variable which is declared in a specific block (container) and it will be used only in that container not outside that.
.container{
    --bg-color: red;
    color: var(--bg-color);
}

2. Global variable :- To make a global variable we should declare the variable in :root.
:root {
    --bg-color: red;
}
.container {
    color: var(--bg-color);
}

2. Css functions :- 
We have functions in CSS. 
url() :- It is use to give the path of image.
rgb() :- It is use to give the rgb value.
rgba() :- It is use to give rgba value.
var() :- It is use to use the varaible.
calc() :- It is a function which is use to calculate some value.
 E.g:- 
 .container {
    height: 300px;
    width: calc(100vw - 200px);
    background-color: red;
  }
max() :- It will give the maximum value of the comma seperated values.
    max(5,6,7,9,8) :- 9
min() :- It will give the minimum value of the comma seperated values.
    min(5,6,7,9,8) :- 5

3. animations in CSS.

--> animation-name: It is use to give the name of the animation. You can give any name.
--> animation-duration: It is use to give the duration or we can say the time to complete one iteration.
--> animation-iteration-count: It is use to give how many time you need to animate the animation. If you want it for infinte times. you should use infinite.
--> animation-fill-mode: It is use to give the end of the animation. That means after completion of animation where this should relay. it should be on starting or end.
                    To make it at starting we give value as 'alternate' , to make it at end we give value as 'forwards'.
--> animation-timing-function: It is use to give the timings for the animation like
                    ease-in :- Slow to fast.
                    ease-out :- fast to slow.
                    ease-in-out:- slow - fast - slow.

--> animation-delay: It is use to give the delay after that the animation will start.
--> animation-direction: It will give the direction to the animation like it should be normal or reverse.
