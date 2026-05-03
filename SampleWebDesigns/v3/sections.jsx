// ====================================================================
// HORIZONTAL BAND — the portal between every split
// ====================================================================
const Band = ({ onJoin, cta = 'Start your reset', compact = false, ticker = null }) => (
  <div className={`band${compact ? ' compact' : ''}`}>
    {ticker && (
      <div className="band-ticker">
        <div className="inner">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {ticker.map((t, j) => <span key={`${i}-${j}`}>{t}</span>)}
            </React.Fragment>
          ))}
        </div>
      </div>
    )}
    <div className="band-word">bounce<span className="dot">.</span></div>
    <button className="band-cta" onClick={onJoin}>{cta} →</button>
  </div>
);

// ====================================================================
// HERO — the defining horizontal split (matches reference image)
// ====================================================================
const Hero = ({ onJoin, headline }) => {
  // faint object silhouettes scattered in the dark top
  const blobs = [
    { x: '8%', y: '18%', w: 110, h: 90, r: -3, dx: '6px', dy: '-8px' },
    { x: '22%', y: '36%', w: 70, h: 70, r: 8, dx: '-4px', dy: '6px' },
    { x: '14%', y: '62%', w: 140, h: 100, r: -6, dx: '8px', dy: '-4px' },
    { x: '60%', y: '24%', w: 80, h: 110, r: 4, dx: '-6px', dy: '-4px' },
    { x: '74%', y: '54%', w: 100, h: 80, r: -8, dx: '5px', dy: '5px' },
    { x: '82%', y: '18%', w: 60, h: 60, r: 12, dx: '-4px', dy: '-6px' },
    { x: '38%', y: '70%', w: 90, h: 60, r: -4, dx: '4px', dy: '4px' },
    { x: '48%', y: '14%', w: 70, h: 70, r: 6, dx: '-3px', dy: '-6px' },
  ];
  const labels = [
    { x: '10%', y: '28%', n: 'MacBook Pro', v: '$840' },
    { x: '68%', y: '38%', n: 'Canon EOS', v: '$420' },
    { x: '18%', y: '76%', n: 'KitchenAid', v: '$210' },
    { x: '74%', y: '72%', n: 'Sony headphones', v: '$185' },
  ];

  return (
    <>
      <section className="hsplit hero">
        <div className="top">
          <div className="hero-clutter" aria-hidden="true">
            {blobs.map((b, i) => (
              <div key={i} className="blob" style={{
                left: b.x, top: b.y, width: b.w, height: b.h,
                '--r': `${b.r}deg`, '--dx': b.dx, '--dy': b.dy,
                transform: `rotate(${b.r}deg)`,
                animationDelay: `${i * 0.8}s`,
              }}/>
            ))}
            {labels.map((l, i) => (
              <div key={`l${i}`} className="lbl" style={{ left: l.x, top: l.y, animationDelay: `${i * 0.3}s` }}>
                {l.n}<span className="v">{l.v}</span>
              </div>
            ))}
          </div>
          <div className="eyebrow">Where you are</div>
          <h1 className="disp">Your home.<br/>Full of <em>stuff.</em></h1>
          <div className="hero-stat">$4,267 in things you don't use</div>
        </div>
      </section>

      <div style={{ position: 'relative' }}>
        <Band onJoin={onJoin} cta="Start your reset" ticker={[
          'No subscription','No credit card','No account needed','Pickup at your door','Cash in 24 hours',
          'No subscription','No credit card','No account needed','Pickup at your door','Cash in 24 hours',
        ]}/>
        <div className="mascot-band"><MascotV2 size={72}/></div>
      </div>

      <section className="hsplit hero">
        <div className="bottom">
          <div className="hero-open" aria-hidden="true"/>
          <div className="eyebrow">Where you could be</div>
          <h1 className="disp">Your home.<br/>Full of <em>space.</em></h1>
          <div className="hero-stat">$3,420 in your bank account</div>
          <div className="hero-cta-row">
            <button className="btn-primary" onClick={onJoin}>Join the waitlist</button>
            <a className="btn-ghost" href="#how">See how it works</a>
          </div>
        </div>
      </section>
    </>
  );
};

// ====================================================================
// BIG NUMBERS split
// ====================================================================
const Numbers = ({ onJoin }) => (
  <>
    <section className="hsplit numbers">
      <div className="top">
        <div className="eyebrow">You, today</div>
        <div className="big-num"><span className="dollar">$</span>4,267</div>
        <div className="num-caption">sitting in the average American home · unused</div>
      </div>
    </section>
    <Band onJoin={onJoin} cta="Turn it into cash" compact/>
    <section className="hsplit numbers">
      <div className="bottom">
        <div className="eyebrow">You, with Bounce</div>
        <div className="big-num"><span className="dollar">$</span>3,420</div>
        <div className="num-caption">wired · average first-year Bouncer payout</div>
      </div>
    </section>
  </>
);

// ====================================================================
// HOW IT WORKS — 3 stacked splits, each with its own band
// ====================================================================
const HowItWorks = ({ onJoin }) => {
  const steps = [
    {
      n: '01',
      before: { label: 'The old way', h: 'Photos. <em>Listings.</em> Messages. Ghosts.', s: 'You spend a weekend writing copy for a $60 sweater. You field twelve lowball offers. The buyer ghosts. The sweater sits.' , ph: 'LISTING FLOW · BEFORE' },
      after: { label: 'The Bounce way', h: '<em>Snap</em> a photo. That\'s it.', s: 'Point your camera. We identify the item, pull live comps across eBay, Poshmark, and Mercari, and give you a number in under a minute.', ph: 'SNAP PHOTO · AFTER' },
    },
    {
      n: '02',
      before: { label: 'The old way', h: 'Boxes. Tape. Trips to the <em>post office.</em>', s: 'You dig for a box. You run out of tape. The printer is out of ink. You wait in line on a Tuesday.', ph: 'BOX / TAPE / LABEL' },
      after: { label: 'The Bounce way', h: 'Courier <em>at your door.</em>', s: 'Pick a two-hour window. Hand it over. No box, no tape, no printer. We photograph, grade, price, list, and ship.', ph: 'PICKUP · TOMORROW 2PM' },
    },
    {
      n: '03',
      before: { label: 'The old way', h: 'Chase. Wait. <em>Wonder.</em>', s: 'Was it shipped? Did they receive it? Will the dispute stick? Why does PayPal hold my money for 21 days?', ph: 'PAYMENT STATUS · PENDING' },
      after: { label: 'The Bounce way', h: 'Cash in your bank. <em>24 hours.</em>', s: 'Buyer confirms. You get paid. That\'s the whole relationship. No fees up front, no subscription, no credit card on file.', ph: 'PAYOUT · SENT' },
    },
  ];
  return (
    <div id="how">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <section className="hsplit hiw">
            <div className="top">
              <div className="hiw-step">Step {step.n} · {step.before.label}</div>
              <div className="hiw-h" dangerouslySetInnerHTML={{ __html: step.before.h }}/>
              <div className="hiw-sub">{step.before.s}</div>
              <div className="photo-ph"><span className="lbl">{step.before.ph}</span></div>
            </div>
          </section>
          <Band onJoin={onJoin} cta={`Step ${step.n}`} compact/>
          <section className="hsplit hiw">
            <div className="bottom">
              <div className="hiw-step">Step {step.n} · {step.after.label}</div>
              <div className="hiw-h" dangerouslySetInnerHTML={{ __html: step.after.h }}/>
              <div className="hiw-sub">{step.after.s}</div>
              <div className="photo-ph"><span className="lbl">{step.after.ph}</span></div>
            </div>
          </section>
          {i < steps.length - 1 && <Band onJoin={onJoin} cta="Next step" compact/>}
        </React.Fragment>
      ))}
    </div>
  );
};

// ====================================================================
// ESTIMATOR — top item / band / bottom result
// ====================================================================
const ItemsData = {
  'MacBook Pro (2021)': { low: 820, high: 950, lbl: 'LAPTOP · SILVER · 13"' },
  'iPhone 14 Pro': { low: 430, high: 520, lbl: 'PHONE · DEEP PURPLE · 256GB' },
  'Lululemon Align': { low: 35, high: 55, lbl: 'LEGGINGS · SIZE 4' },
  'Peloton Bike': { low: 450, high: 700, lbl: 'BIKE · ORIGINAL · GEN 1' },
  'Nintendo Switch': { low: 140, high: 195, lbl: 'CONSOLE · V2 · JOYCONS' },
  'KitchenAid Mixer': { low: 180, high: 250, lbl: 'MIXER · CERISE · 5QT' },
};

const Estimator = ({ onJoin }) => {
  const keys = Object.keys(ItemsData);
  const [sel, setSel] = React.useState(keys[0]);
  const d = ItemsData[sel];
  const takeHome = Math.round(d.low * 0.82);
  return (
    <>
      <section className="hsplit est">
        <div className="top">
          <div className="est-grid">
            <div className="est-photo"><span className="lbl">{d.lbl}</span></div>
            <div style={{ textAlign: 'left' }}>
              <div className="eyebrow" style={{ margin: 0, marginBottom: 16 }}>What you have</div>
              <div className="est-item-name">{sel}</div>
              <div className="est-item-meta">Try another →</div>
              <div className="est-chips">
                {keys.map(k => (
                  <button key={k} className={`est-chip ${k === sel ? 'active' : ''}`} onClick={() => setSel(k)}>{k}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Band onJoin={onJoin} cta="What's yours worth?" compact/>
      <section className="hsplit est">
        <div className="bottom">
          <div className="est-grid">
            <div style={{ textAlign: 'left' }}>
              <div className="eyebrow" style={{ margin: 0, marginBottom: 16 }}>What you get</div>
              <div className="est-result-label">Resale estimate · last 30 days</div>
              <div className="est-range">
                <span className="d">$</span>{d.low}<span className="dash">–</span>{d.high}
              </div>
              <div className="est-bd">
                <div className="row"><span>Sale range</span><span className="v">${d.low}–${d.high}</span></div>
                <div className="row"><span>Bounce fee · 18%</span><span className="v">-${d.low - takeHome}</span></div>
                <div className="row final"><span>Wired to you</span><span className="v">${takeHome}</span></div>
              </div>
            </div>
            <div>
              <div className="photo-ph" style={{ maxWidth: '100%', aspectRatio: '1/1', color: 'var(--after-ink)' }}>
                <span className="lbl">PAYOUT RECEIPT · {sel.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ====================================================================
// CAROUSEL — stuff people bounced (horizontal strip)
// ====================================================================
const Carousel = () => {
  const items = [
    { n: 'Nike Air Max 90', meta: 'Worn twice · size 9', v: '$60' },
    { n: 'Sony WH-1000XM5', meta: 'Upgraded · like new', v: '$265' },
    { n: 'Patagonia Better Sweater', meta: 'Tags on · M', v: '$85' },
    { n: 'iPad Air (4th gen)', meta: '256GB · sky blue', v: '$320' },
    { n: 'Lululemon Align Pant', meta: 'Worn once · size 4', v: '$45' },
    { n: 'Vitamix Blender', meta: 'E310 · black', v: '$220' },
    { n: 'AirPods Pro 2', meta: 'In box · unopened gift', v: '$185' },
    { n: 'Nintendo Switch OLED', meta: 'White · joycons', v: '$275' },
    { n: 'Herman Miller Aeron', meta: 'Size B · graphite', v: '$640' },
    { n: 'Canon EF 50mm f/1.8', meta: 'Mint · with box', v: '$95' },
  ];
  return (
    <section className="carousel-wrap">
      <div className="carousel-head">
        <div className="eyebrow">What Bouncers bounced this week</div>
        <h2 className="disp">Stuff other people <em>let go of.</em></h2>
      </div>
      <div className="carousel-track">
        {items.map((it, i) => (
          <div className="carousel-card" key={i}>
            <div className="ph"><span>{it.n.toUpperCase()}</span></div>
            <div className="body">
              <div className="name">{it.n}</div>
              <div className="meta">{it.meta}</div>
              <div className="price">
                <span className="v">{it.v}</span>
                <span className="t">Bounced</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ====================================================================
// TESTIMONIALS — horizontal split, each voice has before + after
// ====================================================================
const Testimonials = ({ onJoin }) => {
  const ts = [
    {
      beforeQ: '"I had <em>three closets</em> of stuff I kept meaning to list. Never did."',
      afterQ: '"Bounce cleared it in a <em>weekend.</em> I got $2,140."',
      who: 'Maya R.', meta: 'Brooklyn · 11 items · first bounce',
    },
    {
      beforeQ: '"My garage had been a <em>graveyard</em> for ten years."',
      afterQ: '"$3,680 — for stuff I was about to <em>throw away.</em>"',
      who: 'Drew K.', meta: 'Austin · 27 items · second bounce',
    },
    {
      beforeQ: '"I was about to <em>donate</em> my old laptop."',
      afterQ: '"It paid for <em>half</em> my new MacBook."',
      who: 'Priya S.', meta: 'Seattle · 1 item · first bounce',
    },
  ];
  const [i, setI] = React.useState(0);
  const t = ts[i];
  return (
    <>
      <section className="hsplit t-hsplit">
        <div className="top">
          <div className="eyebrow">They said</div>
          <blockquote className="t-quote" dangerouslySetInnerHTML={{ __html: t.beforeQ }}/>
          <div className="t-byline">
            <div className="av">{t.who[0]}</div>
            <div>
              <div className="t-who">{t.who}</div>
              <div className="t-meta">{t.meta}</div>
            </div>
          </div>
        </div>
      </section>
      <Band onJoin={onJoin} cta="Get your offer" compact/>
      <section className="hsplit t-hsplit">
        <div className="bottom">
          <div className="eyebrow">Then</div>
          <blockquote className="t-quote" dangerouslySetInnerHTML={{ __html: t.afterQ }}/>
          <div className="t-byline">
            <div className="av">{t.who[0]}</div>
            <div>
              <div className="t-who">{t.who}</div>
              <div className="t-meta">{t.meta}</div>
            </div>
          </div>
          <div className="t-dots" style={{ color: 'var(--after-accent)' }}>
            {ts.map((_, n) => (
              <button key={n} className={n === i ? 'active' : ''} onClick={() => setI(n)} aria-label={`Testimonial ${n+1}`}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ====================================================================
// FAQ — centered, cream background, single-column accordion
// ====================================================================
const FAQ = () => {
  const faqs = [
    { q: 'How does <em>pickup</em> work?', a: 'Pick a 2-hour window. A Bounce courier comes to your door — <em>no boxes, no tape, no printer.</em> Hand it over, we take it from there.' },
    { q: 'What does it <em>cost?</em>', a: 'Nothing up front. Flat <em>18%</em> of sale price. No subscription. No credit card on file. We only earn when you earn.' },
    { q: 'What if I don\'t <em>like</em> the offer?', a: 'You see the estimate before pickup, and the exact offer before shipping. <em>Reject anything</em> — no charge, no hassle, we hand it back.' },
    { q: 'How fast do I get <em>paid?</em>', a: 'Most items sell in <em>3–7 days.</em> Payout hits your bank 24 hours after the buyer confirms.' },
    { q: 'What can I actually <em>sell?</em>', a: 'Electronics, clothing, collectibles, furniture, kitchen, sporting, books, tools. Anything <em>worth $25+</em> and not broken.' },
    { q: 'Where is Bounce <em>available?</em>', a: 'We\'re rolling out by ZIP code. <em>18 metros live</em>, expanding weekly. Join the waitlist — we\'ll email when we reach you.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq">
      <div className="faq-head">
        <div className="eyebrow" style={{ color: 'var(--ink-faint)' }}>The short answers</div>
        <h2 className="disp">You probably want to know <em>this.</em></h2>
      </div>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div className={`faq-item${open === i ? ' open' : ''}`} key={i} onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="faq-q-row">
              <div className="faq-q" dangerouslySetInnerHTML={{ __html: f.q }}/>
              <div className="faq-toggle">+</div>
            </div>
            <div className="faq-a" dangerouslySetInnerHTML={{ __html: f.a }}/>
          </div>
        ))}
      </div>
    </section>
  );
};

// ====================================================================
// FINALE — the clearing. Dark top collapses, cream takes over.
// ====================================================================
const Finale = ({ onJoin }) => {
  const [resolved, setResolved] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) setTimeout(() => setResolved(true), 800); });
    }, { threshold: 0.45 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <section className={`finale${resolved ? ' resolved' : ''}`}>
        <button className="finale-toggle" onClick={() => setResolved(r => !r)}>
          {resolved ? '← Show the before' : 'Let it go →'}
        </button>
        <div className="top">
          <div className="eyebrow">Before</div>
          <div className="disp" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>Full of <em>stuff</em> you don't want.</div>
        </div>
        {!resolved && <Band onJoin={onJoin} cta="Clear it" compact/>}
        <div className="bottom">
          <div className="finale-slogan">"Let go of the old. Make way for the new you."</div>
          <div className="finale-wordmark">bounce<span className="dot">.</span></div>
          <form className="finale-waitlist" onSubmit={e => { e.preventDefault(); onJoin(); }}>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Join waitlist</button>
          </form>
          <div style={{ marginTop: 18, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--ink-faint)', textTransform: 'uppercase' }}>
            No spam · No credit card · 2,100+ already in
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { Band, Hero, Numbers, HowItWorks, Estimator, Carousel, Testimonials, FAQ, Finale });
