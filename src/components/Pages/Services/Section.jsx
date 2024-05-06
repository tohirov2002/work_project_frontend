import {useState} from 'react'
import { LiaBrainSolid } from "react-icons/lia";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { FaArrowCircleRight } from "react-icons/fa";
import { LiaToothSolid } from "react-icons/lia";
import mrt from '../../../assets/images/mrt1.jpg'
import mskt from '../../../assets/images/mskt.jpg'
import aparat from '../../../assets/images/aparat.jpg'
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
import Forms from '../../Forms'

const Section = () => {
  const [showModal,setModal] = useState(false)
  
  const handleShow = () => {
    setModal(!showModal)
  }
  return (
   <>
    <section className='mt-[20px]'>
            <div className='services_image'>
                <h1 className='text-center text-white font-bold bg-[#00000050] h-[200px] text-[48px] pt-[60px] about_title'>Хизматлар</h1>
            </div>
            <div className="container">
                <div className='mt-[100px] services_title1'>
                    <h1 className='text-white font-bold bg-[#2D3663] h-[200px] text-[40px] pr-[60px] flex justify-end pt-[100px] services_title'>— БИЗНИНГ УСТУВОР ВАЗИФАМИЗ!</h1>
                </div> 
                <div className='mt-[100px]'>
                    <h1 className='text-[#2D3663] text-center font-bold text-[20px]'>Бизнинг хизматлар</h1>
                    <div className='flex items-centerv justify-center mt-1'>
                        <h1 className='text-[#2D3663] text-center font-bold text-[40px] max-w-[1100px] services_title2'>Клиникамизда дунёнинг энг яхши шифокорлари сизни даволашади</h1>
                    </div>
                </div>
                <div className='flex justify-between mt-[30px] services'>
                    <div className='section1_services1'>
                        <ul className='flex items-center flex-col'>
                            <li className=' text-white w-[260px] p-5 rounded-lg   bg-blue-950 hover:cursor-pointer flex  justify-between'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-white '/>
                                <p className='text-[24px] font-bold text-white mt-2'>невропатолог</p>
                            </li>
                            <li className='item mt-1 bg-white w-[260px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex justify-between'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>гемодиализ</p>
                            </li>
                            <li className='item bg-white w-[260px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex justify-between'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>гемодиализ</p>
                            </li>
                            <li className='item bg-white w-[260px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex justify-between'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>невропатолог</p>
                            </li>
                            <li className='item bg-white w-[260px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex justify-between'>
                                <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>кардиолог</p>
                            </li>
                            <li className='bg-white item w-[260px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex justify-between'>
                                <LiaToothSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>Stamatalog</p>
                            </li>
                            <li className='bg-white item w-[260px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex justify-between'>
                                <LiaToothSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>Stamatalog</p>
                            </li>
                        </ul>
                    </div>
                    <div className='mr-[50px] p-[50px] rounded-md bg-blue-50 section1_div1 section1_services'>
                        <ul className='flex items-center justify-between gap-5 section1_list1'>
                            <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>невропатолог</p>
                            </li>
                            <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>гемодиализ</p>
                            </li>
                            <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>гемодиализ</p>
                            </li>
                            <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>невропатолог</p>
                            </li>
                            <li className='item bg-white w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>кардиолог</p>
                            </li>
                        </ul>
                        <ul className='flex items-center justify-between bg-blue-50 mt-[50px] gap-5 section1_list1'>
                            <li className='bg-white item  w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>Лор</p>
                            </li>
                            <li className='bg-white item w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                <LiaBrainSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>Офтальмолог</p>
                            </li>
                            <li className='bg-white item w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                <LiaToothSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>Stamatalog</p>
                            </li>
                            <li className='bg-white item w-[250px] p-5 rounded-lg hover:bg-blue-950 hover:cursor-pointer flex flex-col items-center justify-center'>
                                <LiaHeartbeatSolid className='icon1 w-[50px] h-[50px] text-blue-950 '/>
                                <p className='text-[24px] font-bold text-blue-950 mt-2 '>Денстометрия</p>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-[#EDF3F6] p-[60px] rounded-2xl ml-[50px] section1_services3'>
                        <h1 className='text-[40px] font-bold text-[#2D3663]'>Нуклеар тиббиёт</h1>
                        <p className='text-center font-bold text-[#2D3663] text-[18px] mt-[20px]'>NANO Medical Clinic тиббий марказининг фаолияти нуклеар тиббиёт бўлими МАГАТЭ халқаро нормалари талабларига мувофиқ келади. Бўлимда ўтказилувчи муолажалар:</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'><span className='font-bold text-[#2D3663]'>Оқимли текширув</span>, буйракларнинг динамик ва статик текшируви,  ренография, қалқонсимон без ва паратиреоид безларни сканирлаш, шунингдек суяклар, юрак ва ўпканинг SPECT текшируви</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'>Қалқонсимон без ва паратиреоид безларнинг <span className='font-bold text-[#2D3663]'>радионуклид текшируви</span>, буйракларнинг динамик, реография ва статик текшируви, суяклар сцинтиграфияси, юракнинг SPECT текшируви ва жигарнинг динамик текшируви</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'>Қалқонсимон безнинг юқори дифференциаллашган ракини <span className='font-bold text-[#2D3663]'>операциядан сўнг даволаш</span>да NaJ131 беморларнинг қон зардобида йод изотоплари сцинтиграфияси ёрдамида тиреоглобулиннинг мунтазам назоратини олиб бориш</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'>Тиреотоксикознинг турли этиологияси кузатилган беморларда NaJ131 билан <span className='font-bold text-[#2D3663]'>радиойодтерапия</span></p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'><span className='font-bold text-[#2D3663]'>Самарий 153Sm оксабифор.</span> Beta- ва gamma- нурлар уйғунлашувининг препарат спектридаги ўзаро комбинацияси ярим парчаланишнинг 46.3 соатни ташкил қилувчи нисбатан қисқа муддатли эканлиги, шунингдек нурланиш қуввати 0.81 Мэв, яъни юқори эмаслиги скелетнинг кўплаб метастатик зарарланишларини паллиатив даволашда энг талабгир радиофармпрепаратлардан бирига айланишига сабаб бўлган</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'><span className='font-bold text-[#2D3663]'>ОФЕКТ технологияларнинг ишлатилиши </span> Ўзбекистонда эндокрин тизим ва бошқа йўналишлар диагностикаси ва даволашида қўлланилувчи ядро тиббиётининг ривожланишига замин яратди.</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'>Соғлом ҳаёт марказида МАГАТЭ ёрдамида нуклеар тиббиёт бўлимининг ташкил қилиниши эндокрин касалликлар диагностикасини жаҳон даражасига кўтариш имконини берди.</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'>Нуклеар тиббиёт бўлимининг <span className='font-bold text-[#2D3663]'>биринчи блоги</span> – радионуклид диагностикада NaJ-131, Tc-99, Sm-153 радиоизотоплари ёрдамида турли касалликларга ташхис қўйиш кабинетлари жойлашган. Улар ёрдамида беморлар оқимли, буйракларнинг динамик ва статик, ренография, қалқонсимон без ва паратиреоид безларни сканирлаш, суяклар, юрак ва ўпканинг SPECT текшируви, қалқонсимон без юқори дифференциаллашган ракига учраган беморларнинг бутун таналарида радиойодтерапиядан кейинги текшириш амалга оширилади.</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'><span className='font-bold text-[#2D3663]'>Иккинчи блок</span>— радионуклид таъминот, радиоизотоплар сақлаш жойи бўлган радиологик назорат-ўлчов лабораторияси : VLB 202 санитар рухсатнома; изотоплар сақлаш жойининг СОМО 170 радионуклид ҳимоя тизими, ювиниш, муолажа ва дозиметрик кабинетлар.</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'><span className='font-bold text-[#2D3663]'>Учинчи блок</span> — NaJ-131 ва Sm-153 радионуклид терапия ўтказган беморлар учун радиоизотоп фаол палаталар.</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'>Бўлимда NaJ-131 радионуклидлари билан қалқонсимон без патологияси диагностикаси ва даволаши амалга оширилади. Киритилганда Naj-131 деярли тўлиғича қалқонсимон безда тўпланади ва 24 сутка давомида парчаланади.Радиофармпрепаратнинг парчаланиши жараёнида пайдо бўлувчи Beta нурланиш қалқонсимон без фолликуляр эпителийсининг фаол функция юритувчи ҳужайраларини нобуд қилади ва келгусида улар ўрни бириктирувчи тўқима билан тўлишига имкон яратади.</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'>Клиникамизда препарат киритишнинг икки схемасини қўллаймиз:</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px] font-bold'>Терапевтик дозани бир марта киритиш</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'>Препарат киритишнинг бу схемаси ўзининг оддийлиги ва нисбатан арзон қиймати билан афзалликка эга.</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px] font-bold'>Кичик дозадаги препаратларни фракционал киритиш</p>
                        <p className='text-[#2D3663] text-[18px] mt-[40px]'>Биринчи қўллашдан 8-12 ҳафта ўтиб таклиф қилинган схемалардан бирида самара етарли ёки умуман бўлмаса, яъни радиойоднинг биринчи дозаси билан максимал терапевтик самарага эришилмаса, уни қўшимча равишда киритиш тавсия қилинади.</p>
                        <div className='mt-[50px] flex items-center justify-between aparat_img'>
                            <img className='w-full max-w-[300px] h-[250px] rounded-2xl mrt_img' src={mrt} alt="mrt" />
                            <img className='w-full max-w-[300px] h-[250px] rounded-2xl mrt_img' src={mskt} alt="mskt" />
                            <img className='w-full max-w-[300px] h-[250px] rounded-2xl mrt_img' src={aparat} alt="aparat" />
                        </div>
                        <div className='mt-[60px] flex ph_img1'>
                            <button onClick={handleShow} className='btn_con flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px] ml-4 bg-blue-950 hover:bg-slate-900'>Қабулга ёзилиш <FaArrowCircleRight className='mt-1 w-[18px] h-[18px]'/></button>
                            <button className='btn_con flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px] ml-4 bg-blue-950 hover:bg-slate-900'>+998 (78) 669 02 03</button>
                        </div>
                        <button className='btn_con flex items-center justify-center gap-3 text-white rounded-3xl w-[250px] pt-4 pb-4 mt-[30px] ml-4 bg-blue-950 hover:bg-slate-900'>+998 (78) 669 05 04</button>
                    </div>
                </div>
                <div className='flex justify-between mt-[150px] about_div about'>
                <div>
                    <img className='max-w-[650px] h-[650px] rounded-[50%] about_img about_img2' src={yotoqjoy} alt="yotoqjoy" />
                </div>
                <div className='mt-[10px] mr-[50px] about_main'>
                    <h1 className='text-[#2D3663] text-[42px] font-bold max-w-[500px] about_text'>Клиникада даволаниш ва яшаш</h1>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-5'>Клиникада ҳар бири 22 квадратли 24 та люкс хоналар мавжуд ҳамда улар асосий бинонинг иккинчи ва учинчи қаватларида жойлашган. Бу ерда сизни шовқиндан ҳимояланган, шифтлари баланд, кўркам ва ёруғ хоналар кутмоқда. Ҳар бир хона барча қулайликларни жамлаган ҳолда нафис жиҳозланган. Қулай макон ҳамда функционаллик жиҳатдан бу хоналар кенг, шинам ҳаммом ҳамда ҳожатхоналарга эга.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-8'>Шахсий буюмларни сақлаш учун ҳам алоҳида бўлмалар мавжуд. Люкс хоналардаги эргономик тиббий каравотлар соғлиқни тиклаш учун жуда муҳим бўлган соғлом ва чуқур уйқу имкониятини беради. Хоналар кабель телевидениеси, интернетга кириш учун Wi-Fi, музлаткич ва парвариш қилувчилар учун алоҳида ўринлар билан жиҳозланган.</p>
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
                    <h1 className='text-[#2D3663] text-[42px] font-bold max-w-[900px] about_text'>Клиникада овқатланиш</h1>
                    <p className='max-w-[680px] text-[16px] text-[#7b809a] mt-5'>Тажрибамиз шуни кўрсатадики, тўғри овқатланиш соғайишнинг муҳим омилларидан биридир. Бизнинг бош ошпазларимиз фойдали ва мазали таом тушунчалари бир-бирига зид келмаслигини кундалик фаолиятларида исботлаб борадилар. Таклиф этилаётган таомлар нафақат хилма-хил, балки тиббий талабларга мувофиқ ҳамдир. Ошхонамизда ҳам Осиё, ҳам Европа ошхоналари унсурларини учратиш мумкин. Айрим рецептлар эса бувижонларимизнинг тажрибаларига асосланган, зеро биз маҳаллий ишлаб чиқарувчиларнинг сархил ва мавсумий маҳсулотларидан фойдаланиш тарафдоримиз.</p>
                    <p className='max-w-[600px] text-[16px] text-[#7b809a] mt-8'>Ташриф буюрувчиларимиз учун шинам қаҳвахона ишлаб туради ва унда моҳир бариста томонидан тайёрланган мазали ширинликлар ва  севимли ичимликлар тақдим этилади</p>
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
            </div>
    </section>
    <Forms openModal={showModal} openFunk={handleShow}/>
   </>
  )
}

export default Section