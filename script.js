    // تفعيل الأيقونات
    lucide.createIcons();

    // كود تبديل الأقسام وتغيير نصوص البحث
    const tabs = document.querySelectorAll('.tab-btn');
    const destinationLabel = document.querySelector('input[placeholder="إلى أين؟"]');
    const searchBtn = document.querySelector('header button.bg-sahab-orange:last-child');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 1. تغيير لون الزر النشط
            tabs.forEach(t => {
                t.classList.remove('bg-sahab-orange');
                t.classList.add('bg-white/20');
            });
            this.classList.remove('bg-white/20');
            this.classList.add('bg-sahab-orange');

            // 2. تغيير النصوص بناءً على القسم المختار
            const service = this.innerText.trim();
            
            if (service === "فنادق") {
                destinationLabel.placeholder = "اسم الفندق أو المنطقة";
                searchBtn.innerHTML = '<i data-lucide="search"></i> بحث عن فنادق';
            } else if (service === "سيارات") {
                destinationLabel.placeholder = "مكان استلام السيارة";
                searchBtn.innerHTML = '<i data-lucide="search"></i> بحث عن سيارات';
            } else if (service === "كروز") {
                destinationLabel.placeholder = "وجهة الإبحار";
                searchBtn.innerHTML = '<i data-lucide="search"></i> بحث عن رحلات بحرية';
            } else {
                destinationLabel.placeholder = "إلى أين؟";
                searchBtn.innerHTML = '<i data-lucide="search"></i> بحث';
            }
            
            // إعادة تفعيل الأيقونات داخل الأزرار بعد التغيير
            lucide.createIcons();
        });
    });
