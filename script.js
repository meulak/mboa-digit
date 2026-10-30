document.querySelectorAll('[data-wa]').forEach(function(a){a.href='https://wa.me/237690825919?text='+encodeURIComponent(a.dataset.wa);a.target='_blank';a.rel='noopener'});
(function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,h=document.querySelector('header'),de=document.documentElement;
function sc(){var m=de.scrollHeight-innerHeight;de.style.setProperty('--p',m>0?Math.min(1,scrollY/m):0);h.classList.toggle('sh',scrollY>8)}
addEventListener('scroll',sc,{passive:true});sc();if(rm||!window.IntersectionObserver)return;
var r=document.querySelectorAll('.rot i'),k=0;setInterval(function(){r[k].classList.remove('on');k=(k+1)%r.length;r[k].classList.add('on')},2300);
var els=document.querySelectorAll('.offer,.step,.contact,.band p');
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){var t=x.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.classList.remove('rv','in')},1400)}})},{threshold:.15});
els.forEach(function(e,i){e.classList.add('rv');e.style.setProperty('--d',(i%3)*.12+'s');io.observe(e)});
})();

(function(){
var WA='237690825919',$=function(s){return document.getElementById(s)};
var btn=$('cbBtn'),box=$('cb'),msgs=$('cbMsgs'),inp=$('cbIn'),tip=$('cbTip');
var logo=document.querySelector('.brand img').src;$('cbIco').src=logo;$('cbAv').src=logo;
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var DEF=['Nos offres','Demander un devis'];
var KB=[
{k:['bonjour','salut','hello','bonsoir','coucou'],a:'Bonjour ! Comment puis-je vous aider ?',c:['Nos offres','Demander un devis','Nous contacter']},
{k:['merci'],a:'Avec plaisir ! N’hésitez pas si vous avez d’autres questions.',c:DEF},
{k:['offre','service','propose','prestation','faites'],a:'Nous proposons 7 services :\n• Gestion des réseaux sociaux\n• Sites internet\n• Cartes de visite numériques\n• Billets d’invitation digitaux\n• Billets d’avion\n• Formation\n• Supports de communication\n\nLequel vous intéresse ?',c:['Réseaux sociaux','Site internet','Formation','Demander un devis']},
{k:['reseau','social','instagram','facebook','tiktok','linkedin','communaute'],a:'Nous gérons vos réseaux sociaux (Instagram, Facebook, TikTok, LinkedIn) : création de contenu, animation et développement de votre communauté.'},
{k:['site','web','internet','vitrine'],a:'Nous réalisons des sites internet modernes et professionnels. Décrivez-nous votre activité sur WhatsApp et nous vous préparons un devis adapté.',wa:'Bonjour, je souhaite un site internet pour mon activité.'},
{k:['carte','visite'],a:'La carte de visite numérique donne une image professionnelle et se partage en un clic depuis un téléphone.',wa:'Bonjour, je souhaite une carte de visite numérique.'},
{k:['invitation','invit','mariage','anniversaire','evenement'],a:'Nous créons des billets d’invitation digitaux pour vos événements : mariages, anniversaires et bien d’autres.',wa:'Bonjour, je souhaite un billet d’invitation digital.'},
{k:['avion','vol','voyage'],a:'Nous assurons la réservation et l’assistance pour vos billets d’avion et vos voyages.',wa:'Bonjour, je souhaite réserver un billet d’avion.'},
{k:['formation','former','apprendre','cours','ia','intelligence','informatique'],a:'Nous proposons des formations en informatique, en intelligence artificielle et en compétences digitales. Écrivez-nous pour connaître les modalités.',wa:'Bonjour, je souhaite des informations sur vos formations.'},
{k:['flyer','affiche','brochure','logo','visuel','support','communication','publicitaire'],a:'Nous concevons vos supports de communication : flyers, affiches, brochures, logos et visuels publicitaires.',wa:'Bonjour, j’ai besoin de supports de communication.'},
{k:['prix','tarif','cout','combien','devis','budget'],a:'Les tarifs dépendent de votre besoin. Décrivez-nous votre projet sur WhatsApp et l’équipe vous enverra un devis.',wa:'Bonjour MBOA DIGIT, je voudrais un devis.',c:['Nos offres']},
{k:['contact','telephone','numero','appeler','joindre','whatsapp','appel','tel'],a:'Vous pouvez nous joindre au +237 6 90 82 59 19 ou au +237 676 05 11 17, ou directement sur WhatsApp.',wa:'Bonjour MBOA DIGIT, je voudrais vous contacter.',c:['Nos offres']},
{k:['realisation','portfolio','exemple','travaux','projet'],a:'Découvrez nos réalisations dans la section « Nos réalisations » : visuels pour réseaux sociaux, flyers, tutoriels de formation et plus encore.',c:['Demander un devis','Nos offres']},
{k:['adresse','localisation','situe','bureau','lieu'],a:'MBOA DIGIT est une structure camerounaise. Pour une adresse précise ou un rendez-vous, écrivez-nous sur WhatsApp.',wa:'Bonjour MBOA DIGIT, pourriez-vous me donner votre adresse ?'}
];
var SYS='Tu es l’assistant virtuel de MBOA DIGIT, structure camerounaise de communication et de transformation numérique (slogan : Pour le Cameroun, Innovons !). Services : gestion des réseaux sociaux (Instagram, Facebook, TikTok, LinkedIn), sites internet, cartes de visite numériques, billets d’invitation digitaux (événements, mariages, anniversaires), billets d’avion (réservation et assistance), formation (informatique, IA, compétences digitales), supports de communication (flyers, affiches, brochures, logos, visuels publicitaires). Contacts : +237 6 90 82 59 19 et +237 676 05 11 17, aussi sur WhatsApp. Règles : réponds dans la langue du client, en 3 phrases maximum, avec un ton chaleureux et professionnel. N’invente jamais de prix, de délais, d’adresse ou de promesse. Pour un devis ou une information que tu ne connais pas, invite à écrire sur WhatsApp. Réponds uniquement aux questions liées à MBOA DIGIT et à ses services.\n\nConversation :\n';
var hist=[],aiOff=false,busy=false,greeted=false;
function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,' ')}
function find(q){var t=norm(q),best=null,bs=0;KB.forEach(function(e){var s=e.k.filter(function(w){return new RegExp('\\b'+w).test(t)}).length;if(s>bs){bs=s;best=e}});return best}
function wa(t){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(t)}
function down(){msgs.scrollTop=msgs.scrollHeight}
function say(text,cls){var d=document.createElement('div');d.className='b '+cls;d.textContent=text;msgs.appendChild(d);down();return d}
function chips(list){var w=document.createElement('div');w.className='cb-c';list.forEach(function(l){var b=document.createElement('button');b.type='button';b.textContent=l;b.onclick=function(){w.remove();send(l)};w.appendChild(b)});msgs.appendChild(w);down()}
function link(t){var a=document.createElement('a');a.className='cb-wa';a.href=wa(t);a.target='_blank';a.rel='noopener';a.textContent='Écrire sur WhatsApp';msgs.appendChild(a);down()}
function typing(){var d=document.createElement('div');d.className='ty';d.innerHTML='<i></i><i></i><i></i>';msgs.appendChild(d);down();return d}
function pause(ms){return new Promise(function(r){setTimeout(r,rm?0:ms)})}
async function ai(q){
 if(aiOff||!window.claude||!claude.use)return null;
 try{var s=await claude.use('sample');if(!s){aiOff=true;return null}
  var h=hist.slice(-8).map(function(m){return (m.r==='u'?'Client : ':'Assistant : ')+m.t}).join('\n');
  var r=await s(SYS+h+'\nAssistant :',{modelTier:'quick',cache:false});
  return (r&&r.text||'').trim()||null}
 catch(e){if(e&&(e.code==='not_granted'||e.code==='rate_limited'))aiOff=true;return null}
}
async function send(q){
 q=q.trim();if(!q||busy)return;busy=true;
 say(q,'me');hist.push({r:'u',t:q});
 var ty=typing(),e=find(q),a,w=null,c=DEF;
 if(e){await pause(450);a=e.a;w=e.wa;c=e.c||DEF}
 else{a=await ai(q);if(a){w=/whatsapp|devis/i.test(a)?'Bonjour MBOA DIGIT, '+q:null}
  else{a='Je n’ai pas la réponse exacte à cette question, mais l’équipe peut vous répondre rapidement sur WhatsApp.';w='Bonjour MBOA DIGIT, '+q}}
 ty.remove();say(a,'bot');hist.push({r:'a',t:a});if(w)link(w);chips(c);busy=false;
}
function open(o){box.classList.toggle('open',o);btn.classList.toggle('on',o);btn.setAttribute('aria-expanded',o);tip.classList.remove('show');
 if(o){if(!greeted){greeted=true;say('Bonjour 👋 Je suis l’assistant de MBOA DIGIT. Comment puis-je vous aider ?','bot');chips(['Nos offres','Demander un devis','Nous contacter','Formation'])}inp.focus()}else btn.focus()}
btn.onclick=function(){open(!box.classList.contains('open'))};
$('cbX').onclick=function(){open(false)};
box.addEventListener('keydown',function(e){if(e.key==='Escape')open(false)});
$('cbForm').addEventListener('submit',function(e){e.preventDefault();var v=inp.value;inp.value='';send(v)});
setTimeout(function(){if(!box.classList.contains('open')){tip.classList.add('show');setTimeout(function(){tip.classList.remove('show')},7000)}},5000);
tip.onclick=function(){open(true)};
})();

(function(){
var ws=[].slice.call(document.querySelectorAll('.work')),lb=document.getElementById('lb'),I=document.getElementById('lbI'),C=document.getElementById('lbC'),cur=0,vis=[],last=null;
document.querySelectorAll('.flt button').forEach(function(b){b.onclick=function(){
 document.querySelectorAll('.flt button').forEach(function(x){x.classList.toggle('on',x===b)});
 ws.forEach(function(w,i){var show=b.dataset.f==='all'||w.dataset.c===b.dataset.f;w.style.display=show?'':'none';if(show)w.style.animationDelay=(i%6)*.05+'s'})}});
function show(){var w=vis[cur];I.src=w.querySelector('img').src;I.alt=w.querySelector('img').alt;C.textContent=w.dataset.n+' – '+w.dataset.t}
function open(w){last=w;vis=ws.filter(function(x){return x.style.display!=='none'});cur=vis.indexOf(w);show();lb.hidden=false;document.body.style.overflow='hidden';document.getElementById('lbX').focus()}
function close(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus()}
function step(d){cur=(cur+d+vis.length)%vis.length;show()}
ws.forEach(function(w){w.onclick=function(){open(w)}});
document.getElementById('lbX').onclick=close;document.getElementById('lbP').onclick=function(){step(-1)};document.getElementById('lbN').onclick=function(){step(1)};
lb.addEventListener('click',function(e){if(e.target===lb)close()});
document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft')step(-1);else if(e.key==='ArrowRight')step(1)});
})();

(function(){
var tr=document.getElementById('works'),lb=document.getElementById('lb'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var origs=[].slice.call(tr.querySelectorAll('.work')),pos=0,half=0,run=false,paused=false,vis=false,last=0,ht=null;
function hold(ms){paused=true;clearTimeout(ht);ht=setTimeout(function(){paused=false},ms)}
function build(){
 tr.querySelectorAll('.clone').forEach(function(c){c.remove()});half=0;run=false;
 var v=origs.filter(function(w){return w.style.display!=='none'});
 if(rm||v.length<3||v.length*(v[0].offsetWidth+18)<=tr.clientWidth+v[0].offsetWidth+18){tr.scrollLeft=0;return}
 var n=Math.ceil(tr.clientWidth/(v.length*(v[0].offsetWidth+18)))+1;
 for(var k=0;k<n;k++)v.forEach(function(w){var c=w.cloneNode(true);c.classList.add('clone');c.setAttribute('aria-hidden','true');c.tabIndex=-1;c.onclick=function(){w.click()};tr.appendChild(c)});
 half=tr.querySelector('.clone').offsetLeft-v[0].offsetLeft;pos=tr.scrollLeft=half;run=true;
}
function tick(t){
 if(run&&!paused&&vis&&lb.hidden&&!document.hidden){var dt=Math.min(64,t-last);
  if(Math.abs(tr.scrollLeft-pos)>2)pos=tr.scrollLeft;
  pos+=dt*0.05;if(pos>=2*half)pos-=half;tr.scrollLeft=pos}
 last=t;requestAnimationFrame(tick)}
tr.addEventListener('scroll',function(){if(!half)return;if(tr.scrollLeft>=2*half){tr.scrollLeft-=half;pos=tr.scrollLeft}else if(tr.scrollLeft<=0){tr.scrollLeft+=half;pos=tr.scrollLeft}},{passive:true});
tr.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')paused=true});
tr.addEventListener('pointerleave',function(e){if(e.pointerType==='mouse')paused=false});
tr.addEventListener('touchstart',function(){paused=true},{passive:true});
tr.addEventListener('touchend',function(){hold(1800)},{passive:true});
tr.addEventListener('wheel',function(){hold(1500)},{passive:true});
tr.addEventListener('focusin',function(){paused=true});tr.addEventListener('focusout',function(){paused=false});
function go(d){hold(2500);var w=origs[0].offsetWidth+18;tr.scrollBy({left:d*w,behavior:rm?'auto':'smooth'})}
document.getElementById('rlP').onclick=function(){go(-1)};document.getElementById('rlN').onclick=function(){go(1)};
document.querySelectorAll('.flt button').forEach(function(b){b.addEventListener('click',function(){setTimeout(build,0)})});
var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(build,250)});
if(window.IntersectionObserver)new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(tr);else vis=true;
build();requestAnimationFrame(tick);
})();
