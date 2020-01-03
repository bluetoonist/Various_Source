# 크롬 네트워크 탭에서 보이는 헤더 정보를 복붙해 *.txt 파일에 저장한 뒤
# 그 파일의 내용을 읽어와 request 할 수 있게 딕셔너리 형태로 바꿔주는 소스

dict_header = dict()

with open("haeder.txt","r",encoding="utf-8") as f:

    # for x in f.readlines():
    #     print(bytes(x,"utf-8"))

    value_data_parsing = ""
    for x in f.readlines():

        key,val = x.split(" ")[0], x.split(" ")[1::]
        if ":" in key:
            key = key.replace(":","")
        elif ("post" in key) or ("get" in key):
            continue

        for y in val:
            value_data_parsing += y
        dict_header[key] = value_data_parsing

        value_data_parsing = ""

from pprint import pprint
pprint(dict_header)
