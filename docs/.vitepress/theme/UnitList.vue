<template>
  <div class="unit-list">
    <div
      v-for="unit in items"
      :key="unit.id"
      class="unit-block"
      :class="{ open: openUnit === unit.id }"
    >
      <div class="unit-header" @click="openUnit = openUnit === unit.id ? null : unit.id">
        <div class="unit-left">
          <span class="unit-icon">{{ unit.icon }}</span>
          <div class="unit-info">
            <span class="unit-title">{{ unit.title }}</span>
            <span class="unit-sub">{{ unit.sub }}</span>
          </div>
        </div>
        <span class="chevron">{{ openUnit === unit.id ? '▾' : '▸' }}</span>
      </div>
      <div class="parts-grid" :class="{ visible: openUnit === unit.id }">
        <div v-for="p in unit.parts" :key="p.label" class="part-wrap">
          <a :href="p.link" class="part-pill">{{ p.label }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  type: { type: String, default: 'theory' } // 'theory' or 'lab'
})

const openUnit = ref(null)

const theoryUnits = [
  {
    id: 1, icon: '☕', title: 'Unit 01 — Swings',
    sub: 'JFC, Swing components, Layout Management',
    parts: [
      { label: 'Part 1', link: 'theory/unit-1/p1' },
      { label: 'Part 2', link: 'theory/unit-1/p2' },
      { label: 'Part 3', link: 'theory/unit-1/p3' },
      { label: 'Part 4', link: 'theory/unit-1/p4' },
      { label: 'Part 5', link: 'theory/unit-1/p5' },
      { label: 'Part 6', link: 'theory/unit-1/p6' },
    ],
  },
  {
    id: 2, icon: '🎯', title: 'Unit 02 — Event Handling',
    sub: 'Action, Key, Mouse, Focus, Window Events',
    parts: [
      { label: 'Part 1', link: 'theory/unit-2/p1' },
      { label: 'Part 2', link: 'theory/unit-2/p2' },
      { label: 'Part 3', link: 'theory/unit-2/p3' },
      { label: 'Part 4', link: 'theory/unit-2/p4' },
      { label: 'Part 5', link: 'theory/unit-2/p5' },
      { label: 'Part 6', link: 'theory/unit-2/p6' },
    ],
  },
  {
    id: 3, icon: '🗄️', title: 'Unit 03 — JDBC Programming',
    sub: 'JDBC API, CRUD, ResultSet, PreparedStatement',
    parts: [
      { label: 'Part 1', link: 'theory/unit-3/p1' },
      { label: 'Part 2', link: 'theory/unit-3/p2' },
      { label: 'Part 3', link: 'theory/unit-3/p3' },
      { label: 'Part 4', link: 'theory/unit-3/p4' },
      { label: 'Part 5', link: 'theory/unit-3/p5' },
      { label: 'Part 6', link: 'theory/unit-3/p6' },
    ],
  },
  {
    id: 4, icon: '🌐', title: 'Unit 04 — Servlet API',
    sub: 'Servlet lifecycle, GET/POST, Sessions, Cookies',
    parts: [
      { label: 'Part 1', link: 'theory/unit-4/p1' },
      { label: 'Part 2', link: 'theory/unit-4/p2' },
      { label: 'Part 3', link: 'theory/unit-4/p3' },
      { label: 'Part 4', link: 'theory/unit-4/p4' },
      { label: 'Part 5', link: 'theory/unit-4/p5' },
      { label: 'Part 6', link: 'theory/unit-4/p6' },
    ],
  },
  {
    id: 5, icon: '📄', title: 'Unit 05 — Java Server Pages',
    sub: 'JSP lifecycle, Directives, Scriptlets, Custom tags',
    parts: [
      { label: 'Part 1', link: 'theory/unit-5/p1' },
      { label: 'Part 2', link: 'theory/unit-5/p2' },
      { label: 'Part 3', link: 'theory/unit-5/p3' },
      { label: 'Part 4', link: 'theory/unit-5/p4' },
      { label: 'Part 5', link: 'theory/unit-5/p5' },
      { label: 'Part 6', link: 'theory/unit-5/p6' },
    ],
  },
  {
    id: 6, icon: '🏗️', title: 'Unit 06 — Hibernate',
    sub: 'ORM, Hibernate architecture, CRUD, Annotations',
    parts: [
      { label: 'Part 1', link: 'theory/unit-6/p1' },
      { label: 'Part 2', link: 'theory/unit-6/p2' },
      { label: 'Part 3', link: 'theory/unit-6/p3' },
      { label: 'Part 4', link: 'theory/unit-6/p4' },
      { label: 'Part 5', link: 'theory/unit-6/p5' },
      { label: 'Part 6', link: 'theory/unit-6/p6' },
    ],
  },
]

const labExperiments = [
  {
    id: 1, icon: '⚗️', title: 'Exp 01 — Login Form',
    sub: 'Swing Component based login form',
    parts: [{ label: 'Open', link: 'lab/exp-01' }],
  },
  {
    id: 2, icon: '⚗️', title: 'Exp 02 — Progress Bar',
    sub: 'JProgressBar with set values',
    parts: [{ label: 'Open', link: 'lab/exp-02' }],
  },
  {
    id: 3, icon: '⚗️', title: 'Exp 03 — Traffic Signal',
    sub: 'JFrame, JRadioButton, ItemListener',
    parts: [{ label: 'Open', link: 'lab/exp-03' }],
  },
  {
    id: 4, icon: '⚗️', title: 'Exp 04 — Mouse Motion Adapter',
    sub: 'Adapter class, mouseDragged method',
    parts: [{ label: 'Open', link: 'lab/exp-04' }],
  },
  {
    id: 5, icon: '⚗️', title: 'Exp 05 — JDBC Display Records',
    sub: 'Display student records from database',
    parts: [{ label: 'Open', link: 'lab/exp-05' }],
  },
  {
    id: 6, icon: '⚗️', title: 'Exp 06 — JDBC CRUD',
    sub: 'Insert, Update, Delete student profile',
    parts: [{ label: 'Open', link: 'lab/exp-06' }],
  },
  {
    id: 7, icon: '⚗️', title: 'Exp 07 — Simple Servlet',
    sub: 'Welcome to Servlet Programming',
    parts: [{ label: 'Open', link: 'lab/exp-07' }],
  },
  {
    id: 8, icon: '⚗️', title: 'Exp 08 — GET & POST Servlet',
    sub: 'Handle GET and POST differently',
    parts: [{ label: 'Open', link: 'lab/exp-08' }],
  },
  {
    id: 9, icon: '⚗️', title: 'Exp 09 — Session & Cookies',
    sub: 'Session management with cookies',
    parts: [{ label: 'Open', link: 'lab/exp-09' }],
  },
  {
    id: 10, icon: '⚗️', title: 'Exp 10 — JSP Form',
    sub: 'Accept name & age, display on JSP page',
    parts: [{ label: 'Open', link: 'lab/exp-10' }],
  },
  {
    id: 11, icon: '⚗️', title: 'Exp 11 — JSP Scripting',
    sub: 'Declaration, scriptlet, expression',
    parts: [{ label: 'Open', link: 'lab/exp-11' }],
  },
  {
    id: 12, icon: '⚗️', title: 'Exp 12 — Hibernate CRUD',
    sub: 'Store, update, fetch, delete Employee data',
    parts: [{ label: 'Open', link: 'lab/exp-12' }],
  },
]

const items = props.type === 'lab' ? labExperiments : theoryUnits
</script>

<style scoped>
.unit-list { display: flex; flex-direction: column; gap: 10px; margin-top: 1.5rem; }

.unit-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s;
}
.unit-block.open { border-color: var(--vp-c-brand-1); }

.unit-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  cursor: pointer; user-select: none;
  transition: background 0.15s;
}
.unit-header:hover { background: var(--vp-c-bg-mute); }

.unit-left { display: flex; align-items: center; gap: 12px; }
.unit-icon { font-size: 24px; line-height: 1; }
.unit-info { display: flex; flex-direction: column; gap: 2px; }
.unit-title { font-size: 15px; font-weight: 600; color: var(--vp-c-text-1); }
.unit-sub   { font-size: 12px; color: var(--vp-c-text-3); }
.chevron    { font-size: 18px; color: var(--vp-c-text-3); }

.parts-grid {
  display: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}
.parts-grid.visible { display: grid; }

.part-wrap { display: contents; }

.part-pill {
  display: flex; align-items: center; justify-content: center;
  padding: 8px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 13px; font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.15s, color 0.15s, background 0.15s;
}
.part-pill:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
</style>
