import { Link } from 'react-router-dom';

export default function BreadcrumbItem(
  {
      breadcrumbName,
      path
  }) {
    return <Link to={path}>{breadcrumbName}</Link>
}