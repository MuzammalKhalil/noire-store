# NOIRÉ 3D Asset Guidelines & Specification

## Directory Purpose
Store optimized `.glb` (glTF 2.0 Binary) assets for interactive product viewing in the NOIRÉ web experience.

## Asset Requirements
1. **Format**: `.glb` (glTF Binary)
2. **Poly Count Target**: Under 50,000 polygons per model for optimal mobile and web rendering.
3. **Texture Resolution**: Max 2048x2048 PBR maps (BaseColor, Metallic-Roughness, Normal, Ambient Occlusion).
4. **Scale**: Real-world scale in meters (1 unit = 1 meter).
5. **Origin**: Center of mass/ground alignment at (0, 0, 0).
6. **Compression**: Use Draco compression or Meshopt where appropriate to keep file sizes under 5MB.

## Asset Locations:
- `public/models/watch-edition-v.glb`: Flagship Chronographe Édition V
- `public/models/atelier-briefcase.glb`: Atelier Portfolio Briefcase
- `public/models/aethel-sunglasses.glb`: Æthel Titanium Aviator

*Note: The 3D viewer components use graceful fallback to high-resolution product photography when 3D models are loading or unavailable.*

