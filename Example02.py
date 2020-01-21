# temp Backup

import psutil,datetime
import requests
from bs4 import BeautifulSoup

current_process_list = []
current_process_name = []

third_range = []

temp_dict = {}
for x in psutil.process_iter():

    # start_time = datetime.datetime.fromtimestamp(x.create_time()).strftime("%Y-%m-%d %H:%M:%S")
    # current_process_list.append((x.name(), start_time))
    current_process_name.append(x.name())

# print(current_process_name)
# print( len(current_process_name) )

"""
@param1 num -> 범위를 나눌 전체 크기 
@param2 p -> 몇 등분으로 나눌 것인지

"""
def get_divide_range(num,p):
    result = 0
    list1 = []
    allocate = int(num/p)

    for x in range(p):
        list1.append(allocate)
    list1[p-1] += (num%p)+1

    for x, y in zip(list1, range(0, len(list1)+1)):
        result += x
        list1[y] = result
    return list1

get_range = get_divide_range(len(current_process_name),3)
print(get_range)

for loop in range(0,len(get_range)):
    if loop == 0 :
        print( 0, get_range[loop])
    else:
        print(get_range[loop-1],get_range[loop])


# def get_vul_info():
#     for proc_name in list(set(current_process_name)):
#         request_url = "https://www.rapid7.com/db/?q=" + proc_name + "&type="
#         r = requests.get(request_url)
#         try:
#             soup = BeautifulSoup(r.text, "lxml")
#             vulnerable = soup.find("section", {"class": "vulndb__results"})
#             vulnerbility = vulnerable.find_all("a")
#
#             for find_vulinfo in vulnerbility:
#                 # find_vulinfo.find("div", {"class": "resultblock__info-title"}).text.strip()
#                 get_vulinfo_text = find_vulinfo.find("div", {"class": "resultblock__info-title"}).text.strip()
#                 temp_dict[proc_name] = get_vulinfo_text
#             else:
#                 continue
#         except:
#             pass
