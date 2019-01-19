""" 
Anagram: Given two strings write a function to determine if the second string is an anagram of the first 

Example: Cinema and Iceman
"""


def validAnagram(string1, string2):

    # Ensure absolute comparison
    string1 = string1.replace(' ', '').lower()
    string2 = string2.replace(' ', '').lower()

    dictionary1 = {}
    dictionary2 = {}
    for letter in string1:
        try:
            dictionary1[letter] += 1
        except KeyError:
            dictionary1[letter] = 1

    for letter in string2:
        try:
            dictionary2[letter] += 1
        except KeyError:
            dictionary2[letter] = 1

    print(dictionary2)
    print(dictionary1)
    # loop through dictionaries
    # for key, value in dictionary1.items():
    #     if not key in dictionary2:
    #         return False

    for value in dictionary2:
        item = None
        print(dictionary1.get(value))
        try:
            if dictionary1.get(value) == item:
                raise KeyError 
        except KeyError:
            return False


print(validAnagram('Cinemo', 'Iceman'))
