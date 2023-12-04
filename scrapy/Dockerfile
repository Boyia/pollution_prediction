FROM python:3.10-bookworm


#working directory
WORKDIR /app
# Install cron
RUN apt-get update -q 
RUN apt-get install -y cron

#the dependency of this project use: pip freeze > requirements
COPY requirements.txt ./

#python will automatically install all the dependencies 
# RUN pip install requests wordcloud use chinese mirrors

RUN pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt


#copy files
COPY . ./
COPY shell_script/scrape_cron /etc/cron.d/scrape_cron

#cron job
RUN chmod 0744 /etc/cron.d/scrape_cron
RUN crontab /etc/cron.d/scrape_cron 
RUN touch /var/log/cron.log
CMD cron && tail -f /var/log/cron.log

# ENTRYPOINT [ "scrapy", "crawl" ,"pollution" ]


