// Q. Find the Town Judge

// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.
// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Example 1:
// Input: n = 2, trust = [[1,2]]
// Output: 2

// Example 2:
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1




var findJudge = function(n, trust) {
    const to = Array(n).fill(0);
    const from = Array(n).fill(0);
  
    for (const [ch, p] of trust) {
      to[p - 1]++;
      from[ch - 1]++;
    }
  
    for (let i = 0; i < n; i++) {
      if (to[i] === n - 1 && from[i] === 0) return i + 1;
    }
  
    return -1;
  };
  