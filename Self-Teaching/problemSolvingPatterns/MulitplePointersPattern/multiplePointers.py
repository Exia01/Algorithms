arr = [-4, -3, -2, -1, 0, 1, 2, 5]


def sumZero(arr):
    endPoint = len(arr)-1
    for num in range(len(arr)):
        print(
            f'Current numbers are:  arr[num]: {arr[num]}, arr[endPoint]: {arr[endPoint]} \n')
        if arr[num] + arr[endPoint] > 1:
            endPoint -= 1
        if arr[num] - arr[endPoint] < 0:
            num += 1
        if arr[num] == arr[endPoint]:
            return False
        if arr[num] - arr[endPoint] == 0:
            return [arr[num], arr[endPoint]]
        if arr[num] + arr[endPoint] == 0:
            return [arr[num], arr[endPoint]]


print(sumZero(arr))



arr = [-4, -3, -2, -1, 0, 1, 2, 5]
def sumZero2(arr):
    endPoint = len(arr) - 1
    start = 0
    while(arr[start] != arr[endPoint]):
        sum = arr[start] + arr[endPoint]
        if sum == 0:
            return [arr[start], arr[endPoint]]
        elif sum > 0:
            endPoint -= 1
        else:
            start +=1
    
            
print(sumZero2(arr))


""" For Some reason the following code below is not working: """

# if arr[num] + arr[endPoint] > 1:
#     endPoint = endPoint - 1
# elif arr[num] - arr[endPoint] < 0:
#     num = num + 1
# elif arr[num] == arr[endPoint]:
#     return False
# else:
#     if arr[num] - arr[endPoint] == 0:
#         return [arr[num], arr[endPoint]]
#     if arr[num] + arr[endPoint] == 0:
#         return [arr[num], arr[endPoint]]
