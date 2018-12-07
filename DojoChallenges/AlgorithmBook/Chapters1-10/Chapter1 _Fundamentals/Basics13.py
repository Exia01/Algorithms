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
