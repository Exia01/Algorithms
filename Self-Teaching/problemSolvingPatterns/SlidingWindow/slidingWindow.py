arr = [2, 6, 9, 2, 1, 8, 5, 6, 3]  # 19
n = 3


def maxSubArraySum(arr, n):
    tempSum = 0
    maxSum = 0

    dic = {}
    try:
        n > len(arr)
    except:
        return None
    for num in range(n):
        maxSum += arr[num]
    # print(maxSum)

    tempSum = maxSum
    for i in range(n, len(arr)):
        # print(arr[i-n], arr[i], tempSum)
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = max(maxSum, tempSum)
        # if (tempSum > maxSum):
        #     maxSum = tempSum
    return maxSum


print(maxSubArraySum(arr, n))
