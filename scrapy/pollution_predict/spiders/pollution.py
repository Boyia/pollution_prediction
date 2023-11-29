import scrapy
from china_cities import *

#from pollution_predict import PollutionItem

from ..items import PollutionItem 


#first get provinces 
#get city need nested dictionary
def provinces():
    city_list=[]
    for city in cities.get_cities_en():
            city_list.append(city)
    return city_list
    # if provinces in ('Shanghai','Tianjin','Beijing','Chongqing','HongKong','Macau'):
    #     provinces_dict[provinces]=provinces
    # else:
    #     for city in cities.get_cities_by_province(provinces):
    #         city_list.append(city.name_en)
    #     print (city_list)
    #     provinces_dict[provinces]=provinces
    #     provinces_dict[provinces][0]= city_list

     
#define spiders
class PollutionSpider(scrapy.Spider):
    name = "pollution"
    allowed_domains = ["aqicn.org"]
    # URL link
    start_urls = ['https://aqicn.org/city/beijing']
    
    #print(start_urls)
    #define the output file
    # custom_settings = {
    #     'FEEDS': {
    #         'pollution.json':{'format': 'json', 'overwrite' : True },
    #     }
    # }

    

    def parse(self, response):
    # use the big div for each element
        # yield pollution_item
        province= provinces()
        
        # for province in province:
        for province in ['shanghai','shantou']:
            #loop detail information
            next_page_url = 'https://aqicn.org/city/' + province
            try:
                yield response.follow(next_page_url,callback=self.parse_coffee_page)
            except Exception as error:
                print(error)
        



    def parse_coffee_page(self, response):
        
        pollutiontable=response.css('div.aqiwidget-table-x')

        pollution_item = PollutionItem()    
        #loop for simple information from homepage
        
        # use scrapy shell to check each one
        pollution_item["city"]= pollutiontable.css('div.aqiwgt-table-title a::attr(title)').get(),
        pollution_item["cur_pm25"]= pollutiontable.css('td#cur_pm25 ::text').get(),
        pollution_item["min_pm25"]=pollutiontable.css('td#min_pm25 ::text').get(),
        pollution_item["max_pm25"]= pollutiontable.css('td#max_pm25 ::text').get(),
        pollution_item["level"]= ' '.join(pollutiontable.css('div#aqiwgtinfo ::text').getall())
    
        yield pollution_item 

        


