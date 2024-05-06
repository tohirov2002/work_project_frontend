import React from 'react'
import soglom_hayot from '../../../assets/images/soglom_hayot.webp'
import jarrohlik from '../../../assets/images/jarohlik.jpg'
import labaratoriya from '../../../assets/images/labaratoriya.jpg'
import { FaArrowCircleRight } from "react-icons/fa";


const Section = () => {
  return (
   <section className='mt-[20px]'>
        <div className='services_image'>
            <h1 className='text-center text-white font-bold bg-[#00000050] h-[200px] text-[48px] pt-[60px] doctors_title'>Жарроҳлик</h1>
        </div>
        <div className="container mt-[100px] surgrey">
          <div className='flex items-center justify-between gap-5 surgery1'>
                  <div className=''>
                      <div className='bg-[#2D3663] p-[50px] rounded-3xl'>
                          <h1 className='font-bold text-white text-[40px] surgery_title'>Бизнинг шиоримиз</h1>
                          <p className='text-white text-[18px] max-w-[600px] mt-5 surgery_text'>Авитсенна тиббиётининг кўп асрлик анъаналари замонавий нанотехнология билан уйғунлашган.
“Соғлом ҳаёт” тиббиёт маркази кўплаб касалликларни консерватив ва жарроҳлик усуллар билан даволаш учун энг янги ускуналар билан жиҳозланган замонавий, юқори малакали марказдир. Клиниканинг жарроҳлик ихтисослашуви Ўзбекистон Республикаси Соғлиқни сақлаш вазирлигининг литсензиясига мувофиқ амалга оширилади. (онкология, нейрохирургия, эндоваскуляр жарроҳлик, кардиология, гинекология, ортопедия ва травматология). Клиникада ўзининг лаборатория диагностика маркази мавжуд бўлиб, бунинг натижасида клиника беморлари энг қисқа вақт ичида барча керакли хизматларни бир жойда олишлари мумкин, улар бошқа тиббиёт муассасаларига боришлари шарт эмас.</p>
                      </div>
                  </div>
                  <div className='bg-blue-50 p-[30px] pl-[50px] pr-[50px] rounded-2xl surgery_img'>
                      <img className='max-w-[480px] h-[480px] rounded-[50%] surgery_img1' src={soglom_hayot} alt="soglom_hayot" />
                  </div>
          </div>
          <div className='mt-[100px] surgery_1block'>
            <h1 className='font-bold text-[#2D3663] text-[32px] surgery_2block'>Birinchi operatsion blok</h1>
            <p className='text-[#2D3663] text-[18px] mt-[20px] max-w-[1200px]'>Birinchi jarrohlik blokirovkasi angiografiya va minimal invaziv endovaskulyar aralashuvlardir. Quyidagi profildagi bemorlarga endovaskulyar usullardan foydalangan holda rejalashtirilgan yuqori malakali va yuqori texnologiyali diagnostika va terapevtik yordam ko'rsatish:</p>
            <p className='text-[#2D3663] text-[18px] mt-[30px] max-w-[1200px]'><span className='font-bold text-[#2D3663]'>Kardiologik </span> - koronar angiografiya va yurak tomirlari kasalligi uchun koronar arteriyalarni stentlash.</p>
            <p className='text-[#2D3663] text-[18px] mt-[20px] max-w-[1200px]'><span className='font-bold text-[#2D3663]'>Onkologik </span> - jigar o'smalari (jigar arteriyasining transkateter kimyoembolizatsiyasi); kimyoembolizatsiya</p>
            <p className='text-[#2D3663] text-[18px] mt-[20px] max-w-[1200px]'><span className='font-bold text-[#2D3663]'>Qon tomir  </span> -  aorta va uning barcha shoxlarining surunkali okklyuziv-stenozli shikastlanishlari, arteriovenoz oqmalar, qon tomir anevrizmalari, arterial gipertenziya.</p>
            <p className='text-[#2D3663] text-[18px] mt-[20px] max-w-[1200px]'><span className='font-bold text-[#2D3663]'>Ginekologik </span> - bachadon miomasi (UA) uchun bachadon arteriyasi embolizatsiyasi, bachadon bo'yni saratonida qon ketish.</p>
            <p className='text-[#2D3663] text-[18px] mt-[20px] max-w-[1200px]'><span className='font-bold text-[#2D3663]'>Portal gipertenziya </span> - 1) taloq arteriyasining embolizatsiyasi, splenomegali va gipersplenizm mavjud bo'lganda, 2) TIPS - transjugulyar intrahepatik shunt, 3) oshqozon va qizilo'ngach venalarining teri orqali transhepatik embolizatsiyasi.</p>
          </div>
          <div className='flex  justify-between mt-[150px] about about_div'>
                <div className='mt-[10px] about_div'>
                    <h1 className='text-[#2D3663] text-[42px] font-bold surgery_2block'>Иккинчи оператсион блок</h1>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-[50px]'>Ikkinchi operatsiya bloki - laparoskopiya bilan umumiy jarrohlik</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-8'>Onkologik operatsiyalarning to'liq ro'yxati:</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-8'>1. Ko'krak va qorin bo'shlig'ida murakkab onkologik operatsiyalarning barcha turlari - radikal, rekonstruktiv, palliativ va kombinatsiyalangan operatsiyalar.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-2'>2. Skelet, orqa miya va miya suyaklarida onkologik operatsiyalar.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-8'>Markaz multidisipliner yondashuv asosida ishlaydi: bu yerda har bir yangi onkologiya holati turli soha mutaxassislarini o‘z ichiga olgan ko‘p tarmoqli kengashda muhokama qilinadi. Ular birgalikda bemorni jarrohlik yo'li bilan davolash to'g'risida qaror qabul qilishadi, bu esa tibbiy xatolik xavfini bartaraf qiladi va davolashda yuqori natijalarga erishadi.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-8'>Endokrin kasalliklarni jarrohlik yo'li bilan davolash (Qalqonsimon bez va paratiroid bezlarida intraoperativ ekspress sitologiya bilan operatsiyalar, olib tashlangan to'qimalarning gistologiyasi) qalqonsimon bez saratonining total tiroidektomiyasi, so'ngra radioyod terapiyasi.</p>
                   <button className='flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px]  bg-blue-950 hover:bg-slate-900'>Учрашув белгиланг <FaArrowCircleRight className='mt-1 w-[18px] h-[18px]'/></button>
                </div>
                <div className='mr-[50px] mt-8 about_img_div'>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img' src={jarrohlik} alt="soglom_hayot" />
                </div>
          </div>
          <div className='flex justify-around mt-[150px] about about_div'>
                <div className=''>
                  <img className='max-w-[650px] h-[650px] rounded-[50%] about_img2' src={labaratoriya} alt="labaratoriya" />
                </div>
                <div className='mt-[50px] about_main about_div surgey_block'>
                    <h1 className='text-[#2D3663] text-[42px] font-bold surgery_2block'>Laparoskopik jarrohlik</h1>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-[50px]'>Ushbu operatsiya bo'limida operatsiyalarning 50% dan ortig'i laparoskopik jarrohlik yordamida amalga oshiriladi:</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-8'>Onkologik operatsiyalarning to'liq ro'yxati:</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-8'>1. Laparoskopik xoletsistektomiya.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-2'>2. Laparoskopik appendektomiya.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-2'>3. Qorin bo'shlig'i organlarining laparoskopik echinokokkektomiyasi.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-2'>4. Laparoskopik tuxumdon kistektomiyasi.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-2'>5. Laparoskopik nefrektomiya.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-2'>6. Laparoskopik splenektomiya.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-2'>7. Bariatrik jarrohlik: laparoskopik gastrektomiya.</p>
                   <button className='flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px]  bg-blue-950 hover:bg-slate-900'>Учрашув белгиланг <FaArrowCircleRight className='mt-1 w-[18px] h-[18px]'/></button>
                </div>
                <div className=''>
                  <img className='max-w-[650px] h-[650px] rounded-[50%] about_img1 about_img' src={labaratoriya} alt="labaratoriya" />
                </div>
          </div>
          <div className='mt-[150px] surgery_1block'>
            <h1 className='font-bold text-[#2D3663] text-[40px] surgery_2block'>Uchinchi operatsiya bloki - travmatologiya bilan neyroxirurgiya:</h1>
            <p className='text-[#2D3663] text-[18px] mt-[20px] max-w-[1200px]'>Bu neyroxirurgiya operatsiyalari uchun eng yangi avlod gibrid operatsiya xonasi bo‘lib, lyuminestsent mikroskop, C-ARM rentgen tizimi, operatsiya davomida neyromonitoring tizimi kabi eng yangi tibbiy texnologiyalar bilan jihozlangan. Bu sog'lom a'zolar va to'qimalarga zarar etkazmasdan miya va orqa miya bo'yicha murakkab operatsiyalarni amalga oshirish, jarrohlikdan keyingi asoratlar (xususan, falaj) xavfini kamaytirish imkonini beradi.</p>
            <p className='text-[#2D3663] text-[18px] mt-[30px] max-w-[1200px]'>Ortopedik va travmatologik operatsiyalar:</p>
            <p className='text-[#2D3663] text-[18px] mt-[40px] max-w-[1200px]'>— Oyoq deformatsiyasi boʻyicha operatsiyalar</p>
            <p className='text-[#2D3663] text-[18px] mt-[10px] max-w-[1200px]'>— Yirik boʻgʻimlarning endoprotezlashi</p>
            <p className='text-[#2D3663] text-[18px] mt-[10px] max-w-[1200px]'>— Shoshilinch travmatologik yordam koʻrsatish boʻyicha operatsiyalar</p>
            <p className='text-[#2D3663] text-[18px] mt-[10px] max-w-[1200px]'>— Boʻgʻim ichidagi patologiyalar boʻyicha artroskopik operatsiyalar</p>
            <p className='text-[#2D3663] text-[18px] mt-[10px] max-w-[1200px]'>— Jarrohliksiz manipulyatsiyalar.</p>
            <p className='text-[#2D3663] text-[18px] mt-[50px] max-w-[1200px]'>Klinikamizda bugungi kunda jahon tibbiyotida mavjud bo'lgan eng zamonaviy davolash usullari qo'llaniladi. <span className='font-bold text-[#2D3663]'> Tibbiyotdagi Nana texnologiyasi – millat kelajagi va salomatligi!</span></p>
          </div>
        </div>
   </section>
  )
}

export default Section