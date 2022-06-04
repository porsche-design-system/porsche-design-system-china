FROM 459448595428.dkr.ecr.cn-north-1.amazonaws.com.cn/rockdocker-porsche-nginx:v0.2

ARG TMP_DIR="/tmp"
ARG APP_DIR="/usr/src/app"

RUN pwd
RUN ls
ADD ./libs/react/storybook-static/ /usr/src/app/
RUN ls -la ${APP_DIR}
COPY ./DockerDir/dev/nginx.conf /etc/nginx/conf.d/default.conf

# Define default command.
CMD ["nginx", "-g", "daemon off;"]

# Expose ports.
EXPOSE 80
