<template>
    <v-switch 
        v-model="model" 
        :label="label" 
        hide-details 
        color="info" 
        @change="switchLanguage"
    ></v-switch>
</template>

<script>
import { computed, ref, onMounted } from "vue"
import { useI18n } from "vue-i18n";

export default {
    name: 'ZhEn',
    setup() {
        const { locale } = useI18n();
        const model = ref(false);

        // 计算标签内容
        const label = computed(() => {
            return model.value ? "English" : "中文"
        })

        // 切换语言
        const switchLanguage = () => {
            const newLocale = model.value ? "en" : "zh";
            locale.value = newLocale;
            // 保存语言设置到 localStorage
            localStorage.setItem('language', newLocale);
            localStorage.setItem('switchState', model.value.toString());
        };

        // 组件挂载时初始化语言设置
        onMounted(() => {
            // 从 localStorage 获取保存的语言设置
            const savedLanguage = localStorage.getItem('language');
            const savedSwitchState = localStorage.getItem('switchState');

            if (savedLanguage) {
                locale.value = savedLanguage;
                model.value = savedSwitchState === 'true';
            } else {
                // 默认设置
                locale.value = 'zh';
                model.value = false;
                localStorage.setItem('language', 'zh');
                localStorage.setItem('switchState', 'false');
            }
        });

        return {
            model,
            label,
            switchLanguage
        };
    }
};
</script>