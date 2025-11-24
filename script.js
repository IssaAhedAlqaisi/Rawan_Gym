// ترجمة نصوص الموقع عربي / إنجليزي باستخدام data-i18n
const translations = {
  ar: {
    logo_main: "روان جيم",
    logo_sub: "Rawan Gym Club",

    nav_home: "الرئيسية",
    nav_plans: "الاشتراكات",
    nav_facilities: "المرافق",
    nav_schedule: "أوقات الدوام",
    nav_gallery: "المعرض",
    nav_stories: "القصص والنصائح",
    nav_contact: "تواصل",

    hero_badge: "صالة رياضية متكاملة في خلدا",
    hero_title: "مستواك الجاي يبدأ من هون",
    hero_subtitle:
      "حديد، كارديو، مسبح، ساونا، جاكوزي، بخار وأكثر في مكان واحد. بيئة منفصلة للرجال والسيدات وأجواء تدريب بتحمسك كل يوم.",
    hero_cta_join: "اشترك الآن",
    hero_cta_contact: "تواصل معنا",
    hero_highlight_1: "مسبح داخلي مميز",
    hero_highlight_2: "مرافق سبا كاملة",
    hero_highlight_3: "مواقف من طابقين",

    plans_title: "باقات الاشتراك",
    plans_subtitle: "اختر المدة اللي بتناسب أسلوب حياتك والتزم بخطتك معنا.",
    plan_month_title: "شهري",
    plan_month_price: "80 دينار",
    plan_3_title: "3 أشهر",
    plan_3_price: "180 دينار",
    plan_6_title: "6 أشهر",
    plan_6_price: "280 دينار",
    plan_year_title: "سنة كاملة",
    plan_year_price: "450 دينار",
    plan_feature_pool: "شامل المسبح والمرافق",
    plan_feature_gym: "صالة حديد وكارديو كاملة",
    plan_feature_spa: "ساونا وجاكوزي وبخار",
    plan_feature_save: "قيمة أفضل للاشتراك المتوسط",
    plan_feature_access: "إمكانية الدخول يومياً",
    plan_feature_support: "متابعة من المدربين",
    plan_feature_long: "تقدم ملحوظ في الأداء واللياقة",
    plan_feature_body: "بناء عادات رياضية قوية",
    plan_feature_bonus: "عروض وميزات موسمية",
    plan_feature_year: "أفضل سعر لعشاق الالتزام",
    plan_feature_transform: "فرصة حقيقية لتغيير نمط حياتك",
    plan_feature_family: "مناسب لمحبي التدريب على مدار العام",
    plan_best: "الأكثر شعبية",

    facilities_title: "مرافق روان جيم",
    facilities_subtitle:
      "كل اللي بتحتاجه في مكان واحد، لأفضل تجربة تدريب وراحة.",
    fac_weights_title: "صالة الحديد",
    fac_weights_text:
      "أجهزة حديثة ومجموعة أوزان كاملة لبناء القوة والعضلات.",
    fac_cardio_title: "صالة الكارديو",
    fac_cardio_text:
      "أجهزة جري، دراجات، وإليبتيكال لتحسين اللياقة وحرق الدهون.",
    fac_pool_title: "المسبح",
    fac_pool_text:
      "مسبح مميز لجلسات السباحة، الاسترخاء، وبرامج اللياقة المائية.",
    fac_sauna_title: "الساونا",
    fac_sauna_text:
      "ساونا لمساعدة جسمك على الاسترخاء والتخلص من التوتر.",
    fac_jacuzzi_title: "الجاكوزي",
    fac_jacuzzi_text: "جاكوزي للاسترخاء بعد التمرين وتجديد طاقتك.",
    fac_steam_title: "غرفة البخار",
    fac_steam_text:
      "بخار دافئ يساعد في تنشيط الدورة الدموية وتنظيف البشرة.",
    fac_lockers_title: "غرف الغيار",
    fac_lockers_text:
      "غرف غيار مريحة مع خزائن لتأمين أغراضك الشخصية.",
    fac_parking_title: "مواقف سيارات",
    fac_parking_text:
      "مواقف سيارات مكونة من طابقين لسهولة الوصول في أي وقت.",

    schedule_title: "أوقات الدوام",
    schedule_subtitle:
      "اختر الوقت المناسب إلك، وإحنا موجودين من بدري لآخر الليل.",
    schedule_women_title: "قسم السيدات",
    schedule_women_hours: "من ٧ صباحاً ولغاية ١٠ مساءً",
    schedule_women_note: "بيئة مريحة وآمنة للسيدات فقط.",
    schedule_men_title: "قسم الرجال",
    schedule_men_hours: "من ٦ صباحاً ولغاية ١٢ منتصف الليل",
    schedule_men_note:
      "أجواء حماسية وتمارين قوية على مدار اليوم.",

    why_title: "لماذا روان جيم؟",
    why_subtitle:
      "موقع مميز، مرافق متكاملة، وخبرة من 2019 لخدمتك.",
    why_location_title: "الموقع",
    why_location_text:
      "خلدا - دوار السكر - روان مول - الطابق الثالث. موقع استراتيجي وسهل الوصول.",
    why_parking_title: "مواقف السيارات",
    why_parking_text:
      "مواقف سيارات مكونة من طابقين لتجربة مريحة من لحظة وصولك.",
    why_experience_title: "الخبرة",
    why_experience_text:
      "تأسس النادي في تموز 2019، ومعنا مئات القصص من أعضاء غيروا نمط حياتهم.",
    why_full_title: "مرافق متكاملة",
    why_full_text:
      "صالة حديد، كارديو، مسبح، سبا، وغرف غيار، لتلاقي كل شيء تحتاجه في مكان واحد.",

    gallery_title: "جولة داخل الجيم",
    gallery_subtitle:
      "شوف أجواء روان جيم قبل ما تزورنا على أرض الواقع.",
    gallery_video_title: "فيديو للجيم",
    gallery_pool_title: "صور المسبح",

    stories_title: "قصص ونصائح من الجيم",
    stories_subtitle:
      "حكايات من أجواء روان جيم ونصائح تساعدك تبدأ وتستمر.",
    stories_sub_title: "قصص من أعضائنا",
    story_1_title: "من التعب على الدرج إلى تمرين كامل",
    story_1_text:
      "أحمد كان يتعب من طلعة درج واحدة ويتجنب أي نشاط رياضي. بعد ٦ أشهر في روان جيم بين المسبح وتمارين الحديد، صار يخلص تمرين كامل بدون ما يحس بنفس التعب وخسر ١٢ كيلو بطريقة صحية.",
    story_2_title: "ثقة جديدة مع كل تمرين",
    story_2_text:
      "روان كانت مترددة تبدأ في الجيم. مع الوقت والتدرج، قدرت تلتزم ٣ مرات أسبوعياً، لاحظت فرق في نومها وطاقة يومها قبل ما تشوف الفرق على الميزان. اليوم الرياضة جزء ثابت من روتينها.",

    tips_title: "نصائح من روان جيم",
    tip_1_title: "ابدأ خفيف لكن استمر",
    tip_1_text:
      "لا تحاول تغيّر جسمك بيوم وليلة. ابدأ بخطوات صغيرة وثابتة، وركز على الالتزام أكثر من شدة التمرين في البداية.",
    tip_2_title: "لا تهمل الإحماء",
    tip_2_text:
      "٥–١٠ دقائق إحماء قبل التمرين تقلل من خطر الإصابة وتخلي جسمك جاهز للمجهود.",
    tip_3_title: "نم، اشرب، كُل صح",
    tip_3_text:
      "التمرين جزء من الصورة فقط. النوم الجيد، شرب الماء، والتغذية المتوازنة هم الأساس لتشوف فرق.",

    contact_title: "تواصل معنا",
    contact_subtitle:
      "جاهزين نستقبلك في أي وقت ضمن أوقات الدوام، أو تواصل معنا للاستفسار عن الاشتراكات.",
    contact_address_label: "العنوان",
    contact_address_value:
      "خلدا - دوار السكر - روان مول - الطابق الثالث",
    contact_parking_label: "مواقف السيارات",
    contact_parking_value: "مواقف سيارات مكونة من طابقين لخدمتك.",
    contact_founded_label: "تاريخ التأسيس",
    contact_founded_value: "تموز ٢٠١٩",
    contact_note:
      "أضف رقم الهاتف أو واتساب الخاص بالنادي هنا ليستطيع الأعضاء التواصل معك بسهولة.",
    contact_form_title: "أرسل لنا رسالة",
    contact_form_name: "الاسم الكامل",
    contact_form_phone: "رقم الهاتف",
    contact_form_message: "رسالتك",
    contact_form_submit: "إرسال",

    footer_rights: "جميع الحقوق محفوظة © روان جيم"
  },

  en: {
    logo_main: "Rawan Gym",
    logo_sub: "Fitness & Wellness Club",

    nav_home: "Home",
    nav_plans: "Membership",
    nav_facilities: "Facilities",
    nav_schedule: "Schedule",
    nav_gallery: "Gallery",
    nav_stories: "Stories & Tips",
    nav_contact: "Contact",

    hero_badge: "Premium gym experience in Khalda",
    hero_title: "Your next level starts here",
    hero_subtitle:
      "Weights, cardio, pool, sauna, jacuzzi, steam room and more in one place. Separate areas for men and women and a motivating training atmosphere.",
    hero_cta_join: "Join now",
    hero_cta_contact: "Contact us",
    hero_highlight_1: "Indoor swimming pool",
    hero_highlight_2: "Full spa facilities",
    hero_highlight_3: "Two–level parking",

    plans_title: "Membership plans",
    plans_subtitle:
      "Choose the duration that fits your lifestyle and commit to your transformation.",
    plan_month_title: "Monthly",
    plan_month_price: "80 JOD",
    plan_3_title: "3 months",
    plan_3_price: "180 JOD",
    plan_6_title: "6 months",
    plan_6_price: "280 JOD",
    plan_year_title: "1 year",
    plan_year_price: "450 JOD",
    plan_feature_pool: "Includes pool and spa access",
    plan_feature_gym: "Full weights & cardio area",
    plan_feature_spa: "Sauna, jacuzzi & steam room",
    plan_feature_save: "Better value for mid–term members",
    plan_feature_access: "Daily access to the club",
    plan_feature_support: "Support from on–site trainers",
    plan_feature_long: "Visible progress in strength & fitness",
    plan_feature_body: "Build strong and lasting habits",
    plan_feature_bonus: "Seasonal offers and benefits",
    plan_feature_year: "Best value for dedicated members",
    plan_feature_transform: "A real chance to change your lifestyle",
    plan_feature_family: "Perfect for year–round training lovers",
    plan_best: "Most popular",

    facilities_title: "Rawan Gym facilities",
    facilities_subtitle:
      "Everything you need in one place for the best training and recovery experience.",
    fac_weights_title: "Weights area",
    fac_weights_text:
      "Modern machines and full range of free weights to build strength and muscle.",
    fac_cardio_title: "Cardio area",
    fac_cardio_text:
      "Treadmills, bikes and ellipticals to improve endurance and burn fat.",
    fac_pool_title: "Swimming pool",
    fac_pool_text:
      "A special pool for swimming, relaxing and aqua fitness programs.",
    fac_sauna_title: "Sauna",
    fac_sauna_text:
      "Sauna sessions to help your body relax and release tension.",
    fac_jacuzzi_title: "Jacuzzi",
    fac_jacuzzi_text:
      "Jacuzzi to unwind after your workout and recharge your energy.",
    fac_steam_title: "Steam room",
    fac_steam_text:
      "Warm steam that supports circulation and leaves your skin refreshed.",
    fac_lockers_title: "Changing rooms",
    fac_lockers_text:
      "Comfortable changing rooms with lockers to keep your belongings safe.",
    fac_parking_title: "Parking",
    fac_parking_text:
      "Two–level parking area for smooth access at any time.",

    schedule_title: "Opening hours",
    schedule_subtitle:
      "Pick the time that works best for you – we’re here from early morning till late night.",
    schedule_women_title: "Ladies section",
    schedule_women_hours: "From 7:00 AM to 10:00 PM",
    schedule_women_note: "Comfortable and safe environment for ladies only.",
    schedule_men_title: "Men’s section",
    schedule_men_hours: "From 6:00 AM to 12:00 midnight",
    schedule_men_note:
      "High–energy training atmosphere all day long.",

    why_title: "Why Rawan Gym?",
    why_subtitle:
      "Prime location, full facilities and solid experience since 2019.",
    why_location_title: "Location",
    why_location_text:
      "Khalda – Sugar roundabout – Rawan Mall – 3rd floor. A strategic and easy–to–reach location.",
    why_parking_title: "Parking",
    why_parking_text:
      "Two–level parking to make your visit smooth from the moment you arrive.",
    why_experience_title: "Experience",
    why_experience_text:
      "The club was founded in July 2019 and has since helped hundreds of members transform their lifestyle.",
    why_full_title: "All–in–one facilities",
    why_full_text:
      "Weights, cardio, pool, spa and changing rooms – everything you need in one place.",

    gallery_title: "Inside Rawan Gym",
    gallery_subtitle:
      "Get a feeling of the club before you step in.",
    gallery_video_title: "Gym tour video",
    gallery_pool_title: "Pool photos",

    stories_title: "Stories & tips from the gym",
    stories_subtitle:
      "Real experiences from our members and tips to help you start and stay consistent.",
    stories_sub_title: "Stories from our members",
    story_1_title: "From stairs fatigue to full workouts",
    story_1_text:
      "Ahmad used to get exhausted from just one flight of stairs and avoided any activity. After 6 months at Rawan Gym combining swimming and weights, he can now finish a full workout with ease and has lost 12 kg in a healthy way.",
    story_2_title: "New confidence with every session",
    story_2_text:
      "Rawan was hesitant to start at the gym. With time and gradual progress, she committed to training three times a week. She noticed better sleep and energy before she even saw changes on the scale. Today, training is a fixed part of her routine.",

    tips_title: "Tips from Rawan Gym",
    tip_1_title: "Start light, stay consistent",
    tip_1_text:
      "Don’t try to change your body overnight. Start with small, consistent steps and focus on commitment more than intensity at first.",
    tip_2_title: "Never skip your warm–up",
    tip_2_text:
      "5–10 minutes of warm–up before training lowers your risk of injury and prepares your body for effort.",
    tip_3_title: "Sleep, hydrate, and eat well",
    tip_3_text:
      "Training is just one part of the picture. Good sleep, water intake and balanced nutrition are the real base for results.",

    contact_title: "Contact us",
    contact_subtitle:
      "We’re ready to welcome you during opening hours – or contact us to ask about memberships.",
    contact_address_label: "Address",
    contact_address_value:
      "Khalda – Sugar roundabout – Rawan Mall – 3rd floor",
    contact_parking_label: "Parking",
    contact_parking_value: "Two–level parking for your convenience.",
    contact_founded_label: "Founded",
    contact_founded_value: "July 2019",
    contact_note:
      "Add your club phone number or WhatsApp here so members can reach you easily.",
    contact_form_title: "Send us a message",
    contact_form_name: "Full name",
    contact_form_phone: "Phone number",
    contact_form_message: "Your message",
    contact_form_submit: "Send",

    footer_rights: "All rights reserved © Rawan Gym"
  }
};

const LANG_KEY = "rg_lang";

function updateLanguage(lang) {
  const html = document.documentElement;
  const body = document.body;
  const toggleBtn = document.getElementById("lang-toggle");

  const strings = translations[lang];
  if (!strings) return;

  // غير اتجاه الصفحة
  html.lang = lang === "ar" ? "ar" : "en";
  html.dir = lang === "ar" ? "rtl" : "ltr";
  body.classList.toggle("lang-ar", lang === "ar");
  body.classList.toggle("lang-en", lang === "en");

  // غيّر نص كل عنصر يحمل data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = strings[key];
    if (typeof value === "string") {
      el.textContent = value;
      // للغليتش نخزن النص في data-text
      if (el.classList.contains("glitch")) {
        el.setAttribute("data-text", value);
      }
    }
  });

  // زر اللغة: يظهر اللغة الأخرى اللي راح يتحول إلها
  toggleBtn.textContent = lang === "ar" ? "EN" : "عربي";

  localStorage.setItem(LANG_KEY, lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // اللغة المخزّنة أو الافتراضية
  const savedLang = localStorage.getItem(LANG_KEY) || "ar";
  updateLanguage(savedLang);

  const toggleBtn = document.getElementById("lang-toggle");
  toggleBtn.addEventListener("click", () => {
    const current = localStorage.getItem(LANG_KEY) || "ar";
    const next = current === "ar" ? "en" : "ar";
    updateLanguage(next);
  });

  // أنيميشن الظهور عند السكرول
  const revealElems = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  revealElems.forEach((el) => revealObserver.observe(el));

  // منع إرسال الفورم الحقيقي (لأن ما في باك إند حالياً)
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        savedLang === "ar"
          ? "تم إرسال النموذج (مثال تجريبي). يمكنك ربطه لاحقاً بإيميل أو خدمة فورم."
          : "Form submitted (demo only). You can connect it to email or a form service later."
      );
      form.reset();
    });
  }
});
