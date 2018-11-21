# Biggie size
def log(x=None):
    print(x)

arr1 = [-1, 3, 5, -5]

def makeItBig(arr1):
    for num in arr1:
        if (num > 0):
            num = str('big')
    return arr1

log(makeItBig(arr1))

# Print low, return high
arr2 = [1,2,3,5,67,5753, 387, -34789]
def lowReturnHigh(arr2):
    low,high = 0,0
    for num in arr2:
        if (num < low):
            low = num

        if (num > high):
            high = num

    print(low)
    return high

print(lowReturnHigh(arr2))

# Print one, return another
arr3 = [4, 2, 3, 5, 67, 5753, 387, -34789]
def printReturnAnother(arr3):
    for num in range(len(arr3)):
        if (num % 3 == 1):
            print(arr3[-2])
            return num

print(printReturnAnother(arr3))

# Double Vision

arr4 = [1,2,3]
def doubleVision(arr4):
    secondArray = []
    for num in arr4:
        secondArray.append(num*2)
    
    results = (arr4, secondArray)
    return "First and second array: " + str(results)

print(doubleVision(arr4))

arr5 = [-1, 1, 1, 1]
num = 2
def countPositives(arr5, num):
    arr5[-1] = num
    return arr5

print(countPositives(arr5, num))
