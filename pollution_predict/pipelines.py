# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter

from pollution_predict import settings





class PollutionPredictPipeline:
    def process_item(self, item, spider):
        return item
    

import pymongo

class MongoDBPipeline:
    def __init__(self):
        connection = pymongo.MongoClient(
                    settings['MONGODB_SERVER'],
                    settings['MONGODB_PORT']
                )
        db = connection[settings['MONGODB_DB']]
        self.collection = db[settings['MONGODB_COLLECTION']]

    def process_item(self, item, spider):
        valid = True
        for data in item:
            if not data:
                valid = False
                raise ("Missing {0}!".format(data))
        if valid:
            self.collection.insert(dict(item))
        return item
        
    
    def close_spider(self, spider):

        ## Close cursor & connection to database 
        self.cur.close()
        self.connection.close()

