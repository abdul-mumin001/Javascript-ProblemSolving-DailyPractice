
==> Introduction to CSS Grid :-
Grid is a display property. When we give any container's display as Grid so that container will become a grid container.
display: grid;

fr :- fractional unit. So, it will take the fraction of the available space into the container.

Question :- How the lines will be visible in grid ? 
Ans:- Follow the give steps :- 
        a. Right click on the browser.
        b. Click on inspect.
        c. find the container in inspect's html code.
        d. Click on the Grid written after the container.

Row :- Horizontal aligned items are known as rows. Horizontal lines of grid are rows.
Column :- Vertically aligned items are known as columns. Vertical lines of grid are columns.
Lines :-
    a. column-lines :- Lines between the columns are known as column lines.
    b. row-lines :- Lines between the rows are known as row lines.
Gaps :- 
    a. column-gap :- The gap between two column is known as column gap.
    b. row-gap :- The gap between two rows are known as row gaps.

=> grid-template-columns :- The grid-template-columns is used to make a template for our container's columns. No. of columns needed + width of all the columns.
e.g :- grid-template-columns: 100px 200px 50px;
It will make 3 columns in the grid container with size of 1st column as 100px second one as 200px and third one as 50px. You can specify more columns as you require.

=> grid-template-rows :- The grid-template-rows is used to make a template for out container's rows. Height of each row.
e.g :- grid-template-rows: 100px 200px 50px;
It will make the first row as 100px second row as 200px and third row as 50px.

=> grid-column-gap :- Using grid-column-gap you can give the gap between two specify or we can specify the gap size between two columns.
e.g :- grid-column-gap : 15px;
It will make the 15px gap between all the columns.

=> grid-row-gap :- Using grid-row-gap you can give the gap between two rows or you can specify the gap's size between two rows.
e.g :- grid-row-gap: 15px;
It will make the 15px gap between all the rows.

=> grid-gap :- Using grid-gap we can specify the gap between rows and columns.
e.g :- grid-gap: 15px;
It will give the gap of 15 px between all the rows and columns.
e.g :- grid-gap: 10px 15px;
It will give the gap of 10px between rows and 15px between columns.

=> grid-column-start :- It is used for the starting line of the item's column.
e.g:- grid-column-start: 2;
It will start from line no. 2;

=> grid-column-end :- It is used for the ending line of the item's column.
e.g:- grid-column-end: 6;
It will end in line no. 6;

=> grid-column :- It is used to specify the starting and ending of the item's line.
General form :- grid-column: start / end;
e.g :- grid-column: 2 / 6;
Here the item will start from line no. 2 and end in line no.6;
e.g :- grid-column: 2 / span 3;
Here the item will start from line no. 2 and will take the space of next 3 boxes.


=> grid-row-start :- It is used for the starting line of the item's row.
e.g:- grid-row-start: 2;
It will start from line no. 2;

=> grid-row-end :- It is used for the ending line of the item's row.
e.g:- grid-row-end: 6;
It will end in line no. 6;

=> grid-row :- It is used to specify the starting and ending of the item's line.
General form :- grid-row: start / end;
e.g :- grid-row: 2 / 6;
Here the item will start from line no. 2 and end in line no.6;
e.g :- grid-row: 2 / span 3;
Here the item will start from line no. 2 and will take the space of next 3 boxes.

=> grid-area: It is use to specify the area taken by the item or we can say we can give the rows and columns start and end in a single line.
General form:- grid-area: row-start / column-start / row-end / column-end;
e.g :- grid-area: 2 / 5 / 6 / 7;
Here the item will start from row line 2 and column line 5 and end on row line 6 and column line 7;


=> grid-template-areas :- Using grid-template-areas we can easily give the direct template for our container(layout).
E.g:-     grid-template-areas: 'header header header header header'
                         'left content content content right'
                         'left content content content right'
                         'left content content content right'
                         'footer footer footer footer footer';
In first row it will make five columns for header. In second row to 4th row it will make 1 column for left and 3 column for content and 1 column for right and in the last row it will make 5 columns for footer.

