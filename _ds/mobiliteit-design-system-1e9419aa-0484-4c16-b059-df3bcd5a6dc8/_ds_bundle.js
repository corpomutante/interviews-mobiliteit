/* @ds-bundle: {"format":3,"namespace":"MobiliteitDesignSystem_1e9419","components":[],"sourceHashes":{"ui_kits/mobiliteit-app/app.jsx":"be088af1f9e3","ui_kits/mobiliteit-app/components.jsx":"b0f0fc14a493","ui_kits/mobiliteit-app/ios-frame.jsx":"d67eb3ffe562","ui_kits/mobiliteit-app/screens.jsx":"781e11ebb624"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MobiliteitDesignSystem_1e9419 = window.MobiliteitDesignSystem_1e9419 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/mobiliteit-app/app.jsx
try { (() => {
// ─────────────────────────────────────────────────────────────
// Mobiliteit UI kit — App shell + screen routing
// ─────────────────────────────────────────────────────────────

const {
  useState: useStateApp
} = React;
function MobiliteitApp() {
  const [screen, setScreen] = useStateApp('home'); // home, planner, results, detail, saved, account
  const [tab, setTab] = useStateApp('plan'); // bottom-nav tab
  const [modes, setModes] = useStateApp(['train', 'bus']);
  const saved = [{
    name: 'Wood Workshop',
    desc: 'Fab Lab Luxembourg · 19 Rue de Bitbourg, 1273 Luxembourg',
    icon: 'hammer'
  }, {
    name: 'Climbing centre',
    desc: 'The Roof Luxembourg · 5 Rue de l\u2019\u00C9tain, 1479 Luxembourg',
    icon: 'mountains'
  }, {
    name: 'Office',
    desc: '141 Route d\u2019Arlon, 8009 Strassen · Mon\u2013Thu',
    icon: 'briefcase'
  }, {
    name: 'Graphic design class',
    desc: 'Cercle Cit\u00E9 · 2 Rue Genistre, 1623 Luxembourg',
    icon: 'palette'
  }];
  const toggleMode = id => setModes(m => m.includes(id) ? m.filter(x => x !== id) : [...m, id]);
  const go = next => {
    setScreen(next);
    if (next === 'home') setTab('plan');
    if (next === 'saved') setTab('saved');
    if (next === 'account') setTab('account');
  };
  const onTabChange = t => {
    setTab(t);
    if (t === 'plan') setScreen('home');
    if (t === 'saved') setScreen('saved');
    if (t === 'account') setScreen('account');
    if (t === 'lines') setScreen('lines');
  };

  // Helpers
  const PaddedScreen = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflowY: 'auto',
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 54
    }
  }), children);
  const isMap = screen === 'home';
  const isDetail = screen === 'detail';
  const showBottomNav = !isDetail;
  return /*#__PURE__*/React.createElement("div", {
    className: "app-root"
  }, screen === 'home' && /*#__PURE__*/React.createElement(MapHomeScreen, {
    go: go,
    savedJourneys: saved
  }), screen === 'planner' && /*#__PURE__*/React.createElement(PaddedScreen, null, /*#__PURE__*/React.createElement(TripPlannerScreen, {
    go: go,
    modes: modes,
    toggleMode: toggleMode
  })), screen === 'results' && /*#__PURE__*/React.createElement(PaddedScreen, null, /*#__PURE__*/React.createElement(ResultsScreen, {
    go: go
  })), screen === 'detail' && /*#__PURE__*/React.createElement(JourneyDetailScreen, {
    go: go
  }), screen === 'saved' && /*#__PURE__*/React.createElement(PaddedScreen, null, /*#__PURE__*/React.createElement(SavedJourneysScreen, {
    go: go,
    saved: saved
  })), screen === 'account' && /*#__PURE__*/React.createElement(PaddedScreen, null, /*#__PURE__*/React.createElement(AccountScreen, null)), screen === 'lines' && /*#__PURE__*/React.createElement(PaddedScreen, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Lines"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 16px',
      textAlign: 'center',
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "list-bullets",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--t-title-3)',
      color: 'var(--fg-1)',
      marginTop: 10
    }
  }, "Line search"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--t-sub)',
      marginTop: 6
    }
  }, "Browse train, bus and tram lines by code or name."))), showBottomNav && /*#__PURE__*/React.createElement(BottomNav, {
    active: tab,
    onChange: onTabChange
  }));
}
Object.assign(window, {
  MobiliteitApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobiliteit-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobiliteit-app/components.jsx
try { (() => {
// ─────────────────────────────────────────────────────────────
// Mobiliteit UI kit — shared components
// All component objects are exported on window at the bottom.
// ─────────────────────────────────────────────────────────────

const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

/* —————————————— Phosphor icon helper —————————————— */
const Icon = ({
  name,
  fill = false,
  size,
  color
}) => /*#__PURE__*/React.createElement("i", {
  className: `${fill ? "ph-fill" : "ph"} ph-${name}`,
  style: {
    fontSize: size,
    color
  }
});

/* —————————————— Fake transit map —————————————— */
function FakeMap({
  showRoute = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "map-river",
    style: {
      left: -20,
      top: '52%',
      width: 460,
      height: 32,
      transform: 'rotate(-4deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "map-park",
    style: {
      left: 30,
      top: 90,
      width: 110,
      height: 80
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "map-park",
    style: {
      right: 20,
      top: 220,
      width: 130,
      height: 100
    }
  }), /*#__PURE__*/React.createElement("svg", {
    className: "map-roads",
    viewBox: "0 0 400 700",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#CFD7C8",
    strokeWidth: "6",
    fill: "none",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-20 180 Q 80 200 200 170 T 420 200"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 350 Q 100 380 220 340 T 420 380"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 500 Q 120 540 240 500 T 420 520"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 -20 Q 80 200 60 400 T 90 720"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M180 -20 Q 200 180 220 380 T 200 720"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M320 -20 Q 300 200 340 400 T 320 720"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#DCE3D5",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-20 240 H 420"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 430 H 420"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 580 H 420"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 -20 V 720"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M260 -20 V 720"
  })), showRoute && /*#__PURE__*/React.createElement("g", {
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M70 540 Q 130 480 180 420 T 300 260 Q 320 230 320 200",
    stroke: "var(--mode-train)",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 580 L 70 540",
    stroke: "var(--mode-walk)",
    strokeWidth: "3",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M320 200 L 340 170",
    stroke: "var(--mode-walk)",
    strokeWidth: "3",
    strokeDasharray: "4 4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "map-label",
    style: {
      left: '20%',
      top: '20%'
    }
  }, "Limpertsberg"), /*#__PURE__*/React.createElement("div", {
    className: "map-label",
    style: {
      left: '70%',
      top: '38%'
    }
  }, "Kirchberg"), /*#__PURE__*/React.createElement("div", {
    className: "map-label",
    style: {
      left: '40%',
      top: '70%'
    }
  }, "Gare"), showRoute && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "map-pin b",
    style: {
      left: '10%',
      top: '84%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "map-pin",
    style: {
      left: '85%',
      top: '24%'
    }
  })));
}

/* —————————————— Field —————————————— */
function Field({
  icon,
  value,
  placeholder,
  trailing,
  onClick,
  elevated,
  readOnly,
  autoFocus
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `field ${elevated ? "elevated" : ""}`,
    onClick: onClick
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon
  }), /*#__PURE__*/React.createElement("input", {
    defaultValue: value,
    placeholder: placeholder,
    readOnly: readOnly,
    autoFocus: autoFocus
  }), trailing);
}

/* —————————————— Mode chip —————————————— */
function ModeChip({
  mode,
  icon,
  label,
  selected,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `mc ${selected ? "selected" : ""}`,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    fill: selected
  }), label);
}

/* —————————————— Line badge —————————————— */
function LineBadge({
  code,
  mode = "train",
  solid = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `lc ${mode} ${solid ? "solid" : ""}`
  }, code);
}

/* —————————————— Route card —————————————— */
function RouteCard({
  route,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "route-card",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-time tabular"
  }, route.time), /*#__PURE__*/React.createElement("span", {
    className: "rc-dur tabular"
  }, route.duration)), /*#__PURE__*/React.createElement("div", {
    className: "rc-legs"
  }, route.legs.map((leg, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "rc-sep"
  }, "\u203A"), /*#__PURE__*/React.createElement(LineBadge, {
    code: leg.code || /*#__PURE__*/React.createElement(Icon, {
      name: leg.icon,
      size: 14
    }),
    mode: leg.mode
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rc-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular"
  }, route.changes), route.stepFree && /*#__PURE__*/React.createElement("span", {
    className: "tag ok"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wheelchair",
    size: 14
  }), "Step free"), route.crowd && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "users-three",
    size: 14,
    style: {
      verticalAlign: '-2px',
      marginRight: 4
    }
  }), route.crowd)), route.alt && /*#__PURE__*/React.createElement("div", {
    className: "rc-alt"
  }, route.alt));
}

/* —————————————— Bottom navigation —————————————— */
function BottomNav({
  active,
  onChange
}) {
  const tabs = [{
    id: 'plan',
    label: 'Plan',
    icon: 'map-trifold'
  }, {
    id: 'lines',
    label: 'Lines',
    icon: 'list-bullets'
  }, {
    id: 'saved',
    label: 'Saved',
    icon: 'bookmark-simple'
  }, {
    id: 'account',
    label: 'Account',
    icon: 'user-circle'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bn"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: `tab ${active === t.id ? 'active' : ''}`,
    onClick: () => onChange(t.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    fill: active === t.id
  }), t.label.toUpperCase())));
}

/* —————————————— Screen header (back, title, action) —————————————— */
function ScreenHeader({
  title,
  onBack,
  trailing
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "scr-header"
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    className: "ic-btn",
    onClick: onBack,
    "aria-label": "Back"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("h2", null, title), trailing || /*#__PURE__*/React.createElement("span", null));
}

/* —————————————— Bottom sheet —————————————— */
function Sheet({
  height = '55%',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    style: {
      height,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "handle"
  }), children);
}
Object.assign(window, {
  Icon,
  FakeMap,
  Field,
  ModeChip,
  LineBadge,
  RouteCard,
  BottomNav,
  ScreenHeader,
  Sheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobiliteit-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobiliteit-app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobiliteit-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobiliteit-app/screens.jsx
try { (() => {
// ─────────────────────────────────────────────────────────────
// Mobiliteit UI kit — screens
// Imports globals: FakeMap, Field, ModeChip, LineBadge, RouteCard, BottomNav, ScreenHeader, Sheet, Icon
// ─────────────────────────────────────────────────────────────

const {
  useState: useStateScr
} = React;

/* ════════════════════════════════════════════════════════════
   MapHome — main entry, map + peek bottom sheet
   ════════════════════════════════════════════════════════════ */
function MapHomeScreen({
  go,
  savedJourneys
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(FakeMap, null), /*#__PURE__*/React.createElement("div", {
    className: "topbar-glass",
    style: {
      padding: 10
    }
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "magnifying-glass",
    placeholder: "Where do you want to go?",
    readOnly: true,
    onClick: () => go('planner'),
    trailing: /*#__PURE__*/React.createElement(Icon, {
      name: "microphone"
    })
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Locate me",
    style: {
      position: 'absolute',
      right: 16,
      bottom: 290,
      width: 44,
      height: 44,
      borderRadius: 22,
      background: 'white',
      border: 0,
      boxShadow: 'var(--sh-2)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "crosshair",
    size: 20
  })), /*#__PURE__*/React.createElement(Sheet, {
    height: "42%"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-head sheet-row"
  }, /*#__PURE__*/React.createElement("h3", null, "Saved journeys"), /*#__PURE__*/React.createElement("span", {
    className: "edit",
    onClick: () => go('saved')
  }, "See all")), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, savedJourneys.slice(0, 2).map((j, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row",
    onClick: () => go('detail')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: j.icon,
    className: "lead"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, j.name), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, j.desc)), /*#__PURE__*/React.createElement(Icon, {
    name: "caret-right",
    className: "chev"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    onClick: () => go('planner'),
    style: {
      color: 'var(--ac-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "lead",
    style: {
      color: 'var(--ac-secondary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "name",
    style: {
      color: 'var(--ac-secondary)'
    }
  }, "Plan a new trip"), /*#__PURE__*/React.createElement("span", null)))));
}

/* ════════════════════════════════════════════════════════════
   TripPlanner — origin / destination / filters / mode chips
   ════════════════════════════════════════════════════════════ */
function TripPlannerScreen({
  go,
  modes,
  toggleMode
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Trip planner",
    onBack: () => go('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "circle",
    value: "Rue des Marais 2, Wasserbillig",
    elevated: true
  }), /*#__PURE__*/React.createElement(Field, {
    icon: "map-pin",
    placeholder: "Enter final location\u2026",
    elevated: true
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Swap",
    style: {
      width: 44,
      alignSelf: 'center',
      height: 44,
      borderRadius: 22,
      background: 'var(--bg-canvas)',
      border: '1px solid var(--bd-subtle)',
      cursor: 'pointer',
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrows-down-up",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16
  }), "Dep now"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "funnel",
    size: 16
  }), "Options")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      overflowX: 'auto',
      padding: '4px 0'
    }
  }, [{
    id: 'train',
    label: 'Train',
    icon: 'train'
  }, {
    id: 'bus',
    label: 'Bus',
    icon: 'bus'
  }, {
    id: 'tram',
    label: 'Tram',
    icon: 'tram'
  }, {
    id: 'bike',
    label: 'Bike',
    icon: 'bicycle'
  }, {
    id: 'klaxit',
    label: 'Klaxit',
    icon: 'car'
  }, {
    id: 'pr',
    label: 'P+R',
    icon: 'parking'
  }].map(m => /*#__PURE__*/React.createElement(ModeChip, {
    key: m.id,
    icon: m.icon,
    label: m.label,
    selected: modes.includes(m.id),
    onClick: () => toggleMode(m.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Suggested destinations"), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '4px 16px'
    }
  }, [{
    name: 'Boulevard Franklin Roosevelt',
    desc: '41 km · Ville Haute',
    icon: 'map-pin'
  }, {
    name: 'Gouvernement du Grand-Duché',
    desc: '41 km · Ville Haute',
    icon: 'building-office'
  }, {
    name: 'LEO (Luxembourg Energy Office)',
    desc: '42 km · Ville Haute',
    icon: 'lightning'
  }, {
    name: 'Rue Franklin Roosevelt',
    desc: '88 km · Luxembourg',
    icon: 'road-horizon'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row",
    onClick: () => go('results')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    className: "lead"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "desc tabular"
  }, p.desc)), /*#__PURE__*/React.createElement(Icon, {
    name: "caret-right",
    className: "chev"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "spacer-16"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-md btn-full"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-trifold",
    size: 16
  }), "Choose on map"), /*#__PURE__*/React.createElement("div", {
    className: "spacer-24"
  })));
}

/* ════════════════════════════════════════════════════════════
   Results — list of route options
   ════════════════════════════════════════════════════════════ */
function ResultsScreen({
  go
}) {
  const routes = [{
    time: '17:45 – 18:35',
    duration: '48 min',
    changes: '1 change',
    legs: [{
      icon: 'person-simple-walk',
      mode: 'walk'
    }, {
      code: 'RE11',
      mode: 'train'
    }, {
      icon: 'person-simple-walk',
      mode: 'walk'
    }, {
      code: '12',
      mode: 'bus'
    }],
    stepFree: true,
    crowd: 'Not too crowded',
    alt: 'also at 18:15 from Wasserbillig Gare',
    recommended: true
  }, {
    time: '17:45 – 18:40',
    duration: '55 min',
    changes: '2 changes',
    legs: [{
      icon: 'person-simple-walk',
      mode: 'walk'
    }, {
      code: '120',
      mode: 'bus'
    }, {
      icon: 'person-simple-walk',
      mode: 'walk'
    }, {
      code: 'T1',
      mode: 'tram'
    }, {
      code: '19',
      mode: 'bus'
    }],
    stepFree: true,
    alt: 'also at 19:10 from Wasserbillig Gare'
  }, {
    time: '17:45 – 18:44',
    duration: '59 min',
    changes: '2 changes',
    legs: [{
      code: '25',
      mode: 'bus'
    }, {
      code: 'RE11',
      mode: 'train'
    }, {
      code: '34',
      mode: 'bus'
    }],
    alt: 'also at 18:15 from Wasserbillig Gare'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Trip planner",
    onBack: () => go('planner'),
    trailing: /*#__PURE__*/React.createElement("button", {
      className: "ic-btn",
      "aria-label": "Options"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "funnel",
      size: 20
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Rue des Marais 2, ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg-1)'
    }
  }, "Wasserbillig")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-3)',
      fontSize: 13
    }
  }, "\u2192 Bd. Franklin Roosevelt 6, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)'
    }
  }, "Luxembourg"))), /*#__PURE__*/React.createElement("span", {
    className: "pill-alert warning",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock-countdown",
    size: 14
  }), "Dep now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Recommended route"), /*#__PURE__*/React.createElement(RouteCard, {
    route: routes[0],
    onClick: () => go('detail')
  }), /*#__PURE__*/React.createElement("div", {
    className: "spacer-16"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, "Other options"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, routes.slice(1).map((r, i) => /*#__PURE__*/React.createElement(RouteCard, {
    key: i,
    route: r,
    onClick: () => go('detail')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "spacer-24"
  })));
}

/* ════════════════════════════════════════════════════════════
   JourneyDetail — timeline view
   ════════════════════════════════════════════════════════════ */
function JourneyDetailScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '38%',
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement(FakeMap, {
    showRoute: true
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('results'),
    className: "ic-btn",
    "aria-label": "Back",
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      width: 40,
      height: 40,
      borderRadius: 20,
      background: 'rgba(255,255,255,0.95)',
      border: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--sh-2)',
      color: 'var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "More",
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 40,
      height: 40,
      borderRadius: 20,
      background: 'rgba(255,255,255,0.95)',
      border: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--sh-2)',
      color: 'var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dots-three",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--bg-elevated)',
      borderRadius: 'var(--r-2xl) var(--r-2xl) 0 0',
      marginTop: -28,
      boxShadow: 'var(--sh-sheet)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      background: 'var(--bd-default)',
      borderRadius: 2,
      margin: '8px auto 6px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 4px',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--t-title-2)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--fg-1)'
    }
  }, "48 min \xB7 1 change"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--t-caption)',
      color: 'var(--fg-3)',
      marginTop: 2
    },
    className: "tabular"
  }, "Today, Thu 30 May \xB7 17:45 \u2013 18:35")), /*#__PURE__*/React.createElement("span", {
    className: "pill-alert success"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 14
  }), "On time")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '16px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, "17:45"), /*#__PURE__*/React.createElement("div", {
    className: "place"
  }, "Wasserbillig, Marais"), /*#__PURE__*/React.createElement("div", {
    className: "plat"
  }, "Walk 2 min to Wasserbillig Gare")), /*#__PURE__*/React.createElement("div", {
    className: "tl-step transit"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "time tabular"
  }, "17:54 \u2013 18:23"), /*#__PURE__*/React.createElement("div", {
    className: "place"
  }, "Wasserbillig Gare \xB7 Plat. 2"), /*#__PURE__*/React.createElement("div", {
    className: "leg-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mode-tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "train"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "leg-line"
  }, /*#__PURE__*/React.createElement(LineBadge, {
    code: "RE11",
    mode: "train",
    solid: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "direction"
  }, "to Luxembourg")), /*#__PURE__*/React.createElement("div", {
    className: "leg-meta"
  }, "5 stops \xB7 29 min \xB7 Step free")))), /*#__PURE__*/React.createElement("div", {
    className: "tl-step bus"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "time tabular"
  }, "18:30 \u2013 18:35"), /*#__PURE__*/React.createElement("div", {
    className: "place"
  }, "Luxembourg Gare Centrale \xB7 Plat. 5"), /*#__PURE__*/React.createElement("div", {
    className: "leg-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mode-tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bus"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "leg-line"
  }, /*#__PURE__*/React.createElement(LineBadge, {
    code: "12",
    mode: "bus",
    solid: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "direction"
  }, "to Cents-Waassertuerm")), /*#__PURE__*/React.createElement("div", {
    className: "leg-meta"
  }, "2 stops \xB7 5 min \xB7 Not too crowded")))), /*#__PURE__*/React.createElement("div", {
    className: "tl-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, "18:35"), /*#__PURE__*/React.createElement("div", {
    className: "place"
  }, "F.D. Roosevelt Boulevard"), /*#__PURE__*/React.createElement("div", {
    className: "plat"
  }, "You've arrived.")))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-actions",
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-md",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark-simple",
    size: 16
  }), "Save"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-md",
    style: {
      flex: 1.4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "navigation-arrow",
    size: 16
  }), "Start"))));
}

/* ════════════════════════════════════════════════════════════
   SavedJourneys
   ════════════════════════════════════════════════════════════ */
function SavedJourneysScreen({
  go,
  saved
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Saved journeys",
    onBack: () => go('home'),
    trailing: /*#__PURE__*/React.createElement("button", {
      className: "ic-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "dots-three",
      size: 20
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '4px 16px'
    }
  }, saved.map((j, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row",
    onClick: () => go('detail')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: j.icon,
    className: "lead"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, j.name), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, j.desc)), /*#__PURE__*/React.createElement(Icon, {
    name: "caret-right",
    className: "chev"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "spacer-16"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-md btn-full"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }), "Add a journey")));
}

/* ════════════════════════════════════════════════════════════
   Account
   ════════════════════════════════════════════════════════════ */
function AccountScreen() {
  const items = [{
    label: 'My account',
    icon: 'user'
  }, {
    label: 'Settings',
    icon: 'gear'
  }, {
    label: 'Trip planner',
    icon: 'map-trifold'
  }, {
    label: 'Arrivals and departures',
    icon: 'clock'
  }, {
    label: 'Line search',
    icon: 'magnifying-glass'
  }, {
    label: 'Saved journeys',
    icon: 'bookmark-simple'
  }, {
    label: 'Contact us',
    icon: 'envelope'
  }, {
    label: 'FAQ',
    icon: 'question'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Account",
    trailing: /*#__PURE__*/React.createElement("button", {
      className: "ic-btn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 20
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 28,
      background: 'var(--ac-primary-soft)',
      color: 'var(--ac-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--t-title-2)',
      fontWeight: 700
    }
  }, "TR"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "name",
    style: {
      font: 'var(--t-title-3)',
      marginBottom: 2
    }
  }, "Tiago Rodrigues"), /*#__PURE__*/React.createElement("div", {
    className: "desc",
    style: {
      font: 'var(--t-caption)',
      color: 'var(--fg-3)'
    }
  }, "tiago.rodrigues@example.lu")), /*#__PURE__*/React.createElement(Icon, {
    name: "caret-right",
    className: "chev",
    style: {
      color: 'var(--fg-3)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "spacer-16"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '4px 16px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    className: "lead"
  }), /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, it.label), /*#__PURE__*/React.createElement(Icon, {
    name: "caret-right",
    className: "chev"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "spacer-16"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-md btn-full",
    style: {
      color: 'var(--st-danger-fg)'
    }
  }, "Sign out"), /*#__PURE__*/React.createElement("div", {
    className: "spacer-24"
  })));
}
Object.assign(window, {
  MapHomeScreen,
  TripPlannerScreen,
  ResultsScreen,
  JourneyDetailScreen,
  SavedJourneysScreen,
  AccountScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobiliteit-app/screens.jsx", error: String((e && e.message) || e) }); }

})();
