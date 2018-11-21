testObj = {
    'test1': [1, 2, 3, 4, 1, 2, 3, 5, 6, 8, 10, 1, 1, 2, 2],
    'test2': 1,
    'test3': ['a', 'b', 'c', 'a'],
}

def areThereDuplicates(testObj):

    tempDic = {}
    results = {}
    response = [False, 0, results]
    def TruthyFalsy(args=None):
        if not args:
             pass
        else:
            response[0] = args

        return response[0]


    if (testObj is None):
        return "Please provide proper values to compare"
    


    for num in testObj['test1']:
        x = str(num)
        tempDic[x] = 1 if x not in tempDic else tempDic[x] + 1
        

    for key, num in sorted(tempDic.items()):
        if (num > 1):
            results[key] = results.get(key, 0) + num
            if (TruthyFalsy() == False):
                TruthyFalsy(True)
            if (response[1] == 0):
                response[1]
    
    return response


print(areThereDuplicates(testObj))