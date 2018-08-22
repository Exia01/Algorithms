from functools import lru_cache

fibonacci_Cache = {}

def rFib(n):
    # If we have cached the value, then return it
    if n in fibonacci_Cache:
        return fibonacci_Cache[n]

    if n == 1:
        value = 1
    elif n == 2:
        value = 1
    elif n > 2:
        value = rFib(n - 1) + rFib(n - 2)
        
    # Cache the value and return it
    fibonacci_Cache[n] = value
    return value


for i in range(1, 1001):
    print(i, ":", rFib(i))


# Another way of doing it 
@lru_cache(maxsize = 1000)
def rFib2(n):
    # check that the imput is an integer
    if type(n) != int:
        raise TypeError("n must be a positive int")
    if n < 1 :
        raise TypeError("n must be a positive int")
    # compute the nth term
    if n == 1:
        return 1
    elif n == 2:
        return 1
    elif n > 2:
        return rFib2(n - 1) + rFib2(n - 2)

print(rFib2("one"))
