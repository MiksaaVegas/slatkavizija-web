# Sweet Story Website

Build a very simple, polished, mobile-first website for a local Macedonian cake shop called „Слатка Приказна“, using the attached Project Requirements Document (PRD) as the primary source of truth.

The PRD contains three main parts:

Navigation — the complete page structure, navigation behavior, CTA behavior, and footer.

Copy — the Macedonian-language content and section structure for every page.

Design System — the visual direction, typography, colors, layouts, responsive behavior, and interaction guidelines.

Overall goal

Create a website that feels like a modern boutique cake shop with a handmade personality.

The site should feel:

Warm

Sweet

Elegant

Feminine

Personal

Slightly playful

Premium but approachable

Smooth and visually cohesive

This is not an e-commerce website. Do not introduce unnecessary functionality such as accounts, carts, checkout, product databases, ordering systems, or complex forms.

All cake inquiries and orders happen through:

Phone

Instagram

Visiting the shop in person

Pages

Build these five pages:

Почетна

За нас

Галерија

Ценовник

Контакт

Every page shares the same visual language, navbar, footer, and CTA section.

The Контакт item in the navbar is the only navigation item that should directly navigate to the Contact page.

Other CTA buttons throughout each page should primarily scroll to that page's own CTA section.

Content

The entire website must be in Macedonian.

Use the copy from the PRD as the starting content. Do not replace the Macedonian copy with English placeholder copy.

The PRD contains realistic placeholder business information such as the phone number, address, Instagram handle, baker name, and working hours. Treat these as temporary project data that can easily be replaced later.

Do not invent additional business claims, products, prices, or information that are not present in the PRD.

Visual direction

Pink should be the dominant visual color.

The design should combine:

A sophisticated serif font for headings

A subtle handwritten/cursive font for occasional accents

Highly readable typography for longer body copy

Soft pink and cream backgrounds

Deep berry/plum text

Rounded cards

Organic shapes

Generous whitespace

High-quality cake photography

The serif typography should feel elegant and slightly romantic.

The handwritten/cursive typography should be used sparingly. It should feel like a small handwritten touch rather than the main body font.

Most important visual requirement

The entire website should feel smooth from section to section.

Avoid hard horizontal cuts between sections.

Do not make the site look like a sequence of independent rectangular blocks.

Use:

Curved transitions

Soft background changes

Organic shapes

Rounded containers

Subtle gradients

Generous whitespace

Consistent visual rhythm

Important restriction

Do not overlap images.

No image should sit on top of another image or overlap another section.

Bento grids, masonry layouts, asymmetric grids, varied image sizes, rounded image containers, and organic clipping are all allowed, but images should remain clearly separated.

Photography

Photography is a major part of the design.

Cake images should feel appetizing, beautiful, and premium.

The Gallery page should be primarily visual and may use a masonry, bento, or asymmetric grid.

The imagery should do most of the visual storytelling, while the copy remains concise.

Pricing page

The Pricing page should visually resemble a beautiful bakery menu / price list, inspired by the provided reference image in the PRD.

Do not make it look like SaaS pricing cards.

Use soft rounded category cards, clear pricing rows, elegant serif category headings, pink accents, and a responsive multi-column layout.

The pricing information must remain very easy to scan.

CTA

Every page ends with a strong CTA section.

The CTA should feel like a warm invitation rather than a sales banner.

It should encourage visitors to:

Call

Contact the Instagram account

Visit the shop

There should be no contact/order form.

UX

Prioritize:

Simple navigation

Clear hierarchy

Fast understanding of the business

Strong visual presentation of cakes

Easy access to contact methods

Mobile usability

Clear CTA placement

Keep the implementation simple and avoid unnecessary features.

Implementation mindset

Use the PRD as the source of truth for the site's structure, content, and visual system.

Do not over-engineer the project.

First establish a strong visual foundation and reusable components for:

Navbar

Footer

CTA section

Buttons

Typography

Pricing cards

Image/gallery components

Section containers

Then use those components consistently throughout all five pages.

The final result should feel like a real, thoughtfully designed local cake-shop brand, not an AI-generated generic business template.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://slatkavizija-web.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8fd790d0-f7d6-421e-b42c-25169d86c838).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
