x = 5
totalSum = 1


def iFactorial(x, totalSum):
    # i = 1 
    # while i <= x:
    #     totalSum = totalSum * i
    #     i += 1  # need this for it sot that it won't run infinetely 
    # return totalSum

    # another way of doing it. 
    for i in range(1,6): # needs to start at 1 othewise, i will covert it to 0
        totalSum = totalSum * i
    return totalSum

print(iFactorial(x,totalSum))