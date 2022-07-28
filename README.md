## Installation
```
yarn install
```
## Development
```
yarn dev
```

## Build
```
yarn build
```

## Deployment

Not yet implemented

Notes:

The Home page was constrcuted as static page (an experiement on how fast this can be, compare to the show page)
The Show page was rendered from the front end

Next steps:
* Create resuable components from the show page
* Create CI/CD pipeline to deploy the app, at least deploy to the github page
* Create mobile version of the show page. Now it just used media query to change the styling, which is not matched the wireframe. 
* Can use SWR fetching to cache the contents, as it has number of images
* Sanitise the embedded HTML before load it into the web page
* Add Jest tests
