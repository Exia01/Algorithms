x = 5

def rFactorial(x):
    if x < 0:  # this is an error check. Can't find rFactorial less than 0
        return -1
    elif x < 2:
        return 1
    else:
        return x * rFactorial(x - 1)

print(rFactorial(x))
