# BAS Httpb Plugin

### Project Struct

---

**Project Root**

──┮ Project                                                     [Root]
  ┟── ci                                                        [Continus Integrantion directory]
  ┟── config                                                    [project locale env configuration directory]
  ┟── dist                                                      [build root directory]
  ┟── dist-zip                                                  [publish directory]
  ┕──┟ src                                                      [source code directory root]
     ┟── _locales                                               [extension i18n]
     ┟── assets                                                 [Assets directory: image,svg,icon ed.]
     ┟── Background                                             [extension background entry]
     ┟── ContentScript                                          [extension contentscript entry]
     ┟── Devtools                                               [extension devtools entry]
     ┟── Options                                                [extension options entry]
     ┟── Popup                                                  [extension popup entry]
     ┟── Styles                                                 [Global stylesheet directory]
     ┟── pages                                                  [Pages: Options,Popup react components ] 
     ┟── lib
     ┟── ui
     ┕── manifest.json                                          [extension]                    
  ┟── .eslintrc.js
  ┟── ... project config files   
  ┕── package.json


**Webpack Alias**

```javascript
// Lib ==> src/lib
import xxx from 'Lib/xxx';
// UI ==> src/ui
// Styles ==> src/Styles
// Assets ==> src/assets
// Pages ==> src/pages


```

---
