const nightEvents = [
  {no:'01', title:'따라오는 발소리', image:'assets/events/event-01-v2.png', situation:'페달 소리 사이로 누군가의 발소리가 섞여 들리기 시작한다. 처음에는 멀리 있지만, 플레이어가 뒤를 확인할수록 점점 가까워진다.', rule:'발소리가 들리는 동안에는 뒤돌아보지 말고 그대로 페달을 밟는다.', failure:'두 번 이상 뒤를 확인하면 길 뒤편에 형체가 나타나고, 세 번째 확인 시 추격이 시작된다.', direction:'소리만으로 긴장을 쌓는다. 첫 확인은 아무것도 없고, 두 번째부터 멀리 실루엣을 보여준다.'},
  {no:'02', title:'버스 정류장의 여자', image:'assets/events/event-02-v2.png', situation:'막차가 끊긴 시간, 불 꺼진 시골 버스 정류장에 한 여자가 앉아 있다. 지나가려 하면 “지금 몇 시예요?”라고 묻는다.', rule:'막차가 끊긴 뒤에는 시간을 알려주지 않는다. 멈추지 말고 그대로 지나간다.', failure:'자전거를 세우거나 시간을 알려주면 여자가 고개를 들고 플레이어를 따라오기 시작한다.', direction:'이벤트 이전 가로등 전단지에 “막차가 끊긴 뒤에는 시간을 알려주지 마시오.”라는 힌트를 배치한다.'},
  {no:'03', title:'길 한가운데 있는 신발', image:'assets/events/event-03-v2.png', situation:'도로 중앙에 어린아이의 신발 한 짝이 떨어져 있다. 조금 더 가면 다른 신발, 가방처럼 흔적이 길 밖 논 쪽으로 이어진다.', rule:'어두운 밤에는 포장된 길을 벗어나지 않는다.', failure:'흔적을 따라 논으로 들어가면 시야가 좁아지고, 멀리 있던 아이 형체가 갑자기 가까워지며 사망한다.', direction:'플레이어의 호기심을 이용하는 이벤트. 길 위의 사물 배치만으로 자연스럽게 유도한다.'},
  {no:'04', title:'뒤집힌 표지판', image:'assets/events/event-04-v2.png', situation:'갈림길의 표지판이 평범해 보이지만, 화살표뿐 아니라 지명 글자까지 거울처럼 뒤집혀 있다.', rule:'글자가 뒤집힌 표지판은 믿지 않는다. 표지판이 가리키는 방향의 반대로 간다.', failure:'표지판을 그대로 따라가면 “잘못된 갈림길” 구간으로 진입하고 주변 풍경이 비정상적으로 변한다.', direction:'화살표만 바꾸는 것이 아니라 글자 전체를 반전시켜 이상함을 확실히 인식시키는 것이 핵심이다.'},
  {no:'05', title:'논 한가운데 있는 사람', image:'assets/events/event-05-v2.png', situation:'넓은 논 한가운데 검은 형체가 서 있다. 플레이어가 바라볼 때마다 다음 가로등 구간에서 조금씩 가까워진다.', rule:'논에 서 있는 사람과 계속 눈을 맞추지 않는다. 시선을 길로 돌리고 이동한다.', failure:'오랫동안 바라보면 어느 순간 길가 바로 옆에 서 있게 되고, 다음 시선 전환 때 공격한다.', direction:'거리 변화만으로 공포를 만든다. 직접 움직이는 장면을 보여주지 않는 것이 중요하다.'},
  {no:'06', title:'이상한 자전거', image:'assets/events/event-06-v2.png', situation:'뒤에서 자전거 벨 소리가 들리고 작은 라이트가 따라온다. 가까워지면 사람은 있지만 페달을 전혀 밟지 않고 있다는 것을 알 수 있다.', rule:'벨 소리가 가까워져도 속도를 유지한다. 길을 비켜주거나 멈추지 말고 앞만 본다.', failure:'길을 비켜주거나 뒤를 확인하면 전조등이 급격히 가까워지고, 추월 이후 도로 중앙을 막아 추격 이벤트로 전환된다.', direction:'자전거라는 핵심 이동수단을 직접 활용하는 추격 이벤트. 중반부 템포 변화를 담당한다.'},
  {no:'07', title:'터널', image:'assets/events/event-07-v2.png', situation:'터널 안 천장등이 일정 간격으로 이어진다. 입구 근처 낙서에는 “세 번째 불이 꺼져 있으면 눈을 감으세요.”라고 적혀 있다.', rule:'세 번째 천장등이 꺼져 있으면 자전거 전조등을 끄고, 정면 대신 앞바퀴와 바닥을 보며 통과한다. 이름을 불러도 대답하지 않는다.', failure:'정면을 보면 터널 끝에 서 있던 형체가 순간적으로 가까워지고 추격 또는 점프스케어로 이어진다.', direction:'나폴리탄 규칙을 가장 직접적으로 체험시키는 대표 이벤트. 사전에 낙서를 반드시 읽을 수 있게 배치한다.'},
  {no:'08', title:'거울', image:'assets/events/event-08-v2.png', situation:'도로 반사경을 지나칠 때 거울 속에는 자전거 뒤에 누군가 매달려 있지만 실제 뒤를 보면 아무것도 없다.', rule:'반사경에서 무언가를 봐도 실제 뒤를 확인하지 말고 계속 전진한다.', failure:'뒤를 확인하는 순간 반사경 속 형체가 현실로 옮겨오며 다음 구간 동안 플레이어를 따라온다.', direction:'반드시 죽는 이벤트가 아니라 심리 공포로 사용할 수 있다. “본 것이 진짜였나?”라는 의심을 남긴다.'},
  {no:'09', title:'잘못된 갈림길', image:'assets/events/event-09-v2.png', situation:'잘못된 방향으로 들어가면 풍경이 급격히 비정상적으로 변한다. 달의 위치가 바뀌거나 두 개가 되고, 안개와 붉은 조명이 나타난다.', rule:'환경이 비정상적으로 변하면 더 깊이 들어가지 말고 즉시 왔던 방향으로 빠져나간다.', failure:'계속 진행할수록 도로가 닫히고 강제 루프 또는 강한 존재형 이벤트로 연결된다.', direction:'4번 표지판 이벤트의 실패 결과로 연결하면 자연스럽다. 플레이어에게 “잘못 왔다”는 감각을 즉시 심어준다.'},
  {no:'10', title:'길을 막는 존재', image:'assets/events/event-10-v2.png', situation:'도로 한가운데 거대한 요괴 또는 괴물이 웅크리고 있어 길을 막는다. 공격 수단은 없다.', rule:'라이트를 끄고 벨을 울리지 않은 채 속도를 줄여 조용히 지나간다. 그것은 빛을 싫어하는 것이 아니라 빛을 따라온다.', failure:'라이트를 켠 채 접근하거나 벨을 울리면 존재가 고개를 들고 플레이어를 추격한다.', direction:'확보한 괴물·요괴 에셋을 가장 강하게 보여줄 수 있는 이벤트. 전투 대신 행동 선택으로 해결한다.'},
  {no:'11', title:'같은 집', image:'assets/events/event-11-v2.png', situation:'길가의 오래된 폐가를 지나쳤는데 몇 분 뒤 동일한 집이 다시 나온다. 반복할수록 창문이나 문 위치가 조금씩 달라진다.', rule:'같은 집을 세 번째 보게 되면 더 전진하지 않는다. 가장 가까운 가로등 아래에서 잠시 기다리고, 집의 창문을 확인하지 않는다.', failure:'세 번째 집을 무시하고 계속 진행하거나 창문을 바라보면 불이 켜지고, 길 전체가 폐가 앞 구간으로 고정되는 루프에 빠진다.', direction:'8번 출구 느낌의 부분 루프를 가장 명확하게 보여주는 이벤트. 작은 차이들을 관찰하게 만든다.'},
  {no:'12', title:'진짜 점프스케어', image:'assets/events/event-12-v2.png', situation:'큰 이벤트를 넘긴 뒤 한동안 아무 일도 없는 조용한 길이 이어진다. 플레이어가 긴장을 풀었을 때 자전거 바로 앞에서 얼굴이 튀어나온다.', rule:'별도의 복잡한 규칙 없이 짧은 조작 흔들림을 버티고 계속 이동한다.', failure:'사망보다는 핸들이 크게 흔들리고 속도가 떨어지는 정도로 처리해 불공정한 느낌을 줄인다.', direction:'점프스케어는 게임 전체에서 1~2회만 사용한다. 긴 정적과 안전하다는 착각을 충분히 만든 뒤 사용한다.'}
];


const ideas = [
  {
    key:'night', no:'01', spine:'NIGHT RIDE', title:'NIGHT RIDE', ko:'밤에 자전거 타고 가기', color:'#6f2c28', h:315, w:74, y:0, r:'-1.2deg',
    spreads:[
      {kind:'intro', section:'GAME OVERVIEW', title:'밤길에는, 규칙이 있다.', lead:'어두운 시골길을 자전거로 달리며 이상현상과 조우하고, 숨겨진 규칙을 파악해 목적지까지 살아남는 PC 공포 게임.', body:['플랫폼 — PC / Steam 출시 목표','개발 엔진 — Unreal Engine 5.4.4','장르 — 공포 · 어드벤처 · 규칙 파훼형 이벤트','핵심 경험 — 평범한 밤길이 조금씩 비정상적으로 변하는 불안감','슬로건 — “목적지에 도착할 때까지, 그 규칙을 지켜라.”'], visual:'poster', caption:'NIGHT RIDE / GAME DESIGN OVERVIEW'},
      {kind:'flow', section:'GAME FLOW', title:'게임은 이렇게 진행된다.', lead:'게임 전체를 계속 반복시키기보다, 시골길의 여러 랜드마크 구간을 통과하며 이상현상을 해결하는 구조로 잡는다.', body:['① 자전거를 타고 다음 랜드마크 구간으로 이동','② 가로등 전단지·낙서·표지판에서 규칙 힌트를 발견','③ 이상현상과 조우하고 실제 행동으로 선택','④ 성공하면 다음 구간, 실패하면 사망 또는 해당 구간 루프','⑤ 안전 구간을 지나 다시 긴장을 쌓고 다음 이벤트로 진행','⑥ 모든 주요 구간을 통과하면 목적지에 도착'], visual:'flow', caption:'RIDE → OBSERVE → INFER → ACT → SURVIVE'},
      {kind:'notice', section:'NAPOLITAN / NOTICE', title:'전단지는 경고만 남긴다.', lead:'긴 규칙을 가로등 전단지 한 장에 전부 적는 대신, 월령고개(가칭)로 진입하기 직전 다리에서 수첩의 존재를 알리는 짧은 안내문만 보여준다.', body:['전단지 제목 — 「월령고개 야간 통행 안내」','오후 11시 이후 구도로 통행을 권장하지 않는다는 경고','부득이하게 지나가야 한다면 다리 건너편 가로등 아래 비치된 「야간 통행 기록수첩」을 읽으라는 안내','수첩은 작은 방수 보관함 안에 있으며, 다음 통행자를 위해 반드시 제자리에 돌려놓도록 적혀 있다.'], visual:'notice', caption:'BRIDGE NOTICE → NIGHT PASSAGE NOTEBOOK'},
      {kind:'rulebook', section:'NIGHT PASSAGE NOTEBOOK', title:'월령고개 야간 통행 수칙 · 01—06', lead:'수첩 앞부분은 주민회가 여러 차례의 사고와 목격담을 바탕으로 정리한 공식 통행 수칙이다. 초반 플레이어에게는 사실상 생존 매뉴얼처럼 기능한다.', rules:[
        ['01','뒤에서 발소리가 들리더라도 돌아보지 마십시오.','두 번 이상 확인한 경우 본 수칙은 더 이상 도움이 되지 않습니다.'],
        ['02','버스 정류장에서 시간을 묻는 사람에게 대답하지 마십시오.','월령리행 마지막 버스가 끝난 뒤 정류장에 사람이 있을 이유는 없습니다.'],
        ['03','도로 위의 신발·가방·장난감을 따라 길 밖으로 나가지 마십시오.','월령리에서 최근 신고된 아동 실종 사건은 없습니다.'],
        ['04','글자와 화살표가 모두 뒤집힌 표지판은 따르지 마십시오.','표지판이 가리키는 방향의 반대로 이동하십시오.'],
        ['05','논 한가운데 서 있는 사람을 오래 바라보지 마십시오.','세 번째 확인은 권장하지 않습니다.'],
        ['06','뒤에서 자전거 벨 소리가 들려도 길을 비켜주지 마십시오.','월령고개에서는 밤에 자전거를 이용하는 주민이 없습니다.']
      ], visual:'notebook', caption:'OFFICIAL RULES / 01 — 06'},
      {kind:'rulebook', section:'NIGHT PASSAGE NOTEBOOK', title:'월령고개 야간 통행 수칙 · 07—11', lead:'수첩의 후반부로 갈수록 규칙은 더 구체적이고 이상해진다. 플레이어는 길에서 같은 조건을 발견했을 때 직접 행동으로 수칙을 실행해야 한다.', rules:[
        ['07','월령터널의 세 번째 조명이 꺼져 있다면 전조등을 끄고 정면을 보지 마십시오.','이름을 부르는 소리가 들려도 대답하지 마십시오. 가족의 목소리여도 같습니다.'],
        ['08','도로 반사경에 본인 외의 사람이 비친다면 다시 확인하지 마십시오.','그 사람이 반사경 안에서만 존재하는 동안에는 문제가 없습니다.'],
        ['09','갈림길 이후 달의 위치가 바뀌거나 두 개로 보인다면 잘못된 길입니다.','가장 최근 갈림길로 돌아가되, 돌아가는 동안의 표지판은 읽지 마십시오.'],
        ['10','길을 막고 있는 것이 있다면 먼저 자전거 라이트를 끄십시오.','그것은 빛을 무서워하는 것이 아니라, 빛을 따라옵니다.'],
        ['11','같은 집을 세 번째 발견했다면 더 이상 이동하지 마십시오.','가장 가까운 가로등 아래에서 기다리고, 집의 창문을 바라보지 마십시오.']
      ], visual:'notebook', caption:'OFFICIAL RULES / 07 — 11'},
      {kind:'jangseung', section:'UNRECORDED ANOMALY', title:'수칙에 없는 것 — 돌아본 장승', lead:'수첩의 공식 수칙은 11개뿐이다. 하지만 뒤쪽의 「통행자 기록란」에는 주민회가 정리하지 못한 현상들이 서로 다른 필체로 남아 있고, 그중 가장 반복되는 기록이 장승이다.', records:[
        ['20XX.08.17','고개 입구에 장승 두 개가 있었음. 처음에는 둘 다 길 바깥쪽을 보고 있었는데, 돌아오는 길에는 한쪽이 도로를 보고 있었음. 별일 없었음.'],
        ['20XX.09.02','저번에 적힌 장승 봤다. 이번에는 둘 다 길을 보고 있었음. 지나가려다가 느낌 이상해서 돌아감. 수칙에 왜 이거 없냐?'],
        ['날짜 없음','장승 하나밖에 없으면 지나가지 마. 하나가 없는 게 아님. 하나가 움직인 거임.'],
        ['다른 필체','“어디로?” — 그 아래에는 아무 답도 남아 있지 않다.']
      ], visual:'jangseung', caption:'TRAVELLER LOG / THE TURNED JANGSEUNG'},
      ...nightEvents.map(e=>({kind:'event',section:`EVENT ${e.no}`,title:e.title,lead:e.situation,event:e,visual:'event',caption:`EVENT ${e.no} / ${e.title}`}))
    ]
  },
  {
    key:'animal', no:'02', spine:'ANIMAL BRAWL', title:'ANIMAL BRAWL', ko:'병맛 동물 대전', color:'#aa6b31', h:292, w:82, y:7, r:'1deg',
    spreads:[
      {section:'CONCEPT', title:'랜덤 동물로 벌이는 병맛 대전', lead:'갱비스트, 파티 애니멀즈 같은 가벼운 대전 감성을 참고한 동물 액션 아이디어.', body:['플레이어는 동물을 랜덤으로 픽.','처음에는 기본 공격만 사용.','팀전 가능성도 열어둔 상태.'], visual:'animal', caption:'REFERENCE IMAGE / H2H — IAN'},
      {section:'PROGRESSION', title:'좋은 동물이 나올 확률을 키운다', lead:'전투 자체뿐 아니라 다음 판의 랜덤 선택 확률을 성장시키는 구조가 아이디어로 적혀 있다.', body:['패시브 스킬 트리 형태 가능','좋은 동물이 나올 확률을 점차 높이는 성장','라운드 반복과 결합 가능한 구조'], visual:'abstract', art:['#d39545','#6c3e22'], caption:'PASSIVE · RANDOM PICK'},
      {section:'ANIMAL SKILLS', title:'동물의 신체 특징이 곧 스킬', lead:'동물마다 과장된 특징을 전투 기술로 바꾸는 것이 현재 기획의 주요 재미 후보다.', body:['기린 — 목을 길게 늘려서 때림','악어 — 토네이도 돌진','맵의 중립몹, 아이템, 장비 활용 가능성'], visual:'animal', caption:'CHARACTER / SKILL IDEA'},
      {section:'OPEN QUESTIONS', title:'아직 결정되지 않은 것들', lead:'현재 기획서는 아이디어 단계이므로 플레이 규칙은 일부 열려 있다.', body:['팀전 여부','중립몹 활용 방식','아이템·장비의 비중','랜덤 선택과 성장의 밸런스'], visual:'abstract', art:['#83512e','#d5b16a'], caption:'UNDER DISCUSSION'}
    ]
  },
  {key:'alien',no:'03',spine:'HIDE ALIEN',title:'HIDE THE ALIEN',ko:'외계인 숨기기',color:'#4c6b58',h:270,w:63,y:8,r:'-.5deg',spreads:[{section:'EARLY CONCEPT',title:'외계인 숨기기',lead:'기획서의 기타 아이디어 항목에 기록된 초기 컨셉.',body:['현재 문서에는 제목 수준의 아이디어만 기록되어 있음.','규칙과 플레이 루프는 추후 구체화 필요.'],visual:'abstract',art:['#26352d','#688f74'],caption:'EARLY CONCEPT'}]},
  {key:'survival',no:'04',spine:'2D SURVIVAL',title:'2D SURVIVAL',ko:'2D 횡스크롤 생존',color:'#4f5770',h:304,w:71,y:2,r:'1.4deg',spreads:[{section:'EARLY CONCEPT',title:'2D 횡스크롤 생존',lead:'2D 횡스크롤 기반의 생존 게임 아이디어.',body:['기획서에는 대전 가능성도 함께 메모되어 있음.','세부 시스템은 아직 미정.'],visual:'abstract',art:['#2c3346','#667294'],caption:'SURVIVAL / VERSUS'}]},
  {key:'relic',no:'05',spine:'PLANET RELIC',title:'PLANET RELIC',ko:'3D 방탈출 · 유물 탐사',color:'#6b526f',h:286,w:76,y:10,r:'-.8deg',spreads:[{section:'CORE LOOP',title:'행성에서 유물을 찾아 복원하고 판매',lead:'3D 방탈출 아이디어에 탐사·수집·복원·판매 흐름이 결합되어 있다.',body:['행성 파견','맵 탐색','유물 획득','씻거나 복원 시 가치 증가','상인에게 판매'],visual:'abstract',art:['#29213a','#765e86'],caption:'EXPLORE · RESTORE · SELL'}]},
  {key:'arcana',no:'06',spine:'ARCANA REVIVAL',title:'ARCANA REVIVAL',ko:'아르카나 부활',color:'#8a4b46',h:260,w:65,y:12,r:'1deg',spreads:[{section:'ON HOLD',title:'모델링만 있다면… 아르카나 부활',lead:'기획서에 조건부 후보로 기록된 아이디어.',body:['전제 조건: 필요한 모델링 확보','현재는 구체 기획보다 후보 메모에 가까움.'],visual:'abstract',art:['#3f2228','#925c5b'],caption:'CONDITIONAL IDEA'}]}
];


const books=document.getElementById('books');
const overlay=document.getElementById('book-overlay');
const openBookEl=document.getElementById('open-book');
let current=null, spreadIndex=0, closeTimer=null;


ideas.forEach((idea,idx)=>{
  const b=document.createElement('button'); b.className='book'; b.type='button';
  b.style.setProperty('--book',idea.color); b.style.setProperty('--h',idea.h+'px'); b.style.setProperty('--w',idea.w+'px'); b.style.setProperty('--y',idea.y+'px'); b.style.setProperty('--r',idea.r);
  b.innerHTML=`<span class="book-spine"><small>${idea.ko}</small><strong>${idea.spine}</strong></span><span class="book-number">${idea.no}</span>`;
  b.addEventListener('click',()=>openBook(idx)); books.appendChild(b);
});


function openBook(index){
  document.body.classList.add('book-is-open');
  current=ideas[index]; spreadIndex=0; clearTimeout(closeTimer);
  overlay.classList.remove('reading','closing','back-cover-view'); overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false');
  ['cover','back-cover'].forEach(id=>document.getElementById(id).style.backgroundColor=current.color);
  document.getElementById('cover-index').textContent='BOOK '+current.no;
  document.getElementById('cover-title').textContent=current.title;
  document.getElementById('cover-subtitle').textContent=current.ko;
  document.getElementById('back-cover-title').textContent=current.title;
  document.getElementById('back-cover-subtitle').textContent=current.ko;
  document.getElementById('back-cover-number').textContent=current.no;
  document.getElementById('reader-title').textContent=current.title;
  renderSpread(false);
  requestAnimationFrame(()=>{if(!overlay.classList.contains('reading'))document.getElementById('open-this-book').focus({preventScroll:true});});
}
function beginReading(){if(!current||overlay.classList.contains('reading'))return;overlay.classList.remove('back-cover-view');overlay.classList.add('reading');}


function renderText(s){
  const body=document.getElementById('spread-body');
  if(s.kind==='event'){
    const e=s.event;
    body.innerHTML=`<div class="event-detail"><section><b>규칙</b><p>${e.rule}</p></section><section><b>실패 조건</b><p>${e.failure}</p></section><section><b>연출 포인트</b><p>${e.direction}</p></section></div><div class="chips"><span class="chip">NIGHT RIDE</span><span class="chip">EVENT ${e.no}</span></div>`;
  }else if(s.kind==='rulebook'){
    body.innerHTML=`<div class="rulebook-detail">${s.rules.map(r=>`<section><b>${r[0]}</b><div><strong>${r[1]}</strong><p>${r[2]}</p></div></section>`).join('')}</div><div class="chips"><span class="chip">월령고개 · 가칭</span><span class="chip">OFFICIAL RULES</span></div>`;
  }else if(s.kind==='jangseung'){
    body.innerHTML=`<div class="unrecorded-note"><p>공식 수첩의 마지막 문장은 “본 수칙에 기록되지 않은 현상을 발견한 경우 함부로 접근하거나 기존 수칙을 임의로 적용하지 마십시오.”라고 경고한다.</p><strong>장승은 공식 규칙서에 존재하지 않는다.</strong></div><div class="traveller-records">${s.records.map(r=>`<section><b>${r[0]}</b><p>${r[1]}</p></section>`).join('')}</div><div class="chips"><span class="chip">UNRECORDED</span><span class="chip">JANGSEUNG</span></div>`;
  }else{
    body.innerHTML=`<ul>${s.body.map(x=>`<li>${x}</li>`).join('')}</ul><div class="chips"><span class="chip">${current.ko}</span><span class="chip">${s.section}</span></div>`;
  }
}
function renderVisual(s){
  const vf=document.getElementById('visual-frame');
  if(s.visual==='poster') vf.innerHTML='<div class="poster-art overview-poster"><img src="assets/night-ride-poster.jpg" alt="NIGHT RIDE 게임 기획 요약 포스터"></div>';
  else if(s.visual==='flow') vf.innerHTML=`<div class="flow-art"><div><b>01</b><span>자전거로 이동</span></div><i>↓</i><div><b>02</b><span>이상현상 발견</span></div><i>↓</i><div><b>03</b><span>규칙 추론</span></div><i>↓</i><div><b>04</b><span>행동 선택</span></div><i>↓</i><div><b>05</b><span>생존 / 루프</span></div><i>↓</i><div><b>06</b><span>다음 구간</span></div></div>`;
  else if(s.visual==='notice') vf.innerHTML='<div class="notice-art"><div class="bridge-moon"></div><div class="lamp-post"><i></i><span></span></div><div class="notice-paper"><b>월령고개 야간 통행 안내</b><p>오후 11시 이후 통행 시<br>다리 건너편 가로등 아래<br><strong>야간 통행 기록수첩</strong>을<br>반드시 확인하십시오.</p><small>월령리 주민회</small></div><div class="notebook-box">기록수첩</div></div>';
  else if(s.visual==='notebook') vf.innerHTML='<div class="notebook-art"><div class="notebook-cover"><small>월령리 주민회</small><b>월령고개<br>야간 통행<br>기록수첩</b><span>읽은 뒤 반드시 제자리에<br>돌려놓아 주십시오.</span></div><div class="pencil-note">처음 오는 사람이면 끝까지 읽어.</div><div class="pencil-note second">전부 믿지는 마.</div></div>';
  else if(s.visual==='jangseung') vf.innerHTML='<div class="jangseung-art"><div class="road-glow"></div><div class="jangseung post-a"><i></i><b>天下大將軍</b></div><div class="jangseung post-b turned"><i></i><b>地下女將軍</b></div><div class="jangseung-caption">원래 바깥을 보던 장승이<br><strong>도로 쪽을 바라보고 있다.</strong></div></div>';
  else if(s.visual==='event') vf.innerHTML=`<div class="event-art"><img src="${s.event.image}" alt="${s.event.title} 이벤트 컨셉 이미지"><span>EVENT ${s.event.no}</span></div>`;
  else if(s.visual==='animal') vf.innerHTML='<div class="animal-art"><img src="assets/animal.png" alt="병맛 동물 대전 참고 이미지"></div>';
  else vf.innerHTML=`<div class="abstract-art" style="--art1:${s.art?.[0]||'#333'};--art2:${s.art?.[1]||'#777'}"><span>${current.no}</span></div>`;
  const art=vf.firstElementChild;
  const trigger=document.createElement('button');
  trigger.type='button'; trigger.className='visual-expand';
  trigger.setAttribute('aria-label',`${s.title} 크게 보기`);
  trigger.setAttribute('aria-haspopup','dialog');
  trigger.appendChild(art); vf.appendChild(trigger);
  trigger.addEventListener('click',()=>openVisual(s,art));
  const hint=document.createElement('span');
  hint.className='visual-expand-hint'; hint.textContent='눌러서 크게 보기 ↗'; hint.setAttribute('aria-hidden','true');
  vf.appendChild(hint);
}


const viewer=document.getElementById('visual-viewer');
const viewerContent=document.getElementById('viewer-content');
const viewerZoom=document.getElementById('viewer-zoom');
function openVisual(s,art){
  document.getElementById('viewer-title').textContent=s.title;
  viewerContent.replaceChildren(); viewerContent.classList.remove('original-size');
  viewerZoom.setAttribute('aria-pressed','false'); viewerZoom.textContent='원본 크기';
  const source=art.querySelector('img');
  viewerZoom.hidden=!source;
  viewerContent.appendChild(source?source.cloneNode(true):art.cloneNode(true));
  viewer.showModal(); viewerContent.scrollTop=0; viewerContent.scrollLeft=0;
  document.getElementById('viewer-close').focus({preventScroll:true});
}
document.getElementById('viewer-close').onclick=()=>viewer.close();
viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close();});
viewerZoom.onclick=()=>{
  const original=viewerContent.classList.toggle('original-size');
  viewerZoom.setAttribute('aria-pressed',String(original));
  viewerZoom.textContent=original?'화면에 맞추기':'원본 크기';
  viewerContent.scrollTop=0; viewerContent.scrollLeft=0;
};
function renderSpread(animate=true){
  if(!current)return; const s=current.spreads[spreadIndex]; const p1=spreadIndex*2+1,p2=p1+1;
  document.getElementById('spread-section-left').textContent=s.section;
  document.getElementById('spread-section-right').textContent=s.section;
  document.getElementById('left-page-no').textContent=String(p1).padStart(2,'0');
  document.getElementById('right-page-no').textContent=String(p2).padStart(2,'0');
  document.getElementById('chapter').textContent=s.kind==='event'?`EVENT ${s.event.no}`:(s.kind==='jangseung'?'UNRECORDED':`CHAPTER ${String(spreadIndex+1).padStart(2,'0')}`);
  document.getElementById('spread-title').textContent=s.title;
  document.getElementById('spread-lead').textContent=s.lead;
  renderText(s); renderVisual(s);
  openBookEl.scrollTop=0;
  document.getElementById('visual-caption').textContent=s.caption;
  document.getElementById('spread-count').textContent=`${String(spreadIndex+1).padStart(2,'0')} / ${String(current.spreads.length).padStart(2,'0')}`;
  document.getElementById('prev-spread').disabled=spreadIndex===0;
  const next=document.getElementById('next-spread'); next.disabled=false; next.textContent=spreadIndex===current.spreads.length-1?'FINISH →':'NEXT →';
  if(animate){openBookEl.classList.remove('turning');void openBookEl.offsetWidth;openBookEl.classList.add('turning');setTimeout(()=>openBookEl.classList.remove('turning'),230);}
}


document.getElementById('prev-spread').onclick=()=>{if(spreadIndex>0){spreadIndex--;renderSpread();}};
document.getElementById('next-spread').onclick=()=>{if(!current)return;if(spreadIndex<current.spreads.length-1){spreadIndex++;renderSpread();}else showBackCover();};
function showBackCover(){if(!current||!overlay.classList.contains('reading'))return;overlay.classList.add('back-cover-view');document.getElementById('back-cover').setAttribute('aria-hidden','false');setTimeout(()=>document.getElementById('shelve-from-back').focus({preventScroll:true}),620);}
function returnToLastPage(){if(!current)return;overlay.classList.remove('back-cover-view');document.getElementById('back-cover').setAttribute('aria-hidden','true');setTimeout(()=>document.getElementById('next-spread').focus({preventScroll:true}),520);}
function closeBook(){if(viewer.open)viewer.close();clearTimeout(closeTimer);const wasReading=overlay.classList.contains('reading');overlay.classList.add('closing');overlay.classList.remove('reading','back-cover-view');closeTimer=setTimeout(()=>{overlay.classList.remove('open','closing','back-cover-view');document.getElementById('back-cover').setAttribute('aria-hidden','true');overlay.setAttribute('aria-hidden','true');document.body.classList.remove('book-is-open');current=null;},wasReading?720:300);}


document.getElementById('open-this-book').onclick=beginReading;
document.getElementById('cover-return').onclick=closeBook;
document.getElementById('overlay-close').onclick=closeBook;
document.getElementById('return-book').onclick=closeBook;
document.getElementById('back-to-last-page').onclick=returnToLastPage;
document.getElementById('shelve-from-back').onclick=closeBook;
document.addEventListener('keydown',e=>{if(viewer.open||!overlay.classList.contains('open'))return;if(e.key==='Escape'){closeBook();return;}if(overlay.classList.contains('back-cover-view')){if(e.key==='ArrowLeft')returnToLastPage();if(e.key==='Enter')closeBook();return;}if(!overlay.classList.contains('reading')){if(e.key==='Enter'||e.key===' '){e.preventDefault();beginReading();}return;}if(e.key==='ArrowRight')document.getElementById('next-spread').click();if(e.key==='ArrowLeft')document.getElementById('prev-spread').click();});