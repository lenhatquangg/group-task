FROM node:22-alpine
WORKDIR /var/err_10_PQdevs
COPY . .
EXPOSE 3000
RUN if [ -f ".env" ] ; then \
        echo "Your data has been leaked" ; \
    else \
        npm install express ; \
    fi;
CMD "node" "Error_10.js"