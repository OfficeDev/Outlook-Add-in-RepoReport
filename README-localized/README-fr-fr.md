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
**Repo Report** est un complément Outlook, créé avec Angular, qui analyse vos courriers électroniques à la recherche de liens du référentiel GitHub public et affiche des informations sur ceux qu’il détecte.

![Repo Report screenshot](./repo report screenshot.PNG)

## Conditions préalables
* [npm](https://www.npmjs.com/), Node Package Manager, est nécessaire pour installer des dépendances de développement.
* [Bower](http://bower.io/) est nécessaire pour installer des dépendances frontales. 
* [Gulp](http://gulpjs.com/) est utilisée en tant qu'exécuteur de tâches, y compris l'utilisation de l’application sur un serveur de développement.
* Un compte Office 365. Si vous n’en avez pas, vous pouvez [participer au programme pour les développeurs Office 365 et obtenir un abonnement gratuit d’un an à Office 365](https://aka.ms/devprogramsignup).

## Configurer le complément
1. Clonez ce référentiel.
2. Exécutez `npm install` pour installer les dépendances npm et Bower.
3. Exécutez `gulp serve-static` pour lancer le serveur de développement.
4. Accédez à [mail.office365.com](http://mail.office365.com) et connectez-vous avec votre compte Office 365.
5. Cliquez sur l’icône d’engrenage en haut à droite, puis choisissez *Gérer les compléments*.
6. Cliquez sur l’icône plus, puis sélectionnez *Ajouter à partir d’un fichier*.
7. Parcourez ce dossier de référentiel et sélectionnez *manifest.xml*.
8. Terminez l’Assistant (*Suivant*, *Installer*, *OK*) pour rendre le complément disponible dans votre compte Office 365.
9. Enfin, vous devez ouvrir l'[application](https://localhost:8443/appread/index.html) dans un navigateur et faire confiance au certificat pour `localhost:8443`. Le complément ne s’exécute pas si votre ordinateur ne l’approuve pas.

## Exécution du complément
1. Une fois le complément installé, accédez à [mail.office365.com](mail.office365.com). 
2. Choisissez un message électronique (vous devrez probablement vous en envoyer la première fois) qui possède au moins un lien vers un référentiel GitHub public. *Le complément est activé uniquement si une URL cible est détectée.*
3. Cliquez sur *Repo Report* se trouvant directement au-dessus du corps du message pour voir le complément à l'œuvre.

## Questions et commentaires
Nous aimerions connaître votre opinion sur cet exemple. Vous pouvez nous faire part de vos questions et suggestions dans la rubrique [Problèmes](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues) de ce référentiel.

## Ressources supplémentaires
* [Générateur Yeoman](https://github.com/OfficeDev/generator-office) : Générateur Yeoman pour la création de projets relatifs à Microsoft Office (y compris les compléments). Ce projet a été créé à l’aide de celui-ci.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) : Infrastructure frontale permettant de créer des expériences pour Office 365. Ce projet l’utilise pour obtenir « l’apparence » d’Office. 
* [dev.office.com](http://dev.office.com) : trouvez de la documentation, des exemples et d’autres informations utiles relatives au développement d’Office.
* [Activation d'expression régulière](https://msdn.microsoft.com/en-us/library/office/fp142135.aspx) : elle est utilisée pour obtenir des compléments à activer dans un format d’URL spécifique lors de l'utilisation d'expressions régulières.

## Copyright
Copyright (c) 2015 Microsoft. Tous droits réservés.


Ce projet a adopté le [code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.
