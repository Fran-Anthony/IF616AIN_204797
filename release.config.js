//Semantic Rlease
module.exports = {
  branches: ["main"],  // Solo se lanzará en la rama "main"
  plugins: [
    "@semantic-release/commit-analyzer",      // Analiza los commits para determinar el tipo de versión
    "@semantic-release/release-notes-generator", // Genera notas de la versión automáticamente
    "@semantic-release/changelog",           // Actualiza el changelog
    "@semantic-release/github",              // Crea un release en GitHub
    "@semantic-release/git"                  // Actualiza archivos en Git
  ],
};

