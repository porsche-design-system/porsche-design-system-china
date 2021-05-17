FROM 459448595428.dkr.ecr.cn-north-1.amazonaws.com.cn/rockdocker-porsche-nginx:v0.8
ARG TMP_DIR="/tmp"
ARG HTML_DIR="/usr/local/openresty/nginx/html"

# ADD ./dist/ /usr/local/openresty/nginx/html
ADD ./libs/react/storybook-static/ ${HTML_DIR}/
ADD ./static/ ${HTML_DIR}/static

RUN ls -la ${HTML_DIR}
RUN pwd

COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
EXPOSE 8010

