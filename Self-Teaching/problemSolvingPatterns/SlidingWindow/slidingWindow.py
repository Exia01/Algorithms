arr = [2, 6, 9, 2, 1, 8, 5, 6, 3] # 19
n = 3

def maxSubArraySum(arr, n):
    tempsum = 0
    maxSum = 0

    try:
        n > len(arr)
    except:
        return null

    for num in len(arr):
        print(num)

print(maxSubArraySum(arr,n))



