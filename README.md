# Lupita — Landing

Landing page mobile-first responsive para **Lupita** (consultoría e implementación de IA aplicada para PyMEs uruguayas).

Stack: **Vite + React + TypeScript**, CSS Modules, fuentes Fraunces + Inter vía Google Fonts.

## Comandos

```bash
pnpm install      # instalar deps
pnpm dev          # dev server → http://localhost:5173
pnpm build        # build de producción → dist/
pnpm preview      # servir el build localmente
```

## Estructura

```
src/
├── App.tsx                    # compone todas las sections
├── main.tsx                   # entry React
├── styles/
│   ├── tokens.css             # CSS custom properties (colores, fuentes)
│   └── global.css             # reset + base
└── components/
    ├── AppBar/                # sticky top bar, nav desktop
    ├── Hero/                  # mega-mark + mascota
    ├── Problem/               # stats 64% vs 6%
    ├── Solution/              # "Lo trabajamos con vos"
    ├── Process/               # 3 pasos
    ├── MVPs/                  # casos (carrusel mobile, grid desktop)
    ├── Pricing/               # 3 tiers
    ├── Team/                  # 3 founders
    ├── WhyUs/                 # checklist
    ├── CTA/                   # WhatsApp + email
    └── Footer/

public/
├── mascot.svg                 # mascota Lupita (extraída del bundle original)
└── favicon.svg

_reference/
└── Landing Lupita - standalone.html   # diseño original (Claude Artifact)
```

## Responsive

Mobile-first. Breakpoint principal: `min-width: 768px` para tablet/desktop, refinamiento opcional en `1024px`.

| Sección  | Mobile                          | Desktop                                    |
| -------- | ------------------------------- | ------------------------------------------ |
| AppBar   | logo + CTA pill                 | logo + nav (Cómo · Casos · Precios · Equipo) + CTA |
| Hero     | apilado, mascota abajo-derecha  | 2 columnas, mascota grande con halo        |
| Problem  | stats apilados                  | 2 columnas con divisor vertical            |
| Process  | 3 cards apiladas                | grid 3 columnas                            |
| MVPs     | carrusel horizontal             | grid 2×2 (4 cols en ≥1024px)               |
| Pricing  | 3 cards apiladas                | grid 3 columnas, tier 2 elevado            |
| Team     | apilados horizontal             | grid 3 columnas centrado                   |
| WhyUs    | lista vertical                  | grid 2 columnas                            |
| CTA      | botones apilados                | botones en fila, centrado                  |

## CTAs (placeholders)

Los enlaces son placeholders y hay que actualizarlos antes del lanzamiento:

- WhatsApp: `https://wa.me/59899000000` → poner número real
- Email: `hola@lupita.uy` → confirmar dominio
