export const paths = {
  // eslint-disable-next-line no-undef
  ROOT : appConfig.rootPath,
  HOME : 'home',
  DOCUMENTS : 'documents'
}
const routes = {
  HOME      : `${paths.ROOT}/${paths.HOME}`,
  DOCUMENTS : `${paths.ROOT}/${paths.DOCUMENTS}`,
}
export const breadcrumbs = [
  {
    path          : paths.HOME,
    breadcrumbName: 'Home',
  }, {
    path : paths.DOCUMENTS,
    breadcrumbName: 'Documents'
  }
];

export default routes;