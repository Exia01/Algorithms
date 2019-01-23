from collections import deque
import random

# Assignment: Square the Values

arr = [1, 5, 10, -2]


def squareValues(arr):
    for i in range(0, len(arr)):
        arr[i] = arr[i] * arr[i]
    return arr


print(squareValues(arr))


# Assignment: Eliminate the negative numbers
arr = [1, 5, 10, -2]


def eliminateNeg(arr):
    for num in range(0, len(arr)):
        if arr[num] < 0:
            arr[num] = 0
        else:
            print("We guchi with " + str(arr[num]))
    return arr

print(eliminateNeg(arr))


# Assignment: Max, Min and average

arr = [1, 5, 10, -2]

def MaxMinAvg(arr):
    newDic = { }
    newDic['min'] = arr[0] # we are making a key and assigning it a value
    newDic['max'] = arr[0]
    newDic['sum'] = arr[0]

    for num in arr:
        if newDic['min'] > num:
            newDic['min'] = num
        if newDic['max'] < num:
            newDic['min'] = num
        newDic['sum'] += num

    newDic['average'] = newDic['sum'] // (len(arr))
    return newDic

print(MaxMinAvg(arr))


num1 = [1, 2, 3, 4]

# Assignment: Shifting values in an array
arr = [1,5, 10, 7, -2]
x = -1
y = 0

def rotateVals(arr, x):
    arr = deque(arr)
    arr.rotate(x)
    arr.pop()
    arr.insert(len(arr), y)
    return list(arr) # returns the object to a list. 

print(rotateVals(arr, x))

# Assignment: Number to strings
arr = [-1, -3, 2, 9, 10, -3]


def printOutArr(arr):
    for num in range(0,len(arr)):
        if arr[num] < 0:
            arr[num] = "Dojo"
    return arr


print(printOutArr(arr))

# Assignment: Random Array
arr = []
a = 10
b = 0


def createArr(a, b, arr):
    while b <= a:
        arr.append(random.randint(0, 100))
        b += 1
    return arr
print(createArr(a, b, arr))

# Assignment: Swapping two Values
x = [2, 3, 5, 7, 6]

def swapVals(arr):
    temp =  arr[len(arr)-1]
    arr[len(arr)-1] = arr[0]
    arr[0] = temp
    return arr

print(swapVals(x))


# Assignment: Reversing Array


x = [1, 2, 3, 4, 5]

def reversing(arr):
    size = len(arr)  # Get the length of the sequence
    endOfArrNum = size -1 #we are taking the lenght of the array and getting the positon on the list in this case '5'
    its = size//2 # number of iterations rquired
    for i in range(0, its): # will run 4 times
        # print(its)
        # print(arr)
        # print(endOfArrNum)
        temp = arr[endOfArrNum]
        arr[endOfArrNum] = arr[i]
        arr[i] = temp
        endOfArrNum-= 1
    return arr


print(reversing(x))


# Assignment: Reversing Array
arr = [1, 3, 5, 7]
x = 10
y = 2

#  for i in reversed(arr):
#         print(i)
def insertNum(arr, x, y):
    # arr.insert(y,x)
    # return arr

    # for i in reversed(arr):
    #     print(i)
    arr.append(0)
    for i in range(len(arr)-1, 0, -1):
        if arr[i] == arr[y]:
            break
        else:
            print(arr)
            arr[i] = arr[i-1]
    arr[y] = x
    return arr

print(insertNum(arr,x,y))

# Assignment: removing negatives

arr = [0, -1, 2, -3, 4, -5, 6]
count = 0 


def removeNegatives(arr):
    for num in arr:
        if num < 0:
            arr[arr.index(num)] = - num
    return arr


print(removeNegatives(arr))

Nombre = "Tany"
def printTany(name):
    if name == "Tany":
        print("Hola Tany")
    else:
         print("No reconocemos el nombre")

print(printTany("heather"))