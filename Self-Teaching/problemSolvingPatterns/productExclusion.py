'''
product_exclusion([3, 0, 2, 3]) => [(3*0*2*3)/3, (3*7*2*3)/0, 3*7*3, 3*7*2] 

'''
products = [1,2,3,4]

def testing(vals_list):
    list_length = len(vals_list)
    temp_list = []
    
    for i in range(list_length):
        num = 1
        for j in range(list_length):
            if i == j:
                pass
            else:
                try:
                    num *= vals_list[j]
                except:
                    pass
        temp_list.append(num)
    return  temp_list

print(testing(products))



