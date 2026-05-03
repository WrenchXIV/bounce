// Multi-step waitlist
const GOALS = [
  { e: '🧹', l: 'Declutter' },
  { e: '💰', l: 'Make cash' },
  { e: '📦', l: 'Moving soon' },
  { e: '♻️', l: 'Less waste' },
];
const CATS = ['Electronics', 'Clothing', 'Furniture', 'Kitchen', 'Sports gear', 'Collectibles'];

const Onboarding = ({ onClose }) => {
  const [step, setStep] = React.useState(0);
  const [d, setD] = React.useState({ email: '', goal: null, cats: [], zip: '' });
  const [emailErr, setEmailErr] = React.useState('');
  const [zipErr, setZipErr] = React.useState('');

  const validEmail = () => {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email);
    setEmailErr(ok ? '' : 'Valid email please.');
    return ok;
  };
  const validZip = () => {
    const ok = /^\d{5}$/.test(d.zip);
    setZipErr(ok ? '' : 'Five digits.');
    return ok;
  };
  const next = () => {
    if (step === 0 && !validEmail()) return;
    if (step === 3 && !validZip()) return;
    setStep(s => s + 1);
  };
  const toggle = (c) => setD(v => ({ ...v, cats: v.cats.includes(c) ? v.cats.filter(x => x !== c) : [...v.cats, c] }));
  const canNext = () => {
    if (step === 0) return d.email.length;
    if (step === 1) return !!d.goal;
    if (step === 2) return d.cats.length > 0;
    if (step === 3) return d.zip.length === 5;
    return true;
  };

  if (step >= 4) {
    return (
      <div className="onb-mask" onClick={onClose}>
        <div className="onb" onClick={e => e.stopPropagation()} style={{ gridTemplateColumns: '1fr' }}>
          <button className="onb-close" onClick={onClose}>×</button>
          <div className="onb-success">
            <div className="ck">✓</div>
            <h3>You're <em>on.</em></h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.5, marginBottom: 24 }}>
              We'll email <strong style={{ color: 'var(--ink)' }}>{d.email}</strong> when Bounce reaches ZIP {d.zip}.
            </p>
            <div style={{ padding: 18, background: 'var(--cream-deep)', borderRadius: 12, marginBottom: 20 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--ink-faint)' }}>YOUR PLACE IN LINE</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 44, color: 'var(--before-accent)', marginTop: 4 }}>#2,138</div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Est. invite: 2–3 weeks</div>
            </div>
            <button className="onb-next" onClick={onClose} style={{ marginLeft: 0 }}>Keep exploring</button>
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    { leftT: 'Get on <em>the list.</em>', leftS: 'We\'re rolling out by ZIP code.' },
    { leftT: 'What brings you <em>here?</em>', leftS: 'Helps us line you up with the right rollout.' },
    { leftT: 'What\'re you hoping to <em>bounce?</em>', leftS: 'Pick as many as apply.' },
    { leftT: 'Where <em>at?</em>', leftS: 'ZIP code only. 18 metros live, expanding weekly.' },
  ];
  const s = steps[step];

  return (
    <div className="onb-mask" onClick={onClose}>
      <div className="onb" onClick={e => e.stopPropagation()}>
        <button className="onb-close" onClick={onClose}>×</button>
        <div className="onb-left">
          <div>
            <div className="onb-step-tag">Step {step + 1} of 4</div>
            <div className="onb-progress">
              {[0,1,2,3].map(n => <div key={n} className={`d ${n === step ? 'active' : n < step ? 'done' : ''}`}/>)}
            </div>
            <h3 className="onb-title" style={{ marginTop: 32 }} dangerouslySetInnerHTML={{ __html: s.leftT }}></h3>
            <div className="onb-sub" style={{ marginTop: 8 }}>{s.leftS}</div>
          </div>
          <div style={{ opacity: 0.5 }}><MascotV2 size={60} color="var(--before-accent)" /></div>
        </div>
        <div className="onb-right">
          {step === 0 && (
            <div className="onb-field">
              <label>Email</label>
              <input type="email" autoFocus placeholder="you@somewhere.com"
                className={emailErr ? 'invalid' : ''}
                value={d.email} onChange={e => { setD({...d, email: e.target.value}); setEmailErr(''); }}
                onKeyDown={e => e.key === 'Enter' && next()} />
              {emailErr && <div className="err">{emailErr}</div>}
            </div>
          )}
          {step === 1 && (
            <div className="onb-opts">
              {GOALS.map(g => (
                <button key={g.l} className={`onb-opt ${d.goal === g.l ? 'sel' : ''}`} onClick={() => setD({...d, goal: g.l})}>
                  <span className="e">{g.e}</span>{g.l}
                </button>
              ))}
            </div>
          )}
          {step === 2 && (
            <div className="onb-opts">
              {CATS.map(c => (
                <button key={c} className={`onb-opt ${d.cats.includes(c) ? 'sel' : ''}`} onClick={() => toggle(c)}>
                  {c}
                </button>
              ))}
            </div>
          )}
          {step === 3 && (
            <div className="onb-field">
              <label>ZIP code</label>
              <input type="text" inputMode="numeric" maxLength="5" autoFocus placeholder="94110"
                className={zipErr ? 'invalid' : ''}
                value={d.zip} onChange={e => { setD({...d, zip: e.target.value.replace(/\D/g, '')}); setZipErr(''); }}
                onKeyDown={e => e.key === 'Enter' && next()} />
              {zipErr && <div className="err">{zipErr}</div>}
            </div>
          )}
          <div className="onb-actions">
            {step > 0 && <button className="onb-back" onClick={() => setStep(s => s - 1)}>← Back</button>}
            <button className="onb-next" onClick={next} disabled={!canNext()}>{step === 3 ? 'Join waitlist' : 'Continue'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [tweaks, setTweaks] = React.useState(() => window.TWEAK_DEFAULTS_V2 || { palette: 'clay' });
  const [tweaksOn, setTweaksOn] = React.useState(false);
  const [showOnb, setShowOnb] = React.useState(false);

  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setTweaksOn(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent?.postMessage({type: '__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  React.useEffect(() => { document.body.dataset.palette = tweaks.palette; }, [tweaks.palette]);

  const update = (k, v) => {
    setTweaks(t => ({ ...t, [k]: v }));
    window.parent?.postMessage({type: '__edit_mode_set_keys', edits: { [k]: v }}, '*');
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-side nav-left">
          <span>Before · Your home · Your garage · Your closet</span>
        </div>
        <div className="nav-side nav-right">
          <div className="links">
            <a href="#">How it works</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
          </div>
          <button className="nav-cta" onClick={() => setShowOnb(true)}>Join waitlist</button>
        </div>
        <div className="nav-seam">
          <span>Bounce</span><span className="dot">.</span>
        </div>
      </nav>

      <HeroSplit onJoin={() => setShowOnb(true)} />
      <NumbersSplit />
      <ProblemPromise />
      <EstimatorSplit />
      <TestimonialSplit />
      <FAQSplit />
      <FinaleSplit onJoin={() => setShowOnb(true)} />

      <div className="footer-split">
        <div className="footer-side l">
          <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, textTransform: 'none', letterSpacing: 0 }}>Bounce</span>
        </div>
        <div className="footer-side r">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
          <span style={{ marginLeft: 'auto' }}>© 2026</span>
        </div>
      </div>

      {showOnb && <Onboarding onClose={() => setShowOnb(false)} />}

      {tweaksOn && (
        <>
          <div className="tweaks-panel">
            <h3>Tweaks</h3>
            <div className="tw-sub">Split design · v2</div>
            <div className="tw-row">
              <label>Palette</label>
              <div className="tw-sw-row">
                {['clay','moss','ink','plum'].map(p => (
                  <button key={p} className={`tw-sw ${p} ${tweaks.palette === p ? 'active' : ''}`} onClick={() => update('palette', p)}/>
                ))}
              </div>
            </div>
          </div>
          <button className="tweaks-btn" onClick={() => setTweaksOn(false)}>×</button>
        </>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
