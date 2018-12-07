def print1tTo255():
    for x in range(0, 256):  # stops one iteration short
        print(x)


print1tTo255()


def printIntsAndSumTo255():
    num = 0
    while num <= 254:
        num += 1
        print(num)


printIntsAndSumTo255()


def printOdds():
    for num in range(256):
        if num % 2 == 1:
            print(f'current number is: {num}')


printOdds()


def sumNumbers():
    num = 0
    while num < 256:
        num += 1
        print(f'Current total for number is: {num}')


sumNumbers()


def printMaxofArr(arr):
    temp = arr[0]
    # no using built in function
    for num in arr:
        if num > temp:
            temp = num

    return (f'The largest number in array is: {temp}')


print(printMaxofArr([1, 2, 3, 4, 65, 6, 98, -1]))


def returnOddArray():
    arr = []
    for count in range(256):
        if count % 2 != 0:
            arr.append(count)

    return arr


print(returnOddArray())


def returnArraycount(arr, y):
    dc = {}
    _newArr = []
    for num in arr:
        # https://stackoverflow.com/questions/1692388/python-list-of-dict-if-exists-increment-a-dict-value-if-not-append-a-new-dic
        # using .get, you can get a default return if it doesn't exist.
        # By default it's None, but in the case I sent you, it would be 0.
        if num > y:
            dc[num] = dc.get(num, 0) + 1
    for key in dc:
        _newArr.append(key)

    return f'The total numbers bigger than {y} are {len(_newArr)}. \n {_newArr}'


print(returnArraycount([1, 2, 723, 5, -6, 723, 342, 23, 26, 6], 26))


def minMaxAvg(arr):
    totals = [arr[0], arr[0], 0]
    for number in arr:
        totals[2] += number
        # min
        if number < totals[0]:
            totals[0] = number
        # max
        if number > totals[1]:
            totals[1] = number

    return f'min: {totals[0]}, max: {totals[1]} avg: {totals[2]//len(arr)}'


print(minMaxAvg([1, 2, 3, 4, 5, -6, 7, 8, 9, 15]))


def swapNegatives():
    pass
