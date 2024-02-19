// Q Given an object with counts of likes and dislikes, return what vote count should be displayed.

// Input:
// ```
// { upvotes: 13, downvotes: 0 }
// ```
// Output:
// ```
// 13
// ```
// Input:
// ```
// { upvotes: 2, downvotes: 33 }
// ```
// Output:
// ```
// -31
// ```

function likesDislikes(obj) {
  return obj["upvotes"] - obj["downvotes"];
}
console.log(likesDislikes({ upvotes: 13, downvotes: 0 }));
console.log(likesDislikes({ upvotes: 2, downvotes: 33 }));
