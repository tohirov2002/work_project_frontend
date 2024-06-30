import React, { useContext } from 'react'
import soglom1 from '../../../assets/images/soglom1.jpg'
import soglom2 from '../../../assets/images/soglom2.jpg'
import soglom3 from '../../../assets/images/soglom3.jpg'
import soglom4 from '../../../assets/images/soglom4.jpg'
import soglom_hayot from '../../../assets/images/soglom_hayot.webp'
import yotoqjoy from '../../../assets/images/yotoqjoy.png'
import bed1 from '../../../assets/images/bed1.jpg'
import bed2 from '../../../assets/images/bed2.jpg'
import bed3 from '../../../assets/images/bed3.jpg'
import bed4 from '../../../assets/images/bed4.jpg'
import foods from '../../../assets/images/foods.png'
import kitchen1 from '../../../assets/images/kitchen1.jpg'
import kitchen2 from '../../../assets/images/kitchen2.jpg'
import kitchen3 from '../../../assets/images/kitchen3.jpg'
import kitchen4 from '../../../assets/images/kitchen4.jpg'
import {Context} from '../../Context/Context'


const Section = () => {
  const {mood} = useContext(Context)

  return (
    <>
        <section className='mt-[20px]'>
            <div className='images1'>
                <h1 className='text-center text-white font-bold bg-[#00000050] h-[200px] text-[48px] pt-[60px] about_title'>Биз ҳақимизда</h1>
            </div>
        </section>
        <section className='container mt-[150px] about'>
            <div className='flex  justify-between about_div'>
                <div className='mt-[10px]'>
                    <h1 className={`${mood? 'text-[#2D3663]': 'text-white'}  text-[42px] font-bold about_text`}>Соғлом ҳаёт</h1>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] mt-5`}>«Соғлом ҳаёт» Ўзбекистондаги ноёб, етакчи даволаш-диагностик, илмий-тадқиқот тиббий маркази ҳисобланади.Бизнинг мақсадимиз Клиниканинг асосий мақсади жаҳон стандартларига мос келувчи юқори малакали тиббий хизмат кўрсатишдан иборат.</p>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] mt-5`}>Клиника бўлимларида юқори малакали мутахассислар – клиницист-нефрологлар (гемодиализ бўйича мутахассислар), эндокринологлар, нуклеар тиббиёт бўйича шифокорлар, невропатологлар, кардиологлар, офтальмологлар, травматологлар ва бошқа шифокорлар фаолият юритадилар.</p>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] mt-5`}>«Соғлом ҳаёт» тиббий марказининг илмий салоҳияти замонавий тиббиётнинг долзарб илмий ва амалий йўналишларини чуқур ҳамда тизимли равишда ўрганишга замин яратади.</p>
                    <div className='mt-[40px] flex items-center gap-5 img_bt'>
                        <img className='w-[120px] h-[100px]' src={soglom1} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={soglom2} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={soglom3} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={soglom4} alt="soglom" />
                    </div>
                </div>
                <div className='mr-[50px] about_img_div'>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img' src={soglom_hayot} alt="soglom_hayot" />
                </div>
            </div>
            <div className='flex justify-between mt-[150px] about_div about'>
                <div>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img2 about_img' src={yotoqjoy} alt="yotoqjoy" />
                </div>
                <div className='mt-[10px] mr-[50px] about_main'>
                    <h1 className={`${mood? 'text-[#2D3663]': 'text-white'}  text-[42px] font-bold max-w-[500px] about_text`}>Клиникада даволаниш ва яшаш</h1>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] mt-5`}>Клиникада ҳар бири 22 квадратли 24 та люкс хоналар мавжуд ҳамда улар асосий бинонинг иккинчи ва учинчи қаватларида жойлашган. Бу ерда сизни шовқиндан ҳимояланган, шифтлари баланд, кўркам ва ёруғ хоналар кутмоқда. Ҳар бир хона барча қулайликларни жамлаган ҳолда нафис жиҳозланган. Қулай макон ҳамда функционаллик жиҳатдан бу хоналар кенг, шинам ҳаммом ҳамда ҳожатхоналарга эга.</p>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] text-[#7b809a] mt-8`}>Шахсий буюмларни сақлаш учун ҳам алоҳида бўлмалар мавжуд. Люкс хоналардаги эргономик тиббий каравотлар соғлиқни тиклаш учун жуда муҳим бўлган соғлом ва чуқур уйқу имкониятини беради. Хоналар кабель телевидениеси, интернетга кириш учун Wi-Fi, музлаткич ва парвариш қилувчилар учун алоҳида ўринлар билан жиҳозланган.</p>
                    <div className='mt-[40px] flex items-center gap-5 img_bt'>
                        <img className='w-[120px] h-[100px]' src={bed1} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={bed2} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={bed3} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={bed4} alt="soglom" />
                    </div>
                </div>
                <div>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img about_img1' src={yotoqjoy} alt="yotoqjoy" />
                </div>
            </div>
            <div className='flex  justify-between mt-[150px] about_div about'>
                <div className='mt-[10px]'>
                    <h1 className={`${mood? 'text-[#2D3663]': 'text-white'}  text-[#2D3663] text-[42px] font-bold max-w-[900px] about_text`}>Клиникада овқатланиш</h1>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[680px] text-[16px] mt-5`}>Тажрибамиз шуни кўрсатадики, тўғри овқатланиш соғайишнинг муҳим омилларидан биридир. Бизнинг бош ошпазларимиз фойдали ва мазали таом тушунчалари бир-бирига зид келмаслигини кундалик фаолиятларида исботлаб борадилар. Таклиф этилаётган таомлар нафақат хилма-хил, балки тиббий талабларга мувофиқ ҳамдир. Ошхонамизда ҳам Осиё, ҳам Европа ошхоналари унсурларини учратиш мумкин. Айрим рецептлар эса бувижонларимизнинг тажрибаларига асосланган, зеро биз маҳаллий ишлаб чиқарувчиларнинг сархил ва мавсумий маҳсулотларидан фойдаланиш тарафдоримиз.</p>
                    <p className={`${mood? 'text-[#7b809a]': 'text-[#ebe9e9]'} max-w-[600px] text-[16px] text-[#7b809a] mt-8`}>Ташриф буюрувчиларимиз учун шинам қаҳвахона ишлаб туради ва унда моҳир бариста томонидан тайёрланган мазали ширинликлар ва  севимли ичимликлар тақдим этилади</p>
                    <div className='mt-[40px] flex items-center gap-5 img_bt'>
                        <img className='w-[120px] h-[100px]' src={kitchen1} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={kitchen2} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={kitchen3} alt="soglom" />
                        <img className='w-[120px] h-[100px]' src={kitchen4} alt="soglom" />
                    </div>
                </div>
                <div className='mr-[50px] about_img_div'>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img' src={foods} alt="foods" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Section