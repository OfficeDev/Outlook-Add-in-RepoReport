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
# Relatório do repositório
**Repo Report** é um suplemento do Outlook, criado com Angular, que verifica emails em busca de links de repositório público do GitHub e exibe informações sobre os que encontra.

![Captura de tela do relatório do repositório] (captura de tela do relatório/repo. PNG)

## Pré-requisitos
* [NPM](https://www.npmjs.com/), Gerenciador de pacotes de nó, é necessário para instalar dependências do desenvolvedor.
* [Bower](http://bower.io/) é necessário para instalar as dependências de frontend. 
* o [Gulp](http://gulpjs.com/) é usado como um executor de tarefas, incluindo a disponibilização do aplicativo em um servidor de desenvolvimento.
* Uma conta do Office 365. Caso não tenha nenhuma delas, [participar do Programa para Desenvolvedores do Office 365 e obter uma assinatura gratuita de 1 ano do Office 365](https://aka.ms/devprogramsignup).

## Configurar o suplemento
1. Clone este repositório.
2. Execute `NPM instalar` para instalar as dependências do NPM e do Bower.
3. Execute `Gulp` estática para iniciar o servidor de desenvolvimento.
4. Vá para [mail.office365.com](http://mail.office365.com) e entre com sua conta do Office 365.
5. Escolha o ícone de engrenagem no canto superior direito e escolha *Gerenciar Suplementos.
6. Clique no ícone de adição e, em seguida, escolha *adicionar de um arquivo*.
7. Navegue até essa pasta do repositório e escolha *manifest. xml*.
8. Em seguida, conclua o assistente (*próximo*, *instalar*, *OK*) para disponibilizar o suplemento em sua conta do Office 365.
9. Por fim, você precisará abrir o [aplicativo ](https://localhost:8443/appread/index.html) em um navegador e confiar no certificado para `localhost: 8443`. O suplemento não será executado se o seu computador não confiar.

## Execute o suplemento
1. Depois de instalar o suplemento, vá para [mail.office365.com](mail.office365.com). 
2. Escolha um email (provavelmente, você precisa enviar uma primeiro) com pelo menos um link para um repositório do GitHub público. *O suplemento só será ativado se uma URL de destino for encontrada!*
3. Clique *relatório do repositório* localizado diretamente acima do corpo do email para ver o suplemento em ação.

## Perguntas e comentários
Gostaríamos de saber sua opinião sobre este exemplo. Você pode enviar perguntas e sugestões na seção [Problemas](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues) deste repositório.

## Recursos adicionais
* [Gerador do Yeoman](https://github.com/OfficeDev/generator-office) - Gerador do Yeoman para compilar projetos relacionados do Microsoft Office (incluindo suplementos). Esse projeto foi criado usando-o.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) - A estrutura de front-end para criar experiências para o Office 365. Esse projeto usa esse recurso para obter uma aparência do Office. 
* [dev.office.com](http://dev.office.com)-encontre a documentação, os exemplos e outras informações úteis relevantes para o desenvolvimento do Office.
* [Ativação de expressão regular](https://msdn.microsoft.com/en-us/library/office/fp142135.aspx) para que os suplementos sejam ativados em um formato de URL específico, usamos expressões regulares.

## Direitos autorais
Copyright © 2015 Microsoft. Todos os direitos reservados.


Este projeto adotou o [Código de Conduta do Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/). Para saber mais, confira [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou contate [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.
