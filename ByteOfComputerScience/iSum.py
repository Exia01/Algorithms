def iSum(num):
    sum = 0
    for i in range(num + 1):
        sum += i
        print(sum)
    return sum

print(iSum(5))
