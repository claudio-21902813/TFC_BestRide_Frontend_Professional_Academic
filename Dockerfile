FROM nginx:latest

COPY ./www/* /usr/share/nginx/html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]
