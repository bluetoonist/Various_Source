# 멀티프로세싱을 적용한 실행중인 프로세스에 대한 공개된 취약점 검사 스크립트
"""
@author
- j4k010

@Requirement
- psutil, lxml, requests, bs4

@Last Check
- 2020.10.22
"""

import time
import requests,psutil,json
from datetime import datetime

from multiprocessing import Process,Manager,cpu_count
from bs4 import BeautifulSoup

start = time.time()

def get_divide_range(num,p):
    return_list = [x for x in range(1,num ,p)]
    return return_list

def get_vulner_info(MpObj_dict_param1, MpObj_list_param2,min,max):
    for _ in range(min, max):
        request_url = "https://www.rapid7.com/db/?q=" + MpObj_list_param2[_] + "&type="
        print(request_url)
        r = requests.get(request_url)
        temp_str = str()
        temp_list = list()
        soup = BeautifulSoup(r.text, "lxml")
        vulnerable = soup.find("section", {"class": "vulndb__results"})
        if vulnerable is None:
            continue

        else:
            vulnerbility = vulnerable.find_all("a")

            try:
                for find_vulinfo in vulnerbility:
                    get_vulinfo_text = find_vulinfo.find("div", {"class": "resultblock__info-title"}).text.strip()
                    # temp_str += get_vulinfo_text + ", "
                    # temp_str = get_vulinfo_text+","
                    temp_list.append(get_vulinfo_text)

            except:
                pass
            MpObj_dict_param1[MpObj_list_param2[_]] = temp_list
            # print(_)
            # print(temp_str)

def processing_crawling():
    MpList = []
    MpObj_dict = Manager().dict()
    MpObj_list = Manager().list()


    for proc in psutil.process_iter():
        if ".exe" in proc.name():
            exe_append = proc.name()[0:-4]
            MpObj_list.append(exe_append)

    MpObj_list = list(set(MpObj_list))

    print("Function call processing_crawling : " ,MpObj_list)

    get_range = get_divide_range(len(MpObj_list) ,p=int(cpu_count())*2 )

    for loop in range(1,len(get_range)):
        if loop == 1:
            MpList.append(Process(target=get_vulner_info, args=(MpObj_dict,MpObj_list, 0, get_range[1])))
        else:
            MpList.append(Process(target=get_vulner_info, args=(MpObj_dict,MpObj_list, get_range[loop - 1], get_range[loop])))
            pass
    for _ in MpList:
        _.start()

    for _ in MpList:
        _.join()

    return MpObj_dict

if __name__ == '__main__':
    start = time.time()
    r = processing_crawling()
    print(type(r))
    process_ret_json = json.dumps(r.copy())

    print(process_ret_json)

    today = str(datetime.today()).split(".")[0].replace(" ", "_")  # 현재 날짜 가져오기
    today = today.replace(":","_")

    print(today+".json")

    with open(today+".json", "w") as json_file:
        # json.dump(process_ret_json,json_file)
        json_file.write(process_ret_json)

    print(time.time() - start )