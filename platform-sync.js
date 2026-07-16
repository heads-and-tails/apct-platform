(function(){
  const KEY='apsvt_connected_platform_v2';
  const channel=('BroadcastChannel' in window)?new BroadcastChannel('apsvt-platform'):null;
  const initial={
    version:2,
    updatedAt:'15.07.2026, 10:24',
    schedule:{version:'v18',publishedAt:'15.07.2026, 09:40',note:'Аудиторію для «Управління проєктами» у четвер змінено на 405.'},
    admissions:{
      cycle:{name:'Вступ 2026',deadline:'31.07.2026',year:2026,edeboLastSync:'16.07.2026 · 09:15'},
      applicants:[
        {id:'app-001',name:'Олена Савчук',initials:'ОС',email:'o.savchuk@gmail.com',phone:'+38 (067) 555-19-26',program:'Менеджмент',degree:'Бакалавр',form:'Денна',funding:'Контракт',priority:2,status:'in_review',stage:'documents',submittedAt:'12.07.2026',edebo:{status:'synced',id:'EDBO-2026-041582',updatedAt:'16.07.2026 · 09:15'},documents:[{id:'passport',title:'Паспорт / ID-картка',status:'verified',file:'id-card.pdf'},{id:'education',title:'Документ про освіту',status:'verified',file:'certificate.pdf'},{id:'photo',title:'Цифрове фото 3×4',status:'verified',file:'photo.jpg'},{id:'tax',title:'РНОКПП',status:'review',file:'tax-number.pdf'}],interview:{status:'scheduled',date:'22.07.2026',time:'11:20',format:'Онлайн',room:'Meet · кімната A-14',score:null,note:'Мотиваційна співбесіда · 20 хв'},contract:{number:'АП-2026-0184',status:'ready',signedAt:null,method:null},payment:{amount:28000,status:'pending',due:'05.08.2026',paidAt:null,receipt:null},onboarding:{studentId:null,group:null,academyEmail:null,accountStatus:'waiting',cardStatus:'waiting'}},
        {id:'app-002',name:'Максим Бойко',initials:'МБ',email:'m.boiko@gmail.com',phone:'+38 (093) 442-10-08',program:'Фінанси, банківська справа та страхування',degree:'Бакалавр',form:'Денна',funding:'Бюджет',priority:1,status:'offer',stage:'contract',submittedAt:'10.07.2026',edebo:{status:'synced',id:'EDBO-2026-039117',updatedAt:'16.07.2026 · 09:15'},documents:[{id:'passport',title:'Паспорт / ID-картка',status:'verified',file:'id.pdf'},{id:'education',title:'Документ про освіту',status:'verified',file:'certificate.pdf'}],interview:{status:'passed',date:'18.07.2026',time:'10:00',format:'Очно',room:'Аудиторія 214',score:178,note:'Фахове випробування'},contract:{number:'АП-2026-0162',status:'ready',signedAt:null,method:null},payment:{amount:0,status:'not_required',due:'—',paidAt:null,receipt:null},onboarding:{studentId:null,group:null,academyEmail:null,accountStatus:'waiting',cardStatus:'waiting'}},
        {id:'app-003',name:'Ірина Петренко',initials:'ІП',email:'i.petrenko@gmail.com',phone:'+38 (050) 811-24-19',program:'Право',degree:'Магістр',form:'Заочна',funding:'Контракт',priority:1,status:'documents',stage:'documents',submittedAt:'15.07.2026',edebo:{status:'pending',id:null,updatedAt:null},documents:[{id:'passport',title:'Паспорт / ID-картка',status:'review',file:'passport.pdf'},{id:'education',title:'Диплом бакалавра',status:'missing',file:null}],interview:{status:'not_scheduled',date:null,time:null,format:null,room:null,score:null,note:'ЄФВВ + мотиваційний лист'},contract:{number:null,status:'waiting',signedAt:null,method:null},payment:{amount:24000,status:'waiting',due:'—',paidAt:null,receipt:null},onboarding:{studentId:null,group:null,academyEmail:null,accountStatus:'waiting',cardStatus:'waiting'}}
      ]
    },
    announcements:[
      {id:'n1',title:'Літній графік роботи деканату',body:'У серпні прийом документів відбувається у вівторок і четвер з 10:00 до 15:00.',tag:'Важливо',date:'15.07.2026',published:true},
      {id:'n2',title:'Відкрито запис на карʼєрні консультації',body:'Бронювання 25-хвилинних сесій із консультантом доступне до 22 липня.',tag:'Карʼєра',date:'14.07.2026',published:true}
    ],
    requests:[
      {id:'r1',studentId:'st-001',student:'Марія Коваленко',group:'МЕН-31',type:'Академічний транскрипт',detail:'Англійською · електронний з КЕП',date:'10.07.2026',status:'progress',owner:'О. Вербицька',due:'16.07.2026',workflow:'transcript',transcriptStage:'validation',kep:'not_sent',file:null},
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
    electives:[
      {id:'el1',name:'Аналітика даних у бізнесі',school:'Кафедра інтелектуальних систем',ects:5,seats:29,total:30,format:'Змішаний',schedule:'Вт · 15:30',summary:'Python, дашборди, A/B-тести й робота з управлінськими даними.',skills:['Python','Data storytelling','Експерименти']},
      {id:'el2',name:'Поведінкова економіка для менеджерів',school:'Кафедра економіки',ects:4,seats:21,total:30,format:'Очно',schedule:'Ср · 13:55',summary:'Евристики, упередження та дизайн рішень у командах і продуктах.',skills:['Decision design','Research','Facilitation']},
      {id:'el3',name:'Сталі фінанси та Європейський зелений курс',school:'Кафедра фінансів',ects:4,seats:12,total:30,format:'Онлайн',schedule:'Чт · 15:30',summary:'ESG-звітність, зелені облігації та інструменти сталого інвестування.',skills:['ESG','Reporting','Sustainable finance']},
      {id:'el4',name:'Digital-маркетинг і бренд-менеджмент',school:'Кафедра маркетингу',ects:5,seats:33,total:35,format:'Змішаний',schedule:'Пт · 13:55',summary:'Контент-стратегія, performance-канали та вимірювання здоровʼя бренду.',skills:['Brand strategy','Analytics','Campaigns']},
      {id:'el5',name:'Крос-культурні комунікації та переговори',school:'Кафедра соціології',ects:4,seats:26,total:30,format:'Очно',schedule:'Пн · 15:30',summary:'Переговорні стратегії та фасилітація міжнародних команд.',skills:['Negotiation','Culture','Teamwork']}
    ],
    electiveSelection:{studentId:'st-001',requiredEcts:9,picked:['el1'],status:'draft',submittedAt:null,reviewer:null},
    learningCourses:[
      {id:'lc1',title:'Стратегічний менеджмент',teacher:'Ольга Гринчук',progress:72,color:'blue',next:'Кейс · 18 липня',modules:[
        {id:'m11',title:'01 · Стратегічний аналіз',completed:5,total:5,status:'done',lessons:[['Відео','Конкурентне середовище','18 хв','done'],['Матеріал','PESTEL і пʼять сил Портера','PDF · 12 стор.','done'],['Тест','Стратегічний аналіз','10 питань · 92%','done']]},
        {id:'m12',title:'02 · Вибір стратегії',completed:3,total:5,status:'active',lessons:[['Відео','Корпоративні стратегії','24 хв','done'],['Практика','Матриця Ансоффа','Шаблон','done'],['Завдання','Кейс: вихід на новий ринок','до 18 липня','active']]},
        {id:'m13',title:'03 · Реалізація і контроль',completed:0,total:4,status:'locked',lessons:[['Відео','Balanced Scorecard','21 хв','locked'],['Обговорення','Чому стратегії не працюють','Форум','locked']]}
      ]},
      {id:'lc2',title:'Управління проєктами',teacher:'Сергій Литвин',progress:84,color:'green',next:'Ретроспектива · 21 липня',modules:[
        {id:'m21',title:'01 · Планування',completed:6,total:6,status:'done',lessons:[['Відео','Scope і WBS','28 хв','done'],['Тест','Планування проєкту','12 питань · 88%','done']]},
        {id:'m22',title:'02 · Виконання',completed:4,total:5,status:'active',lessons:[['Матеріал','Agile ceremonies','PDF · 8 стор.','done'],['Завдання','Ретроспектива командного проєкту','до 21 липня','active']]}
      ]},
      {id:'lc3',title:'Фінансовий менеджмент',teacher:'Тетяна Радченко',progress:66,color:'amber',next:'Модуль 3 · 25 липня',modules:[
        {id:'m31',title:'01 · Вартість капіталу',completed:4,total:4,status:'done',lessons:[['Відео','WACC','19 хв','done'],['Тест','Вартість капіталу','10 питань · 86%','done']]},
        {id:'m32',title:'02 · Інвестиційні рішення',completed:2,total:5,status:'active',lessons:[['Матеріал','NPV та IRR','Конспект','done'],['Тест','Інвестиційні рішення','відкрито до 25 липня','active']]}
      ]}
    ],
    learningActivity:{courseId:'lc1',lastLesson:'Матриця Ансоффа',minutesThisWeek:186,streak:6,quizAverage:89,submitted:7,totalAssignments:9},
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
  state.requests.forEach(request=>{
    if(/транскрипт/i.test(request.type||'')&&!request.workflow){
      request.workflow='transcript';
      request.transcriptStage=request.status==='ready'?'ready':request.status==='progress'?'validation':'request';
      request.kep=request.status==='ready'?'signed':'not_sent';
      request.file=request.status==='ready'?'Transcript_Maria_Kovalenko_2026.pdf':null;
    }
  });
  function stamp(){return new Date().toLocaleString('uk-UA',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}).replace(',',' ·')}
  function emit(source){
    state.updatedAt=stamp();
    try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}
    if(channel)channel.postMessage({type:'state',state,source});
    window.dispatchEvent(new CustomEvent('apsvt:change',{detail:{state:clone(state),source}}));
  }
  function evaluateApplicant(applicant){
    const documentsReady=applicant.documents.length>0&&applicant.documents.every(document=>document.status==='verified');
    const interviewReady=applicant.interview.status==='passed';
    const contractReady=applicant.contract.status==='signed';
    const paymentReady=['paid','not_required'].includes(applicant.payment.status);
    const edeboReady=applicant.edebo.status==='synced';
    if(documentsReady&&interviewReady&&contractReady&&paymentReady&&edeboReady&&!applicant.onboarding.studentId){
      const number=1285+state.admissions.applicants.filter(item=>item.onboarding.studentId).length;
      applicant.status='enrolled';applicant.stage='onboarding';applicant.onboarding.studentId=`ST-${2026}-${String(number).padStart(4,'0')}`;applicant.onboarding.group=applicant.program.includes('Фінанси')?'ФІН-11':applicant.program.includes('Право')?'ПРА-51':'МЕН-11';applicant.onboarding.academyEmail=`${latin(applicant.name).toLowerCase().replace(/[^a-z]+/g,'.').replace(/^\.|\.$/g,'')}@st.socosvita.kiev.ua`;applicant.onboarding.accountStatus='ready';applicant.onboarding.cardStatus='creating';
      addAudit(`Автоматично зараховано ${applicant.name} та створено студентський профіль`,'Вступ','АПСВТ Flow');
    }
  }
  function update(fn,source='local'){fn(state);state.admissions?.applicants?.forEach(evaluateApplicant);emit(source);return clone(state)}
  function addAudit(action,area,actor='Оксана Вербицька'){state.audit.unshift({id:'l'+Date.now(),time:stamp().replace('2026 · ',''),actor,action,area});state.audit=state.audit.slice(0,30)}
  function reset(){state=clone(initial);emit('reset')}
  function latin(value=''){
    const map={'А':'A','Б':'B','В':'V','Г':'H','Ґ':'G','Д':'D','Е':'E','Є':'Ye','Ж':'Zh','З':'Z','И':'Y','І':'I','Ї':'Yi','Й':'Y','К':'K','Л':'L','М':'M','Н':'N','О':'O','П':'P','Р':'R','С':'S','Т':'T','У':'U','Ф':'F','Х':'Kh','Ц':'Ts','Ч':'Ch','Ш':'Sh','Щ':'Shch','Ь':'','Ю':'Yu','Я':'Ya','а':'a','б':'b','в':'v','г':'h','ґ':'g','д':'d','е':'e','є':'ie','ж':'zh','з':'z','и':'y','і':'i','ї':'i','й':'i','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch','ь':'','ю':'iu','я':'ia'};
    return String(value).split('').map(ch=>map[ch]??ch).join('').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\x20-\x7E]/g,' ');
  }
  function pdfText(value){return latin(value).replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)')}
  function downloadUnsignedTranscript(profile={}){
    const name=latin(profile.name||'Maria Kovalenko'),program=latin(profile.program||'Management'),group=latin(profile.group||'MEN-31');
    const credits=profile.ects??152,gpa=profile.gpa??88.4,issued=new Date().toLocaleDateString('en-GB');
    const rows=state.grades.slice(0,12).map((grade,index)=>({course:latin(grade.course).slice(0,34),assessment:latin(grade.kind).slice(0,25),score:String(grade.score),ects:String([5,4,5,4,3,5][index%6])}));
    const pad=(value,size)=>String(value).slice(0,size).padEnd(size,' ');
    const commands=[
      'q 0.90 g BT /F2 43 Tf 0.707 0.707 -0.707 0.707 128 315 Tm (UNSIGNED COPY) Tj ET Q',
      `BT /F2 16 Tf 48 790 Td (${pdfText('Academy of Labour, Social Relations and Tourism')}) Tj ET`,
      `BT /F2 21 Tf 48 755 Td (${pdfText('ACADEMIC TRANSCRIPT')}) Tj ET`,
      'BT /F1 10 Tf 48 733 Td (Automatically generated / without qualified electronic signature) Tj ET',
      '0.15 0.28 0.95 rg 48 718 499 3 re f',
      `BT /F2 11 Tf 48 690 Td (Student:) Tj ET BT /F1 11 Tf 126 690 Td (${pdfText(name)}) Tj ET`,
      `BT /F2 11 Tf 48 671 Td (Programme:) Tj ET BT /F1 11 Tf 126 671 Td (${pdfText(program)}) Tj ET`,
      `BT /F2 11 Tf 48 652 Td (Group:) Tj ET BT /F1 11 Tf 126 652 Td (${pdfText(group)}) Tj ET`,
      `BT /F2 11 Tf 310 690 Td (Credits earned:) Tj ET BT /F1 11 Tf 424 690 Td (${pdfText(credits)}) Tj ET`,
      `BT /F2 11 Tf 310 671 Td (Average grade:) Tj ET BT /F1 11 Tf 424 671 Td (${pdfText(gpa)}) Tj ET`,
      `BT /F2 11 Tf 310 652 Td (Generated:) Tj ET BT /F1 11 Tf 424 652 Td (${pdfText(issued)}) Tj ET`,
      '0.88 g 48 624 499 22 re f',
      '0 g',
      `BT /F3 8 Tf 53 632 Td (${pdfText(pad('COURSE',35)+pad('ASSESSMENT',26)+pad('GRADE',8)+'ECTS')}) Tj ET`
    ];
    rows.forEach((row,index)=>{const y=610-index*23;commands.push(`BT /F3 8 Tf 53 ${y} Td (${pdfText(pad(row.course,35)+pad(row.assessment,26)+pad(row.score,8)+row.ects)}) Tj ET`);commands.push(`0.91 G 48 ${y-7} m 547 ${y-7} l S`)});
    commands.push('0.15 0.28 0.95 rg 48 260 499 2 re f');
    commands.push('0 g');
    commands.push('BT /F2 11 Tf 48 238 Td (DOCUMENT STATUS: UNSIGNED) Tj ET');
    commands.push('BT /F1 9 Tf 48 220 Td (This automatically generated copy is provided for information only.) Tj ET');
    commands.push('BT /F1 9 Tf 48 205 Td (For official use, request the version bearing a qualified electronic signature.) Tj ET');
    commands.push('BT /F3 8 Tf 48 70 Td (APSVT Flow / verification unavailable / unsigned electronic copy) Tj ET');
    const stream=commands.join('\n'),objects=[
      '<< /Type /Catalog /Pages 2 0 R >>',
      '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
      '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>',
      '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
      '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
      '<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>',
      `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`
    ];
    let pdf='%PDF-1.4\n',offsets=[0];objects.forEach((object,index)=>{offsets[index+1]=pdf.length;pdf+=`${index+1} 0 obj\n${object}\nendobj\n`});const xref=pdf.length;pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n`;offsets.slice(1).forEach(offset=>pdf+=`${String(offset).padStart(10,'0')} 00000 n \n`);pdf+=`trailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
    const blob=new Blob([pdf],{type:'application/pdf'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`unsigned-transcript-${name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}.pdf`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1200);return link.download;
  }
  if(channel) channel.onmessage=e=>{if(e.data&&e.data.type==='state'){state=e.data.state;window.dispatchEvent(new CustomEvent('apsvt:change',{detail:{state:clone(state),source:e.data.source}}))}};
  window.addEventListener('storage',e=>{if(e.key===KEY&&e.newValue){try{state=JSON.parse(e.newValue);window.dispatchEvent(new CustomEvent('apsvt:change',{detail:{state:clone(state),source:'storage'}}))}catch(err){}}});
  window.APSVT={get:()=>clone(state),update,addAudit,reset,stamp,downloadUnsignedTranscript,mode:'shared demo state'};
})();
