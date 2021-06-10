module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                                @import '@/style/common/variable.scss';
                                @import '@/style/common/reset.scss';
                                @import '@/style/common/mixin.scss';
                                @import '@/style/common/typography.scss';
                                `
            }
        }
    },
    filenameHashing: false
}