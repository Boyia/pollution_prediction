# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy.item import Item, Field

class PollutionPredictItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field()
    pass

class PollutionItem(scrapy.Item):
    city = scrapy.Field()
    cur_pm25 = scrapy.Field()
    min_pm25 = scrapy.Field()
    max_pm25 = scrapy.Field()
    level = scrapy.Field()
