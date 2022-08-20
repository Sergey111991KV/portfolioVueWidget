// import { defineAsyncComponent } from 'vue'
import { defineCustomElement } from './defineCustomElementWithStyles'
import App from './App.vue'

customElements.define(
    'my-widget',
    defineCustomElement(App, {
        // globalComponents: {
        //     BigHeader: defineAsyncComponent(() => import('@/components/BigHeader.vue')),
        // },
    })
)
