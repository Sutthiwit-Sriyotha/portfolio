# 3D Production Plan — Sutthiwit Sriyotha Portfolio

## Goal
Create a modern, recruiter-friendly 3D visual system that strengthens the BA / QA / Software Engineering story without making the portfolio feel like a gaming site.

## Selected toolchain
**Primary:** Spline + Blender  
**Asset sourcing:** Sketchfab Assets + Poly Pizza  
**Material polish:** Adobe Substance 3D  
**Optional / fallback:** Vectary for quick browser mockups, CGTrader for premium/specialized assets

> Rule: every downloaded asset must have a license that permits portfolio use. Keep attribution notes when required.

---

## Visual direction

**Style:** soft-futuristic, isometric, semi-glass, premium low-detail 3D  
**Palette:** dark navy / near-black, cyan, violet, soft emerald, off-white  
**Materials:** matte graphite, frosted glass, brushed metal, subtle emissive edges  
**Lighting:** soft studio / rim lighting, no harsh bloom  
**Motion:** slow floating, scroll-linked parallax, small tilt, no fast spins

### Avoid
- cartoon/toy-like models
- random 3D styles mixed together
- heavy realistic textures
- bright RGB gamer lighting
- large GLB files that hurt loading
- decorative animation that hides the actual work

---

# Asset Set

## 01 — Hero / QA Control Center
**Filename:** `qa-control-center.glb`  
**Fallback:** `qa-control-center.webp`

### Scene
- central glass dashboard
- left floating card: Requirements / SRS
- right floating card: Test Cases / API
- lower layer: PostgreSQL database cylinder + data nodes
- connector lines showing flow: Discover → Validate → Deliver
- 2–3 abstract rings / spheres for depth

### Build
1. Source low-detail monitor/dashboard props from Sketchfab Assets or Poly Pizza.
2. Clean geometry in Blender.
3. Rebuild materials in Substance 3D using the portfolio palette.
4. Export optimized GLB.
5. Import to Spline.
6. Add subtle hover tilt + idle float.
7. Use static WebP fallback on low-power/mobile if needed.

### Target
- GLB: <= 2.5 MB
- texture set: <= 2K, preferably 1K
- 30–60 FPS desktop
- no autoplay camera orbit

---

## 02 — BA / QA Workflow Visual
**Filename:** `ba-qa-workflow.webp`

### Scene
- document / SRS sheet
- checklist
- test-case cards
- bug marker
- database cylinder
- small API arrows

### Story
Requirement → Test Case → Execute → Defect → Retest → Verify

### Build
- Blender for composition
- Substance for unified material
- render as transparent-background WebP

### Placement
Experience → Double P Enterprise

---

## 03 — Software Developer Visual
**Filename:** `frontend-dev-scene.webp`

### Scene
- browser window
- modular UI blocks
- API connector
- upload/file icon
- RBAC shield / role chips

### Story
Responsive UI → REST API → RBAC → UAT

### Placement
Experience → Division of Educational Services / UP-PSF

---

## 04 — QA Skill Visual
**Filename:** `skill-qa.webp`

### Scene
- checklist plane
- bug object
- magnifier
- pass/fail chips
- small API node

### Keywords
Functional · Regression · API · UAT · Defect

---

## 05 — BA Skill Visual
**Filename:** `skill-ba.webp`

### Scene
- requirement document
- user-flow nodes
- decision diamond
- sticky-note / acceptance criteria card

### Keywords
Requirements · SRS · User Flow · Acceptance Criteria

---

## 06 — Automation & Data Visual
**Filename:** `skill-automation-data.webp`

### Scene
- Playwright-style browser block (generic, no copied trademark art)
- database cylinder
- pipeline nodes
- test checkmarks
- RBAC / SLA badges

### Keywords
Playwright · Vitest · PostgreSQL · Validation · Automation

---

## 07 — Contact / CTA Orb
**Filename:** `contact-orb.glb`
**Fallback:** `contact-orb.webp`

### Scene
- glass orb
- orbiting mail / link / GitHub-style generic code symbol
- soft cyan-purple rim light

### Motion
- slow 8–12 second orbit
- pointer tilt max 3°
- no continuous fast rotation

---

# Website Integration Plan

## Step A — Hero
**Tool:** Spline
- replace/augment current hero illustration with the QA Control Center scene
- preserve current left-side copy
- lazy-load Spline scene
- provide poster/fallback image
- disable heavy interaction on small screens

## Step B — Experience
**Tool:** Blender renders
- add 3D visual anchor to each internship
- visual enters with existing GSAP scroll-float animation
- image translates 20–30px slower than text for depth

## Step C — Projects
- keep real project screenshots as primary proof
- use 3D only as accent, not replacement
- featured project placeholders can receive small 3D objects behind the UI frame

## Step D — Skills
- add one compact visual for BA, QA, Automation/Data
- keep text readable and ATS/recruiter-friendly
- do not replace tool names with icons only

## Step E — Education
- no large 3D object
- optional small glass diploma / code cube accent
- keep this section visually quiet

## Step F — Contact
- add `contact-orb.glb`
- CTA buttons remain the focus
- orb should sit behind / beside buttons and never block them

---

# Performance Budget

| Item | Target |
|---|---:|
| Hero GLB | <= 2.5 MB |
| Contact GLB | <= 1.0 MB |
| Section WebP | <= 250 KB each |
| Textures | 1K preferred |
| Total additional 3D payload | <= 5 MB first load |
| Mobile | static fallback allowed |

### Optimization checklist
- [ ] Remove hidden geometry
- [ ] Merge static meshes
- [ ] Decimate only where silhouette stays clean
- [ ] Bake materials when practical
- [ ] Compress textures
- [ ] Draco / Meshopt where supported
- [ ] Lazy-load non-hero visuals
- [ ] Test on mobile Chrome
- [ ] Test prefers-reduced-motion
- [ ] Lighthouse performance check

---

# Asset Sourcing Checklist

## Sketchfab Assets
Search terms:
- low poly dashboard
- monitor UI
- database cylinder
- magnifying glass
- document folder
- abstract ring
- glass orb
- workflow nodes

## Poly Pizza
Best for:
- simple office / tech props
- geometric accents
- lightweight low-poly objects

## CGTrader
Use only if:
- a specific premium object is missing elsewhere
- license clearly permits portfolio / web usage
- polycount can be optimized

## Vectary
Use for:
- quick composition test
- camera/layout experiment
- client-side concept before committing to Blender

---

# Substance 3D Material Preset

Create one reusable material family:

### Graphite Matte
- base: #111826
- roughness: 0.62
- metallic: 0.08

### Frosted Glass
- tint: cyan / violet
- transmission: high
- roughness: 0.22–0.35
- low opacity edge glow

### Accent Emission
- cyan: #49DECB
- violet: #9D8DFF
- intensity: subtle only

### Soft White
- #E9ECF8
- non-metallic
- roughness: 0.45

---

# Implementation Order

## Phase 1 — Highest impact
- [ ] Hero QA Control Center
- [ ] BA / QA Workflow visual
- [ ] Software Developer visual

## Phase 2 — Supporting visuals
- [ ] QA skill visual
- [ ] BA skill visual
- [ ] Automation & Data visual

## Phase 3 — Finish
- [ ] Contact orb
- [ ] responsive/mobile fallback
- [ ] performance optimization
- [ ] final motion tuning

---

# Definition of Done

A 3D asset is considered finished only when:
- it uses the portfolio palette
- its style matches the other 3D assets
- it has a clear connection to actual QA/BA/Dev work
- it stays readable in dark and light themes
- it does not reduce text readability
- it is optimized for web
- it has a fallback image
- it respects reduced-motion settings
- it loads correctly on mobile

