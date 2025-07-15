# VioletTrack 🛍️

**VioletTrack** es una aplicación web moderna para rastrear precios de productos de Amazon y recibir alertas cuando bajen los precios.

## ✨ Características

- 🔍 **Scraping en tiempo real** de productos de Amazon
- 📊 **Historial de precios** y análisis de tendencias
- 📧 **Alertas por email** cuando los precios bajan
- 💾 **Almacenamiento local** de productos trackeados
- 📱 **Diseño responsive** y moderno
- ⚡ **Interfaz rápida** construida con Astro + React

## 🚀 Tecnologías

- **Frontend**: Astro v5, React 18, TypeScript
- **Estilos**: Tailwind CSS v3.4
- **UI Components**: shadcn/ui
- **Scraping**: Cheerio, Axios
- **Iconos**: Lucide React

## ��️ Instalación

```bash
# Clonar repositorio
git clone https://github.com/rubbenix/VioletTrack.git
cd VioletTrack

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:4322`

## 📖 Uso

### 1. Trackear un producto

1. Copia la URL de cualquier producto de Amazon
2. Pégala en el formulario principal
3. Haz clic en "Trackear Producto"
4. El sistema extraerá automáticamente título, precio, imagen y disponibilidad

### 2. Configurar alertas

1. Después de trackear un producto, aparecerá un campo de email
2. Ingresa tu email para recibir alertas
3. Serás notificado cuando el precio baje

### 3. Gestionar productos

- Ve todos tus productos trackeados en la sección inferior
- Elimina productos individuales o limpia toda la lista
- Consulta el historial de precios y tendencias

## 🎯 Funcionalidades Implementadas

- ✅ Scraping real de Amazon con fallback a datos simulados
- ✅ Extracción de título, precio, imagen y disponibilidad
- ✅ Almacenamiento local de productos trackeados
- ✅ Interfaz para gestionar productos
- ✅ Sistema de alertas por email (frontend)
- ✅ Historial de precios básico
- ✅ Diseño responsive y moderno

## 👨‍💻 Autor

**Rubén** - [@rubbenix](https://github.com/rubbenix)
