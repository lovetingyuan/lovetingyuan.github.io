## react diff过程

> https://cloud.tencent.com/developer/article/2121346
> Given an array arr of n integers, for each index i, find the length of the longest odd length subsequence of the array such that arr[i] is the median of the array and the number of distinct elements in the subsequence less than arr[i] is equal to the number of distinct elements in the subsequence greater than arr[i].

Note: A subsequence of an array is defined as an array obtained after deleting zero or more elements of the given array. Also, the median of an array with an odd number of elements is defined as the middle element obtained when the array is sorted.

Example

Suppose n = 8 and arr = [3, 4, 1, 5, 1, 2, 2, 2].

For 3, the optimal subsequence is [3, 4, 1, 5, 2] which has a median of 3. 
For 4, the optimal subsequence is [3, 4, 5] which has a median of 5.
For 1, the optimal subsequence is [1]. Note that [1, 1] can not be chosen as the subsequence must be of odd length.
For 5, the optimal subsequence is [5].
For 2, the optimal subsequence is [3, 1, 1, 2, 2].

Thus the answer is [5, 3, 1, 1, 1, 5, 5, 5].

Function Description

Complete the function getMaxSubsequenceLen in the editor below.

getMaxSubsequenceLen has the following parameter:

int arr[n]: The input array

Returns

int[n]: The length of the longest subsequence for each element respecting the given conditions

Constraints

1 ≤ n ≤ 105
1 ≤ arr[i] ≤ 109
Input Format For Custom Testing
Sample Case 0

Sample Input For Custom Testing

STDIN        FUNCTION
-----        --------
5        →    arr[] size n = 5
1     →    arr[] = [1, 3, 2, 1, 3]
3
2
1
3

Sample Output

1
1
5
1
1

Explanation

For 1 and 3, the optimal subsequences are [1] and [3] respectively. For 2, the entire array is a valid subsequence.

Sample Case 1
