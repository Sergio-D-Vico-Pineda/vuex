import
{
    createStore
}
from 'vuex'

export default createStore(
{
    state:
    {
        cards: [
        {
            title: "Vuex",
            img: "https://picsum.photos/200/200",
            desc: "Librería de gestión de estado para Vue.js."
        },
        {
            title: "Tailwind",
            img: "https://picsum.photos/200/200.webp",
            desc: "Framework de estilos para desarrollo web."
        },
        {
            title: "Vue",
            img: "https://picsum.photos/200.webp",
            desc: "Framework progresivo para construir interfaces de usuario."
        },
        {
            title: "Bootstrap",
            img: "https://picsum.photos/200.jpg",
            desc: "Framework de front-end para diseño web y móvil."
        },
        {
            title: "Nuxt",
            img: "https://picsum.photos/200",
            desc: "Framework de aplicaciones web basado en Vue.js."
        }]
    },
    getters:
    {},
    mutations:
    {},
    actions:
    {},
    modules:
    {}
})