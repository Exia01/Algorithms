arr = [24, 8, 23, 3]
arr = []
a = 8
b = 1


def linearSearch(key, arr):
    if not arr:
        return False

    for num in arr:
        if num == key:
            return True
        
    return -1


print(linearSearch(b, arr))