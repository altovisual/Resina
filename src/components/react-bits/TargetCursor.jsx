import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TargetCursor = ({
    targetSelector = '.cursor-target',
    hoverDuration = 0.4,
    hideDefaultCursor = true,
}) => {
    const wrapperRef = useRef(null);
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const targetRef = useRef(null);

    useEffect(() => {
        // Desactivar en dispositivos móviles/táctiles
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) return;

        if (hideDefaultCursor) {
            document.body.style.cursor = 'none';
            const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
            interactiveElements.forEach(el => {
                if (el) el.style.cursor = 'none';
            });
        }

        const wrapper = wrapperRef.current;
        const dot = dotRef.current;
        const ring = ringRef.current;

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;

            if (!targetRef.current) {
                gsap.to(wrapper, {
                    x: clientX,
                    y: clientY,
                    duration: 0.1,
                    ease: 'power2.out'
                });
            } else {
                const rect = targetRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                gsap.to(wrapper, {
                    x: centerX,
                    y: centerY,
                    duration: 0.1,
                    ease: 'power2.out'
                });
            }
        };

        const handleOver = (e) => {
            const target = e.target.closest(targetSelector);
            if (target && target !== targetRef.current) {
                targetRef.current = target;
                const rect = target.getBoundingClientRect();
                const style = window.getComputedStyle(target);
                const borderRadius = style.borderRadius;

                const offset = 12;

                // Expandir anillo minimalista para enmarcar el botón
                gsap.to(ring, {
                    width: rect.width + offset * 2,
                    height: rect.height + offset * 2,
                    borderRadius: borderRadius === '0px' ? '12px' : borderRadius,
                    opacity: 1,
                    scale: 1,
                    duration: hoverDuration,
                    ease: 'expo.out'
                });

                // Desvanecer punto central para dejar protagonismo al anillo
                gsap.to(dot, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.2
                });
            }
        };

        const handleOut = (e) => {
            const target = e.target.closest(targetSelector);
            if (target && target === targetRef.current) {
                targetRef.current = null;

                // Contraer anillo al estado de reposo (oculto)
                gsap.to(ring, {
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    opacity: 0,
                    scale: 0.5,
                    duration: hoverDuration,
                    ease: 'power2.inOut'
                });

                // Restaurar punto central
                gsap.to(dot, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3
                });
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', handleOver);
        document.addEventListener('mouseout', handleOut);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', handleOver);
            document.removeEventListener('mouseout', handleOut);
            document.body.style.cursor = 'auto';
        };
    }, [targetSelector, hoverDuration, hideDefaultCursor]);

    return (
        <div ref={wrapperRef} className="target-cursor-wrapper">
            <style>
                {`
                .target-cursor-wrapper {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 0;
                  height: 0;
                  pointer-events: none;
                  z-index: 11000;
                  mix-blend-mode: difference;
                  transform: translate(-50%, -50%);
                  will-change: transform;
                }
                @media (pointer: coarse) {
                  .target-cursor-wrapper {
                    display: none;
                  }
                }
                .target-cursor-dot {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  width: 8px;
                  height: 8px;
                  background: #fff;
                  border-radius: 50%;
                  transform: translate(-50%, -50%);
                  box-shadow: 0 0 10px rgba(255,255,255,0.3);
                }
                .target-cursor-ring {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  width: 40px;
                  height: 40px;
                  border: 1px solid rgba(255,255,255,0.8);
                  background: rgba(255,255,255,0.05);
                  border-radius: 50%;
                  transform: translate(-50%, -50%) scale(0.5);
                  opacity: 0;
                  will-change: width, height, border-radius, opacity, transform;
                }
                `}
            </style>
            <div ref={ringRef} className="target-cursor-ring" />
            <div ref={dotRef} className="target-cursor-dot" />
        </div>
    );
};

export default TargetCursor;
