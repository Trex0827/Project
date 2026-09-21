const ideas=[
 {key:'night',no:'01',name:'NIGHT RIDE',ko:'밤에 자전거 타고 가기',group:'main',status:'MAIN CANDIDATE',type:'HORROR / RULE PUZZLE',pin:'#dc4b36',x:7,y:9,rot:'-2.4deg',summary:'PC / Steam / Unreal Engine 5.4.4 기반의 공포 게임. 밤의 시골길을 자전거로 달리며 나폴리탄 괴담식 규칙을 파악하고 목적지까지 살아남는 컨셉.',notes:['가로등 전단지·낙서·표지판으로 규칙 힌트를 제공','자전거 행동 자체가 선택지가 됨 — 멈춤, 통과, 라이트, 뒤돌아보기','12개 핵심 이벤트 초안 확정 — 발소리, 버스 정류장, 터널, 잘못된 갈림길 등','전체 루프보다 랜드마크 구간 반복 구조를 우선 검토'],resources:['자전거 SKM 보유 (바퀴 회전)','시골길 에셋 후보','괴물·요괴·귀신 몬스터 에셋 확보','규칙 이벤트용 전단지/낙서 연출 가능'],questions:['플레이 시작~엔딩까지의 메인 목표를 어떻게 설정할까?','각 이벤트를 어떤 순서와 구간 루프로 배치할까?'],visual:'night'},
 {key:'animal',no:'02',name:'ANIMAL BRAWL',ko:'병맛 동물 대전',group:'main',status:'MAIN CANDIDATE',type:'PARTY / ACTION',pin:'#dc4b36',x:39,y:14,rot:'1.8deg',summary:'갱비스트·파티 애니멀즈 같은 병맛 대전 감성에 랜덤 동물 선택과 성장 아이디어를 결합한 컨셉.',notes:['플레이어는 동물을 랜덤 픽','처음 동물은 기본 공격만 사용','패시브 스킬 트리로 좋은 동물 등장 확률 상승','기린 — 목 늘리기 공격','악어 — 토네이도 돌진'],resources:['기획서 포함 캐릭터 참고 이미지','맵 중립몹 활용 가능성','아이템·장비 활용 가능성'],questions:['팀전으로 갈 것인가?','랜덤성과 실력의 비율을 어떻게 잡을까?'],visual:'animal'},
 {key:'alien',no:'03',name:'HIDE ALIEN',ko:'외계인 숨기기',group:'early',status:'EARLY CONCEPT',type:'CONCEPT ONLY',pin:'#e9c85c',x:72,y:10,rot:'-1.5deg',summary:'기획서의 기타 아이디어에 기록된 “외계인 숨기기” 초기 컨셉.',notes:['현재 문서에는 제목 수준으로 기록됨'],resources:['세부 자료 미정'],questions:['무엇을 피해서 숨기는가?','싱글/협동 중 어떤 형태인가?'],visual:'abstract',art:['#53684f','#8aa17c']},
 {key:'survival',no:'04',name:'2D SURVIVAL',ko:'2D 횡스크롤 생존',group:'early',status:'EARLY CONCEPT',type:'2D / SURVIVAL',pin:'#e9c85c',x:13,y:53,rot:'1.6deg',summary:'2D 횡스크롤 기반 생존 게임. 대전 가능성도 함께 메모되어 있다.',notes:['2D 횡스크롤','생존','대전도 가능'],resources:['세부 자료 미정'],questions:['생존 중심인가, 대전 중심인가?'],visual:'abstract',art:['#3f4e63','#8ea4b5']},
 {key:'relic',no:'05',name:'PLANET RELIC',ko:'3D 방탈출 · 유물 탐사',group:'early',status:'EARLY CONCEPT',type:'3D / EXPLORATION',pin:'#e9c85c',x:46,y:54,rot:'-2deg',summary:'행성에 파견되어 맵을 탐색하고 유물을 얻은 뒤 복원해 가치를 높여 판매하는 흐름.',notes:['행성 파견 → 맵 탐색','유물 획득','씻거나 복원 시 가치 증가','상인에게 판매'],resources:['세부 자료 미정'],questions:['방탈출과 경제 루프를 어떻게 연결할까?'],visual:'abstract',art:['#423d64','#8d7ba4']},
 {key:'arcana',no:'06',name:'ARCANA REVIVAL',ko:'아르카나 부활',group:'hold',status:'CONDITIONAL',type:'ON HOLD',pin:'#9a9a92',x:76,y:56,rot:'2.1deg',summary:'“모델링만 있다면…”이라는 조건과 함께 기록된 아르카나 부활 후보.',notes:['필요 모델링 확보가 전제 조건'],resources:['소울 게임 참고 자료 Drive 링크 메모'],questions:['모델링 확보 가능성은?'],visual:'abstract',art:['#6b5255','#a9807d']}
];

const cards=document.getElementById('cards');
ideas.forEach(i=>{
 const b=document.createElement('button'); b.type='button'; b.className='idea-card'+(i.visual==='animal'?' photo':''); b.dataset.group=i.group;
 b.style.left=i.x+'%';b.style.top=i.y+'%';b.style.setProperty('--rot',i.rot);b.style.setProperty('--pin',i.pin);
 b.innerHTML=`<div class="case"><span>CASE ${i.no}</span><span>${i.status}</span></div><h2>${i.name}</h2><div class="ko">${i.ko}</div><div class="tagline">${i.type}</div>${i.visual==='animal'?'<div class="thumb"><img src="assets/animal.png" alt="병맛 동물 대전 참고 이미지"></div>':''}`;
 b.onclick=()=>openDossier(i); cards.appendChild(b);
});

document.querySelectorAll('.filter').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.idea-card').forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.group!==f));});

const dossier=document.getElementById('dossier'),scrim=document.getElementById('scrim');
function openDossier(i){
 document.getElementById('detail-number').textContent='CASE '+i.no;
 document.getElementById('detail-status').textContent=i.status;
 document.getElementById('detail-type').textContent=i.type;
 document.getElementById('detail-name').textContent=i.name;
 document.getElementById('detail-ko').textContent=i.ko;
 document.getElementById('detail-summary').textContent=i.summary;
 document.getElementById('detail-notes').innerHTML=i.notes.map(x=>`<li>${x}</li>`).join('');
 document.getElementById('detail-resources').innerHTML=i.resources.map(x=>`<div class="resource">${x}</div>`).join('');
 document.getElementById('detail-questions').innerHTML=i.questions.map(x=>`<div class="question">${x}</div>`).join('');
 const v=document.getElementById('detail-visual');
 if(i.visual==='night') v.innerHTML='<div class="night-visual poster"><img src="assets/night-ride-poster.png" alt="Night Ride 기획 요약 포스터"></div>';
 else if(i.visual==='animal') v.innerHTML='<div class="animal-visual"><img src="assets/animal.png" alt="병맛 동물 대전 참고 이미지"></div>';
 else v.innerHTML=`<div class="abstract-visual" style="--a:${i.art[0]};--b:${i.art[1]}"><b>${i.no}</b></div>`;
 dossier.classList.add('open');scrim.classList.add('open');dossier.setAttribute('aria-hidden','false');
}
function closeDossier(){dossier.classList.remove('open');scrim.classList.remove('open');dossier.setAttribute('aria-hidden','true')}
document.getElementById('dossier-close').onclick=closeDossier;scrim.onclick=closeDossier;document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDossier()});
