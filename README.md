# react17-antd

A small React v17/Redux application with Ant Design framework with the create-react-app boilerplate.

The application is deployed in <a href="https://madelavega.github.io/react17-antd/" target="_blank">react17-antd</a>, and it has two views:
 - Home: default/entry page (/ and /home paths). It has a link to the main page (documents)
 - Documents: main page (/documents path)

## Data

The data is received from json server, hosted in <a target="_blank" href="https://my-json-server.typicode.com/madelavega/react17-ant-server/documents">react17-ant-server</a>

There are the following filters available
* status
    * received (12 elements)
    * printed (1 element)
    * folded (2 elements)
    * sorted (0 elements)
    * delivered (0 elements)

There are 15 records and the pagination is ready for 10 elements by page.

##CI/CD 

CI/CD is available using GitHub Actions when changes are detected in master branch. The pipeline runs the tests and deploy the applicaiton it they finish successfully.

## Local installation

### Requeriments

- npm v6+ 
- node v14+ (to change node version, I recommend to use node version manager <a href="https://github.com/nvm-sh/nvm" target="_blank">nvm</a>

```
nvm install v14.15.5
nvm use v14
npm install -g npm@7.5.4
```

## local

### start

```
npm start
```

### test

```
npm test
```


