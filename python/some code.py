#
# Author: Maija O


def create_dict():
    dict={}
    keys = range(1,21)
    for key in keys:
        dict[key] = key*key
 
    return dict

dict = create_dict()
for k in dict.keys():
    value=dict[k]
    print (k,"**",k,"=",value) 