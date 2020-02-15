# hw3
P&amp;E homework3
What code draws the blades of grass?
line11: line(x, height-10, x+random(-10, 10), height-10-random(h));


What code makes the "lawnmower" come by? How often does it come by?
if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
it come by everytime when random(1000) > 999;

What's the point of the h variable?
control the height of the grass;

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
because the grass have to start on the earth and keep going up rather than going down.
