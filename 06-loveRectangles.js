/*
A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.
They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.

Two rectangles overlapping a little. It must be love.
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects ↴ like this :

  var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};

Your output rectangle should use this format as well.

===== BREAKDOWN =====
Let's break this problem into subproblems. How can we divide this problem into smaller parts?
- We could look at the two rectangles’ "horizontal overlap" or "x overlap" separately from their "vertical overlap" or "y overlap."

Lets start with a helper function findXOverlap().

Need help finding the x overlap?
- Since we’re only working with the x dimension, we can treat the two rectangles' widths as ranges on a 1-dimensional number line.

What are the possible cases for how these ranges might overlap or not overlap? Draw out some examples!

There are four relevant cases:
  1) The ranges partially overlap:
  Two horizontal parallel lines. The right half of the top line overlaps the left half of the bottom line.
  2) One range is completely contained in the other:
  Two horizontal parallel lines. The bottom line is longer than the top line and extends farther out to the left and right.
  3) The ranges don't overlap:
  Two horizontal parallel lines. The right end of the bottom line is to the left of the left end of the top line.
  4) The ranges "touch" at a single point:
  Two horizontal parallel lines. The right end of the bottom line is directly below the left end of the top line.

Let's start with the first 2 cases. How do we compute the overlapping range?
- One of our ranges starts "further to the right" than the other. We don't know ahead of time which one it is, but we can check the starting points of each range to see which one has the highestStartPoint. That highestStartPoint is always the left-hand side of the overlap, if there is one.

Not convinced? Draw some examples!

Similarly, the right-hand side of our overlap is always the lowestEndPoint. That may or may not be the end point of the same input range that had the highestStartPoint—compare cases (1) and (2).

This gives us our x overlap! So we can handle cases (1) and (2). How do we know when there is no overlap?
- If highestStartPoint > lowestEndPoint, the two rectangles do not overlap.

But be careful—is it just greater than or is it greater than or equal to?
- It depends how we want to handle case (4) above.

If we use greater than, we treat case (4) as an overlap. This means we could end up returning a rectangle with zero width, which ... may or may not be what we're looking for. You could make an argument either way.

Let's say a rectangle with zero width (or zero height) isn't a rectangle at all, so we should treat that case as "no intersection."

Can you finish findXOverlap()?
- Here's one way to do it:

  function findXOverlap(x1, width1, x2, width2) {

    // find the highest ("rightmost") start point and lowest ("leftmost") end point
    var highestStartPoint = Math.max(x1, x2);
    var lowestEndPoint = Math.min(x1 + width1, x2 + width2);

    // return null overlap if there is no overlap
    if (highestStartPoint >= lowestEndPoint) {
        return {startPoint: null, width: null};
    }

    // compute the overlap width
    var overlapWidth = lowestEndPoint - highestStartPoint;

    return {startPoint: highestStartPoint, width: overlapWidth};
}

How can we adapt this for the rectangles’ ys and heights?


*/

function findXOverlap (x1, width1, x2, width2) {
  var highestStartPoint = Math.max(x1, x2);
  var lowestEndPoint = Math.min(x1 + width1, x2 + width2);

  if ()
}

function intersection (rect1, rect2) {

}
