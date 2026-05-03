// ====== HERO SPLIT ======
const HeroSplit = ({ onJoin }) => {
  const items = [
  { n: 'MacBook Pro (2021)', v: '$840', x: 0, y: 10, r: -4 },
  { n: 'Sony WH-1000XM4', v: '$185', x: 42, y: 4, r: 5 },
  { n: 'Patagonia fleece', v: '$75', x: 8, y: 36, r: -2 },
  { n: 'Air Jordan 1 Mid', v: '$95', x: 48, y: 42, r: 6 },
  { n: 'KitchenAid mixer', v: '$210', x: 2, y: 62, r: 3 },
  { n: 'Canon EOS lens', v: '$420', x: 46, y: 68, r: -5 }];


  return (
    <section className="hero-split split">
      <div className="before">
        <div className="hero-side-stack">
          <div className="side-label">Where you are</div>
          <h1 className="disp">Trapped in <em>$4,267</em> of stuff you'll never use again.</h1>
          <p className="lede">
            Every shelf. Every drawer. Every garage corner. You know what's in there. You know you'd rather have the space — and the money.
          </p>
          <div className="clutter-grid">
            {items.map((it, i) =>
            <div key={i} className="clutter-tag" style={{
              left: `${it.x}%`, top: `${it.y}%`,
              transform: `rotate(${it.r}deg)`,
              animation: `slideLeft 600ms ${i * 80}ms cubic-bezier(.2,.7,.3,1) backwards`
            }}>
                <div className="dot"></div>
                <div className="name">{it.n}</div>
                <div className="v">{it.v}</div>
              </div>
            )}
          </div>
          <style>{`
            @keyframes slideLeft {
              from { opacity: 0; transform: translateX(-20px) rotate(0); }
              to { opacity: 1; }
            }
          `}</style>
        </div>
      </div>

      <div className="after">
        <div className="hero-side-stack">
          <div className="side-label" style={{ justifyContent: "flex-end" }}>Where you want to be</div>
          <h1 className="disp">Clear space. <em>$3,420</em> in your account.</h1>
          <p className="lede">
            Snap photos of what you're done with. Bounce finds the buyer, does the pickup, ships it, and wires you the cash.
          </p>
          <div className="cash-stack">
            <div className="cash-row" style={{ animationDelay: '0ms' }}>
              <div className="l"><div className="tick">✓</div><div className="name">MacBook Pro</div></div>
              <div className="v">+$840</div>
            </div>
            <div className="cash-row" style={{ animationDelay: '120ms' }}>
              <div className="l"><div className="tick">✓</div><div className="name">Sony WH-1000XM4</div></div>
              <div className="v">+$185</div>
            </div>
            <div className="cash-row" style={{ animationDelay: '240ms' }}>
              <div className="l"><div className="tick">✓</div><div className="name">Patagonia fleece</div></div>
              <div className="v">+$75</div>
            </div>
            <div className="cash-row" style={{ animationDelay: '360ms', background: 'var(--before-bg)', color: 'var(--cream)', borderColor: 'var(--before-bg)' }}>
              <div className="l"><div className="tick">→</div><div className="name">Full payout</div></div>
              <div className="v" style={{ color: 'var(--cream)' }}>$3,420</div>
            </div>
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
            <button className="nav-cta" onClick={onJoin} style={{ background: 'var(--before-accent)' }}>Join the waitlist →</button>
          </div>
        </div>
      </div>

      <div className="mascot-seam"><MascotV2 size={70} /></div>
    </section>);

};

// ====== NUMBERS SPLIT ======
const NumbersSplit = () =>
<section className="split" style={{ minHeight: '70vh' }}>
    <div className="before">
      <div className="side-label">You, today</div>
      <div className="big-num">$4,267</div>
      <div className="num-caption">sitting in the average American home · unused</div>
      <p className="lede" style={{ marginTop: 40 }}>
        Electronics drawer. Closet. Garage. Basement. Stuff you spent money on, then forgot.
      </p>
    </div>
    <div className="after">
      <div className="side-label">You, with Bounce</div>
      <div className="big-num">$3,420</div>
      <div className="num-caption">wired · avg. first-year Bouncer payout</div>
      <p className="lede" style={{ marginTop: 40 }}>
        We take 18%. No subscription. No credit card. You only pay when we pay you.
      </p>
    </div>
    <div className="seam-marker">
      <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--cream)', border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22 }}>→</div>
    </div>
  </section>;


// ====== PROBLEM/PROMISE ROWS ======
const ProblemPromise = () => {
  const rows = [
  { n: '01', left: 'You know <em>which thing</em> to sell. You just… haven\'t.', right: 'You <em>snap a photo.</em> We take it from there.' },
  { n: '02', left: 'Listing it means photos, pricing, messages, <em>flakes.</em>', right: 'Zero listing. Zero messages. <em>Zero flakes.</em>' },
  { n: '03', left: 'Shipping means boxes, tape, trips to the <em>post office.</em>', right: 'Courier at your door. <em>No box required.</em>' },
  { n: '04', left: 'Getting paid means chasing, waiting, and <em>wondering.</em>', right: 'Cash in your account <em>24 hours after sale.</em>' }];

  return (
    <>
      {rows.map((r, i) =>
      <div className="row-split" key={i}>
          <div className="before">
            <div className="row-num">{r.n}</div>
            <div className="row-label">Without Bounce</div>
            <div className="row-text" dangerouslySetInnerHTML={{ __html: r.left }}></div>
          </div>
          <div className="after">
            <div className="row-num">{r.n}</div>
            <div className="row-label">With Bounce</div>
            <div className="row-text" dangerouslySetInnerHTML={{ __html: r.right }}></div>
          </div>
        </div>
      )}
    </>);

};

// ====== ESTIMATOR SPLIT ======
const ItemsData = {
  'MacBook Pro (2021)': { low: 820, high: 950, lbl: 'LAPTOP · SILVER · 13"' },
  'iPhone 14 Pro': { low: 430, high: 520, lbl: 'PHONE · DEEP PURPLE · 256GB' },
  'Lululemon Align': { low: 35, high: 55, lbl: 'LEGGINGS · SIZE 4' },
  'Peloton Bike': { low: 450, high: 700, lbl: 'BIKE · ORIGINAL · GEN 1' },
  'Nintendo Switch': { low: 140, high: 195, lbl: 'CONSOLE · V2 · JOYCONS' },
  'KitchenAid Mixer': { low: 180, high: 250, lbl: 'MIXER · CERISE · 5QT' }
};

const EstimatorSplit = () => {
  const keys = Object.keys(ItemsData);
  const [sel, setSel] = React.useState(keys[0]);
  const d = ItemsData[sel];
  const takeHome = Math.round(d.low * 0.82);
  return (
    <section className="split est-split">
      <div className="before">
        <div className="side-label">You have</div>
        <div className="disp" style={{ fontSize: 'clamp(40px, 4.5vw, 72px)' }}>{sel}</div>
        <div className="est-chips">
          {keys.map((k) =>
          <button key={k} className={`est-chip ${k === sel ? 'active' : ''}`} onClick={() => setSel(k)}>{k}</button>
          )}
        </div>
        <div className="est-photo">
          <div className="lbl">{d.lbl}</div>
        </div>
      </div>
      <div className="after">
        <div className="side-label">You get</div>
        <div className="est-result">
          <div className="est-value">
            <span className="dollar">$</span>
            <span>{d.low}</span>
            <span style={{ fontSize: 52, color: 'var(--after-ink-soft)' }}>–{d.high}</span>
          </div>
          <div className="est-caption">Based on last 30 days of sold listings</div>
          <div className="est-bounce-takes">
            <span>Bounce fee (18%)</span>
            <span className="v">-${d.low - takeHome}</span>
          </div>
          <div className="est-bounce-takes" style={{ borderTop: '2px solid var(--rule)', fontSize: 18, paddingTop: 20 }}>
            <span style={{ color: 'var(--after-ink)' }}>Wired to you</span>
            <span className="v" style={{ fontFamily: 'var(--serif)', fontSize: 36, color: 'var(--after-accent)' }}>${takeHome}</span>
          </div>
        </div>
      </div>
      <div className="seam-arrow">→</div>
    </section>);

};

// ====== TESTIMONIALS SPLIT ======
const TestimonialSplit = () => {
  const [i, setI] = React.useState(0);
  const ts = [
  { beforeQ: '"I had <em>three closets</em> of stuff I kept meaning to list. Never did."', afterQ: '"Bounce cleared it in a <em>weekend.</em> I got $2,140."', who: 'Maya R.', meta: 'Brooklyn · 11 items · first bounce' },
  { beforeQ: '"My garage had been a <em>graveyard</em> for ten years."', afterQ: '"$3,680 — for stuff I was about to <em>throw away.</em>"', who: 'Drew K.', meta: 'Austin · 27 items · second bounce' },
  { beforeQ: '"I was about to <em>donate</em> my old laptop."', afterQ: '"It paid for <em>half</em> my new MacBook."', who: 'Priya S.', meta: 'Seattle · 1 item · first bounce' }];

  const t = ts[i];
  return (
    <section className="split t-split">
      <div className="before">
        <div className="side-label">They said</div>
        <blockquote className="t-quote" dangerouslySetInnerHTML={{ __html: t.beforeQ }}></blockquote>
        <div className="t-byline">
          <div className="av">{t.who[0]}</div>
          <div>
            <div className="t-who">{t.who}</div>
            <div className="t-meta">{t.meta}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 40 }}>
          {ts.map((_, n) =>
          <button key={n} onClick={() => setI(n)} style={{
            width: 32, height: 3, borderRadius: 2,
            background: n === i ? 'var(--before-accent)' : 'oklch(from var(--before-ink-soft) l c h / 0.3)',
            transition: 'background 200ms'
          }} />
          )}
        </div>
      </div>
      <div className="after">
        <div className="side-label">Then</div>
        <blockquote className="t-quote" dangerouslySetInnerHTML={{ __html: t.afterQ }}></blockquote>
        <div className="t-byline">
          <div className="av">{t.who[0]}</div>
          <div>
            <div className="t-who">{t.who}</div>
            <div className="t-meta">{t.meta}</div>
          </div>
        </div>
      </div>
    </section>);

};

// ====== FAQ SPLIT ======
const FAQSplit = () => {
  const faqs = [
  { q: 'How does <em>pickup</em> work?', a: 'Pick a 2-hour window. A Bounce courier comes to your door — <em>no boxes, no tape, no printer.</em> Hand it over, we take it from there.' },
  { q: 'What does it <em>cost?</em>', a: 'Nothing up front. Flat <em>18%</em> of sale price. No subscription. No credit card on file. We only earn when you earn.' },
  { q: 'What if I don\'t <em>like</em> the offer?', a: 'You see the estimate before pickup, and the exact offer before shipping. <em>Reject anything</em> — no charge.' },
  { q: 'How fast do I get <em>paid?</em>', a: 'Most items sell in <em>3–7 days.</em> Payout hits your bank 24 hours after buyer confirms.' },
  { q: 'What can I actually <em>sell?</em>', a: 'Electronics, clothing, collectibles, furniture, kitchen, sporting, books, tools. Anything <em>worth $25+</em> and not broken.' }];

  const [open, setOpen] = React.useState(0);
  return (
    <>
      <div style={{ padding: '80px 40px 40px', textAlign: 'center', background: 'var(--cream-deep)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 16 }}>FAQ · left asks, right answers</div>
        <h2 className="disp" style={{ fontSize: 'clamp(44px, 5vw, 80px)' }}>The <em>short</em> answers.</h2>
      </div>
      {faqs.map((f, i) =>
      <div className="row-split faq-split" key={i} onClick={() => setOpen(open === i ? -1 : i)}
      style={{ cursor: 'pointer', background: open === i ? 'var(--cream-deep)' : 'transparent' }}>
          <div className="before" style={{ background: open === i ? 'var(--before-bg)' : 'oklch(from var(--before-bg) calc(l + 0.05) c h)' }}>
            <div className="row-num">Q·0{i + 1}</div>
            <div className="faq-q" dangerouslySetInnerHTML={{ __html: f.q }}></div>
          </div>
          <div className="after" style={{ background: open === i ? 'var(--cream)' : 'var(--cream-deep)' }}>
            <div className="row-num" style={{ color: 'var(--after-ink-soft)' }}>A·0{i + 1}</div>
            <div className="faq-a" dangerouslySetInnerHTML={{ __html: f.a }}></div>
          </div>
        </div>
      )}
    </>);

};

// ====== FINALE ======
const FinaleSplit = ({ onJoin }) => {
  const [resolved, setResolved] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setResolved(true), 800);
        }
      });
    }, { threshold: 0.5 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className={`finale ${resolved ? 'resolved' : ''}`} ref={ref}>
      <button className="finale-toggle" onClick={() => setResolved((r) => !r)}>
        {resolved ? '← Show the before' : 'Let it go →'}
      </button>
      <div className="before">
        <div className="side-label">Before</div>
        <div className="disp" style={{ fontSize: 'clamp(40px, 5vw, 72px)', color: 'var(--before-ink)' }}>Full of <em>stuff</em> you don't want.</div>
      </div>
      <div className="after">
        <div className="finale-slogan">"Let go of the old. Make way for the new you."</div>
        <div className="finale-wordmark">Bounce<span className="dot">.</span></div>
        <form className="finale-waitlist" onSubmit={(e) => {e.preventDefault();onJoin();}}>
          <input type="email" placeholder="your@email.com" />
          <button type="submit">Join waitlist →</button>
        </form>
        <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink-faint)' }}>
          NO SPAM · NO CREDIT CARD · 2,100+ ALREADY IN
        </div>
      </div>
    </section>);

};

Object.assign(window, { HeroSplit, NumbersSplit, ProblemPromise, EstimatorSplit, TestimonialSplit, FAQSplit, FinaleSplit });