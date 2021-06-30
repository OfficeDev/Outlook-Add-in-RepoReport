---
page_type: sample
products:
- office-outlook
- office-365
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  platforms:
  - CSS
  - AngularJS
  createdDate: 10/15/2015 12:44:12 PM
---
# Repo Report
**Repo Report** es un complemento de Outlook creado con Angular que examina correos electrónicos para identificar vínculos públicos de repositorios de GitHub y muestra información sobre los que encuentra.

![Repo Report screenshot](./repo report screenshot.PNG)

## Requisitos previos
* [NPM](https://www.npmjs.com/),el administrador de paquetes de nodos, es necesario para instalar las dependencias de desarrollo.
* [Bower](http://bower.io/) es necesario para instalar las dependencias de FrontEnd. 
* [Gulp](http://gulpjs.com/) se utiliza como ejecutor de tareas, incluyendo dar servicio a la aplicación en un servidor de desarrollo.
* Una cuenta de Office 365. Si no tiene una, puede[unirse al Programa de Desarrolladores de Office 365 y obtener una suscripción gratuita de 1 año a Office 365](https://aka.ms/devprogramsignup).

## Configurar el complemento
1. Clone este repositorio.
2. Ejecute `npm install` para instalar tanto las dependencias de npm como las de Bower.
3. Ejecute `gulp serve-static` para iniciar el servidor de desarrollo.
4. Vaya a [mail.office365.com](http://mail.office365.com) e inicie sesión con su cuenta de Office 365.
5. Haga clic en el icono de engranaje en la esquina superior derecha y elija *Administrar complementos*.
6. Haga clic en el icono de signo más y luego elija *Agregar desde un archivo*.
7. Vaya a esta carpeta del repositorio y elija *manifest.xml*.
8. Luego complete el asistente (*Siguiente*, *Instalar*, *Aceptar*) para que el complemento esté disponible en su cuenta de Office 365.
9. Por último, tendrá que abrir la [aplicación](https://localhost:8443/appread/index.html) en un explorador y confiar en el certificado para `localhost:8443`. El complemento no se ejecutará si su equipo no confía en el.

## Ejecutar el complemento
1. Después de instalar el complemento, vaya a [mail.office365.com](mail.office365.com). 
2. Elija un correo electrónico (es posible que primero deba enviarse uno a usted mismo) que tenga al menos un vínculo a un repositorio público de GitHub. *¡El complemento solo se activa si se encuentra una dirección URL de destino!*
3. Haga clic en *Repo Report*, que se encuentra directamente por encima del cuerpo del mensaje de correo electrónico para ver el complemento en acción.

## Preguntas y comentarios
Nos encantaría recibir sus comentarios sobre este ejemplo. Puede enviarnos sus preguntas y sugerencias a través de la sección [Problemas](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues) de este repositorio.

## Recursos adicionales
* [Generador de Yeoman](https://github.com/OfficeDev/generator-office): Generador de Yeoman para la creación de proyectos relacionados con Microsoft Office (incluyendo complementos). Este proyecto se compiló utilizándolo.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/): El marco de trabajo front-end para crear experiencias en Office 365. Este proyecto lo usa para obtener la apariencia y el aspecto de Office. 
* [dev.office.com](http://dev.office.com): Encuentre documentación, ejemplos y otra información útil relevante para el desarrollo de Office.
* [Activación de expresiones regulares](https://msdn.microsoft.com/en-us/library/office/fp142135.aspx): Para que los complementos se activen en un formato de dirección URL específico, utilizamos expresiones regulares.

## Copyright
Copyright (c) 2015 Microsoft. Todos los derechos reservados.


Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.
