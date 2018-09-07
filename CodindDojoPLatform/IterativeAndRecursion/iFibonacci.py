num = 6

def Fib(n):
    a,b = 0,1
    for i in range(n):
        a, b = b, a + b
        print("a is " + str(a))
        print("b is " + str(b) + "\n")
    return a
    
print(Fib(num))
        