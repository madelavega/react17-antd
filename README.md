# react17-antd

A small React v17/Redux application with Ant Design framework.

It has two pages:
 - Home: default/entry page (/ and /home paths). It has a link to the main page (documents)
 - Documents: main page (/documents path)

## Local installation

### Requeriments

- npm v7+ (Recomended if you want to use npm workspaces to work in your local environment with the app and its dependency as we see later)
- node v14+ (to change node version, I recommend to use node version manager <a href="https://github.com/nvm-sh/nvm" target="_blank">nvm</a>

```
nvm install v14.15.5
nvm use v14
npm install -g npm@7.5.4
```
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