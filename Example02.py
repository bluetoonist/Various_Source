# 멀티 프로세싱을 적용한 EXE 파일 취약점 검색 스크립트
import psutil, datetime
import requests,os,sys,time
from bs4 import BeautifulSoup
from multiprocessing import Process, Manager,cpu_count


current_process_list = []
current_process_name = []

third_range = []

temp_dict = {}

"""
@param1 num -> 범위를 나눌 전체 크기 
@param2 p -> 몇 등분으로 나눌 것인지

"""


def get_divide_range(num, p):
    list1 = [x for x in range(1, num, p)]
    return list1

fileList = []

def get_vul_info(Mobj_, min, max):
    for proc_name in range(min, max):
        request_url = "https://www.rapid7.com/db/?q=" + fileList[proc_name] + "&type="
        print(request_url, "========> ",os.getpid())
        r = requests.get(request_url)
        try:
            soup = BeautifulSoup(r.text, "lxml")
            vulnerable = soup.find("section", {"class": "vulndb__results"})
            vulnerbility = vulnerable.find_all("a")

            for find_vulinfo in vulnerbility:
                get_vulinfo_text = find_vulinfo.find("div", {"class": "resultblock__info-title"}).text.strip()
                Mobj_[fileList[proc_name]] = get_vulinfo_text
            else:
                break
        except:
            pass

def crawling_():
    MpList = []
    Mobj = Manager().dict()

    for x in psutil.process_iter():
        # start_time = datetime.datetime.fromtimestamp(x.create_time()).strftime("%Y-%m-%d %H:%M:%S")
        # current_process_list.append((x.name(), start_time))
        current_process_name.append(x.name())

    with open("exeFilList.txt", "r") as f:
        for read_ in f.readlines():
            read_ = read_.replace("\n", "")
            fileList.append(read_)

    print(len(fileList))
    get_range = get_divide_range(len(fileList), p=int(cpu_count()))
    print(get_range)


    for loop in range(0, len(get_range)):
        if loop == 0:
            MpList.append(Process(target=get_vul_info, args=(Mobj, 0, get_range[loop])))

        else:
            MpList.append(Process(target=get_vul_info, args=(Mobj, get_range[loop - 1], get_range[loop])))

    for _ in MpList:
        _.start()

    for _ in MpList:
        _.join()

    from pprint import pprint

    # for key, val in Mobj.items():
    #     print("취약점이 발견된 EXE 파일 ", key, " ::::", val)
    return Mobj

if __name__ == '__main__':
    start_time = time.time()
    crawling_()
