import Vue from 'vue';
export default class Hello extends Vue {
    propMessage: string;
    msgChanged: number;
    helloMsg: string;
    mounted(): void;
    readonly computedMsg: string;
    greet(): void;
}
