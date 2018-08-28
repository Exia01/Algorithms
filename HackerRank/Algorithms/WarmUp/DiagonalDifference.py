from math import fabs
arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, - 12],
    ]
n = 3
def diagonalDifference(arr, n):
    sum1 = 0
    sum2 = 0
    # sum1 = sum(arr[i][i] for i in range(n))
    # sum2 = sum(arr[i][n - i - 1] for i in range(n))
    # print(sum1)
    # print(sum2)
    # return str(int(sum2 - sum1))
    difference = sum(row[i] - row[-i - 1] for i, row in enumerate(arr))
    return abs(difference)
 
print(diagonalDifference(arr, n))

