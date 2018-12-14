"""
Function takes two arrays
Function should return true if every value in the array has its corresponding value in the second array
The frequency of the values must be the same
https://docs.python.org/3/library/collections.html#collections.defaultdict

"""
from collections import defaultdict


def frequencyCounter(arr1=None, arr2=None):
    # Check if arrays are being passed
    if not arr1 or not arr2:
        raise Exception('Please provide two arrays to compare')

    if len(arr1) != len(arr2):
        raise Exception('Lengths are no the same for arrays')

    dic1 = {}
    dic2 = {}

    # Create Dictionaries
    for num in arr1:
        dic1[num] = dic1.get(num, 0) + 1

    for num in arr2:
        try:
            dic2[num] += 1
        except KeyError:
            dic2[num] = 1

    # Check for matches
    for num in dic1:
        # print(dic1[num])
        # print(num)
        if not num ** 2 in dic2:
            return False
        # print(f'current num is: {num}')
        if dic2.get(num ** 2, None) == None:
            return False

    return True


print(frequencyCounter([1, 3, 2, 4, 3], [1, 4, 9, 16, 9]))


# dic2 = defaultdict(int) # default_factory function calls int() to supply a default count of zero.
#     for num in arr2:
#         dic2[num] += 1

#     print(dict(dic2))


def alternative(arr1=None, arr2=None):
     # Check if arrays are being passed
    if not arr1 or not arr2:
        raise Exception('Please provide two arrays to compare')

    if len(arr1) != len(arr2):
        raise Exception('Lengths are no the same for arrays')

    _newArr = [num for num in arr1]
    _newArr2 = [num for num in arr2]

    for num in _newArr:  # looking for number, not frequency
        try:
            num * num in _newArr2
            _newArr2.remove(num**2)
        except:
            return False
        finally:
            # pass
            print(_newArr2)

    return True


print(alternative([1, 3, 2, 4, 3, 8], [1, 4, 9, 16, 9, 18]))
