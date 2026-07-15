(function(){
  const KEY='apsvt_connected_platform_v2';
  const channel=('BroadcastChannel' in window)?new BroadcastChannel('apsvt-platform'):null;
  const initial={
    version:2,
    updatedAt:'15.07.2026, 10:24',
    schedule:{version:'v18',publishedAt:'15.07.2026, 09:40',note:'Аудиторію для «Управління проєктами» у четвер змінено на 405.'},
    announcements:[
      {id:'n1',title:'Літній графік роботи деканату',body:'У серпні прийом документів відбувається у вівторок і четвер з 10:00 до 15:00.',tag:'Важливо',date:'15.07.2026',published:true},
      {id:'n2',title:'Відкрито запис на карʼєрні консультації',body:'Бронювання 25-хвилинних сесій із консультантом доступне до 22 липня.',tag:'Карʼєра',date:'14.07.2026',published:true}
    ],
    requests:[
      {id:'r1',studentId:'st-001',student:'Марія Коваленко',group:'МЕН-31',type:'Академічний транскрипт',detail:'Англійською · електронний з КЕП',date:'10.07.2026',status:'progress',owner:'О. Вербицька',due:'16.07.2026'},
      {id:'r2',studentId:'st-014',student:'Богдан Мороз',group:'ТУР-11',type:'Довідка про навчання',detail:'Українською · паперова',date:'14.07.2026',status:'new',owner:'Не призначено',due:'17.07.2026'}
    ],
    tickets:[
      {id:'t1',studentId:'st-001',student:'Марія Коваленко',group:'МЕН-31',topic:'Розклад і навчальний процес',message:'Чи підтверджено зміну аудиторії на четвер?',date:'15.07.2026',status:'new',priority:'normal',owner:'Не призначено'},
      {id:'t2',studentId:'st-008',student:'Богдан Мороз',group:'ТУР-11',topic:'Фінансова консультація',message:'Потрібна консультація щодо розтермінування.',date:'14.07.2026',status:'progress',priority:'high',owner:'І. Данилюк'}
    ],
    grades:[
      {course:'Фінансовий менеджмент',kind:'Модуль 2',score:86,publishedAt:'14.07.2026'},
      {course:'Управління проєктами',kind:'Командний проєкт',score:92,publishedAt:'12.07.2026'},
      {course:'Маркетинговий менеджмент',kind:'Кейс',score:89,publishedAt:'08.07.2026'}
    ],
    attendance:[
      {course:'Стратегічний менеджмент',attended:23,total:24},
      {course:'Фінансовий менеджмент',attended:20,total:23},
      {course:'Управління персоналом',attended:22,total:24},
      {course:'Маркетинговий менеджмент',attended:18,total:22}
    ],
    tasks:[
      {id:'a1',course:'Стратегічний менеджмент',title:'Кейс: вихід на новий ринок',due:'18 липня, 23:59',day:18,month:'лип',state:'urgent',weight:'20%'},
      {id:'a2',course:'Управління проєктами',title:'Ретроспектива командного проєкту',due:'21 липня, 18:00',day:21,month:'лип',state:'open',weight:'10%'},
      {id:'a3',course:'Іноземна мова B2',title:'Business pitch · video',due:'24 липня, 20:00',day:24,month:'лип',state:'open',weight:'15%'}
    ],
    documents:[
      {id:'d1',name:'Довідка про навчання',format:'PDF · КЕП',issued:'02.07.2026',expires:'Безстроково'},
      {id:'d2',name:'Індивідуальний навчальний план',format:'PDF',issued:'01.02.2026',expires:'2025/26 н.р.'}
    ],
    payments:[
      {id:'p1',studentId:'st-001',student:'Марія Коваленко',group:'МЕН-31',period:'1 семестр 2026/27',amount:26400,due:'25.08.2026',status:'pending',plan:'Одним платежем'},
      {id:'p2',studentId:'st-002',student:'Артем Бондаренко',group:'МЕН-31',period:'2 семестр 2025/26',amount:24800,due:'25.01.2026',status:'overdue',plan:'Очікує звернення'},
      {id:'p3',studentId:'st-008',student:'Богдан Мороз',group:'ТУР-11',period:'2 семестр 2025/26',amount:22600,due:'25.01.2026',status:'installment',plan:'2 з 4 частин'},
      {id:'p4',studentId:'st-005',student:'Софія Романюк',group:'ФІН-21',period:'1 семестр 2026/27',amount:25200,due:'25.08.2026',status:'paid',plan:'Сплачено 12.07.2026'}
    ],
    integrations:[
      {id:'sis',name:'Реєстр студентів',status:'healthy',last:'15.07.2026 · 10:18',records:'1 284'},
      {id:'lms',name:'Moodle / LTI',status:'healthy',last:'15.07.2026 · 10:21',records:'86 курсів'},
      {id:'mail',name:'Email та сповіщення',status:'healthy',last:'15.07.2026 · 10:22',records:'47 доставлено'},
      {id:'bank',name:'Банківська виписка',status:'warning',last:'15.07.2026 · 08:00',records:'3 не зіставлено'}
    ],
    audit:[
      {id:'l1',time:'15.07 · 09:40',actor:'Оксана Вербицька',action:'Опублікувала розклад МЕН-31',area:'Розклад'},
      {id:'l2',time:'14.07 · 16:18',actor:'Ірина Данилюк',action:'Взяла звернення t2 у роботу',area:'Підтримка'},
      {id:'l3',time:'14.07 · 12:06',actor:'Сергій Литвин',action:'Опублікував 28 оцінок',area:'Журнал'}
    ]
  };
  const clone=o=>JSON.parse(JSON.stringify(o));
  function read(){
    try{
      const raw=localStorage.getItem(KEY); if(!raw) return clone(initial);
      const saved=JSON.parse(raw); return Object.assign(clone(initial),saved);
    }catch(e){return clone(initial)}
  }
  let state=read();
  function stamp(){return new Date().toLocaleString('uk-UA',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}).replace(',',' ·')}
  function emit(source){
    state.updatedAt=stamp();
    try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}
    if(channel)channel.postMessage({type:'state',state,source});
    window.dispatchEvent(new CustomEvent('apsvt:change',{detail:{state:clone(state),source}}));
  }
  function update(fn,source='local'){fn(state);emit(source);return clone(state)}
  function addAudit(action,area,actor='Оксана Вербицька'){state.audit.unshift({id:'l'+Date.now(),time:stamp().replace('2026 · ',''),actor,action,area});state.audit=state.audit.slice(0,30)}
  function reset(){state=clone(initial);emit('reset')}
  if(channel) channel.onmessage=e=>{if(e.data&&e.data.type==='state'){state=e.data.state;window.dispatchEvent(new CustomEvent('apsvt:change',{detail:{state:clone(state),source:e.data.source}}))}};
  window.addEventListener('storage',e=>{if(e.key===KEY&&e.newValue){try{state=JSON.parse(e.newValue);window.dispatchEvent(new CustomEvent('apsvt:change',{detail:{state:clone(state),source:'storage'}}))}catch(err){}}});
  window.APSVT={get:()=>clone(state),update,addAudit,reset,stamp,mode:'shared demo state'};
})();
