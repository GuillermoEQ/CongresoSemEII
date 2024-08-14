FROM node:14

# Configuración del directorio de trabajo
WORKDIR /app

# Instalación de dependencias
COPY package*.json ./
RUN npm install

# Creación de un usuario super root
RUN useradd -ms /bin/bash nodejs

# Cambio al usuario super root
USER nodejs

# Copia de la aplicación
COPY . .

# Exposición del puerto
EXPOSE 5000

# Comando de inicio
CMD ["npm", "start"]