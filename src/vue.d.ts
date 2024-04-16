import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $twitter: string;
        $telegram: string;
        $buyLink: string;
        $CA: string;
        $telegramDev: string;
        $dex: string;
        $raydium: string;
        $jupiter: string;
    }
}