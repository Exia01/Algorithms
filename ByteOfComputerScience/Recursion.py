def rsum(n):
    if n == 1:
        return 1
    else:
        return n + rsum(n - 1)
    
print(rsum(5))

# rSum(1) = 1                  => 1
# rSum(2) = 1 + 2              => 3
# rSum(3) = 1 + 2 + 3          => 6
# rSum(4) = 1 + 2 + 3 + 4      => 10
# rSum(5) = 1 + 2 + 3 + 4 + 5  => 15
# We know that rSum(1) is just 1. There is no operation involved. This is going to be our base case. Without a base case, our stack will overflow. By listing out what happens as the input changes, we can see that the problem can be rewritten this way:

# rSum(1) = 1                  => 1  **BASE CASE**
# rSum(2) = rSum(1) + 2        => 3
# rSum(3) = rSum(2) + 3        => 6
# rSum(4) = rSum(3) + 4        => 10
# rSum(5) = rSum(4) + 5        => 15