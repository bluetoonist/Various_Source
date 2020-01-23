import os,sys,time

from processing_ import Example02

start_time = time.time()
dict = Example02.crawling_()

print(dict)

print(" --- %s seconds ----" % (time.time() - start_time))
