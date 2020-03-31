########################################################################
# BUILD APPLICATION
########################################################################
FROM node:10.16-alpine AS builder

# APP DIR
RUN mkdir -p /app
WORKDIR /app

# COPY PACKAGE DEPENDENCIES
COPY package.json .
COPY yarn.lock .

# INSTALL PACKAGES
RUN yarn install --silent --non-interactive

# COPY PROJECT FILES
COPY . .

# BUILD APP
RUN yarn build

########################################################################
# SERVER APPLICATION STEP
########################################################################
FROM node:10.16-alpine

# CONFIGURE ENVIRONMENT
ENV NODE_ENV=production \
  PORT=80

# CONFIGURE APP DIR
RUN mkdir -p /app
WORKDIR /app

# COPY PROJECT FILE BUILDED
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/dist .

# INSTALL DEPENDENCIES
RUN yarn --prod --silent --no-interactive

# EXPOSE PORT TO WORK
EXPOSE 80 443

CMD ["yarn", "start"]
