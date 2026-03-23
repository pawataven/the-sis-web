# 🤖 AI Training Guide - The SIS Project

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Design Patterns](#design-patterns)
5. [Responsive Design Strategy](#responsive-design-strategy)
6. [Common Issues & Solutions](#common-issues--solutions)
7. [Component Architecture](#component-architecture)
8. [Image Handling Best Practices](#image-handling-best-practices)
9. [Positioning & Layout](#positioning--layout)
10. [Performance Optimization](#performance-optimization)

---

## 🎯 Project Overview

**The SIS Project** is a Nuxt 3 web application focused on Thai literature and poetry education, featuring:
- Interactive flower language learning
- Thai poetry decoding
- Responsive, visually rich UI with complex layered layouts
- Mobile-first design with custom breakpoints

**Key Design Philosophy:**
- Pixel-perfect implementation from design mockups
- Complex absolute positioning with layered elements
- Smooth responsive behavior across all screen sizes
- Maintain aspect ratios for images (no stretching/distortion)

---

## 🛠️ Tech Stack

### Core Framework
- **Nuxt 3 / Nuxt 4** - SSR/SPA framework
- **Vue 3** - Composition API with `<script setup>`
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- Custom responsive breakpoints
- Arbitrary values for precise positioning

### Image Optimization
- **NuxtImg** - Optimized image loading
- `object-contain` for aspect ratio preservation
- `object-cover` for fill scenarios

---

## 📁 Project Structure

```
the-sis-web/
├── app/
│   ├── pages/
│   │   └── index.vue          # Main landing page
│   └── components/
│       ├── DecorationComp.vue # Decorative elements
│       ├── home/
│       │   └── ArchCards.vue  # Architecture cards component
│       └── layouts/
│           └── NavigationBar.vue
├── public/
│   └── home/                  # Static images
│       ├── flower-footer.png
│       ├── grass.png
│       ├── cloud-bg.png
│       ├── skyflower.png
│       └── ...
└── rulesSkill.md              # Project scope overview
```

---

## 🎨 Design Patterns

### 1. Layered UI Architecture
```vue
<div class="relative w-full">
  <!-- Background layer (z-0) -->
  <NuxtImg class="absolute z-0" />
  
  <!-- Content layer (z-20) -->
  <div class="relative z-20">
    <!-- Main content -->
  </div>
  
  <!-- Foreground layer (z-10) -->
  <NuxtImg class="relative z-10" />
</div>
```

### 2. Absolute Positioning Pattern
```vue
<!-- Right-aligned element with offset -->
<NuxtImg
  class="absolute right-[-5%] w-auto h-auto"
  style="bottom: 14%"
/>

<!-- Responsive positioning -->
<NuxtImg
  class="absolute right-[-5%] bottom-[6%] md:right-[1%] md:bottom-[6%] lg:bottom-[12%]"
/>
```

### 3. Negative Margin Overlap
```vue
<!-- Pull element up to overlap with previous content -->
<NuxtImg class="relative -mt-[8%]" />
```

---

## 📱 Responsive Design Strategy

### Breakpoint System
```css
sm:  640px   (mobile landscape)
md:  768px   (tablet)
lg:  1024px  (laptop)
xl:  1280px  (desktop)
```

### Responsive Height Units

**Use `vh` for viewport-relative heights:**
```vue
<!-- Height based on viewport height -->
class="sm:h-[50vh] md:h-[55vh] lg:h-[55vh]"
```

**Use `vw` for viewport-relative widths:**
```vue
<!-- Height based on viewport width (creates stretching risk) -->
class="sm:h-[50vw] md:h-[55vw]"
```

### Max-Height Constraints
```vue
<!-- Prevent images from becoming too large -->
class="max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[800px]"
```

---

## 🔧 Common Issues & Solutions

### Issue 1: Image Stretching/Distortion

**Problem:** Images appear stretched or distorted on certain screen sizes.

**Root Cause:**
- Using viewport width units (`vw`) for height without width constraints
- Missing `w-auto` or `object-contain`

**Solution:**
```vue
<!-- ❌ BAD - Causes stretching -->
<NuxtImg
  class="sm:h-[50vw] md:h-[60vw]"
/>

<!-- ✅ GOOD - Maintains aspect ratio -->
<NuxtImg
  class="w-auto h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-contain"
/>
```

**Key Principles:**
1. Use `w-auto h-auto` to let dimensions adjust naturally
2. Use `max-h-*` breakpoints to constrain height
3. Use `object-contain` to preserve aspect ratio
4. Avoid `h-[vw]` for tall images - use `h-[vh]` or fixed heights instead

---

### Issue 2: Elements Not Touching/Overlapping

**Problem:** Two elements should touch but have a gap.

**Solution 1: Negative Margin**
```vue
<!-- Pull grass up to touch flower base -->
<NuxtImg class="relative -mt-[8%]" />
```

**Solution 2: Bottom Positioning**
```vue
<!-- Position flower at bottom edge -->
<NuxtImg style="bottom: 0%" />
```

**Solution 3: Responsive Positioning**
```vue
<!-- Different positions for different breakpoints -->
<NuxtImg
  class="absolute bottom-[6%] md:bottom-[6%] lg:bottom-[12%]"
/>
```

---

### Issue 3: Images Cut Off on Edges

**Problem:** Image extends beyond viewport or container.

**Solution:**
```vue
<!-- Adjust right positioning -->
class="right-[-2%]"  <!-- Less aggressive than right-[-5%] -->

<!-- Or use max-width constraint -->
class="max-w-[500px]"
```

---

### Issue 4: Responsive Break Issues

**Problem:** Layout breaks at specific screen sizes (e.g., 1024px, 1078px).

**Solution:**
```vue
<!-- Use fixed heights for problematic breakpoints -->
class="sm:h-[50vw] md:h-[450px] lg:h-[70vw]"

<!-- Or use max-height approach -->
class="max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
```

**Debugging Steps:**
1. Identify problematic breakpoint
2. Check if `vw` units are causing stretching
3. Switch to fixed heights or `vh` units
4. Add `w-auto object-contain` to preserve aspect ratio

---

## 🧩 Component Architecture

### NavigationBar Component
- Fixed/sticky positioning
- Responsive menu behavior
- Z-index management for overlay

### ArchCards Component
- Grid layout for architecture cards
- Responsive grid columns
- Hover interactions

### DecorationComp Component
- Decorative elements (flowers, clouds)
- Absolute positioning
- Layered with z-index

---

## 🖼️ Image Handling Best Practices

### 1. Aspect Ratio Preservation
```vue
<!-- Always use with images that can stretch -->
<NuxtImg class="w-auto h-auto object-contain" />
```

### 2. Responsive Sizing
```vue
<!-- Progressive sizing approach -->
<NuxtImg class="
  max-h-[400px]      <!-- Mobile -->
  sm:max-h-[500px]   <!-- Tablet -->
  md:max-h-[600px]   <!-- Laptop -->
  lg:max-h-[800px]   <!-- Desktop -->
" />
```

### 3. Positioning Strategy
```vue
<!-- Right-aligned with responsive positioning -->
<NuxtImg
  class="absolute right-[-5%] w-auto h-auto"
  style="bottom: 14%"
/>
```

### 4. Pointer Events
```vue
<!-- Make decorative images non-interactive -->
<NuxtImg class="select-none pointer-events-none" />
```

### 5. Z-Index Management
```vue
<!-- Layer order: Background (0) → Content (20) → Foreground (10) -->
<NuxtImg class="absolute z-0" />       <!-- Background -->
<div class="relative z-20">...</div>   <!-- Content -->
<NuxtImg class="relative z-10" />      <!-- Foreground -->
```

---

## 📐 Positioning & Layout

### Absolute Positioning

**Key Properties:**
- `absolute` - Position relative to nearest positioned ancestor
- `relative` - Create positioning context for children
- `right-*` - Distance from right edge
- `bottom-*` - Distance from bottom edge

**Responsive Positioning:**
```vue
<!-- Different positions per breakpoint -->
class="right-[-5%] md:right-[1%] lg:right-[-2%]"
style="bottom: 14%"
```

**Or using Tailwind classes:**
```vue
class="absolute right-[-5%] bottom-[6%] md:right-[1%] md:bottom-[6%] lg:bottom-[12%]"
```

### Negative Margins

**Use Cases:**
- Pull elements up to overlap with content above
- Create layered visual effects
- Adjust spacing between sections

**Examples:**
```vue
<!-- Pull up 8% of container width -->
class="-mt-[8%]"

<!-- Pull up 15% on medium screens -->
class="-mt-[8%] md:-mt-[15%]"
```

### Overflow Control

**Prevent horizontal overflow:**
```vue
<div class="overflow-x-hidden">
  <!-- Content -->
</div>
```

**Control vertical overflow:**
```vue
<div class="overflow-hidden">
  <!-- Clip content -->
</div>
```

---

## ⚡ Performance Optimization

### Image Optimization

1. **Use NuxtImg** for automatic optimization
2. **Lazy loading** for off-screen images
3. **Proper dimensions** to prevent layout shifts

```vue
<NuxtImg
  src="/home/flower-footer.png"
  loading="lazy"
  width="500"
  height="800"
/>
```

### Rendering Optimization

1. **Avoid unnecessary re-renders** with proper reactivity
2. **Use v-show** vs v-if appropriately
3. **Debounce** event handlers

### CSS Optimization

1. **Use utility classes** over custom CSS
2. **Avoid !important** unless absolutely necessary
3. **Minimize arbitrary values** where possible

---

## 🎯 Specific Implementation Examples

### Example 1: Flower Footer with Grass

```vue
<div class="relative w-full">
  <!-- Flower positioned absolutely -->
  <NuxtImg
    src="/home/flower-footer.png"
    class="absolute right-[-5%] bottom-[6%] md:right-[1%] md:bottom-[6%] lg:bottom-[12%] select-none pointer-events-none sm:h-[50vw] md:h-[55vw] lg:h-[55vw] max-h-[800px] w-auto object-cover"
  />

  <!-- Content in middle -->
  <div class="relative z-20 flex items-center justify-center min-h-[400px] sm:min-h-[500px] px-[5%] sm:px-[6%] lg:px-[8%] py-[5%]">
    <!-- Text and button -->
  </div>

  <!-- Grass pulled up to overlap flower -->
  <NuxtImg
    src="/home/grass.png"
    class="relative w-full h-auto select-none pointer-events-none z-10 -mt-[8%]"
  />
</div>
```

**Key Points:**
- Flower uses absolute positioning with responsive bottom values
- Content has z-20 to sit above flower
- Grass uses negative margin to overlap with flower base
- All images are non-interactive (`pointer-events-none`)

---

### Example 2: Responsive Image Sizing

```vue
<!-- Mobile: 50vw, Tablet: 55vw, Laptop: 55vw -->
<NuxtImg
  class="sm:h-[50vw] md:h-[55vw] lg:h-[55vw] max-h-[800px]"
/>

<!-- Better approach with max-height -->
<NuxtImg
  class="w-auto h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[800px] object-contain"
/>
```

---

## 🐛 Debugging Checklist

When facing responsive issues:

1. **Check viewport units** - Are you using `vw` for height?
2. **Check aspect ratio** - Is `w-auto` and `object-contain` present?
3. **Check breakpoints** - Which breakpoint is causing the issue?
4. **Check positioning** - Are elements overlapping correctly?
5. **Check z-index** - Are layers in correct order?
6. **Check overflow** - Is content being clipped?

---

## 📚 Additional Resources

### Tailwind CSS
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Positioning](https://tailwindcss.com/docs/top-right-bottom-left)
- [Sizing](https://tailwindcss.com/docs/width)
- [Spacing](https://tailwindcss.com/docs/margin)

### Nuxt 3
- [NuxtImg Module](https://image.nuxt.com/)
- [Components](https://nuxt.com/docs/guide/directory-structure/components)

---

## 🎓 Learning Outcomes

Working on this project teaches:

1. **Complex layout engineering** with absolute positioning
2. **Responsive design** across all device sizes
3. **Image optimization** and aspect ratio preservation
4. **Layered UI** with z-index management
5. **Debugging** responsive issues systematically
6. **Performance** considerations for image-heavy layouts

---

## 🔄 Version History

- **v1.0** - Initial project structure
- **v1.1** - Added responsive flower-footer positioning
- **v1.2** - Fixed image stretching issues with object-contain
- **v1.3** - Optimized grass positioning with negative margins
- **v1.4** - Improved responsive breakpoints for 1024px/1078px screens

---

## 📝 Notes for Future Development

1. **Test on real devices** - Browser DevTools is good, but real device testing is better
2. **Use viewport meta tag** - Ensure proper mobile rendering
3. **Consider accessibility** - Alt text, keyboard navigation
4. **Monitor performance** - Lighthouse scores, Core Web Vitals
5. **Document custom patterns** - Keep this guide updated with new solutions

---

**Last Updated:** March 23, 2026
**Project:** The SIS Web Application
**Framework:** Nuxt 3 + Vue 3 + Tailwind CSS
