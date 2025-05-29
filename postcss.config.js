// This file is used to configure PostCSS, which processes CSS files.
// It includes Tailwind CSS and Autoprefixer as plugins.
// client-bikework/postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss, autoprefixer]
}
