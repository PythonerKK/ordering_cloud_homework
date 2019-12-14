FROM python:3.7
MAINTAINER liyuankun 705555262@qq.com
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /ordering
WORKDIR /ordering

ADD . /ordering/
RUN pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt

ENV SPIDER=/ordering
