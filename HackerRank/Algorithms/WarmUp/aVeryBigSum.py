ar1 = [2, 2, 2, 2, 2]
ar2 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]


def simpleArraySum(ar2):
    total = 0
    for num in ar2:
        total += num
    return total


print(simpleArraySum(ar2))
