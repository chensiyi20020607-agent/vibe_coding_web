/**
 * Shuffle — clean working wrapper.
 * API is identical to crossshair.jsx; crossshair.jsx is left untouched.
 */
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import './Shuffle.css';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const Shuffle = ({
  text,
  className = '',
  style = {},
  shuffleDirection = 'right',
  duration = 0.35,
  maxDelay = 0,
  ease = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onShuffleComplete,
  shuffleTimes = 1,
  animationMode = 'evenodd',
  loop = false,
  loopDelay = 0,
  stagger = 0.03,
  scrambleCharset = '',
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true,
}) => {
  const ref         = useRef(null);
  const splitRef    = useRef(null);
  const wrappersRef = useRef([]);
  const tlRef       = useRef(null);
  const playingRef  = useRef(false);
  const hoverRef    = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  /* wait for fonts */
  useEffect(() => {
    if ('fonts' in document) {
      if (document.fonts.status === 'loaded') setFontsLoaded(true);
      else document.fonts.ready.then(() => setFontsLoaded(true));
    } else setFontsLoaded(true);
  }, []);

  const scrollStart = useMemo(() => {
    const startPct = (1 - threshold) * 100;
    const mm = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '');
    const mv = mm ? parseFloat(mm[1]) : 0;
    const mu = mm ? mm[2] || 'px' : 'px';
    const sign = mv === 0 ? '' : mv < 0 ? `-=${Math.abs(mv)}${mu}` : `+=${mv}${mu}`;
    return `top ${startPct}%${sign}`;
  }, [threshold, rootMargin]);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;

      if (
        respectReducedMotion &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      ) {
        setReady(true);
        onShuffleComplete?.();
        return;
      }

      const el = ref.current;

      /* ── helpers ── */
      const removeHover = () => {
        if (hoverRef.current && ref.current) {
          ref.current.removeEventListener('mouseenter', hoverRef.current);
          hoverRef.current = null;
        }
      };

      const teardown = () => {
        tlRef.current?.kill();
        tlRef.current = null;
        wrappersRef.current.forEach((wrap) => {
          const orig = wrap.firstElementChild?.querySelector('[data-orig="1"]');
          if (orig && wrap.parentNode) wrap.parentNode.replaceChild(orig, wrap);
        });
        wrappersRef.current = [];
        try { splitRef.current?.revert(); } catch { /* noop */ }
        splitRef.current = null;
        playingRef.current = false;
      };

      const rand = (set) => set.charAt(Math.floor(Math.random() * set.length)) || '';

      const build = () => {
        teardown();
        splitRef.current = new GSAPSplitText(el, {
          type: 'chars',
          charsClass: 'shuffle-char',
          wordsClass: 'shuffle-word',
          linesClass: 'shuffle-line',
          smartWrap: true,
          reduceWhiteSpace: false,
        });

        const chars = splitRef.current.chars || [];
        const rolls = Math.max(1, Math.floor(shuffleTimes));
        const isV   = shuffleDirection === 'up' || shuffleDirection === 'down';

        chars.forEach((ch) => {
          const parent = ch.parentElement;
          if (!parent) return;
          const w = ch.getBoundingClientRect().width;
          const h = ch.getBoundingClientRect().height;
          if (!w) return;

          const wrap  = document.createElement('span');
          const inner = document.createElement('span');

          Object.assign(wrap.style, {
            display: 'inline-block',
            overflow: 'hidden',
            width: w + 'px',
            height: isV ? h + 'px' : 'auto',
            verticalAlign: 'bottom',
          });
          Object.assign(inner.style, {
            display: 'inline-block',
            whiteSpace: isV ? 'normal' : 'nowrap',
            willChange: 'transform',
          });

          parent.insertBefore(wrap, ch);
          wrap.appendChild(inner);

          const charStyle = {
            display: isV ? 'block' : 'inline-block',
            width: w + 'px',
            textAlign: 'center',
          };

          const firstOrig = ch.cloneNode(true);
          Object.assign(firstOrig.style, charStyle);
          ch.setAttribute('data-orig', '1');
          Object.assign(ch.style, charStyle);

          inner.appendChild(firstOrig);
          for (let k = 0; k < rolls; k++) {
            const c = ch.cloneNode(true);
            if (scrambleCharset) c.textContent = rand(scrambleCharset);
            Object.assign(c.style, charStyle);
            inner.appendChild(c);
          }
          inner.appendChild(ch);

          const steps = rolls + 1;
          let startX = 0, finalX = 0, startY = 0, finalY = 0;

          if (shuffleDirection === 'right' || shuffleDirection === 'down') {
            const firstCopy = inner.firstElementChild;
            const real      = inner.lastElementChild;
            if (real) inner.insertBefore(real, inner.firstChild);
            if (firstCopy) inner.appendChild(firstCopy);
          }

          if (shuffleDirection === 'right')      { startX = -steps * w; }
          else if (shuffleDirection === 'left')  { finalX = -steps * w; }
          else if (shuffleDirection === 'down')  { startY = -steps * h; }
          else if (shuffleDirection === 'up')    { finalY = -steps * h; }

          if (!isV) {
            gsap.set(inner, { x: startX, y: 0, force3D: true });
            inner.setAttribute('data-start-x', String(startX));
            inner.setAttribute('data-final-x', String(finalX));
          } else {
            gsap.set(inner, { x: 0, y: startY, force3D: true });
            inner.setAttribute('data-start-y', String(startY));
            inner.setAttribute('data-final-y', String(finalY));
          }

          if (colorFrom) inner.style.color = colorFrom;
          wrappersRef.current.push(wrap);
        });
      };

      const inners = () => wrappersRef.current.map((w) => w.firstElementChild);

      const randomizeScrambles = () => {
        if (!scrambleCharset) return;
        wrappersRef.current.forEach((w) => {
          const strip = w.firstElementChild;
          if (!strip) return;
          Array.from(strip.children).slice(1, -1).forEach((kid) => {
            kid.textContent = scrambleCharset.charAt(
              Math.floor(Math.random() * scrambleCharset.length)
            );
          });
        });
      };

      const cleanupToStill = () => {
        wrappersRef.current.forEach((w) => {
          const strip = w.firstElementChild;
          if (!strip) return;
          const real = strip.querySelector('[data-orig="1"]');
          if (!real) return;
          strip.replaceChildren(real);
          strip.style.transform  = 'none';
          strip.style.willChange = 'auto';
        });
      };

      const play = () => {
        const strips = inners();
        if (!strips.length) return;
        playingRef.current = true;
        const isV = shuffleDirection === 'up' || shuffleDirection === 'down';

        const tl = gsap.timeline({
          smoothChildTiming: true,
          repeat: loop ? -1 : 0,
          repeatDelay: loop ? loopDelay : 0,
          onRepeat: () => {
            if (scrambleCharset) randomizeScrambles();
            gsap.set(strips, isV
              ? { y: (_, t) => parseFloat(t.getAttribute('data-start-y') || '0') }
              : { x: (_, t) => parseFloat(t.getAttribute('data-start-x') || '0') }
            );
            onShuffleComplete?.();
          },
          onComplete: () => {
            playingRef.current = false;
            if (!loop) {
              cleanupToStill();
              if (colorTo) gsap.set(strips, { color: colorTo });
              onShuffleComplete?.();
              armHover();
            }
          },
        });

        const addTween = (targets, at) => {
          const vars = { duration, ease, force3D: true,
            stagger: animationMode === 'evenodd' ? stagger : 0 };
          if (isV) vars.y = (_, t) => parseFloat(t.getAttribute('data-final-y') || '0');
          else     vars.x = (_, t) => parseFloat(t.getAttribute('data-final-x') || '0');
          tl.to(targets, vars, at);
          if (colorFrom && colorTo) tl.to(targets, { color: colorTo, duration, ease }, at);
        };

        if (animationMode === 'evenodd') {
          const odd  = strips.filter((_, i) => i % 2 === 1);
          const even = strips.filter((_, i) => i % 2 === 0);
          const oddTotal  = duration + Math.max(0, odd.length - 1) * stagger;
          const evenStart = odd.length ? oddTotal * 0.7 : 0;
          if (odd.length)  addTween(odd, 0);
          if (even.length) addTween(even, evenStart);
        } else {
          strips.forEach((strip) => {
            const d    = Math.random() * maxDelay;
            const vars = { duration, ease, force3D: true };
            if (isV) vars.y = parseFloat(strip.getAttribute('data-final-y') || '0');
            else     vars.x = parseFloat(strip.getAttribute('data-final-x') || '0');
            tl.to(strip, vars, d);
            if (colorFrom && colorTo)
              tl.fromTo(strip, { color: colorFrom }, { color: colorTo, duration, ease }, d);
          });
        }
        tlRef.current = tl;
      };

      const armHover = () => {
        if (!triggerOnHover || !ref.current) return;
        removeHover();
        const handler = () => {
          if (playingRef.current) return;
          build();
          if (scrambleCharset) randomizeScrambles();
          play();
        };
        hoverRef.current = handler;
        ref.current.addEventListener('mouseenter', handler);
      };

      const create = () => {
        build();
        if (scrambleCharset) randomizeScrambles();
        play();
        armHover();
        setReady(true);
      };

      const st = ScrollTrigger.create({
        trigger: el,
        start: scrollStart,
        once: triggerOnce,
        onEnter: create,
      });

      return () => {
        st.kill();
        removeHover();
        teardown();
        setReady(false);
      };
    },
    {
      dependencies: [
        text, duration, maxDelay, ease, scrollStart, fontsLoaded,
        shuffleDirection, shuffleTimes, animationMode, loop, loopDelay,
        stagger, scrambleCharset, colorFrom, colorTo,
        triggerOnce, respectReducedMotion, triggerOnHover, onShuffleComplete,
      ],
      scope: ref,
    }
  );

  const Tag         = tag || 'p';
  const commonStyle = useMemo(() => ({ textAlign, ...style }), [textAlign, style]);
  const classes     = useMemo(
    () => `shuffle-parent ${ready ? 'is-ready' : ''} ${className}`.trim(),
    [ready, className]
  );

  return React.createElement(Tag, { ref, className: classes, style: commonStyle }, text);
};

export default Shuffle;
