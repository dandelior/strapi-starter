export default {
  config: {
    locales: ["es"],
    translations: {
      es: {
        "Auth.form.welcome.title": "Bienvenido!",
        "content-manager.containers.Home.pluginHeaderTitle":
          "Gestor de contenido",
        "content-manager.components.LeftMenu.collection-types":
          "Tipos de posts",
        "content-manager.components.LeftMenu.single-types": "Páginas",
        "global.back": "Volver",
        "global.change-password": "Cambiar contraseña",
        "global.content-manager": "Gestor de contenido",
        "global.password": "Contraseña",
        "global.profile": "Perfil",
        "global.save": "Guardar",
        "global.select": "Seleccionar",
        "global.settings": "Ajustes",
        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Los cambios de preferencia se aplicarán solo a ti.",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
