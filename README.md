### 

product-grid/
├── block.json                 # Page-level block
├── index.ts                   # Block registration
├── edit.tsx                   # Editor template controller
├── render.php                 # Frontend template controller
├── types.ts
│
├── hooks/
│   └── use-products.ts        # Editor data fetching
│
├── context/
│   └── product-context.tsx    # Per-product context
│
├── templates/                 # ✅ TEMPLATE LAYER (NEW)
│   ├── grid-template.tsx
│   ├── list-template.tsx
│   └── masonry-template.tsx
│
└── blocks/                    # Inner blocks / elements
    ├── product-card/          # Organism
    │   ├── block.json
    │   ├── index.ts
    │   └── edit.tsx
    │
    ├── product-title/         #    
    ├── product-price/         # Atom
    └── product-image/         # Atom


### types/product-response.ts
This file defines the shape of a product object that flows through your entire block system.

### In WooCommerce:

```
Editor uses REST / Store API
Frontend uses PHP
Both must agree on product shape
```

### This file becomes the contract between:
hooks
context
inner blocks (title, price, image)
templates
