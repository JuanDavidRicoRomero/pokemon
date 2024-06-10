
#Explicación de diseño e implementación del proyecto pokemon

Tecnologias utilizadas:
    1. Vue js 3 => La prueba tecnica consiste en evaluar conocimiento en dicho framework vue
    2. Vue Router => Cada ruta puede acceder a una vista con una funcionalidad especifica
    3. Vue Store (Vuex) => Persistencia de datos por medio de Vuex.

Diseño:
    1. Se evalua el diseño en figma y se observa que la aplicación se divide en dos partes principales.
        a) Vista Welcome: su función principal es dar la bienvenida al usuario e incitarlo a la acción(Call to action) mediante un Botón "Get Started".
        b) Vista List: su principal objetivo es mostrar una lista de pokemons junto con sus funcionalidades asociadas que modifican el estado de la lista por medio de botones. Estos botones, ubicados en la parte inferior de la pantalla, permiten ver una lista completa de todos los pokemones o una lista de pokemones seleccionados como favoritos. Tambien se incluyen iconos en forma de estrella para agregar o remover pokemones de los favoritos. Por ultimo, cuenta con un modal que detalla información del pokemon seleccionado y un campo de busqueda

        ¿Por qué la división?
            1. Normalmente las vistas welcome suelen seguir un patrón de diseño distinto al resto de la aplicación, debido a que necesitan destacar las funcionalidades prioritarias (ASAP) e incentivar al usuario a  explorar servicios nuevos o existentes. Es por esto que la vista welcome se organiza en una vista independiente, Esto permite modificar su diseño de manera sencilla, facilitando asi su mantenimiento y escalabilidad.

    2. Despues de verificar la división de la app en dos vistas, se analiza que funcionalidades y diseños se pueden "Componetizar". A partir de este análisis, los siguientes diseños fueron componetizados y reutilizados en toda la aplicación.
        a) BotonComponent ==> Se crea un componente Botón que se reutiliza en todo el proyecto, cada botón que se desplega en la aplicación, es el componente reutilizado. Ademas se diseñan y crean Props(entradas de datos) para editar estilos y texto del componente boton. Esto significa que cada botón desplegado en la aplicación puede modificarse facilmente mediante sus props. En conclusión, el botón es facil de mantener y escalar.
        b) ItemPokemon ==> Se crea un componente capaz de representar un item en la lista de pokemones. Este componente facilita la mantenibilidad y escalabilidad, ya que cada item de la lista utiliza este componente. Por lo tanto, cualquier cambio necesario en los items solo debe hacerse una vez en el componente ItemPokemon.
        c) LoadingComponent ==> Se crea para ilustrar la vista de carga mediante un icono de pokebola y su respectiva animación de giro (0° - 360°).
        d) NoDataFound ==> Se crea para mostrar al usuario que no hay registros con el nombre introducido en el buscador.
        e) PokemonCard ==> Se crea para representar el Modal, el cual se despliega al hacer click en algún item de la lista. Este componente es reutilizado en todos los items.
    3) Despues de verificar la componetización, se procede a configurar la aplicación con las tecnologias a usar.
        a) Configuración del proyecto con tecnologias recientes ==> Vite.
        b) Configuración de Vue router
        c) Configuración de Vue Store (Vuex)
    4) Posteriormente, se procede a maquetar la aplicación en cada vista y componente.
    5) Despues, se procede a estilizar cada vista y componente utilizando SASS o SCSS, lo que proporciona mayores cualidades y mas libertad al crear y editar estilos. Se utiliza la nomemclatura BEM --> Block - Element - Modifier -- y se crean estilos para Web como para Mobile.
    6) Despues de tener la maquetación y los estilos implementados, se procede a crear toda la funcionalidad
        a) Como he mencionado, se utiliza vuex para persistir la data. Vuex se configura de tal manera que facilita la mantenibilidad y escalabilidad. Se crea un archivo general que administra todos los modulos de store. Esto permite escalar y mantener el sistema facilmente, teniendo varios módulos de store separados por funcionalidad o vista.
        b) Cada funcionalidad de javascript que se usa en varios componentes se "componetiza" o "modulariza" en composables, capaces de ser reutilizados en cualquier componente o vista. De esta forma, se mantiene al minimo la cantidad de lineas de codigo escritas en los script setup de vue. Asi garantizamos la mantenibilidad y escalabilida del proyecto.