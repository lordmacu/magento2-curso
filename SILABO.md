# Curso Completo Magento 2 — De Cero a Expert

> **Nivel**: Intermedio-Avanzado. Se asume conocimiento de PHP, POO y patrones de diseño.
> **Enfoque**: 100% developer. Arquitectura, código, patrones y buenas prácticas. No administración.
> **Metodología**: Cada subcapítulo tiene su `.md` en `/modulos/` con teoría, código real y ejercicios.
> ✅ = Completado | ⬜ = Pendiente | 🔄 = Comparación con Laravel | 💡 = Tip profesional

---

## Gestor de Documentación

**[mdBook](https://rust-lang.github.io/mdBook/)** — Escrito en Rust. Convierte estos `.md` en un sitio navegable con búsqueda full-text.
```bash
cargo install mdbook   # instalar
mdbook serve curso/    # levantar en localhost:3000
```
Perfecto para convertir este curso en tu propio libro de referencia offline.

---

## MÓDULO 1 — Arquitectura de Magento 2
> *Antes de tocar código necesitas tener el mapa mental correcto. Este módulo es la base de todo lo demás.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 1.1 | [Magento vs Laravel: Mentalidad y Filosofía](modulos/1.1-magento-vs-laravel.md) | Por qué Magento es así, qué problemas resuelve, cuándo usarlo | ✅ |
| 1.2 | [Overview de la Arquitectura de Magento 2](modulos/1.2-arquitectura-overview.md) | Las capas de la arquitectura: cómo se comunican entre sí | ✅ |
| 1.3 | [Magento Areas: frontend, adminhtml, webapi_rest, crontab, graphql](modulos/1.3-areas.md) | El sistema de "contextos" de Magento — algo sin equivalente en Laravel | ✅ |
| 1.4 | [Magento Layers: Presentation, Service, Domain, Persistence](modulos/1.4-layers.md) | Las capas de la arquitectura y qué código va en cada una | ✅ |
| 1.5 | [Estructura de Directorios: qué hace cada carpeta](modulos/1.5-estructura-directorios.md) | Navegar el proyecto sin perderse | ✅ |
| 1.6 | [Modos: Developer, Production, Default](modulos/1.6-modos.md) | Qué cambia en cada modo y su impacto en el flujo de trabajo | ✅ |
| 1.7 | [Request Lifecycle: del HTTP request al response](modulos/1.7-request-lifecycle.md) | Cómo Magento procesa una petición de principio a fin | ✅ |
| 1.8 | [Scope de Configuración: Global, Website, Store View](modulos/1.8-scopes.md) | El sistema multinivel de configuración — crítico para multistore | ✅ |

---

## MÓDULO 2 — Herramientas del Developer
> *Tu setup diario. Saber usar estas herramientas te ahorra horas.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 2.1 | [bin/magento CLI: comandos esenciales](modulos/2.1-cli-binmagento.md) | El `php artisan` de Magento — 30 comandos que usarás a diario | ✅ |
| 2.2 | [Crear Comandos CLI Propios](modulos/2.2-custom-cli-commands.md) | Extender `bin/magento` con tus propios comandos (como Artisan Commands) | ✅ |
| 2.3 | [Xdebug, Logging y Debugging](modulos/2.3-debugging.md) | Setup de Xdebug, `var/log/`, Monolog, debug tips que salvan vidas | ✅ |
| 2.4 | [Configuración: env.php, config.php](modulos/2.4-configuracion.md) | Cómo Magento gestiona configuración (sin `.env` limpio como Laravel) | ✅ |
| 2.5 | [Composer en Magento: gestión de dependencias](modulos/2.5-composer.md) | Cómo Magento usa Composer, autoloading y repositorios privados | ✅ |

---

## MÓDULO 3 — Módulos: La Unidad Fundamental
> *Todo en Magento es un módulo. Entenderlo a fondo es lo más importante que harás.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 3.1 | [¿Qué es un Módulo? Anatomía y convenciones](modulos/3.1-que-es-un-modulo.md) | Estructura completa de un módulo vs un Service Provider de Laravel | ✅ |
| 3.2 | [Crear tu Primer Módulo: module.xml y registration.php](modulos/3.2-primer-modulo.md) | Registrar un módulo desde cero y entender el bootstrap | ✅ |
| 3.3 | [Sequence y dependencias entre módulos](modulos/3.3-module-sequence.md) | Cómo declarar que tu módulo depende de otro y el orden de carga | ✅ |
| 3.4 | [File Structure del Módulo: qué va dónde y por qué](modulos/3.4-module-file-structure.md) | La convención de directorios dentro de un módulo | ✅ |

---

## MÓDULO 4 — Inyección de Dependencias: El núcleo de Magento
> *El DI de Magento es el sistema más poderoso y más incomprendido. Dominarlo es dominar Magento.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 4.1 | [DI en Magento: di.xml y el ObjectManager](modulos/4.1-di-xml.md) | Cómo funciona el contenedor de DI, diferencias con el IoC de Laravel | ✅ |
| 4.2 | [Argument Types Parte 1: object, string, boolean, null](modulos/4.2-argument-types-1.md) | Los tipos de argumentos que puedes inyectar vía di.xml | ✅ |
| 4.3 | [Argument Types Parte 2: array, init_parameter, const](modulos/4.3-argument-types-2.md) | Arrays de objetos, constantes de clase y parámetros de entorno en DI | ✅ |
| 4.4 | [Factory Classes: creación de objetos no-singleton](modulos/4.4-factory-classes.md) | El patrón Factory obligatorio para instanciar Models — auto-generado por Magento | ✅ |
| 4.5 | [Proxies: lazy loading de dependencias pesadas](modulos/4.5-proxies.md) | Cómo Magento difiere la carga de clases costosas hasta que se necesitan | ✅ |
| 4.6 | [Virtual Types: alias de configuración en di.xml](modulos/4.6-virtual-types.md) | Crear instancias configuradas de una clase sin heredar ni modificar | ✅ |
| 4.7 | [Preferences: reemplazar una clase del core](modulos/4.7-preferences.md) | Override completo de una clase (úsalo solo cuando no quede otra opción) | ✅ |
| 4.8 | [Shared vs Non-Shared: Singleton vs Transient](modulos/4.8-shared-nonshared.md) | Cuándo Magento reutiliza instancias y cuándo crea nuevas | ✅ |
| 4.9 | [setup:di:compile: qué hace y por qué importa](modulos/4.9-di-compile.md) | El proceso de compilación del DI: generación de código y proxies | ✅ |

---

## MÓDULO 5 — Plugins e Interceptors: El Mecanismo más Poderoso
> *Plugins son la forma correcta de modificar comportamiento del core. Más potentes que cualquier cosa en Laravel.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 5.1 | [Plugin Overview: qué son y cuándo usarlos](modulos/5.1-plugin-overview.md) | Interceptors vs Observers vs Preferences — cuándo usar cada uno | ✅ |
| 5.2 | [Before Plugin: modificar argumentos de entrada](modulos/5.2-before-plugin.md) | Interceptar antes de que se ejecute un método y cambiar sus parámetros | ✅ |
| 5.3 | [After Plugin: modificar el resultado](modulos/5.3-after-plugin.md) | Interceptar después de un método y transformar lo que devuelve | ✅ |
| 5.4 | [Around Plugin: control total del método](modulos/5.4-around-plugin.md) | Envolver completamente un método — el más potente y el más peligroso | ✅ |
| 5.5 | [Plugin Sort Order: orden de ejecución con múltiples plugins](modulos/5.5-plugin-sort-order.md) | Cuando varios módulos interceptan el mismo método — cómo definir prioridades | ✅ |
| 5.6 | [Limitaciones de Plugins: qué NO se puede interceptar](modulos/5.6-plugin-limitations.md) | Métodos finales, estáticos, constructores — los casos donde no aplica | ⬜ |

---

## MÓDULO 6 — Eventos y Observers
> *El sistema de eventos de Magento. Similar a Laravel Events pero declarado en XML.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 6.1 | [Events y Observers: arquitectura y flujo](modulos/6.1-events-overview.md) | Cómo funciona el sistema de eventos, diferencias con Laravel Events | ⬜ |
| 6.2 | [Registrar un Observer: events.xml](modulos/6.2-events-xml.md) | Declarar listeners de eventos por área (frontend, adminhtml, global) | ⬜ |
| 6.3 | [Disparar Eventos Propios](modulos/6.3-dispatch-events.md) | Crear y disparar tus propios eventos desde tu módulo | ⬜ |
| 6.4 | [Eventos del Core más importantes](modulos/6.4-core-events.md) | Los 20 eventos del core que más usarás en proyectos reales | ⬜ |
| 6.5 | [Plugin vs Observer vs Preference: cuándo usar cada uno](modulos/6.5-plugin-vs-observer.md) | La guía definitiva para elegir el mecanismo de extensión correcto | ⬜ |

---

## MÓDULO 7 — Routing y Controllers
> *Cómo Magento conecta una URL con código PHP. Más XML que Laravel pero mismo concepto.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 7.1 | [Request Routing: routes.xml y Front Controllers](modulos/7.1-routing.md) | El sistema de routing de Magento y cómo el Front Controller despacha requests | ⬜ |
| 7.2 | [Controllers: una clase por Action](modulos/7.2-controllers.md) | Por qué cada acción es una clase separada (vs métodos en Laravel) | ⬜ |
| 7.3 | [ResultFactory: tipos de respuesta](modulos/7.3-result-factory.md) | Page, JSON, Redirect, Raw, Forward — y cuándo usar cada uno | ⬜ |
| 7.4 | [Request Object: parámetros, headers y validación](modulos/7.4-request.md) | Manejar GET, POST, JSON y validar inputs | ⬜ |
| 7.5 | [Seguridad en Controllers: Form Keys y CSRF](modulos/7.5-security-controllers.md) | Proteger endpoints contra CSRF y otras vulnerabilidades | ⬜ |
| 7.6 | [Admin Controllers: diferencias con Storefront](modulos/7.6-admin-controllers.md) | ACL en controllers, `_isAllowed()`, redirecciones del admin | ⬜ |
| 7.7 | [Router Personalizado: interceptar URLs con lógica custom](modulos/7.7-custom-router.md) | Crear routers propios para URLs dinámicas (ej: URLs de productos custom) | ⬜ |

---

## MÓDULO 8 — Base de Datos: ORM, EAV y Migrations
> *La capa de persistencia de Magento. Radicalmente diferente a Eloquent.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 8.1 | [La Trinidad: Model, ResourceModel, Collection](modulos/8.1-orm-magento.md) | Por qué son tres clases en vez de una como en Eloquent | ⬜ |
| 8.2 | [Declarative Schema: db_schema.xml](modulos/8.2-declarative-schema.md) | Crear y modificar tablas — el equivalente moderno de las migrations de Laravel | ⬜ |
| 8.3 | [Data Patches: el equivalente a los Seeders](modulos/8.3-data-patches.md) | Insertar o migrar datos en el ciclo de vida del módulo | ⬜ |
| 8.4 | [EAV: Entity-Attribute-Value — el corazón del catálogo](modulos/8.4-eav.md) | El patrón EAV, por qué Magento lo usa y cómo trabajar con él | ⬜ |
| 8.5 | [Repositories y Service Contracts](modulos/8.5-repositories.md) | El patrón Repository obligatorio y las interfaces de servicio | ⬜ |
| 8.6 | [SearchCriteria y FilterGroups: queries complejas](modulos/8.6-searchcriteria.md) | El sistema de criterios de búsqueda de Magento | ⬜ |
| 8.7 | [Colecciones: queries directas y joins avanzados](modulos/8.7-collections-advanced.md) | Cuando SearchCriteria no alcanza: colecciones con joins y subqueries | ⬜ |
| 8.8 | [Transacciones y manejo de errores en DB](modulos/8.8-transacciones.md) | Transacciones, rollback y manejo correcto de excepciones de DB | ⬜ |

---

## MÓDULO 9 — Frontend: Layout XML, Blocks y Templates
> *El sistema de vistas de Magento. Sin Blade — XML + PHP + .phtml. Confuso al principio, poderoso cuando lo entiendes.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 9.1 | [El Sistema de Layout XML: la vista desde arriba](modulos/9.1-layout-xml.md) | Cómo Magento construye una página fusionando múltiples XMLs | ⬜ |
| 9.2 | [Handles de Layout: cuándo se aplica cada XML](modulos/9.2-layout-handles.md) | `default.xml`, `catalog_product_view.xml` — los handles y su jerarquía | ⬜ |
| 9.3 | [Blocks: la capa de lógica de presentación](modulos/9.3-blocks.md) | Qué es un Block, tipos de blocks y cómo conectarlos con templates | ⬜ |
| 9.4 | [Templates .phtml: escribir vistas en Magento](modulos/9.4-templates-phtml.md) | La sintaxis de templates, helpers disponibles y mejores prácticas | ⬜ |
| 9.5 | [ViewModels: separar lógica de presentación](modulos/9.5-viewmodels.md) | La forma moderna y correcta de pasar datos al template | ⬜ |
| 9.6 | [Containers vs Blocks: estructura del árbol de layout](modulos/9.6-containers.md) | Contenedores como estructura, blocks como contenido | ⬜ |
| 9.7 | [Override de Layouts y Templates del Core](modulos/9.7-override-layouts.md) | Sobrescribir vistas del core sin modificarlo | ⬜ |
| 9.8 | [Traducciones (i18n): archivos .csv y __() helper](modulos/9.8-i18n.md) | El sistema de internacionalización de Magento | ⬜ |

---

## MÓDULO 10 — Panel de Administración
> *Crear interfaces admin es el día a día en proyectos Magento. UI Components es el sistema moderno.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 10.1 | [Menú del Admin y ACL](modulos/10.1-menu-acl.md) | Registrar tu módulo en el menú y gestionar permisos por rol | ⬜ |
| 10.2 | [UI Components: Arquitectura y concepto](modulos/10.2-ui-components-intro.md) | Qué son los UI Components, cómo se renderizan y su flujo de datos | ⬜ |
| 10.3 | [Listing Grid: crear un listado con filtros y paginación](modulos/10.3-ui-grid.md) | El grid más completo que usarás en casi todos los módulos | ⬜ |
| 10.4 | [Form UI Component: crear formularios de alta/edición](modulos/10.4-ui-form.md) | Formularios con fieldsets, validación y carga de datos | ⬜ |
| 10.5 | [Mass Actions, Inline Edit y Column Renderers](modulos/10.5-grid-advanced.md) | Funcionalidades avanzadas del grid | ⬜ |
| 10.6 | [System Configuration: settings configurables del módulo](modulos/10.6-system-config.md) | Crear ajustes en `Stores > Configuration` — el equivalente al `.env` de producción | ⬜ |
| 10.7 | [Upload de Archivos en Admin](modulos/10.7-file-upload.md) | Gestionar uploads en formularios admin | ⬜ |

---

## MÓDULO 11 — Cron Jobs y Message Queues
> *Tareas programadas y procesamiento asíncrono. Más complejo que en Laravel pero muy poderoso.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 11.1 | [Cron Jobs en Magento: crontab.xml](modulos/11.1-cron-jobs.md) | Programar tareas periódicas (vs Laravel Scheduler) | ⬜ |
| 11.2 | [Cron Groups: separar workers por prioridad](modulos/11.2-cron-groups.md) | Organizar crons en grupos con diferentes procesos | ⬜ |
| 11.3 | [Message Queues: arquitectura asíncrona](modulos/11.3-message-queues.md) | Queue Topics, Consumers y Handlers (vs Laravel Queues) | ⬜ |
| 11.4 | [RabbitMQ vs MySQL como broker](modulos/11.4-rabbitmq-mysql.md) | Cuándo usar cada uno y cómo configurarlos | ⬜ |

---

## MÓDULO 12 — Service Contracts, APIs e Integración
> *Magento tiene una API REST y GraphQL robusta. Fundamental para integraciones y arquitecturas headless.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 12.1 | [Service Contracts: programar contra interfaces](modulos/12.1-service-contracts.md) | Por qué Magento obliga a interfaces y qué beneficios reales tiene | ⬜ |
| 12.2 | [REST API: arquitectura, autenticación y Postman](modulos/12.2-rest-api.md) | Autenticación con tokens, endpoints principales y testing | ⬜ |
| 12.3 | [webapi.xml: exponer tu lógica como API REST](modulos/12.3-webapi-xml.md) | Crear endpoints propios en minutos con XML + Service Contract | ⬜ |
| 12.4 | [GraphQL: queries y schema](modulos/12.4-graphql-queries.md) | Consultar datos con GraphQL — la API del futuro en Magento | ⬜ |
| 12.5 | [GraphQL: mutations y extender el schema](modulos/12.5-graphql-mutations.md) | Modificar datos y agregar tu propio schema | ⬜ |
| 12.6 | [Autenticación: Customer Token, Admin Token, OAuth 2.0](modulos/12.6-auth-api.md) | Los tres sistemas de autenticación de las APIs | ⬜ |
| 12.7 | [Webhooks y notificaciones salientes](modulos/12.7-webhooks.md) | Notificar sistemas externos cuando ocurren eventos en Magento | ⬜ |

---

## MÓDULO 13 — Catálogo y Ecommerce (desde el código)
> *El corazón del negocio. Entender el catálogo programáticamente es crítico.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 13.1 | [Catálogo: Products, Categories y la estructura EAV](modulos/13.1-catalogo-codigo.md) | Trabajar con productos y categorías desde PHP | ⬜ |
| 13.2 | [Tipos de Producto y su lógica interna](modulos/13.2-tipos-producto.md) | Simple, Configurable, Bundle, Virtual, Grouped — diferencias de implementación | ⬜ |
| 13.3 | [Atributos: crear y gestionar vía código](modulos/13.3-atributos-codigo.md) | EAV Attributes, Attribute Sets y Attribute Groups programáticamente | ⬜ |
| 13.4 | [Precios: la lógica de cálculo de precios](modulos/13.4-precios-logica.md) | Price Indexer, Tier Prices, Special Prices — cómo Magento calcula precios | ⬜ |
| 13.5 | [Inventario (MSI): API programática de stock](modulos/13.5-inventario-codigo.md) | Consultar y modificar stock desde código | ⬜ |
| 13.6 | [Elasticsearch: indexación y búsqueda customizada](modulos/13.6-elasticsearch.md) | Cómo Magento indexa en ES y cómo customizar el search | ⬜ |

---

## MÓDULO 14 — Checkout, Carrito y Órdenes (desde el código)
> *El flujo de compra internamente. La parte más compleja de extender.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 14.1 | [Quote y Cart: la API del carrito](modulos/14.1-quote-cart.md) | Cómo funciona el Quote, agregar/quitar items programáticamente | ⬜ |
| 14.2 | [Totals: agregar fees y descuentos custom](modulos/14.2-totals.md) | Crear Total Collectors propios (cargo de servicio, seguro, etc.) | ⬜ |
| 14.3 | [Métodos de Pago: crear uno desde cero](modulos/14.3-payment-method.md) | La interfaz de payment methods y su implementación | ⬜ |
| 14.4 | [Métodos de Envío: crear un carrier custom](modulos/14.4-shipping-carrier.md) | Implementar un carrier con lógica de cálculo propia | ⬜ |
| 14.5 | [Checkout: extensión con JS y PHP](modulos/14.5-checkout-extension.md) | Agregar steps, campos o validaciones al checkout con Knockout.js | ⬜ |
| 14.6 | [Order Management: ciclo de vida y estados custom](modulos/14.6-orders.md) | Facturas, envíos, reembolsos y estados personalizados | ⬜ |
| 14.7 | [Cálculo de Impuestos: el sistema de Tax](modulos/14.7-taxes.md) | Cómo Magento calcula impuestos y cómo customizarlo | ⬜ |

---

## MÓDULO 15 — Temas y Frontend Avanzado
> *El frontend de Magento tiene su propia pila tecnológica. LESS, RequireJS, Knockout.js.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 15.1 | [Crear un Tema desde Cero: theme.xml y herencia](modulos/15.1-crear-tema.md) | La estructura de un tema y el sistema de herencia de Magento | ⬜ |
| 15.2 | [LESS y variables de diseño de Magento](modulos/15.2-less-estilos.md) | Customizar estilos sin romper el sistema | ⬜ |
| 15.3 | [RequireJS: gestión de módulos JavaScript](modulos/15.3-requirejs.md) | Agregar y organizar JS propio — no es Webpack/Vite | ⬜ |
| 15.4 | [JS Mixins: extender JS del core](modulos/15.4-js-mixins.md) | La forma correcta de modificar comportamiento JS sin tocar el core | ⬜ |
| 15.5 | [Knockout.js: el framework reactivo del checkout](modulos/15.5-knockoutjs.md) | Data binding, components y el checkout architecture | ⬜ |
| 15.6 | [Grunt: compilar assets en desarrollo](modulos/15.6-grunt.md) | El proceso de build de Magento y cómo usarlo eficientemente | ⬜ |
| 15.7 | [Luma vs Hyvä: dos mundos diferentes](modulos/15.7-luma-hyva.md) | El tema clásico vs el moderno (TailwindCSS + Alpine.js) | ⬜ |

---

## MÓDULO 16 — Performance, Caché e Indexers
> *Magento es lento por defecto. Optimizarlo es una habilidad de valor alto en el mercado.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 16.1 | [El Sistema de Caché: tipos y cuándo limpiar cada uno](modulos/16.1-cache-system.md) | Los 12 tipos de caché y qué guarda cada uno | ⬜ |
| 16.2 | [Indexers: por qué Magento pre-computa datos](modulos/16.2-indexers.md) | Qué hace cada indexer, modos (on save vs scheduled) y cómo crearlos | ⬜ |
| 16.3 | [Crear un Indexer Propio](modulos/16.3-custom-indexer.md) | Implementar tu propio indexer para datos custom | ⬜ |
| 16.4 | [Full Page Cache (FPC) y Varnish](modulos/16.4-fpc-varnish.md) | Caché de página completa y cache holes punching con ESI | ⬜ |
| 16.5 | [Redis para Caché y Sesiones](modulos/16.5-redis.md) | Configurar Redis como backend de caché y sesiones | ⬜ |
| 16.6 | [Optimización de Queries y N+1 en colecciones](modulos/16.6-query-optimization.md) | Detectar y corregir queries lentas en EAV y colecciones | ⬜ |
| 16.7 | [Profiling con Blackfire](modulos/16.7-profiling.md) | Identificar cuellos de botella reales en código PHP | ⬜ |

---

## MÓDULO 17 — Testing en Magento
> *Los tests en Magento son distintos a Laravel pero más completos. Tienes 4 tipos.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 17.1 | [Unit Tests: PHPUnit + mocking del DI](modulos/17.1-unit-tests.md) | Tests unitarios con ObjectManager mock y flujo de TDD | ⬜ |
| 17.2 | [Integration Tests: base de datos real](modulos/17.2-integration-tests.md) | Tests que usan la instancia real de Magento con DB | ⬜ |
| 17.3 | [API Functional Tests](modulos/17.3-api-functional-tests.md) | Tests de endpoints REST con fixtures de Magento | ⬜ |
| 17.4 | [MFTF: Tests end-to-end con Selenium](modulos/17.4-mftf.md) | Automatizar flujos de browser completos | ⬜ |
| 17.5 | [TDD en Magento: escribir el test primero](modulos/17.5-tdd.md) | Aplicar TDD al desarrollo de módulos — es posible y recomendable | ⬜ |

---

## MÓDULO 18 — Deployment, DevOps y Magento en Producción
> *Llevar Magento a producción tiene su propio protocolo. Hacerlo mal rompe la tienda.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 18.1 | [El Pipeline de Deploy completo](modulos/18.1-pipeline-deploy.md) | `setup:upgrade` → `di:compile` → `static-content:deploy` y su orden correcto | ⬜ |
| 18.2 | [Zero-Downtime Deployment](modulos/18.2-zero-downtime.md) | Deploy sin que la tienda se caiga usando maintenance + symlinks | ⬜ |
| 18.3 | [CI/CD con GitHub Actions](modulos/18.3-cicd.md) | Pipeline automático de deploy para Magento | ⬜ |
| 18.4 | [Gestión de Parches (Quality Patches Tool)](modulos/18.4-patches.md) | Aplicar hotfixes sin romper customizaciones | ⬜ |
| 18.5 | [Actualizar Magento: proceso seguro](modulos/18.5-actualizaciones.md) | Cómo actualizar versiones sin perder customizaciones | ⬜ |
| 18.6 | [Magento Cloud: diferencias con Open Source](modulos/18.6-magento-cloud.md) | La infraestructura cloud de Adobe y sus particularidades | ⬜ |

---

## MÓDULO 19 — Magento Headless + React + Vanilla JS
> *Tu stack: Magento como API backend + React/Vanilla JS como frontend. El futuro del ecommerce moderno.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 19.1 | [Arquitectura Headless: Magento como puro API](modulos/19.1-headless-arquitectura.md) | Qué significa headless, ventajas/desventajas y cuándo usarlo | ⬜ |
| 19.2 | [GraphQL First: la API preferida para el frontend](modulos/19.2-graphql-para-react.md) | Por qué GraphQL encaja mejor con React que REST para el storefront | ⬜ |
| 19.3 | [Configurar CORS y Auth en Magento para React](modulos/19.3-cors-auth-react.md) | Headers CORS, tokens de cliente y seguridad en requests desde React | ⬜ |
| 19.4 | [Apollo Client + React + Magento GraphQL](modulos/19.4-apollo-react.md) | Setup de Apollo Client para consumir la GraphQL API de Magento | ⬜ |
| 19.5 | [Catálogo en React: productos, categorías y búsqueda](modulos/19.5-catalogo-react.md) | Queries de catálogo con GraphQL y renderizado en React | ⬜ |
| 19.6 | [Carrito y Checkout en React con GraphQL](modulos/19.6-cart-checkout-react.md) | Mutations de carrito, guest checkout y customer checkout | ⬜ |
| 19.7 | [Autenticación de Clientes desde React](modulos/19.7-auth-cliente-react.md) | Login, registro y gestión de sesión desde React | ⬜ |
| 19.8 | [Vanilla JS para widgets específicos en Luma/Hyvä](modulos/19.8-vanilla-js-widgets.md) | Cuándo usar Vanilla JS puro en el frontend de Magento clásico | ⬜ |
| 19.9 | [State Management: Redux/Zustand para el estado del carrito](modulos/19.9-state-management.md) | Gestionar estado global del carrito y el usuario en React | ⬜ |
| 19.10 | [SSR y SSG con Next.js sobre Magento GraphQL](modulos/19.10-nextjs-magento.md) | Server Side Rendering para SEO — la arquitectura más usada en headless | ⬜ |
| 19.11 | [Deploy: Magento + React en producción](modulos/19.11-deploy-headless.md) | Arquitectura de servidores para el stack headless completo | ⬜ |

---

## MÓDULO 20 — Seguridad en Magento
> *Magento es uno de los blancos más atacados en ecommerce. Saber protegerlo es obligatorio.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 20.1 | [Vulnerabilidades comunes y cómo Magento las previene](modulos/20.1-vulnerabilidades.md) | XSS, CSRF, SQL Injection — los mecanismos de defensa del core | ⬜ |
| 20.2 | [Hardening del Admin: 2FA, URL custom, IP restriction](modulos/20.2-hardening.md) | Reducir la superficie de ataque del panel de administración | ⬜ |
| 20.3 | [Magecart y Skimming: cómo detectarlo](modulos/20.3-magecart.md) | El ataque más común en tiendas Magento — detección y prevención | ⬜ |

---

## MÓDULO 21 — Proyecto Final: Módulo Completo Profesional
> *Todo lo aprendido en un módulo real, con arquitectura profesional de principio a fin.*

| # | Subcapítulo | Objetivo | Estado |
|---|---|---|---|
| 21.1 | [Planificación: Módulo de Cotizaciones B2B](modulos/21.1-proyecto-planificacion.md) | DDD: definir entidades, casos de uso y contratos de API | ⬜ |
| 20.2 | [DB: Schema, Model, ResourceModel, Repository](modulos/20.2-proyecto-db.md) | Capa de persistencia con buenas prácticas | ⬜ |
| 20.3 | [Service Layer: lógica de negocio con Service Contracts](modulos/20.3-proyecto-service.md) | La capa de servicio con interfaces e implementaciones | ⬜ |
| 20.4 | [Admin: Grid, Form, ACL y System Config](modulos/20.4-proyecto-admin.md) | Panel de administración completo | ⬜ |
| 20.5 | [Frontend: Block, ViewModel, Layout y Template](modulos/20.5-proyecto-frontend.md) | Vista pública del módulo | ⬜ |
| 20.6 | [API REST y GraphQL propios](modulos/20.6-proyecto-api.md) | Exponer el módulo como API con autenticación | ⬜ |
| 20.7 | [Cron, Queue y procesamiento asíncrono](modulos/20.7-proyecto-cron-queue.md) | Jobs y mensajes asíncronos del módulo | ⬜ |
| 20.8 | [Tests unitarios e integration tests](modulos/20.8-proyecto-tests.md) | Cobertura de tests del módulo | ⬜ |
| 20.9 | [Deploy, documentación y entrega](modulos/20.9-proyecto-deploy.md) | Cómo entregar un módulo profesional al cliente | ⬜ |

---

## Leyenda

- ✅ Subcapítulo completado
- ⬜ Pendiente
- 🔄 Comparación con Laravel
- 💡 Tips profesionales

---

## Progreso General

```
Módulo 1  — Arquitectura                        [==========] 8/8 ✅
Módulo 2  — Herramientas del Developer          [          ] 0/5
Módulo 3  — Módulos                             [          ] 0/4
Módulo 4  — Inyección de Dependencias           [          ] 0/9
Módulo 5  — Plugins e Interceptors              [          ] 0/6
Módulo 6  — Eventos y Observers                 [          ] 0/5
Módulo 7  — Routing y Controllers               [          ] 0/7
Módulo 8  — Base de Datos                       [          ] 0/8
Módulo 9  — Frontend: Layout, Blocks, Templates [          ] 0/8
Módulo 10 — Panel de Administración             [          ] 0/7
Módulo 11 — Cron Jobs y Message Queues          [          ] 0/4
Módulo 12 — Service Contracts y APIs            [          ] 0/7
Módulo 13 — Catálogo (desde el código)          [          ] 0/6
Módulo 14 — Checkout y Órdenes (código)         [          ] 0/7
Módulo 15 — Temas y Frontend Avanzado           [          ] 0/7
Módulo 16 — Performance, Caché e Indexers       [          ] 0/7
Módulo 17 — Testing                             [          ] 0/5
Módulo 18 — Deployment y DevOps                 [          ] 0/6
Módulo 19 — Headless + React + Vanilla JS       [          ] 0/11
Módulo 20 — Seguridad                           [          ] 0/3
Módulo 21 — Proyecto Final                      [          ] 0/9

Total: 8 / 145 subcapítulos completados
```
