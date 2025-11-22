'use client'

import { useState } from 'react'

const translations = {
  ar: {
    title: "دليل المسافر - نهائيات كأس العالم 2026",
    subtitle: "دليلك الشامل للسفر إلى أمريكا والمكسيك وكندا",
    description: "الدليل الرسمي المحمي بعلامة DP2030",
    usa: {
      title: "الولايات المتحدة الأمريكية",
      cities: "المدن المستضيفة",
      cityList: [
        "لوس أنجلوس - ملعب سوفي",
        "نيويورك/نيوجيرسي - ملعب ميت لايف",
        "ميامي - ملعب هارد روك",
        "دالاس - ملعب AT&T",
        "أتلانتا - ملعب مرسيدس بنز",
        "هيوستن - ملعب NRG",
        "كانساس سيتي - ملعب أرو هيد",
        "فيلادلفيا - ملعب لينكولن فيننشال",
        "سياتل - ملعب لومن",
        "سان فرانسيسكو - ملعب ليفاي",
        "بوسطن - ملعب جيليت"
      ],
      visa: "معلومات التأشيرة",
      visaInfo: "تأشيرة سياحية (B-2) مطلوبة للمواطنين العرب. قدم طلبك قبل 3 أشهر على الأقل",
      transport: "النقل",
      transportInfo: "شبكة مواصلات متطورة، يوصى باستئجار سيارة للتنقل بين المدن",
      accommodation: "الإقامة",
      accommodationInfo: "احجز الفنادق مبكراً. الأسعار تتراوح من 150-500 دولار في الليلة",
      weather: "الطقس",
      weatherInfo: "يونيو-يوليو: حار جداً في الجنوب (30-40°)، معتدل في الشمال (20-25°)"
    },
    mexico: {
      title: "المكسيك",
      cities: "المدن المستضيفة",
      cityList: [
        "مكسيكو سيتي - ملعب أزتيكا",
        "غوادالاخارا - ملعب أكرون",
        "مونتيري - ملعب BBVA"
      ],
      visa: "معلومات التأشيرة",
      visaInfo: "معظم المواطنين العرب يحتاجون تأشيرة. التأشيرة الإلكترونية متاحة لبعض الجنسيات",
      transport: "النقل",
      transportInfo: "مترو الأنفاق متوفر في المدن الكبرى، تاكسي Uber آمن ومتاح",
      accommodation: "الإقامة",
      accommodationInfo: "خيارات متنوعة من 50-300 دولار في الليلة. احجز في مناطق آمنة",
      weather: "الطقس",
      weatherInfo: "موسم الأمطار الصيفي. معتدل في المرتفعات (20-25°)، حار في السواحل (30-35°)",
      culture: "الثقافة",
      cultureInfo: "شعب ودود، تعلم بعض الإسبانية الأساسية. احترم التقاليد المحلية"
    },
    canada: {
      title: "كندا",
      cities: "المدن المستضيفة",
      cityList: [
        "تورنتو - ملعب BMO فيلد",
        "فانكوفر - ملعب BC بليس"
      ],
      visa: "معلومات التأشيرة",
      visaInfo: "تصريح السفر الإلكتروني (eTA) أو تأشيرة زائر مطلوبة حسب الجنسية",
      transport: "النقل",
      transportInfo: "نظام مواصلات عامة ممتاز. GO Transit متوفر بين المدن القريبة",
      accommodation: "الإقامة",
      accommodationInfo: "احجز مبكراً. الأسعار 120-400 دولار كندي في الليلة",
      weather: "الطقس",
      weatherInfo: "صيف معتدل ولطيف (20-28°). احضر طبقات ملابس للتغيرات الجوية",
      safety: "الأمان",
      safetyInfo: "دولة آمنة جداً. الخدمات الطبية متوفرة وذات جودة عالية"
    },
    tips: {
      title: "نصائح مهمة للمسافرين",
      booking: "الحجز المبكر",
      bookingInfo: "احجز التذاكر والفنادق قبل 6-12 شهراً",
      insurance: "التأمين",
      insuranceInfo: "احصل على تأمين سفر شامل يغطي الطوارئ الطبية",
      money: "المال",
      moneyInfo: "استخدم بطاقات الائتمان. احتفظ ببعض النقود للحالات الطارئة",
      app: "التطبيقات المفيدة",
      appInfo: "حمّل تطبيق FIFA، خرائط Google، تطبيقات الترجمة",
      emergency: "الطوارئ",
      emergencyInfo: "احتفظ بأرقام السفارة وخطوط الطوارئ المحلية (911 في أمريكا وكندا، 911 في المكسيك)"
    },
    footer: {
      protected: "محمي بعلامة DP2030 التجارية",
      copyright: "© 2024-2026 DP2030. جميع الحقوق محفوظة. دليل المسافر الرسمي لكأس العالم FIFA 2026"
    }
  },
  en: {
    title: "Traveler's Guide - FIFA World Cup 2026",
    subtitle: "Your Complete Guide to USA, Mexico, and Canada",
    description: "Official Guide Protected by DP2030 Trademark",
    usa: {
      title: "United States of America",
      cities: "Host Cities",
      cityList: [
        "Los Angeles - SoFi Stadium",
        "New York/New Jersey - MetLife Stadium",
        "Miami - Hard Rock Stadium",
        "Dallas - AT&T Stadium",
        "Atlanta - Mercedes-Benz Stadium",
        "Houston - NRG Stadium",
        "Kansas City - Arrowhead Stadium",
        "Philadelphia - Lincoln Financial Field",
        "Seattle - Lumen Field",
        "San Francisco - Levi's Stadium",
        "Boston - Gillette Stadium"
      ],
      visa: "Visa Information",
      visaInfo: "Tourist visa (B-2) required for Arab citizens. Apply at least 3 months in advance",
      transport: "Transportation",
      transportInfo: "Advanced transport network. Car rental recommended for inter-city travel",
      accommodation: "Accommodation",
      accommodationInfo: "Book hotels early. Prices range from $150-500 per night",
      weather: "Weather",
      weatherInfo: "June-July: Very hot in South (30-40°C), moderate in North (20-25°C)"
    },
    mexico: {
      title: "Mexico",
      cities: "Host Cities",
      cityList: [
        "Mexico City - Estadio Azteca",
        "Guadalajara - Estadio Akron",
        "Monterrey - Estadio BBVA"
      ],
      visa: "Visa Information",
      visaInfo: "Most Arab citizens need visa. E-visa available for some nationalities",
      transport: "Transportation",
      transportInfo: "Metro available in major cities. Uber taxi safe and available",
      accommodation: "Accommodation",
      accommodationInfo: "Various options from $50-300 per night. Book in safe areas",
      weather: "Weather",
      weatherInfo: "Summer rainy season. Moderate in highlands (20-25°C), hot in coasts (30-35°C)",
      culture: "Culture",
      cultureInfo: "Friendly people. Learn basic Spanish. Respect local traditions"
    },
    canada: {
      title: "Canada",
      cities: "Host Cities",
      cityList: [
        "Toronto - BMO Field",
        "Vancouver - BC Place"
      ],
      visa: "Visa Information",
      visaInfo: "Electronic Travel Authorization (eTA) or visitor visa required depending on nationality",
      transport: "Transportation",
      transportInfo: "Excellent public transport system. GO Transit available between nearby cities",
      accommodation: "Accommodation",
      accommodationInfo: "Book early. Prices $120-400 CAD per night",
      weather: "Weather",
      weatherInfo: "Pleasant moderate summer (20-28°C). Bring layers for weather changes",
      safety: "Safety",
      safetyInfo: "Very safe country. Medical services available and high quality"
    },
    tips: {
      title: "Important Travel Tips",
      booking: "Early Booking",
      bookingInfo: "Book tickets and hotels 6-12 months in advance",
      insurance: "Insurance",
      insuranceInfo: "Get comprehensive travel insurance covering medical emergencies",
      money: "Money",
      moneyInfo: "Use credit cards. Keep some cash for emergencies",
      app: "Useful Apps",
      appInfo: "Download FIFA app, Google Maps, translation apps",
      emergency: "Emergency",
      emergencyInfo: "Keep embassy numbers and local emergency lines (911 in USA & Canada, 911 in Mexico)"
    },
    footer: {
      protected: "Protected by DP2030 Trademark",
      copyright: "© 2024-2026 DP2030. All Rights Reserved. Official FIFA World Cup 2026 Traveler's Guide"
    }
  }
}

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar')
  const t = translations[lang]

  return (
    <>
      <div className="watermark">DP2030</div>

      <div className="cloud-trademark">
        <div className="cloud-container">
          <div className="cloud">
            <div className="trademark-text">DP2030™</div>
          </div>
          <div className="rain"></div>
          <div className="rain"></div>
          <div className="rain"></div>
          <div className="rain"></div>
          <div className="rain"></div>
        </div>
      </div>

      <div className="container" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="header">
          <div className="header-content">
            <div className="logo">🏆 FIFA World Cup 2026</div>
            <h1 className="subtitle">{t.title}</h1>
            <p style={{ fontSize: '18px', marginTop: '10px' }}>{t.subtitle}</p>
            <p style={{ fontSize: '14px', marginTop: '15px', color: '#81d4fa' }}>{t.description}</p>
            <div className="lang-toggle">
              <button
                className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
                onClick={() => setLang('ar')}
              >
                العربية
              </button>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                English
              </button>
            </div>
          </div>
        </div>

        <div className="content">
          {/* USA Card */}
          <div className="card">
            <h2 className="card-title">
              <span className="flag">🇺🇸</span>
              {t.usa.title}
            </h2>
            <div className="card-content">
              <div className="section">
                <div className="section-title">{t.usa.cities}</div>
                <ul className="city-list">
                  {t.usa.cityList.map((city, idx) => (
                    <li key={idx}>⚽ {city}</li>
                  ))}
                </ul>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <div className="info-label">🛂 {t.usa.visa}</div>
                  <p>{t.usa.visaInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🚗 {t.usa.transport}</div>
                  <p>{t.usa.transportInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🏨 {t.usa.accommodation}</div>
                  <p>{t.usa.accommodationInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🌡️ {t.usa.weather}</div>
                  <p>{t.usa.weatherInfo}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mexico Card */}
          <div className="card">
            <h2 className="card-title">
              <span className="flag">🇲🇽</span>
              {t.mexico.title}
            </h2>
            <div className="card-content">
              <div className="section">
                <div className="section-title">{t.mexico.cities}</div>
                <ul className="city-list">
                  {t.mexico.cityList.map((city, idx) => (
                    <li key={idx}>⚽ {city}</li>
                  ))}
                </ul>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <div className="info-label">🛂 {t.mexico.visa}</div>
                  <p>{t.mexico.visaInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🚇 {t.mexico.transport}</div>
                  <p>{t.mexico.transportInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🏨 {t.mexico.accommodation}</div>
                  <p>{t.mexico.accommodationInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🌡️ {t.mexico.weather}</div>
                  <p>{t.mexico.weatherInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🎭 {t.mexico.culture}</div>
                  <p>{t.mexico.cultureInfo}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Canada Card */}
          <div className="card">
            <h2 className="card-title">
              <span className="flag">🇨🇦</span>
              {t.canada.title}
            </h2>
            <div className="card-content">
              <div className="section">
                <div className="section-title">{t.canada.cities}</div>
                <ul className="city-list">
                  {t.canada.cityList.map((city, idx) => (
                    <li key={idx}>⚽ {city}</li>
                  ))}
                </ul>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <div className="info-label">🛂 {t.canada.visa}</div>
                  <p>{t.canada.visaInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🚇 {t.canada.transport}</div>
                  <p>{t.canada.transportInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🏨 {t.canada.accommodation}</div>
                  <p>{t.canada.accommodationInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🌡️ {t.canada.weather}</div>
                  <p>{t.canada.weatherInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🛡️ {t.canada.safety}</div>
                  <p>{t.canada.safetyInfo}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h2 className="card-title">
              <span className="flag">💡</span>
              {t.tips.title}
            </h2>
            <div className="card-content">
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-label">📅 {t.tips.booking}</div>
                  <p>{t.tips.bookingInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🏥 {t.tips.insurance}</div>
                  <p>{t.tips.insuranceInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">💰 {t.tips.money}</div>
                  <p>{t.tips.moneyInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">📱 {t.tips.app}</div>
                  <p>{t.tips.appInfo}</p>
                </div>
                <div className="info-item">
                  <div className="info-label">🚨 {t.tips.emergency}</div>
                  <p>{t.tips.emergencyInfo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-logo">⚡ DP2030™ ⚡</div>
          <p style={{ margin: '10px 0', color: '#81d4fa' }}>{t.footer.protected}</p>
          <p className="copyright">{t.footer.copyright}</p>
        </div>
      </div>
    </>
  )
}
