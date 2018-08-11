from collections import deque

# # Assignment: Square the Values

# arr = [1, 5, 10, -2]


# def squareValues(arr):
#     for i in range(0, len(arr)):
#         arr[i] = arr[i] * arr[i]
#     return arr


# print(squareValues(arr))


# Assignment: Eliminate the negative numbers
# arr = [1, 5, 10, -2]


# def eliminateNeg(arr):
#     for num in range(0, len(arr)):
#         if arr[num] < 0:
#             arr[num] = 0
#         else:
#             print("We guchi with " + str(arr[num]))
#     return arr

# print(eliminateNeg(arr))


# Assignment: Max, Min and average

# arr = [1, 5, 10, -2]

# def MaxMinAvg(arr):
#     newDic = { }
#     newDic['min'] = arr[0] # we are making a key and assigning it a value
#     newDic['max'] = arr[0]
#     newDic['sum'] = arr[0]

#     for num in arr:
#         if newDic['min'] > num:
#             newDic['min'] = num
#         if newDic['max'] < num:
#             newDic['min'] = num
#         newDic['sum'] += num

#     newDic['average'] = newDic['sum'] // (len(arr))
#     return newDic

# print(MaxMinAvg(arr))


# num1 = [1, 2, 3, 4]

# Assignment: Shifting values in an array
# arr = [1,5, 10, 7, -2]
# x = -1
# y = 0

# def rotateVals(arr, x):
#     arr = deque(arr)
#     arr.rotate(x)
#     arr.pop()
#     arr.insert(len(arr), y)
#     return arr

# print(rotateVals(arr, x))

# Assignment: Number to strings
arr = [-1, -3, 2, 9, 10, -3]


def printOutArr(arr):
    for num in range(0,len(arr)):
        if arr[num] < 0:
            arr[num] = "Dojo"
    return arr


print(printOutArr(arr))