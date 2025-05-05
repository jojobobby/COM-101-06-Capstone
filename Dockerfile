# Use official Nginx image
FROM nginx:alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site files into nginx's web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

