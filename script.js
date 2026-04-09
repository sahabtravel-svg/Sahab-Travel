        // تفعيل الأيقونات
        lucide.createIcons();

        // كود تبديل الألوان بين الأزرار عند الضغط
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => {
                    t.classList.remove('bg-sahab-orange');
                    t.classList.add('bg-white/20');
                });
                this.classList.remove('bg-white/20');
                this.classList.add('bg-sahab-orange');
            });
        });
