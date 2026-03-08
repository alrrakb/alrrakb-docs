export default {
    logo: <span>شروحات استخدام النظام</span>,
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="شروحات استخدام النظام" />
            <meta property="og:description" content="دليل تعليمي مفصل لاستخدام نظام طلائع الركب للتسويق البريدي." />
            <link rel="icon" type="image/png" href="/favicon.png" />
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s – شروحات استخدام النظام'
        }
    },
    direction: 'rtl',
    footer: {
        text: '© 2026 شركة طلائع الركب. جميع الحقوق محفوظة.',
    },
    search: {
        placeholder: 'ابحث في الدليل...',
    },
    editLink: {
        text: 'تعديل هذه الصفحة'
    },
    feedback: {
        content: 'هل تواجه مشكلة أو لديك سؤال؟ تواصل مع الدعم الفني.'
    }
}
