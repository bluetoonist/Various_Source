# feature 데이터 추출

import os,json,psutil
from pprint import pprint
current_path = os.getcwd()
json_file_path_list = []


for x in os.listdir():
    if ".json" in x:
        current_path = current_path +"\\"+x
        json_file_path_list.append(current_path)


with open(json_file_path_list[0],"r") as json_file:
    json_data = json.load(json_file)

trace_file = list(json_data.keys())
cmp2 = trace_file.copy()
cmp1 = [proc.name()[0:-4] for  proc in psutil.process_iter()]  # 현재 실행중인 프로세스

cmp3 = list(set(cmp1) & set(cmp2))

for  cmp_pe in cmp3:

    for proc in psutil.process_iter():
        if cmp_pe in proc.name():
            print("=====================================")
            cpu_time = proc.as_dict()['cpu_times'].user
            cpu_percents = proc.as_dict()['cpu_percent']
            create_time = proc.as_dict()['create_time']
            memory_percent = proc.as_dict()['memory_percent']

            print(cmp_pe ,"|",cpu_time,"|",create_time,"|",cpu_percents,"|",memory_percent);

        elif cmp_pe in "svchost.exe":
            break
        else:
            continue