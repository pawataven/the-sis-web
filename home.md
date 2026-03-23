# Home Page Refactoring

## Overview
Refactored `app/pages/index.vue` to follow production best practices with separation of concerns.

## Changes Made

### 1. Created Composable: `app/composables/useAutoSwitch.ts`
**Purpose:** Extracted auto-switching logic for the flower card hover state

**What it does:**
- Manages `hovered` state
- Handles auto-switching timer (10 second interval)
- Provides `resetTimer()` and `handleClick()` functions
- Automatically starts on mount and cleans up on unmount

**Usage:**
```typescript
const { hovered, resetTimer, handleClick } = useAutoSwitch(10000);
```

### 2. Created Data File: `app/data/homeContent.ts`
**Purpose:** Separated content data from the component

**Contains:**
- `POETRY_MESSAGE` - Poetry card title, description, and florigraphy explanation
- `FOOTER_CONTENT` - Footer description text and button configuration

**Benefits:**
- Content is now editable without touching component code
- Easy to translate or update text
- Clear separation between data and presentation

### 3. Updated: `app/pages/index.vue`
**Changes:**
- Removed all timer-related logic (moved to composable)
- Removed hardcoded content (moved to data file)
- Added imports for `useAutoSwitch` and `homeContent`
- Updated template to use `POETRY_MESSAGE` and `FOOTER_CONTENT` constants

**Before:**
```typescript
import { ref, onMounted, onUnmounted } from "vue";
const hovered = ref(false);
let autoTimer: ReturnType<typeof setInterval> | null = null;
// ... 20+ lines of timer logic
```

**After:**
```typescript
import { useAutoSwitch } from "~/composables/useAutoSwitch";
import { POETRY_MESSAGE, FOOTER_CONTENT } from "~/data/homeContent";

const { hovered, resetTimer, handleClick } = useAutoSwitch(10000);
```

## File Structure
```
app/
├── composables/
│   └── useAutoSwitch.ts          (NEW)
├── data/
│   └── homeContent.ts             (NEW)
└── pages/
    └── index.vue                 (UPDATED)
```

## Benefits
1. **Separation of Concerns** - Logic, data, and UI are now in separate files
2. **Reusability** - `useAutoSwitch` can be used in other components
3. **Maintainability** - Content changes don't require touching component code
4. **Cleaner Code** - index.vue reduced from ~30 lines of script to ~8 lines
5. **Testability** - Logic is isolated and easier to test

## UI/Layout
No changes made to UI or layout structure - only internal refactoring for better code organization.
