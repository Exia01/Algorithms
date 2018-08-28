arr = [2, 3, 6, 6, 5, 24]


def second_largest(numbers):
    count = 0
    current = prev = float('-inf')  # this means infinit because of the " - "  -
    for num in numbers:
        count += 1
        if num == current and prev:
            pass
        else:
            if num > prev:
                if num >= current:
                    current, prev = num, current
                else:
                    prev = num
    # needs to be two because of the numbers in an array?
    return prev if count >= 2 else None


print(second_largest(arr))


