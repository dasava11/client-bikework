### Dockerfile para React + Vite

# -------- Stage 1: Build --------
# Usa una imagen ligera de Node.js para construir la app
FROM node:18-alpine AS builder

# Directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json (si existe) y archivos de configuracion
COPY package*.json ./
COPY tailwind.config.js postcss.config.js ./

# Instala dependencias
RUN npm ci

# Copia el resto del código
COPY . .

# Construye la app en modo producción
RUN npm run build


# -------- Stage 2: Servir --------
# Usa Nginx para servir contenido estático
FROM nginx:alpine

# Elimina configuración default de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos de build desde el stage "builder"
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Ejecuta nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
