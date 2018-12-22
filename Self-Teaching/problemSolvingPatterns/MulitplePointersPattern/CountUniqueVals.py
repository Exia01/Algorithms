arr1 = [1, 1, 1, 1, 1, 1, 2]  # 1
arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]  # 7
arr3 = [-2, -1, -1, 0, 1]  # 4


def countUniqueValues(arr):
    try:
        arr
    except:
        raise ('Array does not have values ')
    finally:
        print(f'Array passed: {arr}')
        pass

    try:
        len(arr) > 2
    except:
        return arr

    pointer = 0
    count = 0
    dict = {}

    def addition(arg):
        # print(arg)
        arg += 1
        return arg

    for num in arr:
        if (arr[pointer] != num):
            print(arr[pointer],num)
            pointer += 1
            arr[pointer] = num
            count = addition(count)
    dict['arr'] = arr[0:count + 1]
    dict['count'] = count+1
    return 'Results ',dict


print(countUniqueValues(arr2))
