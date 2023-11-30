FROM mongo:7.0


COPY *.js /docker-entrypoint-initdb.d/


EXPOSE 27017
CMD ["mongod"]
