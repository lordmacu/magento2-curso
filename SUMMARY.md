# Magento 2 — De Laravel a Expert

[Introducción y Sílabo](SILABO.md)

---

## Módulo 1 — Arquitectura de Magento 2

- [1.1 Magento vs Laravel: Mentalidad y Filosofía](modulos/1.1-magento-vs-laravel.md)
- [1.2 Overview de la Arquitectura](modulos/1.2-arquitectura-overview.md)
- [1.3 Magento Areas](modulos/1.3-areas.md)
- [1.4 Magento Layers](modulos/1.4-layers.md)
- [1.5 Estructura de Directorios](modulos/1.5-estructura-directorios.md)
- [1.6 Modos: Developer, Production, Default](modulos/1.6-modos.md)
- [1.7 Request Lifecycle](modulos/1.7-request-lifecycle.md)
- [1.8 Scope de Configuración](modulos/1.8-scopes.md)

## Módulo 2 — Herramientas del Developer

- [2.1 bin/magento CLI: comandos esenciales](modulos/2.1-cli-binmagento.md)
- [2.2 Crear Comandos CLI Propios](modulos/2.2-custom-cli-commands.md)
- [2.3 Xdebug, Logging y Debugging](modulos/2.3-debugging.md)
- [2.4 Configuración: env.php, config.php](modulos/2.4-configuracion.md)
- [2.5 Composer en Magento](modulos/2.5-composer.md)

## Módulo 3 — Módulos: La Unidad Fundamental

- [3.1 ¿Qué es un Módulo? Anatomía](modulos/3.1-que-es-un-modulo.md)
- [3.2 Crear tu Primer Módulo](modulos/3.2-primer-modulo.md)
- [3.3 Sequence y dependencias entre módulos](modulos/3.3-module-sequence.md)
- [3.4 File Structure del Módulo](modulos/3.4-module-file-structure.md)

## Módulo 4 — Inyección de Dependencias

- [4.1 DI en Magento: di.xml y ObjectManager](modulos/4.1-di-xml.md)
- [4.2 Argument Types Parte 1: object, string, boolean](modulos/4.2-argument-types-1.md)
- [4.3 Argument Types Parte 2: array, init_parameter, const](modulos/4.3-argument-types-2.md)
- [4.4 Factory Classes](modulos/4.4-factory-classes.md)
- [4.5 Proxies: lazy loading](modulos/4.5-proxies.md)
- [4.6 Virtual Types](modulos/4.6-virtual-types.md)
- [4.7 Preferences: reemplazar clases del core](modulos/4.7-preferences.md)
- [4.8 Shared vs Non-Shared](modulos/4.8-shared-nonshared.md)
- [4.9 setup:di:compile](modulos/4.9-di-compile.md)

## Módulo 5 — Plugins e Interceptors

- [5.1 Plugin Overview](modulos/5.1-plugin-overview.md)
- [5.2 Before Plugin](modulos/5.2-before-plugin.md)
- [5.3 After Plugin](modulos/5.3-after-plugin.md)
- [5.4 Around Plugin](modulos/5.4-around-plugin.md)
- [5.5 Plugin Sort Order](modulos/5.5-plugin-sort-order.md)
- [5.6 Limitaciones de Plugins](modulos/5.6-plugin-limitations.md)

## Módulo 6 — Eventos y Observers

- [6.1 Events y Observers: arquitectura](modulos/6.1-events-overview.md)
- [6.2 Registrar un Observer: events.xml](modulos/6.2-events-xml.md)
- [6.3 Disparar Eventos Propios](modulos/6.3-dispatch-events.md)
- [6.4 Eventos del Core más importantes](modulos/6.4-core-events.md)
- [6.5 Plugin vs Observer vs Preference](modulos/6.5-plugin-vs-observer.md)

## Módulo 7 — Routing y Controllers

- [7.1 Request Routing: routes.xml](modulos/7.1-routing.md)
- [7.2 Controllers: una clase por Action](modulos/7.2-controllers.md)
- [7.3 ResultFactory: tipos de respuesta](modulos/7.3-result-factory.md)
- [7.4 Request Object](modulos/7.4-request.md)
- [7.5 Seguridad: Form Keys y CSRF](modulos/7.5-security-controllers.md)
- [7.6 Admin Controllers](modulos/7.6-admin-controllers.md)
- [7.7 Router Personalizado](modulos/7.7-custom-router.md)

## Módulo 8 — Base de Datos

- [8.1 Model, ResourceModel, Collection](modulos/8.1-orm-magento.md)
- [8.2 Declarative Schema: db_schema.xml](modulos/8.2-declarative-schema.md)
- [8.3 Data Patches: Seeders en Magento](modulos/8.3-data-patches.md)
- [8.4 EAV: Entity-Attribute-Value](modulos/8.4-eav.md)
- [8.5 Repositories y Service Contracts](modulos/8.5-repositories.md)
- [8.6 SearchCriteria y FilterGroups](modulos/8.6-searchcriteria.md)
- [8.7 Colecciones avanzadas y joins](modulos/8.7-collections-advanced.md)
- [8.8 Transacciones](modulos/8.8-transacciones.md)

## Módulo 9 — Frontend: Layout, Blocks y Templates

- [9.1 El Sistema de Layout XML](modulos/9.1-layout-xml.md)
- [9.2 Handles de Layout](modulos/9.2-layout-handles.md)
- [9.3 Blocks](modulos/9.3-blocks.md)
- [9.4 Templates .phtml](modulos/9.4-templates-phtml.md)
- [9.5 ViewModels](modulos/9.5-viewmodels.md)
- [9.6 Containers vs Blocks](modulos/9.6-containers.md)
- [9.7 Override de Layouts del Core](modulos/9.7-override-layouts.md)
- [9.8 Traducciones (i18n)](modulos/9.8-i18n.md)

## Módulo 10 — Panel de Administración

- [10.1 Menú del Admin y ACL](modulos/10.1-menu-acl.md)
- [10.2 UI Components: Introducción](modulos/10.2-ui-components-intro.md)
- [10.3 Listing Grid](modulos/10.3-ui-grid.md)
- [10.4 Form UI Component](modulos/10.4-ui-form.md)
- [10.5 Mass Actions e Inline Edit](modulos/10.5-grid-advanced.md)
- [10.6 System Configuration](modulos/10.6-system-config.md)
- [10.7 Upload de Archivos en Admin](modulos/10.7-file-upload.md)

## Módulo 11 — Cron Jobs y Message Queues

- [11.1 Cron Jobs: crontab.xml](modulos/11.1-cron-jobs.md)
- [11.2 Cron Groups](modulos/11.2-cron-groups.md)
- [11.3 Message Queues](modulos/11.3-message-queues.md)
- [11.4 RabbitMQ vs MySQL como broker](modulos/11.4-rabbitmq-mysql.md)

## Módulo 12 — Service Contracts y APIs

- [12.1 Service Contracts](modulos/12.1-service-contracts.md)
- [12.2 REST API: arquitectura y Postman](modulos/12.2-rest-api.md)
- [12.3 webapi.xml: endpoints propios](modulos/12.3-webapi-xml.md)
- [12.4 GraphQL: queries y schema](modulos/12.4-graphql-queries.md)
- [12.5 GraphQL: mutations y schema propio](modulos/12.5-graphql-mutations.md)
- [12.6 Autenticación de APIs](modulos/12.6-auth-api.md)
- [12.7 Webhooks y notificaciones salientes](modulos/12.7-webhooks.md)

## Módulo 13 — Catálogo desde el Código

- [13.1 Catálogo: Products y Categories](modulos/13.1-catalogo-codigo.md)
- [13.2 Tipos de Producto](modulos/13.2-tipos-producto.md)
- [13.3 Atributos vía código](modulos/13.3-atributos-codigo.md)
- [13.4 Precios: lógica de cálculo](modulos/13.4-precios-logica.md)
- [13.5 Inventario MSI: API programática](modulos/13.5-inventario-codigo.md)
- [13.6 Elasticsearch: indexación custom](modulos/13.6-elasticsearch.md)

## Módulo 14 — Checkout y Órdenes desde el Código

- [14.1 Quote y Cart: API del carrito](modulos/14.1-quote-cart.md)
- [14.2 Totals y Fees custom](modulos/14.2-totals.md)
- [14.3 Métodos de Pago custom](modulos/14.3-payment-method.md)
- [14.4 Métodos de Envío custom](modulos/14.4-shipping-carrier.md)
- [14.5 Checkout: extensión con JS y PHP](modulos/14.5-checkout-extension.md)
- [14.6 Order Management](modulos/14.6-orders.md)
- [14.7 Sistema de Tax](modulos/14.7-taxes.md)

## Módulo 15 — Temas y Frontend Avanzado

- [15.1 Crear un Tema desde Cero](modulos/15.1-crear-tema.md)
- [15.2 LESS y variables de diseño](modulos/15.2-less-estilos.md)
- [15.3 RequireJS](modulos/15.3-requirejs.md)
- [15.4 JS Mixins](modulos/15.4-js-mixins.md)
- [15.5 Knockout.js](modulos/15.5-knockoutjs.md)
- [15.6 Grunt: compilar assets](modulos/15.6-grunt.md)
- [15.7 Luma vs Hyvä](modulos/15.7-luma-hyva.md)

## Módulo 16 — Performance, Caché e Indexers

- [16.1 Sistema de Caché](modulos/16.1-cache-system.md)
- [16.2 Indexers](modulos/16.2-indexers.md)
- [16.3 Crear un Indexer Propio](modulos/16.3-custom-indexer.md)
- [16.4 Full Page Cache y Varnish](modulos/16.4-fpc-varnish.md)
- [16.5 Redis para Caché y Sesiones](modulos/16.5-redis.md)
- [16.6 Optimización de Queries](modulos/16.6-query-optimization.md)
- [16.7 Profiling con Blackfire](modulos/16.7-profiling.md)

## Módulo 17 — Testing en Magento

- [17.1 Unit Tests](modulos/17.1-unit-tests.md)
- [17.2 Integration Tests](modulos/17.2-integration-tests.md)
- [17.3 API Functional Tests](modulos/17.3-api-functional-tests.md)
- [17.4 MFTF: Tests end-to-end](modulos/17.4-mftf.md)
- [17.5 TDD en Magento](modulos/17.5-tdd.md)

## Módulo 18 — Deployment y DevOps

- [18.1 Pipeline de Deploy](modulos/18.1-pipeline-deploy.md)
- [18.2 Zero-Downtime Deployment](modulos/18.2-zero-downtime.md)
- [18.3 CI/CD con GitHub Actions](modulos/18.3-cicd.md)
- [18.4 Quality Patches Tool](modulos/18.4-patches.md)
- [18.5 Actualizar Magento](modulos/18.5-actualizaciones.md)
- [18.6 Magento Cloud](modulos/18.6-magento-cloud.md)

## Módulo 19 — Magento Headless + React + Vanilla JS

- [19.1 Arquitectura Headless](modulos/19.1-headless-arquitectura.md)
- [19.2 GraphQL First: la API para React](modulos/19.2-graphql-para-react.md)
- [19.3 CORS y Auth para React](modulos/19.3-cors-auth-react.md)
- [19.4 Apollo Client + React + Magento](modulos/19.4-apollo-react.md)
- [19.5 Catálogo en React](modulos/19.5-catalogo-react.md)
- [19.6 Carrito y Checkout en React](modulos/19.6-cart-checkout-react.md)
- [19.7 Autenticación de Clientes desde React](modulos/19.7-auth-cliente-react.md)
- [19.8 Vanilla JS para widgets en Luma/Hyvä](modulos/19.8-vanilla-js-widgets.md)
- [19.9 State Management: Redux/Zustand](modulos/19.9-state-management.md)
- [19.10 Next.js + Magento GraphQL (SSR/SSG)](modulos/19.10-nextjs-magento.md)
- [19.11 Deploy: Magento + React en producción](modulos/19.11-deploy-headless.md)

## Módulo 20 — Seguridad en Magento

- [20.1 Vulnerabilidades comunes](modulos/20.1-vulnerabilidades.md)
- [20.2 Hardening del Admin](modulos/20.2-hardening.md)
- [20.3 Magecart y Skimming](modulos/20.3-magecart.md)

## Módulo 21 — Proyecto Final

- [21.1 Planificación: Módulo B2B](modulos/21.1-proyecto-planificacion.md)
- [21.2 DB: Schema, Model, Repository](modulos/21.2-proyecto-db.md)
- [21.3 Service Layer](modulos/21.3-proyecto-service.md)
- [21.4 Admin: Grid, Form y ACL](modulos/21.4-proyecto-admin.md)
- [21.5 Frontend: Block, ViewModel, Template](modulos/21.5-proyecto-frontend.md)
- [21.6 API REST y GraphQL propios](modulos/21.6-proyecto-api.md)
- [21.7 Cron y Queue](modulos/21.7-proyecto-cron-queue.md)
- [21.8 Tests unitarios e integration](modulos/21.8-proyecto-tests.md)
- [21.9 Deploy y documentación final](modulos/21.9-proyecto-deploy.md)
