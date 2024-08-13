# Tredex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

/src
│
├── /app
│ ├── /core
│ │ ├── /guards # Guardias para rutas, si es necesario
│ │ ├── /interceptors # Interceptores HTTP
│ │ ├── /services # Servicios globales del proyecto
│ │ ├── /models # Modelos y clases de datos compartidos
│ │ └── core.module.ts # Módulo Core para singleton services
│ │
│ ├── /shared
│ │ ├── /components # Componentes compartidos (botones, modales, etc.)
│ │ ├── /directives # Directivas compartidas
│ │ ├── /pipes # Pipes compartidos
│ │ ├── /services # Servicios compartidos
│ │ └── shared.module.ts # Módulo Shared
│ │
│ ├── /landing-page
│ │ ├── /components # Componentes específicos de la landing page
│ │ ├── /services # Servicios específicos de la landing page
│ │ └── landing-page.module.ts # Módulo para la landing page
│ │
│ ├── /erp # Módulo ERP
│ │ ├── /components # Componentes del ERP
│ │ ├── /services # Servicios específicos del ERP
│ │ └── erp.module.ts # Módulo para el ERP
│ │
│ ├── app-routing.module.ts # Definición de las rutas principales
│ ├── app.component.ts # Componente raíz de la aplicación
│ ├── app.module.ts # Módulo raíz de la aplicación
│ └── app.component.html # HTML principal del componente raíz
│
├── /assets
│ ├── /images # Imágenes del proyecto
│ ├── /styles # Estilos globales
│ └── /icons # Iconos utilizados en la aplicación
│
├── /environments
│ ├── environment.ts # Configuración del entorno de desarrollo
│ └── environment.prod.ts # Configuración del entorno de producción
│
├── /styles
│ ├── \_variables.scss # Variables SASS globales
│ ├── \_mixins.scss # Mixins SASS globales
│ ├── global-styles.scss # Estilos globales
│ └── landing-page-styles.scss # Estilos específicos de la landing page
│
├── /i18n # Archivos de internacionalización
│ └── en.json # Ejemplo de archivo de idioma en inglés
│
├── index.html # Archivo HTML principal
├── main.ts # Punto de entrada principal de Angular
└── styles.scss
