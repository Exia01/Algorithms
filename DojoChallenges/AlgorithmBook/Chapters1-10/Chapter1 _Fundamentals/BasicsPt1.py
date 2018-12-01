# import time
# start = time.time()         #the variable that holds the starting time
#  elapsed = 0                 #the variable that holds the number of seconds elapsed.
#  while elapsed < 30:         #while less than 30 seconds have elapsed

# Assignment: Print 1 to 255
for count in range(0, 256):
    print(count)

i = 1
while i < 256:
    print(i)
    i += 1


# Assignment: Print Odd Numbers
for odd in range(0, 10001):
    if odd % 1 != 0:
        print(odd)


#  Assignment: Print Sum
totlOddSum = 0
for odd in range(0, 5000):
    if odd % 2 != 0:
        totlOddSum += odd

print(totlOddSum)


#  Assignment: Iterate through an array
arr1 = [1, 3, 5, 7, 9, 13]


def iterateArr(arr):
    for num in arr:
        print(num, end=" ")

# Another way of doing it ###
    for num in range(len(arr)):
        print(arr[num], end=" ")


print(iterateArr(arr1))


# Assignment: Find Max
arr2 = [-3, 3, 5, 7]


def finMax(arr):
    print("Max Num is: ", max(arr))


def findMax2(arr):
    maxNum = 0
    for num in arr:
        if num > maxNum:
            maxNum = num
    print(maxNum)


print(findMax2(arr2))
print(finMax(arr2))


# Assignment: Find average
avgArr = [1, 3, 5, 7, 20]


def findAvg(arr):
    total = 0
    for num in arr:
        total += num
    print(total//(len(arr)))

    # Another way of implement it
    sm = sum(arr[0:len(arr)])
    print(sm//len(arr))


print(findAvg(avgArr))

# Assignment: Array with Odd Numbers
i = 256


def oddArray(x):
    newOdd = []
    for x in range(0, x):
        if x % 2 != 0:
            newOdd.append(x)
        else:
            print(str(x) + " is an even number")
    return(newOdd)


print(oddArray(i))


# Assignment: Greater than Y
arr = [1, 3, 5, 7]
Y = 3


def greaterThan(arr, y):
    count = 0
    for num in arr:
        if num > y:
            count += 1
        else:
            print("Nope " + str(y) + " is greater / equal than " + str(num))
    return count


print(greaterThan(arr, Y))
