# Biggie Size
def log(x=None):
    print(x)

arr1 = [-1, 3, 5, -5]

def makeItBig(arr1):
    for num in arr1:
        if (num > 0):
            num = str('big')
    return arr1

log(makeItBig(arr1))


arr2 = [1,2,3,5,67,5753, 387, -34789]
def printLowReturnHigh(arr2):
    low,high = 0,0
    for num in arr2:
        if (num < low):
            low = num

        if (num > high):
            high = num

    print(low)
    return high

print(printLowReturnHigh(arr2))

arr3 = [1,2,3,5,67,5753, 387, -34789]