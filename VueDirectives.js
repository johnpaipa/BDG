Vue.component('vue-directives',{
    template:`<div>
                    <p v-text="text"></p>
                    <a :href="link.href" :title="link.title" v-text="link.text"></a>
                </div>
                `,
    data(){
        return{
            text:'Texto de prueba v-text',
            link:{
                text:'VueJS Home',
                href:'https://es.vuejs.org/',
                title:'Documentacion Vue JS'
            }

        }
    }
})