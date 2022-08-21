import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'
import store from "./store";

const nearestElement = (el: any) => {
    while (el?.nodeType !== 1 /* ELEMENT */) el = el.parentElement
    return el
}

export const defineCustomElement = (component: any, { globalComponents = {}, plugins = [] } = {}) =>
    VueDefineCustomElement({
        props: component.props,
        setup(props) {
            // @ts-ignore
            const app = createApp()
            app.use(store)

            plugins.forEach(app.use)

            // @ts-ignore
            Object.entries(globalComponents).forEach(([name, comp]) => app.component(name, comp))

            app.mixin({
                mounted() {
                    const insertStyles = (styles: any) => {
                        if (styles?.length) {
                            this.__style = document.createElement('style')
                            this.__style.innerText = styles.join().replace(/\n/g, '')
                            nearestElement(this.$el).prepend(this.__style)
                        }
                    }

                    insertStyles(this.$?.type.styles)
                    if (this.$options.components) {
                        for (const comp of Object.values(this.$options.components)) {
                            // @ts-ignore
                            insertStyles(comp.styles)
                        }
                    }
                },
                unmounted() {
                    this.__style?.remove()
                },
            })

            const inst = getCurrentInstance()
            // @ts-ignore
            Object.assign(inst.appContext, app._context)
            return () => h(component, props)
        },
    })
