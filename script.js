    // 1. تفعيل الأيقونات (Lucide Icons)
    lucide.createIcons();

    // 2. الحصول على جميع الأزرار (Tabs) ومدخل الوجهة
    const tabs = document.querySelectorAll('.tab-btn');
    const destInput = document.getElementById('destInput');

    // 3. إضافة وظيفة الضغط لكل زر
    tabs.forEach(tab => {
        tab.onclick = function() {
            // أ. إزالة اللون البرتقالي من جميع الأزرار وإعادة اللون الشفاف
            tabs.forEach(t => {
                t.classList.remove('bg-sahab-orange');
                t.classList.add('bg-white/30');
            });

            // ب. إضافة اللون البرتقالي للزر الذي تم الضغط عليه حالياً
            this.classList.remove('bg-white/30');
            this.classList.add('bg-sahab-orange');

            // ج. تغيير نص التلميح (Placeholder) بناءً على نوع الخدمة
            const type = this.innerText.trim();
            if (type.includes("فنادق")) {
                destInput.placeholder = "اسم الفندق أو المدينة";
            } else if (type.includes("سيارات")) {
                destInput.placeholder = "مكان استلام السيارة";
            } else if (type.includes("كروز")) {
                destInput.placeholder = "وجهة الإبحار (الميناء)";
            } else if (type.includes("قطارات")) {
                destInput.placeholder = "محطة المغادرة / الوصول";
            } else {
                destInput.placeholder = "إلى أين؟";
            }
        };
    });
