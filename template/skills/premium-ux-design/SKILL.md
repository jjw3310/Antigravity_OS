---
name: premium-ux-design
description: Guidelines for creating "Wowed" UI/UX with modern aesthetics and micro-animations.
---

# Premium UX Design Skill

## 🎨 Aesthetics Layer
1. **Dynamic Palettes**: Use HSL based color systems for smooth shading. Avoid `#ff0000` (pure red) or `#0000ff` (pure blue).
2. **Glassmorphism**: Use backdrop filters and subtle borders for depth.
3. **Typography**: Use high-quality Google Fonts (Inter, Outfit, Bento).
4. **Vibrant Gradients**: Use 45deg or conic gradients to create energy.

## ✨ Interactive Layer
1. **Micro-animations**: Every button should have a `scale(0.95)` on active and a subtle lift on hover.
2. **Smooth Transitions**: Use `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`.
3. **Skeleton Loading**: Never show a blank screen while data is loading.
4. **Haptic Feedback**: (For mobile) Provide visual cues that mimic physical interaction.

## 📐 Layout Layer
1. **The Grid**: Use CSS Grid for complex layouts, Flexbox for simple alignment.
2. **Whitespace**: Be generous with padding and margin to allow the design to breathe.
3. **Responsiveness**: Mobile-first approach is mandatory.

## ✅ Quality Check
- [ ] Does it look like a $100k project?
- [ ] Are the contrast ratios accessible?
- [ ] Is there a "magic moment" in the interaction?
