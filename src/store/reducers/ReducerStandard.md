# Reducer Standard Document

## folder struct

──┮ reducers                                                    [Root]
  ┟── app                                                       [Sub module:1]
  ┟── locale                                                    [sub module:2]
  ┕── reducer.js                                                [reducer endpoint]

> reducer annotations: 

  - must export function
  - do not modified state , use Object.assign({},state,payload) or es6 {...state,...payload}

### Actions Standard

** Action Example**

```javascript
const GO_HOME = 'ui/app/go_home'
{
    type:GO_HOME,                           // must
    payload:{                                 // Optional
        props:'',
    },
    error:true,                             //Optional : true 
    meta:{},                                //Optional: It is intended for any extra information that is not part of the payload.
}
```
