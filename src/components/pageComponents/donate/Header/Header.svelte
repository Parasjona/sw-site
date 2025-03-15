<script>
  import { Breadcrumbs, BreadcrumbItem } from '@components/molecules/Breadcrumbs';
  import { HeaderBlock } from '@components/templates/HeaderBlock';

  const homeUrl = '.\\';
</script>

<HeaderBlock>
  <Breadcrumbs>
    <BreadcrumbItem isActive url={homeUrl}>Главная</BreadcrumbItem>
    <BreadcrumbItem>Donate</BreadcrumbItem>
  </Breadcrumbs>
</HeaderBlock>
