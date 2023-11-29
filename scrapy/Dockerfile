FROM python:3.11

WORKDIR /app

COPY requirements.txt ./

RUN pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt
#copy files
COPY . ./
# RUN python3 -m venv food
# RUN source food/bin/activate
# RUN pip install requests wordcloud use chinese mirrors


ENTRYPOINT [ "scrapy", "crawl" ,"pollution" ]


