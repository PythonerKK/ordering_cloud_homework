import datetime
import psutil

def getCPUstate(interval=1):
    return psutil.cpu_percent(interval)
#function of Get Memory
def getMemorystate():
    phymem = psutil.virtual_memory()
    line = "%6s/%s"%(
        #phymem.percent,
        str(int(phymem.used/1024/1024))+"M",
        str(int(phymem.total/1024/1024))+"M"
        )
    return line

def getMemeryPercent():
    phymem = psutil.virtual_memory()
    return phymem.percent

def getCpuCount():
    return psutil.cpu_count(logical=False)

#print(getCPUstate()) #获取cpu占用
#print(getMemorystate()) #获取memery占用率
#print(psutil.cpu_count(logical=False)) # 获取cpu核数
#print(psutil.cpu_percent(interval=20,percpu=False)) #获取cpu间隔时间平均占用率
#print(psutil.disk_partitions()) # 获取磁盘分区信息

#获取系统启动时间
def get_boot_time():
    boot_time = datetime.datetime.fromtimestamp(
        psutil.boot_time()).strftime("%Y-%m-%d %H:%M:%S"
    )
    now_time = datetime.datetime.now()
    boot_time = datetime.datetime.strptime(boot_time, "%Y-%m-%d %H:%M:%S")
    delta = now_time - boot_time
    return str(delta).split('.')[0]


#print(get_boot_time())

