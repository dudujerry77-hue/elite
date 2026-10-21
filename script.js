

const D = {
  services: [
    {id:1,name:'Classic Haircut',icon:'fa-solid fa-scissors',price:3500,dur:45,desc:'Precision cut tailored to your face shape and lifestyle. Includes consultation, wash, and style.',barbers:'All barbers',bookings:198,status:'active'},
    {id:2,name:'Skin Fade',icon:'fa-solid fa-user-ninja',price:4500,dur:60,desc:'A gradual fade from bare skin to full hair blended flawlessly by our fade specialists.',barbers:'Kingsley, David',bookings:241,status:'active'},
    {id:3,name:'Beard Trim & Shape',icon:'fa-solid fa-face-grin-beam',price:2500,dur:30,desc:'Full beard sculpting, hot-towel softening, precision lining, and beard oil finish.',barbers:'All barbers',bookings:156,status:'active'},
    {id:4,name:'Hair Wash & Treatment',icon:'fa-solid fa-shower',price:2000,dur:20,desc:'Deep cleanse with scalp massage, conditioning treatment, and blow-dry.',barbers:'All barbers',bookings:88,status:'active'},
    {id:5,name:'Hair Coloring',icon:'fa-solid fa-palette',price:8000,dur:90,desc:'Professional color, highlights, grey blending. Premium dye brands only.',barbers:'David, Ahmed',bookings:42,status:'active'},
    {id:6,name:'Kids Haircut',icon:'fa-solid fa-child',price:2500,dur:30,desc:'A calm, fun experience for children. Gentle approach, quick execution. Under 12.',barbers:'Michael',bookings:75,status:'active'},
    {id:7,name:'VIP Grooming Package',icon:'fa-solid fa-crown',price:12000,dur:120,desc:'Haircut + skin fade + beard trim + hair wash + hot towel + scalp massage + complimentary beverage.',barbers:'Ahmed, Kingsley',bookings:63,status:'active'},
  ],
  barbers: [
    {id:1,name:'Kingsley Obi',spec:'Head Barber & Founder',exp:'10+',rating:'4.9',bookings:142,status:'active',skills:'Skin Fade, Taper, Designs',photo:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80'},
    {id:2,name:'David Emeka',spec:'Senior Barber',exp:'7',rating:'4.8',bookings:118,status:'active',skills:'Afro, Beard, Coloring',photo:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80'},
    {id:3,name:'Michael Adeyemi',spec:'Style Specialist',exp:'5',rating:'4.9',bookings:97,status:'active',skills:'Kids, Lineup, Classic',photo:'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80'},
    {id:4,name:'Ahmed Ibrahim',spec:'Grooming Expert',exp:'6',rating:'5.0',bookings:84,status:'active',skills:'VIP, Shaving, Treatment',photo:'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=400&q=80'},
  ],
  gallery: [
    {id:1,url:'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80',cap:'Skin Fade',cat:'Fade'},
    {id:2,url:'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80',cap:'Taper Fade',cat:'Fade'},
    {id:3,url:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80',cap:'Beard Shaping',cat:'Beard'},
    {id:4,url:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80',cap:'Classic Cut',cat:'Classic'},
    {id:5,url:'https://images.unsplash.com/photo-1584316712724-f5d4b188fee2?w=400&q=80',cap:'VIP Session',cat:'VIP'},
    {id:6,url:'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=400&q=80',cap:'Lineup Edge',cat:'Classic'},
    {id:7,url:'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=400&q=80',cap:'Hot Towel',cat:'VIP'},
  ],
  reviews: [
    {id:1,client:'Obinna James',text:'Best barbershop in Abuja. Kingsley gave me the cleanest fade I\'ve had in years. The whole experience feels premium from the moment you walk in.',rating:5,date:'2025-05-20',label:'Regular Client · 2 years',status:'published'},
    {id:2,client:'Tunde Musa',text:'The VIP package is absolutely worth every kobo. Hot towel, beard trim, the works left feeling like a new man.',rating:5,date:'2025-05-18',label:'Loyal Client · 1 year',status:'published'},
    {id:3,client:'Fatima Aliyu',text:'Brought my son here for his first haircut and Michael was incredibly patient. The kids experience was professional and fun.',rating:5,date:'2025-05-15',label:'New Client',status:'published'},
    {id:4,client:'Chuka Obi',text:'Always leave looking fresh. My monthly ritual now. David knows exactly what I want without me even explaining.',rating:5,date:'2025-05-10',label:'Regular Client',status:'published'},
    {id:5,client:'Ibrahim Bello',text:'Great vibe, professional barbers, and clean shop. Very impressed. Will be back.',rating:5,date:'2025-05-05',label:'New Client',status:'pending'},
    {id:6,client:'Dayo Akin',text:'Good experience overall. Would have been perfect if not for the slight wait. Cut was excellent though.',rating:4,date:'2025-04-28',label:'Regular Client',status:'published'},
  ],
  appointments: [
    {id:1,date:'2025-06-10',time:'9:00 AM',client:'Emeka Okafor',phone:'0801111111',service:'Skin Fade',barber:'Kingsley Obi',status:'confirmed',amount:4500},
    {id:2,date:'2025-06-10',time:'9:30 AM',client:'Tunde Bello',phone:'0802222222',service:'Classic Haircut',barber:'David Emeka',status:'confirmed',amount:3500},
    {id:3,date:'2025-06-10',time:'10:00 AM',client:'Chidi Nweke',phone:'0803333333',service:'VIP Grooming Package',barber:'Ahmed Ibrahim',status:'pending',amount:12000},
    {id:4,date:'2025-06-10',time:'10:30 AM',client:'Musa Lawal',phone:'0804444444',service:'Beard Trim & Shape',barber:'Michael Adeyemi',status:'completed',amount:2500},
    {id:5,date:'2025-06-09',time:'11:00 AM',client:'Seun Adeyemi',phone:'0805555555',service:'Hair Coloring',barber:'David Emeka',status:'completed',amount:8000},
    {id:6,date:'2025-06-08',time:'2:00 PM',client:'Kunle Ojo',phone:'0806666666',service:'Kids Haircut',barber:'Michael Adeyemi',status:'cancelled',amount:2500},
  ],
  styles: [
    {id:1,name:'Low Fade Pompadour',price:5000,img:'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80',desc:'Classic pompadour with a clean low fade.',dur:60,cat:'Fade'},
    {id:2,name:'Bald Fade',price:4500,img:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80',desc:'Complete bald fade with sharp lineup.',dur:60,cat:'Fade'},
    {id:3,name:'Full Beard Sculpt',price:3000,img:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80',desc:'Full beard shaping with hot towel finish.',dur:45,cat:'Beard'},
  ],
  settings:{name:'Elite Cuts Barbershop',tagline:'Where Style Meets Precision',phone:'+234 801 234 5678',wa:'2348083252950',addr:'14 Aminu Kano Crescent, Maitama, Abuja',email:'hello@elitecutsng.com',ig:'@elitecutsng',wkd:'9:00 AM – 8:00 PM',wkn:'10:00 AM – 5:00 PM'},
  pw:'1234'
};

let pickedTime='9:00 AM';
let theme='dark';
let loggedIn=false;
let nextId={svc:100,barber:100,gal:100,rev:100,style:100};
const FALLBACK_IMG='https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80';

function goPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  const pg=document.getElementById('pg-'+name);
  if(!pg) return;
  pg.classList.add('on');
  window.scrollTo({top:0,behavior:'smooth'});
  document.getElementById('site-ft').style.display=name==='admin'?'none':'block';
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('on',a.dataset.pg===name));
  document.getElementById('wa-btn').style.display=name==='admin'?'none':'flex';
  if(name==='admin'&&!loggedIn) document.getElementById('adm-login').style.display='flex';
  if(name==='services') renderSvcPage();
  if(name==='gallery') renderGalleryPage();
  if(name==='reviews') renderReviewsPage();
  if(name==='contact') renderContactInfo();
  if(name==='home'){renderHomeSvcs();renderHomeBarbers();renderHomeReviews();renderHomeGal();renderHeroAvail();renderMarquee();}
  if(name==='booking') populateBookingSelects();
  initFade();
}

function toggleTheme(){
  theme=theme==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',theme==='light'?'light':'');
  document.getElementById('tbtn').innerHTML=theme==='dark'?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';
}

window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>40));
function toggleMob(){document.getElementById('mob-menu').classList.toggle('open');}

function initFade(){
  setTimeout(()=>{
    const els=document.querySelectorAll('.fade-in:not(.vis)');
    const ob=new IntersectionObserver(ents=>{ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');ob.unobserve(e.target);}});},{threshold:.1});
    els.forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.top<window.innerHeight) el.classList.add('vis');
      else ob.observe(el);
    });
  },80);
}

function notif(t,m){
  document.getElementById('n-title').textContent=t;
  document.getElementById('n-msg').textContent=m;
  const n=document.getElementById('notif');
  n.classList.add('show');
  setTimeout(()=>n.classList.remove('show'),3500);
}

function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}
document.addEventListener('click',e=>{ if(e.target.classList.contains('modal-bg')) e.target.classList.remove('open'); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){closeLbx();document.querySelectorAll('.modal-bg.open').forEach(m=>m.classList.remove('open'));} });

function renderMarquee(){
  const items=['Expert Barbers','Premium Products','Online Booking','Walk-ins Welcome','Skin Fades','Beard Grooming','Kids Cuts','VIP Packages'];
  const html=items.map(t=>`<div class="mq-item"><i class="fa-solid fa-star"></i> ${t}</div>`).join('');
  const el=document.getElementById('mq');
  if(el) el.innerHTML=html+html;
}

function renderHeroAvail(){
  const el=document.getElementById('hero-avail');
  if(!el) return;
  const active=D.barbers.filter(b=>b.status==='active').slice(0,3);
  el.innerHTML=active.map(b=>`
    <div class="avail-barber" onclick="goPage('booking')">
      <img src="${b.photo}" alt="${b.name}" onerror="this.src='${FALLBACK_IMG}'">
      <div class="avail-barber-name">${b.name.split(' ')[0]}</div>
    </div>`).join('');
}

function populateBookingSelects(){
  const ss=document.getElementById('b-svc');
  const sb=document.getElementById('b-barber');
  if(!ss||!sb) return;
  ss.innerHTML='<option value="">Select a service</option>'+D.services.filter(s=>s.status==='active').map(s=>`<option value="${s.id}">${s.name}  ₦${s.price.toLocaleString()}</option>`).join('');
  sb.innerHTML='<option value="">Any available barber</option>'+D.barbers.filter(b=>b.status==='active').map(b=>`<option value="${b.id}">${b.name}  ${b.spec}</option>`).join('');
  const d=document.getElementById('b-date');
  if(d) d.min=new Date().toISOString().split('T')[0];
}

function updatePrice(){
  const id=parseInt(document.getElementById('b-svc').value);
  const svc=D.services.find(s=>s.id===id);
  const pp=document.getElementById('price-prev');
  if(svc){
    document.getElementById('prev-svc').textContent=svc.name+' · '+svc.dur+' min';
    document.getElementById('prev-amt').textContent='₦'+svc.price.toLocaleString();
    pp.classList.add('show');
  } else pp.classList.remove('show');
}

function pickTime(el,t){
  if(el.classList.contains('na')) return;
  document.querySelectorAll('.tslot').forEach(s=>s.classList.remove('sel'));
  el.classList.add('sel');
  pickedTime=t;
}

function submitBooking(e){
  e.preventDefault();
  const svcId=parseInt(document.getElementById('b-svc').value);
  const svc=D.services.find(s=>s.id===svcId);
  if(!svc){notif('Select a service','Please choose a service to continue.');return;}
  const name=document.getElementById('b-name').value;
  const phone=document.getElementById('b-phone').value;
  const barId=parseInt(document.getElementById('b-barber').value)||null;
  const bar=barId?D.barbers.find(b=>b.id===barId):null;
  const date=document.getElementById('b-date').value||new Date().toISOString().split('T')[0];
  const appt={id:D.appointments.length?Math.max(...D.appointments.map(a=>a.id))+1:1,date,time:pickedTime,client:name,phone,service:svc.name,barber:bar?bar.name:'Any Available',status:'confirmed',amount:svc.price};
  D.appointments.unshift(appt);
  svc.bookings++;
  document.getElementById('modal-det').textContent=`${svc.name} booked for ${name} with ${appt.barber} on ${date} at ${pickedTime}. Total: ₦${svc.price.toLocaleString()}. WhatsApp confirmation coming to ${phone} shortly.`;
  openModal('book-modal');
  document.getElementById('book-form').reset();
  document.getElementById('price-prev').classList.remove('show');
}

function renderHomeSvcs(){
  const el=document.getElementById('home-svcs');
  if(!el) return;
  const active=D.services.filter(s=>s.status==='active').slice(0,6);
  el.innerHTML=active.map(s=>`
    <div class="svc-card fade-in" onclick="goPage('booking')">
      <div class="svc-icon"><i class="${s.icon}"></i></div>
      <div class="svc-price">₦${s.price.toLocaleString()}</div>
      <h4 style="font-size:1rem;margin-bottom:.4rem">${s.name}</h4>
      <p class="body-sm">${s.desc}</p>
      <div class="svc-dur"><i class="fa-regular fa-clock"></i> ${s.dur} min · ${s.barbers}</div>
    </div>`).join('');
  if(active[0]) document.getElementById('h-price1').textContent='₦'+active[0].price.toLocaleString();
  const vip=D.services.find(s=>s.name.toLowerCase().includes('vip'));
  if(vip) document.getElementById('h-price2').textContent='₦'+vip.price.toLocaleString();
  const ft=document.getElementById('ft-svcs');
  if(ft) ft.innerHTML=active.slice(0,6).map(s=>`<li><a onclick="goPage('booking')">${s.name}</a></li>`).join('');
}

function renderSvcPage(){
  const el=document.getElementById('page-svcs');
  if(!el) return;
  el.innerHTML=D.services.filter(s=>s.status==='active').map((s,i)=>`
    <div class="svc-card fade-in${i%3===1?' d1':i%3===2?' d2':''}" onclick="goPage('booking')" ${s.name.toLowerCase().includes('vip')?'style="border-color:rgba(201,168,76,.4);background:rgba(201,168,76,.04)"':''}>
      <div class="svc-icon"><i class="${s.icon}"></i></div>
      <div class="svc-price">₦${s.price.toLocaleString()}</div>
      <h4 style="font-size:1rem;margin-bottom:.4rem">${s.name} ${s.name.toLowerCase().includes('vip')?'<span style="font-size:.65rem;color:var(--gold);margin-left:.3rem"><i class="fa-solid fa-star"></i> Most Popular</span>':''}</h4>
      <p class="body-sm">${s.desc}</p>
      <div class="svc-dur"><i class="fa-regular fa-clock"></i> ${s.dur} min · ${s.barbers}</div>
    </div>`).join('');
  initFade();
}

function renderHomeBarbers(){
  const el=document.getElementById('home-barbers');
  if(!el) return;
  el.innerHTML=D.barbers.filter(b=>b.status==='active').map((b,i)=>`
    <div class="barber-card fade-in${i===1?' d1':i===2?' d2':i===3?' d3':''}">
      <div class="barber-photo">
        <img src="${b.photo}" alt="${b.name}" onerror="this.src='${FALLBACK_IMG}'">
        <div class="barber-photo-overlay"></div>
      </div>
      <div class="barber-info">
        <h3 style="font-size:1.15rem">${b.name}</h3>
        <div class="barber-specialty">${b.spec}</div>
        <p class="body-sm" style="font-size:.8rem">${b.skills}</p>
        <div class="b-rating"><i class="fa-solid fa-star"></i>${b.rating} <span>(${b.bookings}+ cuts)</span></div>
        <div class="b-tags">${b.skills.split(',').map(sk=>`<span class="tag">${sk.trim()}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

function renderHomeReviews(){
  const el=document.getElementById('home-reviews');
  if(!el) return;
  const pub=D.reviews.filter(r=>r.status==='published').slice(0,3);
  el.innerHTML=pub.map((r,i)=>reviewCard(r,i)).join('');
}

function renderReviewsPage(){
  const el=document.getElementById('all-reviews');
  if(!el) return;
  const pub=D.reviews.filter(r=>r.status==='published');
  el.innerHTML=pub.length?pub.map((r,i)=>reviewCard(r,i)).join(''):'<p class="body-sm" style="text-align:center;grid-column:1/-1">No published reviews yet.</p>';
  initFade();
}

function reviewCard(r,i){
  const stars='<i class="fa-solid fa-star"></i>'.repeat(r.rating)+'<i class="fa-regular fa-star"></i>'.repeat(5-r.rating);
  const ini=r.client.split(' ').map(n=>n[0]).join('');
  return `<div class="test-card fade-in${i===1?' d1':i===2?' d2':''}">
    <div class="q-mark">"</div>
    <div class="stars">${stars}</div>
    <p class="test-txt">"${r.text}"</p>
    <div class="test-author">
      <div class="auth-av">${ini}</div>
      <div><div class="auth-name">${r.client}</div><div class="auth-lbl">${r.label||r.date}</div></div>
    </div>
  </div>`;
}

function renderHomeGal(){
  const el=document.getElementById('home-gal');
  if(!el) return;
  el.innerHTML=D.gallery.slice(0,7).map((g,i)=>`
    <div class="gal-item fade-in${i%3===1?' d1':i%3===2?' d2':''}" onclick="openLbx('${g.url}')">
      <img src="${g.url}" alt="${g.cap}" loading="lazy" onerror="this.src='${FALLBACK_IMG}'">
      <div class="gal-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
      <div class="gal-lbl">${g.cap}</div>
    </div>`).join('');
}

function renderGalleryPage(){
  const el=document.getElementById('full-gal');
  if(!el) return;
  el.innerHTML=D.gallery.map(g=>`
    <div style="aspect-ratio:1;border-radius:var(--r);overflow:hidden;cursor:pointer;position:relative" class="gal-item fade-in" onclick="openLbx('${g.url}')">
      <img src="${g.url}" alt="${g.cap}" style="width:100%;height:100%;object-fit:cover;transition:.4s" loading="lazy" onerror="this.src='${FALLBACK_IMG}'">
      <div class="gal-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
      <div class="gal-lbl">${g.cap} · ${g.cat}</div>
    </div>`).join('');
  initFade();
}

function openLbx(src){
  document.getElementById('lbx-img').src=src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLbx(){document.getElementById('lightbox').classList.remove('open');}

function renderContactInfo(){
  const s=D.settings;
  const el=document.getElementById('contact-info');
  if(!el) return;
  el.innerHTML=`
    <div class="ci-item"><div class="ci-icon"><i class="fa-solid fa-location-dot"></i></div><div><div style="font-weight:600;margin-bottom:.2rem;font-size:.9rem">Location</div><div class="body-sm">${s.addr}<br>Abuja, FCT Nigeria</div></div></div>
    <div class="ci-item"><div class="ci-icon"><i class="fa-solid fa-phone"></i></div><div><div style="font-weight:600;margin-bottom:.2rem;font-size:.9rem">Phone</div><div class="body-sm">${s.phone}</div></div></div>
    <div class="ci-item"><div class="ci-icon"><i class="fa-brands fa-whatsapp"></i></div><div><div style="font-weight:600;margin-bottom:.2rem;font-size:.9rem">WhatsApp</div><a href="https://wa.me/${s.wa}" target="_blank" class="body-sm" style="color:var(--gold)">${s.phone}  Chat Now</a></div></div>
    <div class="ci-item"><div class="ci-icon"><i class="fa-solid fa-clock"></i></div><div><div style="font-weight:600;margin-bottom:.2rem;font-size:.9rem">Hours</div><div class="body-sm">Mon–Sat: ${s.wkd}<br>Sunday: ${s.wkn}</div></div></div>
    <div class="ci-item"><div class="ci-icon"><i class="fa-solid fa-envelope"></i></div><div><div style="font-weight:600;margin-bottom:.2rem;font-size:.9rem">Email</div><div class="body-sm">${s.email}</div></div></div>`;
  const ftInfo=document.getElementById('ft-info');
  if(ftInfo) ftInfo.innerHTML=`<li><a>${s.addr}</a></li><li><a>Mon–Sat: ${s.wkd}</a></li><li><a>Sunday: ${s.wkn}</a></li><li><a href="tel:${s.phone.replace(/\s/g,'')}">${s.phone}</a></li>`;
  const waLink=document.getElementById('ft-wa-link');
  if(waLink) waLink.href='https://wa.me/'+s.wa;
  const waBtn=document.getElementById('wa-btn');
  if(waBtn) waBtn.href='https://wa.me/'+s.wa;
  const tagEl=document.getElementById('ft-tagline');
  if(tagEl) tagEl.textContent=s.tagline+' grooming since 2015.';
}

function sendContact(e){e.preventDefault();notif('Message Sent!','We\'ll get back to you within a few hours.');e.target.reset();}

function doLogin(e){
  e.preventDefault();
  const u=document.getElementById('lu').value;
  const p=document.getElementById('lp').value;
  if(u==='admin'&&p===D.pw){
    loggedIn=true;
    document.getElementById('adm-login').style.display='none';
    loadSettingsForm();
    renderDashboard();
  } else notif('Login Failed','Incorrect username or password.');
}

function admSec(name,el){
  document.querySelectorAll('.adm-sec').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.anav-item').forEach(n=>n.classList.remove('on'));
  const s=document.getElementById('as-'+name);
  if(s) s.classList.add('on');
  if(el) el.classList.add('on');
  if(name==='dashboard') renderDashboard();
  if(name==='appointments') renderAppts('all');
  if(name==='barbers') renderBarbersTbl();
  if(name==='services') renderSvcsTbl();
  if(name==='gallery') renderGalAdmin();
  if(name==='reviews') renderRevsTbl();
  if(name==='styles') renderStylesAdmin();
  if(name==='settings') loadSettingsForm();
}
function jumpToAppts(){
  const navItem=document.querySelector('.anav-item[data-sec="appointments"]');
  admSec('appointments',navItem);
}

function renderDashboard(){
  const today=D.appointments.filter(a=>a.date==='2025-06-10');
  const el=document.getElementById('dash-today');
  if(el) el.innerHTML=today.slice(0,6).map(a=>`
    <tr>
      <td>${a.time}</td>
      <td><strong>${a.client}</strong></td>
      <td>${a.service}</td>
      <td>${a.barber}</td>
      <td><span class="badge ${badgeCls(a.status)}">${a.status}</span></td>
      <td style="color:var(--gold);font-weight:600">₦${a.amount.toLocaleString()}</td>
    </tr>`).join('');
  const rb=document.getElementById('rev-bars');
  if(rb){
    const bd=[{n:'Kingsley',v:284000},{n:'David',v:213000},{n:'Ahmed',v:196000},{n:'Michael',v:149000}];
    const mx=bd[0].v;
    rb.innerHTML=bd.map(b=>`
      <div style="margin-bottom:1rem">
        <div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:.3rem"><span>${b.n}</span><span style="color:var(--gold)">₦${b.v.toLocaleString()}</span></div>
        <div style="height:5px;background:var(--surf3);border-radius:3px"><div style="height:100%;width:${Math.round(b.v/mx*100)}%;background:var(--gold);border-radius:3px"></div></div>
      </div>`).join('');
  }
  const sp=document.getElementById('svc-pop');
  if(sp){
    const top=[...D.services].sort((a,b)=>b.bookings-a.bookings).slice(0,5);
    const mx=top[0]?top[0].bookings:1;
    sp.innerHTML=top.map(s=>`
      <div style="margin-bottom:.85rem">
        <div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:.3rem"><span><i class="${s.icon}" style="color:var(--gold);margin-right:.3rem"></i>${s.name}</span><span style="color:var(--tx2)">${s.bookings}</span></div>
        <div style="height:5px;background:var(--surf3);border-radius:3px"><div style="height:100%;width:${Math.round(s.bookings/mx*100)}%;background:var(--gold-d);border-radius:3px"></div></div>
      </div>`).join('');
  }
}

function badgeCls(s){return{confirmed:'b-blue',completed:'b-green',cancelled:'b-red',pending:'b-gold'}[s]||'b-gold';}

function renderAppts(filter){
  const data=filter==='all'?D.appointments:D.appointments.filter(a=>a.status===filter);
  document.getElementById('all-appts').innerHTML=data.length?data.map(a=>`
    <tr>
      <td>${a.date}<br><span style="font-size:.72rem;color:var(--tx2)">${a.time}</span></td>
      <td><strong>${a.client}</strong></td>
      <td style="font-size:.78rem">${a.phone}</td>
      <td>${a.service}</td>
      <td>${a.barber}</td>
      <td><span class="badge ${badgeCls(a.status)}">${a.status}</span></td>
      <td style="color:var(--gold);font-weight:600">₦${a.amount.toLocaleString()}</td>
      <td>
        <div style="display:flex;gap:.3rem">
          <button class="btn-edit" onclick="completeAppt(${a.id})" title="Mark Complete"><i class="fa-solid fa-check"></i></button>
          <button class="btn-del" onclick="cancelAppt(${a.id})" title="Cancel"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </td>
    </tr>`).join(''):'<tr><td colspan="8" style="text-align:center;color:var(--tx2)">No appointments found.</td></tr>';
}
function filterAppts(f){renderAppts(f);}
function completeAppt(id){const a=D.appointments.find(x=>x.id===id);if(a){a.status='completed';renderAppts('all');renderDashboard();notif('Updated','Appointment marked as completed.');}}
function cancelAppt(id){const a=D.appointments.find(x=>x.id===id);if(a){a.status='cancelled';renderAppts('all');renderDashboard();notif('Cancelled','Appointment has been cancelled.');}}

function renderBarbersTbl(){
  document.getElementById('barbers-tbl').innerHTML=D.barbers.map(b=>`
    <tr>
      <td><img src="${b.photo}" alt="${b.name}" style="width:38px;height:38px;border-radius:50%;object-fit:cover;border:1px solid var(--bdr)" onerror="this.src='${FALLBACK_IMG}'"></td>
      <td><strong>${b.name}</strong><br><span style="font-size:.72rem;color:var(--tx2)">${b.skills}</span></td>
      <td>${b.spec}<br><span style="font-size:.72rem;color:var(--tx2)">${b.exp} yrs exp</span></td>
      <td style="color:var(--gold)"><i class="fa-solid fa-star" style="font-size:.75rem"></i> ${b.rating}</td>
      <td>${b.bookings}</td>
      <td><span class="badge ${b.status==='active'?'b-green':'b-red'}">${b.status}</span></td>
      <td><div style="display:flex;gap:.3rem">
        <button class="btn-edit" onclick="openBarberModal(${b.id})" title="Edit"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-del" onclick="delBarber(${b.id})" title="Remove"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
}
function openBarberModal(id){
  document.getElementById('bm-title').textContent=id?'Edit Barber':'Add Barber';
  document.getElementById('bm-id').value=id||'';
  const b=id?D.barbers.find(x=>x.id===id):null;
  document.getElementById('bm-name').value=b?b.name:'';
  document.getElementById('bm-spec').value=b?b.spec:'';
  document.getElementById('bm-exp').value=b?b.exp:'';
  document.getElementById('bm-rat').value=b?b.rating:'5.0';
  document.getElementById('bm-skills').value=b?b.skills:'';
  document.getElementById('bm-photo').value=b?b.photo:'';
  document.getElementById('bm-status').value=b?b.status:'active';
  openModal('barber-modal');
}
function saveBarber(){
  const id=parseInt(document.getElementById('bm-id').value)||null;
  const nm=document.getElementById('bm-name').value.trim();
  if(!nm){notif('Missing Name','Please enter the barber\'s name.');return;}
  const data={name:nm,spec:document.getElementById('bm-spec').value||'Barber',exp:document.getElementById('bm-exp').value||'1',rating:document.getElementById('bm-rat').value||'5.0',skills:document.getElementById('bm-skills').value||'General',photo:document.getElementById('bm-photo').value||FALLBACK_IMG,status:document.getElementById('bm-status').value,bookings:0};
  if(id){const i=D.barbers.findIndex(b=>b.id===id);if(i>-1){data.bookings=D.barbers[i].bookings;D.barbers[i]={id,...data};}}
  else D.barbers.push({id:nextId.barber++,...data});
  closeModal('barber-modal');
  renderBarbersTbl();
  renderHomeBarbers();
  renderHeroAvail();
  notif(id?'Barber Updated':'Barber Added','Changes saved and reflected on site.');
}
function delBarber(id){if(!confirm('Remove this barber?'))return;D.barbers=D.barbers.filter(b=>b.id!==id);renderBarbersTbl();renderHomeBarbers();notif('Removed','Barber removed from team.');}

function renderSvcsTbl(){
  document.getElementById('svcs-tbl').innerHTML=D.services.map(s=>`
    <tr>
      <td><i class="${s.icon}" style="font-size:1.1rem;color:var(--gold)"></i></td>
      <td><strong>${s.name}</strong><br><span style="font-size:.72rem;color:var(--tx2)">${(s.desc||'').substring(0,50)}${s.desc&&s.desc.length>50?'...':''}</span></td>
      <td>${s.dur} min</td>
      <td style="color:var(--gold);font-weight:600">₦${s.price.toLocaleString()}</td>
      <td>${s.bookings}</td>
      <td><span class="badge ${s.status==='active'?'b-green':'b-red'}">${s.status}</span></td>
      <td><div style="display:flex;gap:.3rem">
        <button class="btn-edit" onclick="openSvcModal(${s.id})" title="Edit"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-del" onclick="delSvc(${s.id})" title="Remove"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
}
function openSvcModal(id){
  document.getElementById('sm-title').textContent=id?'Edit Service':'Add Service';
  document.getElementById('sm-id').value=id||'';
  const s=id?D.services.find(x=>x.id===id):null;
  document.getElementById('sm-name').value=s?s.name:'';
  document.getElementById('sm-icon').value=s?s.icon:'fa-solid fa-scissors';
  document.getElementById('sm-price').value=s?s.price:'';
  document.getElementById('sm-dur').value=s?s.dur:'';
  document.getElementById('sm-desc').value=s?s.desc:'';
  document.getElementById('sm-barbers').value=s?s.barbers:'All barbers';
  document.getElementById('sm-status').value=s?s.status:'active';
  openModal('svc-modal');
}
function saveSvc(){
  const id=parseInt(document.getElementById('sm-id').value)||null;
  const nm=document.getElementById('sm-name').value.trim();
  const pr=parseInt(document.getElementById('sm-price').value);
  if(!nm||!pr){notif('Missing Fields','Please fill in name and price.');return;}
  const data={name:nm,icon:document.getElementById('sm-icon').value||'fa-solid fa-scissors',price:pr,dur:parseInt(document.getElementById('sm-dur').value)||30,desc:document.getElementById('sm-desc').value,barbers:document.getElementById('sm-barbers').value||'All barbers',status:document.getElementById('sm-status').value,bookings:0};
  if(id){const i=D.services.findIndex(s=>s.id===id);if(i>-1){data.bookings=D.services[i].bookings;D.services[i]={id,...data};}}
  else D.services.push({id:nextId.svc++,...data});
  closeModal('svc-modal');
  renderSvcsTbl();
  renderHomeSvcs();
  populateBookingSelects();
  notif(id?'Service Updated':'Service Added','Changes reflected across the site.');
}
function delSvc(id){if(!confirm('Delete this service?'))return;D.services=D.services.filter(s=>s.id!==id);renderSvcsTbl();renderHomeSvcs();notif('Deleted','Service removed.');}

function renderGalAdmin(){
  const el=document.getElementById('gal-admin-grid');
  if(!el) return;
  el.innerHTML=D.gallery.map(g=>`
    <div style="border:1px solid var(--bdr);border-radius:var(--rl);overflow:hidden;background:var(--surf)">
      <div style="aspect-ratio:1;overflow:hidden;cursor:pointer" onclick="openLbx('${g.url}')">
        <img src="${g.url}" alt="${g.cap}" style="width:100%;height:100%;object-fit:cover" onerror="this.src='${FALLBACK_IMG}'">
      </div>
      <div style="padding:.75rem">
        <div style="font-weight:600;font-size:.82rem;margin-bottom:.15rem">${g.cap}</div>
        <div style="margin-bottom:.6rem"><span class="badge b-gold">${g.cat}</span></div>
        <div style="display:flex;gap:.4rem">
          <button class="btn-edit" style="flex:1" onclick="openGalModal(${g.id})"><i class="fa-solid fa-pen"></i> Edit</button>
          <button class="btn-del" onclick="delGal(${g.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>`).join('');
}
function openGalModal(id){
  document.getElementById('gm-title').textContent=id?'Edit Image':'Add Gallery Image';
  document.getElementById('gm-id').value=id||'';
  const g=id?D.gallery.find(x=>x.id===id):null;
  document.getElementById('gm-url').value=g?g.url:'';
  document.getElementById('gm-cap').value=g?g.cap:'';
  document.getElementById('gm-cat').value=g?g.cat:'Fade';
  if(g){document.getElementById('gm-prev-img').src=g.url;document.getElementById('gm-preview').style.display='block';}
  else document.getElementById('gm-preview').style.display='none';
  openModal('gal-modal');
}
function previewGalImg(){
  const url=document.getElementById('gm-url').value;
  if(url){document.getElementById('gm-prev-img').src=url;document.getElementById('gm-preview').style.display='block';}
  else document.getElementById('gm-preview').style.display='none';
}
function saveGal(){
  const id=parseInt(document.getElementById('gm-id').value)||null;
  const url=document.getElementById('gm-url').value.trim();
  if(!url){notif('Missing URL','Please enter an image URL.');return;}
  const data={url,cap:document.getElementById('gm-cap').value||'Hairstyle',cat:document.getElementById('gm-cat').value};
  if(id){const i=D.gallery.findIndex(g=>g.id===id);if(i>-1)D.gallery[i]={id,...data};}
  else D.gallery.push({id:nextId.gal++,...data});
  closeModal('gal-modal');
  renderGalAdmin();
  notif(id?'Image Updated':'Image Added','Gallery updated.');
}
function delGal(id){if(!confirm('Remove this image?'))return;D.gallery=D.gallery.filter(g=>g.id!==id);renderGalAdmin();notif('Removed','Image removed from gallery.');}

function renderRevsTbl(){
  document.getElementById('revs-tbl').innerHTML=D.reviews.map(r=>`
    <tr>
      <td><strong>${r.client}</strong><br><span style="font-size:.7rem;color:var(--tx2)">${r.label||''}</span></td>
      <td style="max-width:200px;font-size:.78rem;color:var(--tx2)">"${r.text.substring(0,65)}${r.text.length>65?'...':''}"</td>
      <td style="color:var(--gold)">${'★'.repeat(r.rating)}</td>
      <td style="font-size:.78rem">${r.date}</td>
      <td><span class="badge ${r.status==='published'?'b-green':'b-gold'}">${r.status}</span></td>
      <td><div style="display:flex;gap:.3rem">
        <button class="btn-edit" onclick="openRevModal(${r.id})" title="Edit"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-ghost" onclick="toggleRev(${r.id})" title="Toggle">${r.status==='published'?'Unpublish':'Publish'}</button>
        <button class="btn-del" onclick="delRev(${r.id})" title="Delete"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
}
function openRevModal(id){
  document.getElementById('rm-title').textContent=id?'Edit Review':'Add Review';
  document.getElementById('rm-id').value=id||'';
  const r=id?D.reviews.find(x=>x.id===id):null;
  document.getElementById('rm-name').value=r?r.client:'';
  document.getElementById('rm-rat').value=r?r.rating:'5';
  document.getElementById('rm-text').value=r?r.text:'';
  document.getElementById('rm-date').value=r?r.date:new Date().toISOString().split('T')[0];
  document.getElementById('rm-lbl').value=r?r.label||'':'';
  document.getElementById('rm-status').value=r?r.status:'published';
  openModal('rev-modal');
}
function saveRev(){
  const id=parseInt(document.getElementById('rm-id').value)||null;
  const nm=document.getElementById('rm-name').value.trim();
  const tx=document.getElementById('rm-text').value.trim();
  if(!nm||!tx){notif('Missing Fields','Please fill in name and review text.');return;}
  const data={client:nm,rating:parseInt(document.getElementById('rm-rat').value)||5,text:tx,date:document.getElementById('rm-date').value||new Date().toISOString().split('T')[0],label:document.getElementById('rm-lbl').value,status:document.getElementById('rm-status').value};
  if(id){const i=D.reviews.findIndex(r=>r.id===id);if(i>-1)D.reviews[i]={id,...data};}
  else D.reviews.push({id:nextId.rev++,...data});
  closeModal('rev-modal');
  renderRevsTbl();
  renderHomeReviews();
  notif(id?'Review Updated':'Review Added','Review saved.');
}
function toggleRev(id){const r=D.reviews.find(x=>x.id===id);if(r){r.status=r.status==='published'?'pending':'published';renderRevsTbl();renderHomeReviews();}}
function delRev(id){if(!confirm('Delete this review?'))return;D.reviews=D.reviews.filter(r=>r.id!==id);renderRevsTbl();renderHomeReviews();notif('Deleted','Review removed.');}

function renderStylesAdmin(){
  const el=document.getElementById('styles-admin-grid');
  if(!el) return;
  el.innerHTML=D.styles.map(s=>`
    <div style="border:1px solid var(--bdr);border-radius:var(--rl);overflow:hidden;background:var(--surf)">
      <div style="aspect-ratio:1;overflow:hidden">
        <img src="${s.img}" alt="${s.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.src='${FALLBACK_IMG}'">
      </div>
      <div style="padding:.85rem">
        <div style="font-weight:600;margin-bottom:.2rem;font-size:.9rem">${s.name}</div>
        <div style="color:var(--gold);font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:700;margin-bottom:.35rem">₦${s.price.toLocaleString()}</div>
        <div class="body-sm" style="font-size:.75rem;margin-bottom:.6rem">${s.desc}</div>
        <div style="display:flex;gap:.3rem;margin-bottom:.5rem"><span class="badge b-gold">${s.cat}</span><span class="badge b-blue">${s.dur} min</span></div>
        <div style="display:flex;gap:.4rem">
          <button class="btn-edit" style="flex:1" onclick="openStyleModal(${s.id})"><i class="fa-solid fa-pen"></i> Edit</button>
          <button class="btn-del" onclick="delStyle(${s.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>`).join('');
}
function previewStyleImg(){
  const url=document.getElementById('stm-img').value;
  if(url){document.getElementById('stm-prev-img').src=url;document.getElementById('stm-preview').style.display='block';}
  else document.getElementById('stm-preview').style.display='none';
}
function openStyleModal(id){
  document.getElementById('stm-title').textContent=id?'Edit Hairstyle':'Add Hairstyle';
  document.getElementById('stm-id').value=id||'';
  const s=id?D.styles.find(x=>x.id===id):null;
  document.getElementById('stm-name').value=s?s.name:'';
  document.getElementById('stm-price').value=s?s.price:'';
  document.getElementById('stm-img').value=s?s.img:'';
  document.getElementById('stm-desc').value=s?s.desc:'';
  document.getElementById('stm-dur').value=s?s.dur:'';
  document.getElementById('stm-cat').value=s?s.cat:'Fade';
  if(s){document.getElementById('stm-prev-img').src=s.img;document.getElementById('stm-preview').style.display='block';}
  else document.getElementById('stm-preview').style.display='none';
  openModal('style-modal');
}
function saveStyle(){
  const id=parseInt(document.getElementById('stm-id').value)||null;
  const nm=document.getElementById('stm-name').value.trim();
  if(!nm){notif('Missing Name','Please enter a style name.');return;}
  const data={name:nm,price:parseInt(document.getElementById('stm-price').value)||0,img:document.getElementById('stm-img').value||FALLBACK_IMG,desc:document.getElementById('stm-desc').value,dur:parseInt(document.getElementById('stm-dur').value)||30,cat:document.getElementById('stm-cat').value};
  if(id){const i=D.styles.findIndex(s=>s.id===id);if(i>-1)D.styles[i]={id,...data};}
  else D.styles.push({id:nextId.style++,...data});
  closeModal('style-modal');
  renderStylesAdmin();
  notif(id?'Style Updated':'Style Added','Hairstyle catalog updated.');
}
function delStyle(id){if(!confirm('Delete this style?'))return;D.styles=D.styles.filter(s=>s.id!==id);renderStylesAdmin();notif('Deleted','Style removed.');}

function loadSettingsForm(){
  const s=D.settings;
  document.getElementById('set-name').value=s.name;
  document.getElementById('set-tag').value=s.tagline;
  document.getElementById('set-phone').value=s.phone;
  document.getElementById('set-wa').value=s.wa;
  document.getElementById('set-addr').value=s.addr;
  document.getElementById('set-email').value=s.email;
  document.getElementById('set-ig').value=s.ig;
  document.getElementById('set-wkd').value=s.wkd;
  document.getElementById('set-wkn').value=s.wkn;
}
function saveSettings(){
  D.settings.name=document.getElementById('set-name').value||D.settings.name;
  D.settings.tagline=document.getElementById('set-tag').value||D.settings.tagline;
  D.settings.phone=document.getElementById('set-phone').value||D.settings.phone;
  D.settings.wa=document.getElementById('set-wa').value.replace(/[^0-9]/g,'')||D.settings.wa;
  D.settings.addr=document.getElementById('set-addr').value||D.settings.addr;
  D.settings.email=document.getElementById('set-email').value||D.settings.email;
  D.settings.ig=document.getElementById('set-ig').value||D.settings.ig;
  D.settings.wkd=document.getElementById('set-wkd').value||D.settings.wkd;
  D.settings.wkn=document.getElementById('set-wkn').value||D.settings.wkn;
  renderContactInfo();
  notif('Settings Saved','Business info updated across the site.');
}
function changePw(){
  const p1=document.getElementById('set-pw').value;
  const p2=document.getElementById('set-pw2').value;
  if(!p1){notif('Empty Password','Please enter a new password.');return;}
  if(p1!==p2){notif('Mismatch','Passwords do not match.');return;}
  D.pw=p1;
  document.getElementById('set-pw').value='';
  document.getElementById('set-pw2').value='';
  notif('Password Changed','Admin password updated successfully.');
}
function exportReport(){notif('Export Ready','Report generated (demo connect a backend to download real CSV).');}

document.addEventListener('DOMContentLoaded',()=>{
  renderMarquee();
  renderHeroAvail();
  renderHomeSvcs();
  renderHomeBarbers();
  renderHomeReviews();
  renderHomeGal();
  populateBookingSelects();
  renderContactInfo();
  initFade();
  document.getElementById('site-ft').style.display='block';
  document.getElementById('wa-btn').style.display='flex';
});
