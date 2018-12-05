# Biggie size
def log(x=None):
    print(x)


arr1 = [-1, 3, 5, -5]


def makeItBig(arr1):
    for num in arr1:
        if num > 0:
            num = str('big')
    return arr1


log(makeItBig(arr1))

# Print low, return high
arr2 = [1, 2, 3, 5, 67, 5753, 387, -34789]


def lowReturnHigh(arr2):
    low, high = 0, 0
    for num in arr2:
        if num < low:
            low = num

        if num > high:
            high = num

    print(low)
    return high


print(lowReturnHigh(arr2))

# Print one, return another
arr3 = [4, 2, 3, 5, 67, 5753, 387, -34789]


def printReturnAnother(arr3):
    for num in range(len(arr3)):
        if num % 3 == 1:
            print(arr3[-2])
            return num


print(printReturnAnother(arr3))


# Double Vision
arr4 = [1, 2, 3]


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

_arr1 = [1, 2, 4, 1, 3, 5, 2, 4, 6]


def evenAndOdds(_arr1):
    oddCount = 0
    evenCount = 0

    def checkCount(*args):
        if evenCount == 3:
            print("Even more so!")

        if oddCount == 3:
            print("That's odd")

    def resetCount():
        oddCount = 0
        evenCount = 0

    for num in _arr1:
        if evenCount == 3 or oddCount == 3:
            resetCount()

        if num % 2 == 0:
            evenCount += 1
            oddCount = 0
            checkCount(evenCount)
        else:
            oddCount += 1
            evenCount = 0
            checkCount(oddCount)


print(evenAndOdds(_arr1))

_arr2 = [1, 2, 4, 6, 7, 8, 9]


def incrementTheSeconds(_arr2):
    for num in range(len(_arr2)):
        if _arr2[num] % 2 != 0:
            _arr2[num] = _arr2[num] + 1

    return _arr2


print(incrementTheSeconds(_arr2))

_arr3 = ['test', 'hello', 'world']


def previousLengths(_arr3):
    for num in range(len(_arr3)):
        _arr3[num] = len(_arr3[num])

    return _arr3


print(previousLengths(_arr3))

_arr4 = [1, 2, 3, 4, 5, 6]


def sevenToMost(_arr4):
    results = []
    for num in range(1, len(_arr4)):
        results.append(_arr4[num]+7)

    return results


print(sevenToMost(_arr4))


def reverseArray(arr):
    tmp = 0
    endPoint = len(arr)-1
    for num in range(0, len(arr) // 2):
        temp = arr[num]
        arr[num] = arr[endPoint]
        arr[endPoint] = temp
        endPoint -= 1

    return arr


print(reverseArray([3, 1, 6, 4, 2]))


def outlookNegative(arr):
    for num in range(len(arr)):
        temp = arr[num] * 2
        arr[num] = arr[num] - temp

    return arr


print(outlookNegative([1, -3, 5, 9]))


def alwaysHungry(arr):
    if not "food" in arr:
        return("I'm hungry!!")
    for item in arr:
        str(item).lower()
        if (item == "food" or item == "Food"):
            print("Yummy!!")


print(alwaysHungry([1, 2, "hi", "Hello", "food",6, 3,6,0, "Food"]))
