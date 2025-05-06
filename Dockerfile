FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000

# Erreur volontaire : commande inexistante
CMD ["doesnotexist"]
