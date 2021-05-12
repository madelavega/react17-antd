export const paths = {
  HOME : 'home',
  DOCUMENTS : 'documents'
}

const routes = {
  HOME : `/${paths.HOME}`,
  DOCUMENTS : `/${paths.DOCUMENTS}`,
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